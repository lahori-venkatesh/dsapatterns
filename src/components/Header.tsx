import React, { useState, useRef, useEffect } from 'react';
import { Search, BookOpen, BarChart3, Zap, RotateCcw, Home, Crown, User, LogOut, Code2, Layers } from 'lucide-react';
import { useAppStore } from '../store';

export const Header: React.FC = () => {
  const { 
    toggleSearch, 
    isSearchOpen, 
    getUserProgress, 
    currentView, 
    setCurrentView, 
    isPaid, 
    currentUser, 
    openLoginModal, 
    logout 
  } = useAppStore();
  
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const progress = getUserProgress();
  const completionPercentage = progress.totalProblems > 0 
    ? Math.round((progress.completedProblems / progress.totalProblems) * 100)
    : 0;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setIsProfileDropdownOpen(false);
  };

  return (
    <header className="bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/50 px-4 md:px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto gap-4">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              DSA Patterns
            </h1>
            <p className="text-sm text-gray-400">Master coding interviews</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <button
            onClick={() => setCurrentView('dashboard')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
              currentView === 'dashboard'
                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                : 'hover:bg-gray-800 text-gray-400 hover:text-white border border-transparent'
            }`}
          >
            <Home className="w-4 h-4" />
            <span className="text-sm font-medium">Home</span>
          </button>
          <button
            onClick={() => setCurrentView('dsa-mastery')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
              currentView === 'dsa-mastery'
                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                : 'hover:bg-gray-800 text-gray-400 hover:text-white border border-transparent'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span className="text-sm font-medium">DSA Mastery</span>
          </button>
          <button
            onClick={() => setCurrentView('language-mastery')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
              currentView === 'language-mastery'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'hover:bg-gray-800 text-gray-400 hover:text-white border border-transparent'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span className="text-sm font-medium">Interview Mastery</span>
          </button>
        </div>

        {/* Progress Stats */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          <div className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 px-4 py-2 rounded-xl">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-gray-200">
              {progress.completedProblems} / {progress.totalProblems}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-3 h-3 text-emerald-400" />
              <span className="text-xs text-emerald-400 font-semibold">{completionPercentage}%</span>
            </div>
          </div>
          
          <div className="w-24 xl:w-32 bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 h-2 rounded-full transition-all duration-500 shadow-lg"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        {/* User Authentication */}
        <div className="flex items-center space-x-2">
          {/* User Authentication */}
          {currentUser ? (
            <div className="flex items-center space-x-2 relative" ref={dropdownRef}>
              {/* Premium Badge */}
              {currentUser.isPremium && (
                <div className="hidden sm:flex items-center space-x-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 px-3 py-1 rounded-full">
                  <Crown className="w-3 h-3 text-amber-400" />
                  <span className="text-xs text-amber-300 font-medium">Premium</span>
                </div>
              )}
              
              {/* User Menu */}
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="relative"
              >
                {/* Profile Picture or Avatar */}
                {currentUser.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    alt={currentUser.username}
                    className="w-10 h-10 rounded-full border-2 border-gray-600 hover:border-blue-400 transition-colors cursor-pointer"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center border-2 border-gray-600 hover:border-blue-400 transition-colors cursor-pointer">
                    <span className="text-white text-sm font-bold">
                      {currentUser.username.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </button>

              {/* Dropdown Menu */}
              {isProfileDropdownOpen && (
                <div className="absolute top-full right-0 mt-3 w-64 bg-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-2xl py-2 z-50">
                  {/* User Info */}
                  <div className="px-4 py-3 border-b border-gray-700/50">
                    <p className="text-sm font-medium text-white">{currentUser.username}</p>
                    <p className="text-xs text-gray-400">{currentUser.email}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <div className={`w-2 h-2 rounded-full ${currentUser.isPremium ? 'bg-amber-400' : 'bg-gray-500'}`}></div>
                      <span className="text-xs text-gray-300">
                        {currentUser.isPremium ? 'Premium Account' : 'Free Account'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Logout Button */}
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-700/50 transition-colors text-red-400 hover:text-red-300"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm font-medium">Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={openLoginModal}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Login</span>
            </button>
          )}
          
          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-1">
            <button
              onClick={() => setCurrentView('dashboard')}
              className={`p-2 rounded-xl transition-all duration-200 ${
                currentView === 'dashboard'
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  : 'hover:bg-gray-800 text-gray-400 hover:text-white border border-transparent'
              }`}
            >
              <Home className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentView('dsa-mastery')}
              className={`p-2 rounded-xl transition-all duration-200 ${
                currentView === 'dsa-mastery'
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  : 'hover:bg-gray-800 text-gray-400 hover:text-white border border-transparent'
              }`}
            >
              <Layers className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentView('language-mastery')}
              className={`p-2 rounded-xl transition-all duration-200 ${
                currentView === 'language-mastery'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'hover:bg-gray-800 text-gray-400 hover:text-white border border-transparent'
              }`}
            >
              <Code2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};