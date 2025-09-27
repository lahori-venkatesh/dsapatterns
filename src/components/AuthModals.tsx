import React, { useState } from 'react';
import { X, User, Mail, Lock, LogIn, UserPlus, AlertCircle, CheckCircle2, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAppStore } from '../store';

export const AuthModals: React.FC = () => {
  const { 
    isLoginModalOpen, 
    isRegistrationModalOpen, 
    closeLoginModal, 
    closeRegistrationModal,
    openLoginModal,
    openRegistrationModal,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    resetPassword
  } = useAppStore();

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  // Registration form state
  const [regUsername, setRegUsername] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showRegConfirmPassword, setShowRegConfirmPassword] = useState(false);
  const [regLoading, setRegLoading] = useState(false);
  const [regMessage, setRegMessage] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Google Sign In
  const handleGoogleSignIn = async () => {
    setLoginLoading(true);
    setLoginMessage('');
    
    try {
      console.log('Starting Google sign in...');
      const result = await signInWithGoogle();
      console.log('Google sign in result:', result);
      if (result.success) {
        setLoginMessage('Redirecting to Google...');
        // Google OAuth will redirect, so we don't close the modal here
        // The page will redirect to Google's OAuth page
      } else {
        setLoginMessage(result.error || 'Google sign-in failed. Please try email/password login instead.');
      }
    } catch (error) {
      console.error('Google sign in error:', error);
      setLoginMessage('Google sign-in is not available. Please use email/password login.');
    } finally {
      setLoginLoading(false);
    }
  };

  // Email/Password Login
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loginEmail.trim() || !loginPassword.trim()) {
      setLoginMessage('Please fill in all fields');
      return;
    }

    setLoginLoading(true);
    setLoginMessage('');

    try {
      console.log('Starting email login for:', loginEmail);
      const result = await signInWithEmail(loginEmail, loginPassword);
      console.log('Email login result:', result);
      if (result.success) {
        setLoginMessage('Login successful! Welcome back!');
        setTimeout(() => {
          closeLoginModal();
          resetLoginForm();
        }, 1500);
      } else {
        setLoginMessage(result.error || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Email login error:', error);
      setLoginMessage('An unexpected error occurred. Please refresh the page and try again.');
    } finally {
      setLoginLoading(false);
    }
  };

  // Email/Password Registration
  const handleEmailRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!regUsername.trim() || !regEmail.trim() || !regPassword.trim()) {
      setRegMessage('Please fill in all required fields');
      return;
    }

    if (regPassword !== regConfirmPassword) {
      setRegMessage('Passwords do not match');
      return;
    }

    if (!acceptTerms) {
      setRegMessage('Please accept the terms and conditions');
      return;
    }

    setRegLoading(true);
    setRegMessage('');

    try {
      console.log('Starting email registration for:', regEmail);
      const result = await signUpWithEmail(regEmail, regPassword, regUsername);
      console.log('Email registration result:', result);
      if (result.success) {
        setRegMessage(result.message || 'Account created successfully! You can now sign in.');
        setTimeout(() => {
          closeRegistrationModal();
          openLoginModal();
          resetRegistrationForm();
        }, 3000);
      } else {
        setRegMessage(result.error || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Email registration error:', error);
      setRegMessage('An unexpected error occurred. Please refresh the page and try again.');
    } finally {
      setRegLoading(false);
    }
  };

  // Password Reset
  const handlePasswordReset = async () => {
    if (!loginEmail.trim()) {
      setLoginMessage('Please enter your email address first');
      return;
    }

    setLoginLoading(true);
    setLoginMessage('');

    try {
      const result = await resetPassword(loginEmail);
      if (result.success) {
        setLoginMessage(result.message || 'Password reset email sent!');
        setShowForgotPassword(false);
      } else {
        setLoginMessage(result.error || 'Failed to send reset email');
      }
    } catch (error) {
      setLoginMessage('An unexpected error occurred');
    } finally {
      setLoginLoading(false);
    }
  };

  // Reset forms
  const resetLoginForm = () => {
    setLoginEmail('');
    setLoginPassword('');
    setShowLoginPassword(false);
    setLoginMessage('');
    setShowForgotPassword(false);
  };

  const resetRegistrationForm = () => {
    setRegUsername('');
    setRegEmail('');
    setRegPassword('');
    setRegConfirmPassword('');
    setShowRegPassword(false);
    setShowRegConfirmPassword(false);
    setRegMessage('');
    setAcceptTerms(false);
  };

  const switchToRegister = () => {
    closeLoginModal();
    openRegistrationModal();
    resetLoginForm();
  };

  const switchToLogin = () => {
    closeRegistrationModal();
    openLoginModal();
    resetRegistrationForm();
  };

  // Login Modal
  if (isLoginModalOpen) {
    return (
      <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 w-full max-w-md overflow-hidden">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 border-b border-blue-500/30">
            <button
              onClick={() => { closeLoginModal(); resetLoginForm(); }}
              className="absolute top-4 right-4 p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400 hover:text-white" />
            </button>
            
            <div className="text-center">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl w-fit mx-auto mb-4">
                <LogIn className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
              <p className="text-blue-200">Sign in to access your account</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Google Sign In */}
            <div className="space-y-4">
              <button
                onClick={handleGoogleSignIn}
                disabled={loginLoading}
                className="w-full flex items-center justify-center space-x-3 px-4 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed border border-gray-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Continue with Google</span>
              </button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-800 text-gray-400">or continue with email</span>
                </div>
              </div>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type={showLoginPassword ? "text" : "password"}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-12 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(!showForgotPassword)}
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              {/* Forgot Password Section */}
              {showForgotPassword && (
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                  <p className="text-sm text-blue-200 mb-3">
                    Enter your email above and click the button below to receive a password reset link.
                  </p>
                  <button
                    type="button"
                    onClick={handlePasswordReset}
                    disabled={loginLoading}
                    className="w-full py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg transition-colors disabled:opacity-50"
                  >
                    {loginLoading ? 'Sending...' : 'Send Reset Email'}
                  </button>
                </div>
              )}

              {/* Messages */}
              {loginMessage && (
                <div className={`flex items-center space-x-2 p-3 rounded-lg ${
                  loginMessage.includes('successful') || loginMessage.includes('sent')
                    ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                    : 'bg-red-500/20 border border-red-500/30 text-red-300'
                }`}>
                  {loginMessage.includes('successful') || loginMessage.includes('sent') ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <AlertCircle className="w-4 h-4" />
                  )}
                  <span className="text-sm">{loginMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loginLoading || !loginEmail.trim() || !loginPassword.trim()}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {loginLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <span>Sign In</span>
                )}
              </button>
            </form>

            {/* Switch to Register */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Don't have an account?{' '}
                <button
                  onClick={switchToRegister}
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Create Account
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Registration Modal
  if (isRegistrationModalOpen) {
    return (
      <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 w-full max-w-md overflow-hidden max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-emerald-500/20 to-blue-500/20 p-6 border-b border-emerald-500/30">
            <button
              onClick={() => { closeRegistrationModal(); resetRegistrationForm(); }}
              className="absolute top-4 right-4 p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400 hover:text-white" />
            </button>
            
            <div className="text-center">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl w-fit mx-auto mb-4">
                <UserPlus className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Create Account</h2>
              <p className="text-emerald-200">Join our DSA learning platform</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Google Sign Up */}
            <div className="space-y-4">
              <button
                onClick={handleGoogleSignIn}
                disabled={regLoading}
                className="w-full flex items-center justify-center space-x-3 px-4 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed border border-gray-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Continue with Google</span>
              </button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-800 text-gray-400">or create account with email</span>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleEmailRegistration} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Username *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={regUsername}
                    onChange={(e) => setRegUsername(e.target.value)}
                    placeholder="Choose a username"
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type={showRegPassword ? "text" : "password"}
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    placeholder="Create password (min 6 chars)"
                    className="w-full pl-10 pr-12 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-200"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowRegPassword(!showRegPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showRegPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type={showRegConfirmPassword ? "text" : "password"}
                    value={regConfirmPassword}
                    onChange={(e) => setRegConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    className="w-full pl-10 pr-12 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-200"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowRegConfirmPassword(!showRegConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showRegConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 text-emerald-600 bg-gray-700 border-gray-600 rounded focus:ring-emerald-500 focus:ring-2"
                />
                <label htmlFor="acceptTerms" className="text-sm text-gray-300">
                  I agree to the{' '}
                  <a href="#" className="text-emerald-400 hover:text-emerald-300 underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-emerald-400 hover:text-emerald-300 underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Messages */}
              {regMessage && (
                <div className={`flex items-center space-x-2 p-3 rounded-lg ${
                  regMessage.includes('successfully') || regMessage.includes('created')
                    ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                    : 'bg-red-500/20 border border-red-500/30 text-red-300'
                }`}>
                  {regMessage.includes('successfully') || regMessage.includes('created') ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <AlertCircle className="w-4 h-4" />
                  )}
                  <span className="text-sm">{regMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={regLoading || !regUsername.trim() || !regEmail.trim() || !regPassword.trim() || !acceptTerms}
                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {regLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <span>Create Account</span>
                )}
              </button>
            </form>

            {/* Switch to Login */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Already have an account?{' '}
                <button
                  onClick={switchToLogin}
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};