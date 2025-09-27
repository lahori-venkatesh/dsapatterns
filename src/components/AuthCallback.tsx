import React, { useEffect, useState } from 'react';
import { useAppStore } from '../store';
import { supabase } from '../config/supabase';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export const AuthCallback: React.FC = () => {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Processing authentication...');
  const { setCurrentUser } = useAppStore();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        console.log('Handling auth callback...');
        console.log('Current URL:', window.location.href);
        console.log('URL Hash:', window.location.hash);
        console.log('URL Search:', window.location.search);
        
        setMessage('Processing authentication...');
        
        // Check if we have auth tokens in the URL
        const hash = window.location.hash;
        const search = window.location.search;
        
        // Check for various auth token patterns
        const hasAccessToken = hash.includes('access_token') || search.includes('access_token');
        const hasAuthCode = search.includes('code=') || /[?&]code=[a-f0-9-]{36}/.test(search);
        const hasProviderToken = hash.includes('provider_token') || search.includes('provider_token');
        
        if (!hasAccessToken && !hasAuthCode && !hasProviderToken) {
          console.log('No auth tokens found in URL');
          setStatus('error');
          setMessage('Authentication failed - no tokens found. Please try again.');
          setTimeout(() => {
            window.location.href = '/';
          }, 3000);
          return;
        }
        
        console.log('Auth tokens detected:', { hasAccessToken, hasAuthCode, hasProviderToken });
        
        // For auth code flow, we need to exchange the code for a session
        if (hasAuthCode && !hasAccessToken) {
          console.log('Processing auth code exchange...');
          setMessage('Exchanging authorization code...');
          
          // Let Supabase handle the code exchange automatically
          const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
          console.log('Initial session check:', { sessionData, sessionError });
          
          if (!sessionData.session) {
            // Wait a bit more for the session to be established
            console.log('No session yet, waiting for auth code processing...');
            await new Promise(resolve => setTimeout(resolve, 3000));
            
            const { data: retrySessionData, error: retryError } = await supabase.auth.getSession();
            console.log('Retry session check:', { retrySessionData, retryError });
            
            if (!retrySessionData.session) {
              throw new Error('Failed to establish session after auth code exchange');
            }
          }
        } else {
          // Give Supabase time to process other token types
          await new Promise(resolve => setTimeout(resolve, 1500));
        }
        
        // Get the current session
        const { data, error } = await supabase.auth.getSession();
        console.log('Session check result:', { data, error });
        
        if (error) {
          console.error('Auth callback error:', error);
          setStatus('error');
          setMessage(`Authentication failed: ${error.message}. Please try again.`);
          
          setTimeout(() => {
            window.location.href = '/';
          }, 3000);
          return;
        }

        if (data.session?.user) {
          console.log('User authenticated:', data.session.user);
          
          const user = {
            id: data.session.user.id,
            username: data.session.user.user_metadata?.username || 
                     data.session.user.user_metadata?.full_name || 
                     data.session.user.user_metadata?.name ||
                     data.session.user.email?.split('@')[0] || 'User',
            email: data.session.user.email || '',
            photoURL: data.session.user.user_metadata?.avatar_url || '',
            isPremium: false,
            createdAt: new Date(data.session.user.created_at),
            lastLoginAt: new Date(),
            deviceFingerprints: [],
            loginAttempts: 0,
            isEmailVerified: data.session.user.email_confirmed_at ? true : false,
            authProvider: data.session.user.app_metadata?.provider || 'email'
          };

          setCurrentUser(user);
          setStatus('success');
          setMessage('Authentication successful! Redirecting...');
          
          // Clear the URL parameters before redirecting
          window.history.replaceState({}, document.title, window.location.pathname);
          
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } else {
          console.log('No session found');
          setStatus('error');
          setMessage('No user session found. Please try signing in again.');
          setTimeout(() => {
            window.location.href = '/';
          }, 3000);
        }
      } catch (error) {
        console.error('Auth callback error:', error);
        setStatus('error');
        setMessage(`An unexpected error occurred: ${error}. Please try again.`);
        setTimeout(() => {
          window.location.href = '/';
        }, 3000);
      }
    };

    handleAuthCallback();
  }, [setCurrentUser]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 p-8 max-w-md w-full text-center">
        {status === 'loading' && (
          <>
            <div className="p-4 bg-blue-500/20 rounded-xl w-fit mx-auto mb-6">
              <Loader2 className="w-12 h-12 text-blue-400 animate-spin" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Authenticating...</h2>
            <p className="text-gray-300">{message}</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="p-4 bg-green-500/20 rounded-xl w-fit mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Success!</h2>
            <p className="text-gray-300 mb-4">{message}</p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Redirecting to dashboard...</span>
            </div>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="p-4 bg-red-500/20 rounded-xl w-fit mx-auto mb-6">
              <AlertCircle className="w-12 h-12 text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Authentication Failed</h2>
            <p className="text-gray-300 mb-6">{message}</p>
            <button
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Return to Home
            </button>
          </>
        )}
      </div>
    </div>
  );
};