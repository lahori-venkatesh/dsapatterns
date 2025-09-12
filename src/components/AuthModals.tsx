import React, { useState } from 'react';
import { X, User, Mail, Phone, Lock, LogIn, UserPlus, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useAppStore } from '../store';

export const AuthModals: React.FC = () => {
  const { 
    isLoginModalOpen, 
    isRegistrationModalOpen, 
    closeLoginModal, 
    closeRegistrationModal,
    openLoginModal,
    openRegistrationModal,
    register, 
    login,
    authError 
  } = useAppStore();

  // Login form state
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');

  // Registration form state
  const [regUsername, setRegUsername] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [regLoading, setRegLoading] = useState(false);
  const [regMessage, setRegMessage] = useState('');

  const handleLogin = async () => {
    if (!loginUsername.trim() || !loginPassword.trim()) {
      setLoginMessage('Please fill in all fields');
      return;
    }

    setLoginLoading(true);
    setLoginMessage('');

    // Simulate API delay
    setTimeout(() => {
      const result = login(loginUsername, loginPassword);
      setLoginMessage(result.message);
      setLoginLoading(false);

      if (result.success) {
        setTimeout(() => {
          closeLoginModal();
          setLoginUsername('');
          setLoginPassword('');
          setLoginMessage('');
        }, 1500);
      }
    }, 1000);
  };

  const handleRegister = async () => {
    if (!regUsername.trim() || !regEmail.trim() || !regPassword.trim()) {
      setRegMessage('Please fill in all required fields');
      return;
    }

    if (regPassword !== regConfirmPassword) {
      setRegMessage('Passwords do not match');
      return;
    }

    setRegLoading(true);
    setRegMessage('');

    // Simulate API delay
    setTimeout(() => {
      const result = register(regUsername, regEmail, regPhone, regPassword);
      setRegMessage(result.message);
      setRegLoading(false);

      if (result.success) {
        setTimeout(() => {
          closeRegistrationModal();
          openLoginModal();
          // Clear form
          setRegUsername('');
          setRegEmail('');
          setRegPhone('');
          setRegPassword('');
          setRegConfirmPassword('');
          setRegMessage('');
        }, 1500);
      }
    }, 1000);
  };

  const switchToRegister = () => {
    closeLoginModal();
    openRegistrationModal();
  };

  const switchToLogin = () => {
    closeRegistrationModal();
    openLoginModal();
  };

  // Login Modal
  if (isLoginModalOpen) {
    return (
      <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 w-full max-w-md overflow-hidden">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 border-b border-blue-500/30">
            <button
              onClick={closeLoginModal}
              className="absolute top-4 right-4 p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400 hover:text-white" />
            </button>
            
            <div className="text-center">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl w-fit mx-auto mb-4">
                <LogIn className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
              <p className="text-blue-200">Login to access your account</p>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Username or Email
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  placeholder="Enter username or email"
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
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
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
              </div>
            </div>

            {loginMessage && (
              <div className={`flex items-center space-x-2 p-3 rounded-lg ${
                loginMessage.includes('successful') 
                  ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                  : 'bg-red-500/20 border border-red-500/30 text-red-300'
              }`}>
                {loginMessage.includes('successful') ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <AlertCircle className="w-4 h-4" />
                )}
                <span className="text-sm">{loginMessage}</span>
              </div>
            )}

            <button
              onClick={handleLogin}
              disabled={loginLoading || !loginUsername.trim() || !loginPassword.trim()}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
            >
              {loginLoading ? 'Logging in...' : 'Login'}
            </button>

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
              onClick={closeRegistrationModal}
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

          {/* Form */}
          <div className="p-6 space-y-4">
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
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone (Optional)
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="tel"
                  value={regPhone}
                  onChange={(e) => setRegPhone(e.target.value)}
                  placeholder="Enter phone number"
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-200"
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
                  type="password"
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                  placeholder="Create password (min 6 chars)"
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="password"
                  value={regConfirmPassword}
                  onChange={(e) => setRegConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-200"
                  onKeyPress={(e) => e.key === 'Enter' && handleRegister()}
                />
              </div>
            </div>

            {regMessage && (
              <div className={`flex items-center space-x-2 p-3 rounded-lg ${
                regMessage.includes('successfully') 
                  ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                  : 'bg-red-500/20 border border-red-500/30 text-red-300'
              }`}>
                {regMessage.includes('successfully') ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <AlertCircle className="w-4 h-4" />
                )}
                <span className="text-sm">{regMessage}</span>
              </div>
            )}

            <button
              onClick={handleRegister}
              disabled={regLoading || !regUsername.trim() || !regEmail.trim() || !regPassword.trim()}
              className="w-full py-3 bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
            >
              {regLoading ? 'Creating Account...' : 'Create Account'}
            </button>

            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Already have an account?{' '}
                <button
                  onClick={switchToLogin}
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Login
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