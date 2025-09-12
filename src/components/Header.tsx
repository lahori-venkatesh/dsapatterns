import React from 'react';
import { Search, BookOpen, BarChart3, Zap, RotateCcw, Home, Crown, User, LogOut } from 'lucide-react';
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
  const progress = getUserProgress();
  const completionPercentage = progress.totalProblems > 0 
    ? Math.round((progress.completedProblems / progress.totalProblems) * 100)
    : 0;

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
            <span className="text-sm font-medium">Dashboard</span>
          </button>
          <button
            onClick={() => setCurrentView('revision')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
              currentView === 'revision'
                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                : 'hover:bg-gray-800 text-gray-400 hover:text-white border border-transparent'
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            <span className="text-sm font-medium">Revision</span>
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

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {/* User Authentication */}
          {currentUser ? (
            <div className="flex items-center space-x-2">
              {/* Premium Badge */}
              {currentUser.isPremium && (
                <div className="hidden sm:flex items-center space-x-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 px-3 py-1 rounded-full">
                  <Crown className="w-3 h-3 text-amber-400" />
                  <span className="text-xs text-amber-300 font-medium">Premium</span>
                </div>
              )}
              
              {/* User Menu */}
              <div className="flex items-center space-x-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700 px-3 py-2 rounded-xl">
                <User className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-200 font-medium hidden sm:inline">
                  {currentUser.username}
                </span>
                <button
                  onClick={logout}
                  className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-3 h-3" />
                </button>
              </div>
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
          
          {/* Premium Badge */}
          {isPaid && !currentUser && (
            <div className="hidden sm:flex items-center space-x-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 px-3 py-1 rounded-full">
              <Crown className="w-3 h-3 text-amber-400" />
              <span className="text-xs text-amber-300 font-medium">Premium</span>
            </div>
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
              onClick={() => setCurrentView('revision')}
              className={`p-2 rounded-xl transition-all duration-200 ${
                currentView === 'revision'
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  : 'hover:bg-gray-800 text-gray-400 hover:text-white border border-transparent'
              }`}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
          
          <button
            onClick={toggleSearch}
            className={`p-2 rounded-xl transition-all duration-200 relative ${
              isSearchOpen
                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                : 'hover:bg-gray-800 text-gray-400 hover:text-white border border-transparent'
            }`}
            title="Search"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};