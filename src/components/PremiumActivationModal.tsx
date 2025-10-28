import React, { useState } from 'react';
import { X, Crown, CheckCircle2, AlertCircle, Key } from 'lucide-react';
import { useAppStore } from '../store';

interface PremiumActivationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PremiumActivationModal: React.FC<PremiumActivationModalProps> = ({ isOpen, onClose }) => {
  const { currentUser, activatePremiumWithCode } = useAppStore();
  const [verificationCode, setVerificationCode] = useState('');
  const [message, setMessage] = useState('');
  const [isActivating, setIsActivating] = useState(false);

  const handleActivation = async () => {
    if (!verificationCode.trim()) {
      setMessage('Please enter a verification code');
      return;
    }

    setIsActivating(true);
    setMessage('');

    // Simulate API delay
    setTimeout(() => {
      const result = activatePremiumWithCode(verificationCode);
      setMessage(result.message);
      setIsActivating(false);

      if (result.success) {
        setTimeout(() => {
          onClose();
          setVerificationCode('');
          setMessage('');
        }, 2000);
      }
    }, 1000);
  };

  if (!isOpen || !currentUser) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-amber-500/20 to-orange-500/20 p-6 border-b border-amber-500/30">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
          
          <div className="text-center">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl w-fit mx-auto mb-4">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Activate Premium</h2>
            <p className="text-amber-200">Welcome back, {currentUser.username}!</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* User Info */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-6">
            <h4 className="font-semibold text-blue-300 mb-2">Account Information</h4>
            <div className="space-y-1 text-sm">
              <p className="text-blue-200">Username: <span className="font-medium">{currentUser.username}</span></p>
              <p className="text-blue-200">Email: <span className="font-medium">{currentUser.email}</span></p>
              <p className="text-blue-200">Status: <span className="font-medium">{currentUser.isPremium ? 'Premium' : 'Free'}</span></p>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-6">
            <h4 className="font-semibold text-amber-300 mb-2">How to Get Premium</h4>
            <ol className="text-amber-200 text-sm space-y-1 list-decimal list-inside">
              <li>Pay ₹299 via PhonePe QR code</li>
              <li>Include your username "{currentUser.username}" in payment note</li>
              <li>Send payment screenshot to admin via WhatsApp</li>
              <li>Admin will assign verification code to your account</li>
              <li>Enter the code below to activate premium</li>
            </ol>
          </div>

          {/* Verification Code Input */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Enter Your Verification Code
              </label>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value.toUpperCase())}
                  placeholder="e.g., DSA2024001"
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all duration-200 font-mono text-center text-lg tracking-wider"
                  maxLength={10}
                  onKeyPress={(e) => e.key === 'Enter' && handleActivation()}
                />
              </div>
            </div>

            {message && (
              <div className={`flex items-center space-x-2 p-3 rounded-lg ${
                message.includes('successfully') 
                  ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                  : 'bg-red-500/20 border border-red-500/30 text-red-300'
              }`}>
                {message.includes('successfully') ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <AlertCircle className="w-4 h-4" />
                )}
                <span className="text-sm">{message}</span>
              </div>
            )}

            <button
              onClick={handleActivation}
              disabled={isActivating || !verificationCode.trim()}
              className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
            >
              {isActivating ? 'Activating Premium...' : 'Activate Premium Access'}
            </button>
          </div>

          {/* Help */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Need help? Contact admin via WhatsApp with your username and payment proof.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};