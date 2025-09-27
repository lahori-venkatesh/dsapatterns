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
        console.log('=== AUTH CALLBACK START ===');
        console.log('Current URL:', window.location.href);
        console.log('URL Search:', window.location.search);
        console.log('URL Pathname:', window.location.pathname);
        
        setMessage('Processing authentication...');
        
        // Check if we have an auth code
        const urlParams = new URLSearchParams(window.location.search);
        const authCode = urlParams.get('code');
        console.log('Auth code found:', authCode);
        
        if (!authCode) {
          throw new Error('No authentication code found in URL');
        }
        
        // Wait a bit for Supabase to process
        setMessage('Establishing session...');
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Get the current session
        const { data, error } = await supabase.auth.getSession();
        console.log('Session check result:', { 
          hasSession: !!data.session, 
          hasUser: !!data.session?.user,
          error: error?.message 
        });
        
        if (error) {
          console.error('Auth callback error:', error);
          setStatus('error');
          setMessage(`Authentication failed: ${error.message}`);
          
          setTimeout(() => {
            window.location.href = '/';
          }, 3000);
          return;
        }

        if (data.session?.user) {
          console.log('User authenticated successfully');
          
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
          
          console.log('Redirecting to home...');
          
          setTimeout(() => {
            window.location.href = '/';
          }, 1500);
        } else {
          console.log('No session found, retrying...');
          setMessage('Still processing... please wait');
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          const { data: retryData, error: retryError } = await supabase.auth.getSession();
          console.log('Retry session check:', { 
            hasSession: !!retryData.session, 
            hasUser: !!retryData.session?.user 
          });
          
          if (retryData.session?.user) {
            const user = {
              id: retryData.session.user.id,
              username: retryData.session.user.user_metadata?.username || 
                       retryData.session.user.user_metadata?.full_name || 
                       retryData.session.user.user_metadata?.name ||
                       retryData.session.user.email?.split('@')[0] || 'User',
              email: retryData.session.user.email || '',
              photoURL: retryData.session.user.user_metadata?.avatar_url || '',
              isPremium: false,
              createdAt: new Date(retryData.session.user.created_at),
              lastLoginAt: new Date(),
              deviceFingerprints: [],
              loginAttempts: 0,
              isEmailVerified: retryData.session.user.email_confirmed_at ? true : false,
              authProvider: retryData.session.user.app_metadata?.provider || 'email'
            };

            setCurrentUser(user);
            setStatus('success');
            setMessage('Authentication successful! Redirecting...');
            
            setTimeout(() => {
              window.location.href = '/';
            }, 1500);
          } else {
            setStatus('error');
            setMessage('Could not establish session. Please try again.');
            setTimeout(() => {
              window.location.href = '/';
            }, 3000);
          }
        }
      } catch (error) {
        console.error('Auth callback error:', error);
        setStatus('error');
        setMessage(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
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