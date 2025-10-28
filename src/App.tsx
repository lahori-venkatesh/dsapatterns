import React, { useEffect, useMemo, useCallback, lazy, Suspense } from 'react';
import { Crown } from 'lucide-react';
import { supabase } from './config/supabase';
import { Header } from './components/Header';
import { useCategories } from './hooks/useCategories';
import { usePerformance } from './hooks/usePerformance';
import { useAppStore } from './store';

// Lazy load heavy components for code splitting
const CategoryCard = lazy(() => import('./components/CategoryCard').then(m => ({ default: m.CategoryCard })));
const SearchModal = lazy(() => import('./components/SearchModal').then(m => ({ default: m.SearchModal })));
const StatsOverview = lazy(() => import('./components/StatsOverview').then(m => ({ default: m.StatsOverview })));
const NoteEditor = lazy(() => import('./components/NoteEditor').then(m => ({ default: m.NoteEditor })));
const RevisionPage = lazy(() => import('./components/RevisionPage').then(m => ({ default: m.RevisionPage })));
const PaymentModal = lazy(() => import('./components/PaymentModal').then(m => ({ default: m.PaymentModal })));
const LevelSelector = lazy(() => import('./components/LevelSelector').then(m => ({ default: m.LevelSelector })));
const AuthModals = lazy(() => import('./components/AuthModals').then(m => ({ default: m.AuthModals })));
const PremiumActivationModal = lazy(() => import('./components/PremiumActivationModal').then(m => ({ default: m.PremiumActivationModal })));
const AuthCallback = lazy(() => import('./components/AuthCallback').then(m => ({ default: m.AuthCallback })));
const LanguageMastery = lazy(() => import('./components/LanguageMastery').then(m => ({ default: m.LanguageMastery })));
const BigONotationPage = lazy(() => import('./components/BigONotationPage').then(m => ({ default: m.BigONotationPage })));
const DSAMasteryPage = lazy(() => import('./components/DSAMasteryPage').then(m => ({ default: m.DSAMasteryPage })));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

// Error Boundary Component
class AppErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
          <div className="bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 p-8 max-w-md w-full text-center">
            <div className="p-4 bg-red-500/20 rounded-xl w-fit mx-auto mb-6">
              <div className="w-12 h-12 text-red-400">⚠️</div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
            <p className="text-gray-300 mb-6">
              The application encountered an error. Please refresh the page or try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

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
    verifyUserSession,
    currentUser
  } = useAppStore();
  
  const { filteredCategories, levelStats, hasCategories } = useCategories();
  const { toggleCategory, toggleProblemComplete, setSelectedPattern } = usePerformance();
  const [showPaymentModal, setShowPaymentModal] = React.useState(false);
  const [showPremiumActivationModal, setShowPremiumActivationModal] = React.useState(false);
  const [showBigOPage, setShowBigOPage] = React.useState(false);
  const [showDSAMastery, setShowDSAMastery] = React.useState(false);

  // Check if this is the auth callback route
  const isAuthCallback = React.useMemo(() => {
    try {
      const pathname = window.location.pathname;
      const search = window.location.search;
      
      console.log('Checking auth callback:', {
        pathname,
        search,
        fullUrl: window.location.href
      });
      
      // Check for auth callback route
      const isCallbackRoute = pathname === '/auth/callback';
      // Check for auth code in URL params
      const hasAuthCode = search.includes('code=');
      
      const result = isCallbackRoute || hasAuthCode;
      console.log('Auth callback result:', { isCallbackRoute, hasAuthCode, result });
      
      return result;
    } catch (error) {
      console.error('Error checking auth callback:', error);
      return false;
    }
  }, []);

  // If this is the auth callback, show the callback component
  if (isAuthCallback) {
    console.log('Detected auth callback, showing callback component');
    return (
      <Suspense fallback={<LoadingFallback />}>
        <AuthCallback />
      </Suspense>
    );
  }

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Initialize Firebase Auth
  useEffect(() => {
    try {
      initializeAuth();
      
      // Cleanup on unmount
      return () => {
        if ((window as any).authUnsubscribe) {
          (window as any).authUnsubscribe();
        }
      };
    } catch (error) {
      console.error('Error initializing auth:', error);
    }
  }, [initializeAuth]);

  // Additional session check on app mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        if (!supabase) {
          console.log('Supabase not available, skipping session check');
          return;
        }
        const { data: { session } } = await supabase.auth.getSession();
        console.log('App mount session check:', session);
        if (session?.user && !currentUser) {
          console.log('Session found but no current user, triggering auth state change...');
          // The auth state listener should handle this, but let's be explicit
        }
      } catch (error) {
        console.error('Session check error:', error);
      }
    };
    
    checkSession();
  }, [currentUser]);

  // Initialize categories on first load
  useEffect(() => {
    try {
      if (!hasCategories) {
        initializeCategories();
      }
    } catch (error) {
      console.error('Error initializing categories:', error);
    }
  }, [hasCategories, initializeCategories]);

  // Verify user session on app load and periodically
  useEffect(() => {
    try {
      const verifySession = () => {
        try {
          verifyUserSession();
        } catch (error) {
          console.error('Error verifying session:', error);
        }
      };
      
      // Initial verification
      verifySession();
      
      // Set up periodic verification every 5 minutes
      const interval = setInterval(verifySession, 5 * 60 * 1000);
      
      return () => clearInterval(interval);
    } catch (error) {
      console.error('Error setting up session verification:', error);
    }
  }, [verifyUserSession]);

  const handleCategoryToggle = useCallback((categoryId: string) => {
    try {
      toggleCategory(categoryId);
    } catch (error) {
      console.error('Error toggling category:', error);
    }
  }, [toggleCategory]);

  const handlePatternToggle = useCallback((patternId: string) => {
    try {
      setSelectedPattern(patternId);
    } catch (error) {
      console.error('Error toggling pattern:', error);
    }
  }, [setSelectedPattern]);

  const handleProblemToggle = useCallback((problemId: string) => {
    try {
      toggleProblemComplete(problemId);
    } catch (error) {
      console.error('Error toggling problem:', error);
    }
  }, [toggleProblemComplete]);

  const handleAddNote = useCallback((problemId: string) => {
    try {
      openNoteEditor(problemId);
    } catch (error) {
      console.error('Error opening note editor:', error);
    }
  }, [openNoteEditor]);

  const handleUpgrade = useCallback(() => {
    try {
      setShowPaymentModal(true);
    } catch (error) {
      console.error('Error opening payment modal:', error);
    }
  }, []);

  if (currentView === 'revision') {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <RevisionPage />
      </Suspense>
    );
  }

  if (currentView === 'language-mastery') {
    return (
      <AppErrorBoundary>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <Header />
          <div className="container mx-auto px-4 py-8">
            <Suspense fallback={<LoadingFallback />}>
              <LanguageMastery />
            </Suspense>
          </div>
          <Suspense fallback={null}>
            <AuthModals />
            {showPaymentModal && <PaymentModal onClose={() => setShowPaymentModal(false)} />}
            {showPremiumActivationModal && (
              <PremiumActivationModal onClose={() => setShowPremiumActivationModal(false)} />
            )}
          </Suspense>
        </div>
      </AppErrorBoundary>
    );
  }

  if (showBigOPage) {
    return (
      <AppErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <BigONotationPage onBack={() => setShowBigOPage(false)} />
        </Suspense>
      </AppErrorBoundary>
    );
  }

  if (showDSAMastery) {
    return (
      <AppErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <DSAMasteryPage onBack={() => setShowDSAMastery(false)} />
        </Suspense>
      </AppErrorBoundary>
    );
  }

  return (
    <AppErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Header />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border-b border-gray-600/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5"></div>

          <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-6">
                Master Your Tech Interview Journey
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                From DSA patterns to language mastery - everything you need to land your dream tech job at 10-25 LPA
              </p>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300 font-medium">
                  Join thousands preparing for top tech companies
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Entry Cards Section */}
        <main className="container mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Learning Path</h2>
            <p className="text-gray-400 text-lg">Select a domain to start your preparation journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* DSA Mastery Card */}
            <button
              onClick={() => setShowDSAMastery(true)}
              className="group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm p-8 text-left transition-all duration-300 hover:border-blue-500/50 hover:bg-gray-700/50 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-4 mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">DSA Mastery</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Master Data Structures & Algorithms through pattern-based learning. Choose your level and track progress across 100+ curated problems.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-blue-400">3</div>
                    <div className="text-xs text-gray-400 mt-1">Difficulty Levels</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-purple-400">15+</div>
                    <div className="text-xs text-gray-400 mt-1">Categories</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-emerald-400">100+</div>
                    <div className="text-xs text-gray-400 mt-1">Patterns</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-blue-400 font-medium">
                  <span>Start Learning</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </button>

            {/* Interview Mastery Card */}
            <button
              onClick={() => useAppStore.getState().setCurrentView('language-mastery')}
              className="group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm p-8 text-left transition-all duration-300 hover:border-emerald-500/50 hover:bg-gray-700/50 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-600 p-4 mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">Interview Mastery</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Master SQL, web development, system design, aptitude, HR interviews, and more. Complete preparation for tech interviews.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-emerald-400">9</div>
                    <div className="text-xs text-gray-400 mt-1">Domains</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-cyan-400">500+</div>
                    <div className="text-xs text-gray-400 mt-1">Problems</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-teal-400">All</div>
                    <div className="text-xs text-gray-400 mt-1">Platforms</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-emerald-400 font-medium">
                  <span>Explore Topics</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </button>
          </div>

          {/* Big O Notation Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Master Big O Notation</h3>
                <p className="text-gray-300">
                  Understand time and space complexity analysis essential for technical interviews
                </p>
              </div>
              <button
                onClick={() => setShowBigOPage(true)}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
              >
                Learn Big O
              </button>
            </div>
          </div>

          {/* Premium CTA */}
          {!isPaid && (
            <div className="mt-16 bg-gradient-to-r from-amber-900/30 to-orange-900/30 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-amber-500/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5"></div>

              <div className="text-center mb-8 relative z-10">
                <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl w-fit mx-auto mb-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Unlock Complete Job-Ready Bundle
                </h3>
                <p className="text-amber-200 text-lg mb-2">
                  Everything You Need to Land 10-25 LPA Jobs
                </p>
                <p className="text-gray-300 text-sm">
                  Perfect for CS & Non-CS Students • One-Time Investment, Lifetime Benefits
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 relative z-10">
                {/* DSA Mastery */}
                <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50 hover:border-blue-500/50 transition-all">
                  <h4 className="font-bold text-blue-300 mb-3 flex items-center gap-2 text-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Complete DSA Mastery
                  </h4>
                  <ul className="space-y-2.5 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>100+ DSA patterns unlocked (Beginner to Pro)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>15+ categories with detailed solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>Unlimited notes for all categories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>Premium revision dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>Big O notation guide</span>
                    </li>
                  </ul>
                </div>

                {/* Language & Technical Skills */}
                <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50 hover:border-emerald-500/50 transition-all">
                  <h4 className="font-bold text-emerald-300 mb-3 flex items-center gap-2 text-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Language & Tech Skills
                  </h4>
                  <ul className="space-y-2.5 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>Java, Python, C++ complete guides</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>SQL & Database mastery (500+ questions)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>Web Development (HTML, CSS, JS, React, Node)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>Aptitude & Logical Reasoning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>System Design & DBMS concepts</span>
                    </li>
                  </ul>
                </div>

                {/* Career & Interview Support */}
                <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50 hover:border-purple-500/50 transition-all">
                  <h4 className="font-bold text-purple-300 mb-3 flex items-center gap-2 text-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Career Support
                  </h4>
                  <ul className="space-y-2.5 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>Resume building guide + templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>LinkedIn optimization complete guide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>HR interview prep (50+ questions)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>Machine coding round preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>Project building guidance & ideas</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Premium Community & Support */}
              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-purple-500/30 mb-8 relative z-10">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2 text-lg">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Premium Community Access
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2.5 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">★</span>
                      <span>Exclusive Discord/Telegram community</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">★</span>
                      <span>Weekly problem-solving sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">★</span>
                      <span>Doubt resolution support</span>
                    </li>
                  </ul>
                  <ul className="space-y-2.5 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">★</span>
                      <span>Resume & project reviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">★</span>
                      <span>Interview experience sharing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">★</span>
                      <span>Job referral opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pricing */}
              <div className="text-center relative z-10">
                <div className="mb-6">
                  <div className="inline-block bg-red-500/20 text-red-300 px-4 py-1 rounded-full text-sm font-semibold mb-3">
                    Limited Time Offer
                  </div>
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <span className="text-2xl text-gray-400 line-through">₹999</span>
                    <span className="text-5xl font-bold text-white">₹499</span>
                  </div>
                  <div className="text-amber-300 text-lg font-medium mb-1">One-time payment • Lifetime access</div>
                  <div className="text-gray-400 text-sm">No recurring charges • Cancel anytime</div>
                </div>
                <button
                  onClick={handleUpgrade}
                  className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-2xl transform hover:scale-105"
                >
                  Get Premium Access Now
                </button>
                <p className="text-gray-400 text-sm mt-4">
                  Join 1000+ students who landed their dream jobs
                </p>
              </div>
            </div>
          )}

          {/* Success Tips Section */}
          <div className="mt-16 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Tips for Maximum Success
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-blue-300 mb-1">Follow the Pattern Order</p>
                    <p className="text-sm text-gray-300">Complete patterns sequentially within each category for best learning outcomes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-emerald-300 mb-1">Start with Your Level</p>
                    <p className="text-sm text-gray-300">Start with Easy problems to build confidence, then progress to Medium and Hard.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-purple-300 mb-1">Consistent Practice</p>
                    <p className="text-sm text-gray-300">Solve at least one problem daily to maintain momentum.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-amber-300 mb-1">Take Notes</p>
                    <p className="text-sm text-gray-300">Document key insights, edge cases, and optimization techniques{!isPaid && <span className="text-emerald-400"> • 1 category free</span>}.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Suspense fallback={null}>
          <SearchModal />
          <NoteEditor />
          <AuthModals />
          <PremiumActivationModal
            isOpen={showPremiumActivationModal}
            onClose={() => setShowPremiumActivationModal(false)}
          />
          <PaymentModal isOpen={showPaymentModal} onClose={() => setShowPaymentModal(false)} />
        </Suspense>
      </div>
    </AppErrorBoundary>
  );
}

export default App;