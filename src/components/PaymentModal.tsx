import React, { useState } from 'react';
import { X, Crown, Check, Zap, Search, BookOpen, Star, MessageCircle, Copy, CheckCircle2, AlertCircle } from 'lucide-react';
import { useAppStore } from '../store';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AddOn = {
  id: string;
  name: string;
  price: number;
  description: string;
};

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const { currentUser, openLoginModal, activatePremiumWithCode } = useAppStore();
  const [currentStep, setCurrentStep] = useState<'payment' | 'verification' | 'recovery'>('payment');
  const [verificationCode, setVerificationCode] = useState('');
  const [isActivating, setIsActivating] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const addOns: AddOn[] = [
    { id: 'resume', name: 'Resume Building & Review', price: 99, description: 'Professional resume creation and expert review' },
    { id: 'linkedin', name: 'LinkedIn Optimization', price: 99, description: 'Profile optimization and content strategy' },
    { id: 'project', name: 'Project Assistance', price: 199, description: 'One-on-one project guidance and code review' },
  ];

  const basePrice = 499;
  const totalPrice = basePrice + selectedAddOns.reduce((sum, id) => {
    const addOn = addOns.find(a => a.id === id);
    return sum + (addOn?.price || 0);
  }, 0);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handlePaymentStep = () => {
    if (!currentUser) {
      // User needs to login first
      onClose();
      openLoginModal();
    } else {
      setCurrentStep('verification');
    }
  };

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
        }, 2000);
      }
    }, 1000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const whatsappGroupLink = "https://whatsapp.com/channel/0029Vb6t5uI2v1IysWlpQ43P";

  if (!isOpen) return null;

  const features = [
    {
      icon: Search,
      title: 'Access All Problems',
      description: 'Solve all 200+ problems across all difficulty levels'
    },
    {
      icon: BookOpen,
      title: 'Complete Revision Center',
      description: 'Full access to revision dashboard with progress tracking'
    },
    {
      icon: Zap,
      title: 'Unlimited Notes',
      description: 'Create unlimited notes with tags and organization'
    },
    {
      icon: Star,
      title: 'Lifetime Access',
      description: 'One-time payment for permanent access to all features'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 w-full max-w-lg overflow-hidden max-h-[90vh] overflow-y-auto">
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
            <h2 className="text-2xl font-bold text-white mb-2">
              {currentStep === 'payment' ? 'Upgrade to Premium' : 
               currentStep === 'verification' ? 'Verify Payment' : 'Recover Access'}
            </h2>
            <p className="text-amber-200">
              {currentStep === 'payment'
                ? 'Unlock all features and accelerate your learning'
                : currentStep === 'verification'
                ? 'Enter your verification code to activate premium'
                : 'Already paid? Recover your premium access'
              }
            </p>
          </div>
        </div>

        {currentStep === 'payment' ? (
          <>
            {/* Pricing */}
            <div className="p-6 border-b border-gray-700/50">
              {/* Recovery Option */}
              <div className="mb-4 text-center">
                <button
                  onClick={() => setCurrentStep('recovery')}
                  className="text-sm text-blue-400 hover:text-blue-300 underline transition-colors"
                >
                  Already paid? Recover your access →
                </button>
              </div>

              {/* Base Price */}
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-4 border border-amber-500/30 mb-6 text-center">
                <p className="text-sm text-gray-300 mb-2">Base Premium Access</p>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-3xl font-bold text-white">₹499</span>
                  <span className="text-sm text-gray-400 line-through">₹999</span>
                </div>
                <p className="text-amber-400 font-semibold">50% OFF - Limited Time</p>
                <p className="text-gray-300 text-sm mt-1">One-time payment • Lifetime access</p>
              </div>

              {/* Add-ons Section */}
              <div className="space-y-3 mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Optional Add-ons (Select Any):</span>
                </h4>

                {addOns.map((addOn) => (
                  <button
                    key={addOn.id}
                    onClick={() => toggleAddOn(addOn.id)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      selectedAddOns.includes(addOn.id)
                        ? 'border-emerald-500/50 bg-emerald-500/10'
                        : 'border-gray-600/50 bg-gray-700/30 hover:border-gray-500/50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        selectedAddOns.includes(addOn.id)
                          ? 'border-emerald-400 bg-emerald-400'
                          : 'border-gray-400'
                      }`}>
                        {selectedAddOns.includes(addOn.id) && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="font-semibold text-white">{addOn.name}</h5>
                          <span className="text-amber-400 font-bold">+₹{addOn.price}</span>
                        </div>
                        <p className="text-xs text-gray-400">{addOn.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Total Price */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-4 border border-blue-500/30 text-center">
                <p className="text-sm text-gray-300 mb-1">Total Amount</p>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-4xl font-bold text-white">₹{totalPrice}</span>
                </div>
                {selectedAddOns.length > 0 && (
                  <p className="text-blue-300 text-sm mt-2">
                    Base ₹{basePrice} + Add-ons ₹{totalPrice - basePrice}
                  </p>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="p-6 space-y-4 border-b border-gray-700/50">
              <h3 className="font-bold text-white mb-4 flex items-center space-x-2">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>What you'll get:</span>
              </h3>
              
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg flex-shrink-0">
                      <IconComponent className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{feature.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Payment QR Codes */}
            <div className="p-6 space-y-6">
              <h3 className="text-lg font-bold text-white text-center mb-4">
                Scan QR Code to Pay ₹{totalPrice}
              </h3>
              
              {/* QR Code Placeholders */}
              <div className="flex justify-center">
                {/* PhonePe QR */}
                <div className="bg-gray-700/30 rounded-xl p-6 text-center border border-gray-600/50 max-w-sm">
                  <h4 className="font-semibold text-white mb-4 flex items-center justify-center space-x-2">
                    <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">₹</span>
                    </div>
                    <span>PhonePe Payment</span>
                  </h4>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <img
                      src="/WhatsApp Image 2025-09-12 at 4.10.25 PM.jpeg"
                      alt={`PhonePe QR Code for ₹${totalPrice} payment`}
                      className="w-full h-auto max-w-64 mx-auto rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-gray-300 font-medium mb-2">Scan with PhonePe app</p>
                  <p className="text-xs text-gray-400">Pay ₹{totalPrice} to Lahori Venkatesh</p>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                <h4 className="font-semibold text-blue-300 mb-3 flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Payment Instructions</span>
                </h4>
                <ol className="text-sm text-blue-200 space-y-2 list-decimal list-inside">
                  <li>Scan QR code above and pay ₹{totalPrice}</li>
                  {selectedAddOns.length > 0 && (
                    <li className="text-amber-300 font-medium">
                      Include add-ons selected: {addOns.filter(a => selectedAddOns.includes(a.id)).map(a => a.name).join(', ')}
                    </li>
                  )}
                  <li>Include your username "{currentUser?.username || 'your-username'}" in payment note</li>
                  <li>Take a screenshot of payment confirmation</li>
                  <li>Join our WhatsApp group using the link below</li>
                  <li>Send screenshot with your username to get verification code</li>
                  <li>Admin will assign code to your account for activation</li>
                </ol>
              </div>

              {/* WhatsApp Group Link */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                <h4 className="font-semibold text-green-300 mb-3 flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Join WhatsApp Group</span>
                </h4>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={whatsappGroupLink}
                    readOnly
                    className="flex-1 px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white text-sm"
                  />
                  <button
                    onClick={() => copyToClipboard(whatsappGroupLink)}
                    className="p-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg transition-colors"
                    title="Copy link"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <a
                  href={whatsappGroupLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 mt-3 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Join WhatsApp Group</span>
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 bg-gray-900/50 border-t border-gray-700/50">
              {!currentUser && (
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-4 mb-4">
                  <h4 className="text-blue-300 font-bold mb-2">🔐 Account Required</h4>
                  <p className="text-blue-200 text-sm mb-3">You need to create an account first to purchase premium access</p>
                  <button
                    onClick={() => { onClose(); openLoginModal(); }}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                  >
                    Create Account / Login
                  </button>
                </div>
              )}
              <button
                onClick={handlePaymentStep}
                className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
                disabled={!currentUser}
              >
                {!currentUser ? 'Create Account First' : 'I\'ve Made Payment'}
              </button>
              <p className="text-center text-gray-400 text-xs mt-3">
                {!currentUser 
                  ? 'Account required for premium activation'
                  : 'Secure payment • Instant activation • Lifetime access'
                }
              </p>
            </div>
          </>
        ) : currentStep === 'verification' ? (
          <>
            {/* User Info */}
            <div className="p-6 border-b border-gray-700/50">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                <h4 className="font-semibold text-blue-300 mb-2">Account Information</h4>
                <div className="space-y-1 text-sm">
                  <p className="text-blue-200">Username: <span className="font-medium">{currentUser?.username}</span></p>
                  <p className="text-blue-200">Email: <span className="font-medium">{currentUser?.email}</span></p>
                  <p className="text-blue-200">Status: <span className="font-medium">{currentUser?.isPremium ? 'Premium' : 'Free'}</span></p>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="p-6 space-y-6">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                <h4 className="font-semibold text-amber-300 mb-2">How to Get Your Code</h4>
                <ol className="text-amber-200 text-sm space-y-1 list-decimal list-inside">
                  <li>Join our WhatsApp group using the link below</li>
                  <li>Send your payment screenshot with username "{currentUser?.username}"</li>
                  <li>Admin will verify payment and assign verification code</li>
                  <li>Enter the code below to activate premium</li>
                </ol>
              </div>

              {/* WhatsApp Group Link */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                <h4 className="font-semibold text-green-300 mb-3 flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Join WhatsApp Group</span>
                </h4>
                <div className="flex items-center space-x-2 mb-3">
                  <input
                    type="text"
                    value={whatsappGroupLink}
                    readOnly
                    className="flex-1 px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white text-sm"
                  />
                  <button
                    onClick={() => copyToClipboard(whatsappGroupLink)}
                    className="p-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg transition-colors"
                    title="Copy link"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <a
                  href={whatsappGroupLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Join WhatsApp Group</span>
                </a>
              </div>

              {/* Verification Code Input */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Enter Your Verification Code
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value.toUpperCase())}
                      placeholder="e.g., DSA2024001"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all duration-200 font-mono text-center text-lg tracking-wider"
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
            </div>

            {/* Help */}
            <div className="p-6 text-center">
              <p className="text-gray-400 text-sm">
                Need help? Contact admin via WhatsApp with your username and payment proof.
              </p>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};