import React, { useEffect, useMemo, useCallback } from 'react';
import { Crown } from 'lucide-react';
import { Header } from './components/Header';
import { CategoryCard } from './components/CategoryCard';
import { SearchModal } from './components/SearchModal';
import { StatsOverview } from './components/StatsOverview';
import { NoteEditor } from './components/NoteEditor';
import { RevisionPage } from './components/RevisionPage';
import { PaymentModal } from './components/PaymentModal';
import { LevelSelector } from './components/LevelSelector';
import { AuthModals } from './components/AuthModals';
import { PremiumActivationModal } from './components/PremiumActivationModal';
import { useCategories } from './hooks/useCategories';
import { usePerformance } from './hooks/usePerformance';
import { useAppStore } from './store';

function App() {
  const { 
    currentView, 
    selectedLevel, 
    setSelectedLevel, 
    initializeCategories,
    initializeAuth,
    expandedCategories,
    openNoteEditor,
    isPaid,
    verifyUserSession
  } = useAppStore();
  
  const { filteredCategories, levelStats, hasCategories } = useCategories();
  const { toggleCategory, toggleProblemComplete, setSelectedPattern } = usePerformance();
  const [showPaymentModal, setShowPaymentModal] = React.useState(false);
  const [showPremiumActivationModal, setShowPremiumActivationModal] = React.useState(false);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Initialize Firebase Auth
  useEffect(() => {
    initializeAuth();
    
    // Cleanup on unmount
    return () => {
      if ((window as any).authUnsubscribe) {
        (window as any).authUnsubscribe();
      }
    };
  }, [initializeAuth]);

  // Initialize categories on first load
  useEffect(() => {
    if (!hasCategories) {
      initializeCategories();
    }
  }, [hasCategories, initializeCategories]);

  // Verify user session on app load and periodically
  useEffect(() => {
    const verifySession = () => {
      verifyUserSession();
    };
    
    // Initial verification
    verifySession();
    
    // Verify every 5 minutes
    const interval = setInterval(verifySession, 5 * 60 * 1000);
    
    // Verify when tab becomes visible
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        verifySession();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [verifyUserSession]);

  // Optimized handlers
  const handleCategoryToggle = useCallback((categoryId: string) => {
    toggleCategory(categoryId);
  }, [toggleCategory]);

  const handleProblemToggle = useCallback((problemId: string) => {
    toggleProblemComplete(problemId);
  }, [toggleProblemComplete]);

  const handlePatternToggle = useCallback((patternId: string | null) => {
    setSelectedPattern(patternId);
  }, [setSelectedPattern]);

  const handleAddNote = useCallback((problemId: string) => {
    openNoteEditor({
      id: '',
      problemId,
      title: '',
      content: '',
      tags: [],
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }, [openNoteEditor]);

  const handleUpgrade = useCallback(() => {
    setShowPaymentModal(true);
  }, []);
  // Set default level to beginner if none selected
  useEffect(() => {
    if (!selectedLevel) {
      setSelectedLevel('beginner');
    }
  }, [selectedLevel, setSelectedLevel]);

  if (currentView === 'revision') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Header />
        <RevisionPage onUpgrade={handleUpgrade} />
        <SearchModal />
        <NoteEditor />
        <PaymentModal isOpen={showPaymentModal} onClose={() => setShowPaymentModal(false)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Welcome Section */}
        <div className="mb-8 md:mb-12 relative z-10">
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300 font-medium">Live Learning Platform</span>
            </div>
          </div>
          
          {/* Level Selection */}
          <LevelSelector />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-4 text-center px-4">
            {selectedLevel === 'beginner' && 'Beginner Level'}
            {selectedLevel === 'intermediate' && 'Intermediate Level'}
            {selectedLevel === 'pro' && 'Pro Level'}
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto text-center leading-relaxed px-4">
            {selectedLevel === 'beginner' && 'Build strong foundations • Target: 10-15 LPA jobs • Focus on core concepts and basic problem-solving patterns'}
            {selectedLevel === 'intermediate' && 'Advance your skills • Target: 15-20 LPA positions • Master complex algorithms and data structures'}
            {selectedLevel === 'pro' && 'Achieve mastery • Target: 20+ LPA FAANG interviews • Tackle the most challenging problems and advanced techniques'}
          </p>
        </div>

        {/* Stats Overview */}
        <StatsOverview />

        {/* Categories Grid */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-xl md:text-2xl font-bold text-white flex items-center space-x-3">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              <span>
                {selectedLevel === 'beginner' ? 'Beginner Level - All DSA Categories' :
                 selectedLevel === 'intermediate' ? 'Intermediate Level - All DSA Categories' : 
                 'Pro Level - All DSA Categories'}
              </span>
            </h3>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-2">
              <span className="text-sm text-gray-300 font-medium">
                {levelStats.totalCategories} categories • {levelStats.totalProblems} problems
              </span>
            </div>
          </div>
          
          {!hasCategories && (
            <div className="text-center py-8 md:py-12">
              <div className="p-4 bg-gray-800/50 rounded-2xl w-fit mx-auto mb-4">
                <div className="w-12 h-12 mx-auto text-gray-500">📚</div>
              </div>
              <p className="text-lg font-medium text-gray-400 mb-2">No categories found</p>
              <p className="text-sm text-gray-500">Selected level: {selectedLevel}</p>
            </div>
          )}
          
          <div className="space-y-4">
            {filteredCategories.map((category) => (
              <CategoryCard 
                key={category.id} 
                category={category}
                isExpanded={expandedCategories.has(category.id)}
                onToggle={handleCategoryToggle}
                onPatternToggle={handlePatternToggle}
                onProblemToggle={handleProblemToggle}
                onAddNote={handleAddNote}
                onUpgrade={handleUpgrade}
              />
            ))}
          </div>

          {/* Premium CTA */}
          {!isPaid && (
            <div className="mt-8 bg-gradient-to-r from-amber-900/30 to-orange-900/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-amber-500/30 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5"></div>
              <div className="mb-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-4 max-w-md mx-auto">
                <h4 className="text-emerald-300 font-bold mb-2">✨ Try Arrays & Strings FREE!</h4>
                <p className="text-emerald-200 text-sm">Experience our complete learning system with the Arrays & Strings category - completely free to explore patterns and problems!</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl w-fit mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                Unlock All 9 Remaining Categories
              </h3>
              <p className="text-amber-200 mb-6 max-w-2xl mx-auto relative z-10">
                After trying Arrays & Strings, upgrade to get lifetime access to all remaining categories, complete revision center, unlimited notes, and progress tracking for just ₹299
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 max-w-2xl mx-auto relative z-10">
                <div className="bg-gray-800/50 rounded-lg p-4 text-left">
                  <h4 className="font-semibold text-white mb-2">✅ All 9 Remaining Categories</h4>
                  <p className="text-amber-200 text-sm">Linked Lists, Trees, Graphs, DP, and 5 more categories with 180+ problems</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 text-left">
                  <h4 className="font-semibold text-white mb-2">📝 Complete Revision</h4>
                  <p className="text-amber-200 text-sm">Full revision dashboard with notes, progress tracking, and analytics</p>
                </div>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-4 mb-6 max-w-md mx-auto relative z-10">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-3xl font-bold text-white">₹299</span>
                  <span className="text-lg text-gray-400 line-through">₹999</span>
                  <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full font-bold">70% OFF</span>
                </div>
                <p className="text-amber-300 text-sm">One-time payment • Lifetime access</p>
              </div>
              <button
                onClick={() => setShowPaymentModal(true)}
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl relative z-10"
              >
                Get Lifetime Access - ₹299
              </button>
              <p className="text-amber-300 text-sm mt-3 relative z-10">
                🔒 Secure payment • 30-day money-back guarantee
              </p>
            </div>
          )}
        </div>

        {/* Tips Section */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-blue-900/30 to-emerald-900/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-blue-500/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5"></div>
          <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center justify-center space-x-2 relative z-10 text-center">
            <span className="text-2xl">💡</span>
            <span>Study Tips for Success</span>
            {!isPaid && (
              <div className="flex items-center space-x-2 bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-xs text-emerald-300 font-medium">Arrays & Strings FREE</span>
              </div>
            )}
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 text-gray-300 relative z-10">
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-blue-300 mb-1">Pattern Recognition</p>
                  <p className="text-sm leading-relaxed">Focus on understanding the underlying patterns rather than memorizing solutions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-emerald-300 mb-1">Progressive Difficulty</p>
                  <p className="text-sm leading-relaxed">Start with Easy problems to build confidence, then progress to Medium and Hard.</p>
                </div>
              </div>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-purple-300 mb-1">Consistent Practice</p>
                  <p className="text-sm leading-relaxed">Solve at least one problem daily to maintain momentum.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-amber-300 mb-1">Take Notes</p>
                  <p className="text-sm leading-relaxed">Document key insights, edge cases, and optimization techniques for future reference.</p>
                </div>
              </div>
              {!isPaid && <span className="text-emerald-400"> • 1 category free</span>}
            </div>
          </div>
        </div>
      </main>
      
      <SearchModal />
      <NoteEditor />
      <AuthModals />
      <PremiumActivationModal 
        isOpen={showPremiumActivationModal} 
        onClose={() => setShowPremiumActivationModal(false)} 
      />
      <PaymentModal isOpen={showPaymentModal} onClose={() => setShowPaymentModal(false)} />
    </div>
  );
}

export default App;