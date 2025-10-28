import React, { Suspense, lazy, useState } from 'react';
import { ArrowLeft, Coffee, Code2, BookOpen, RotateCcw, Terminal } from 'lucide-react';
import { Header } from './Header';
import { useAppStore } from '../store';
import { javaMastery, pythonMastery, cppMastery } from '../data/categories';
import type { LanguageMastery } from '../types';

const LevelSelector = lazy(() => import('./LevelSelector').then(m => ({ default: m.LevelSelector })));
const StatsOverview = lazy(() => import('./StatsOverview').then(m => ({ default: m.StatsOverview })));
const CategoryCard = lazy(() => import('./CategoryCard').then(m => ({ default: m.CategoryCard })));
const AuthModals = lazy(() => import('./AuthModals').then(m => ({ default: m.AuthModals })));
const PaymentModal = lazy(() => import('./PaymentModal').then(m => ({ default: m.PaymentModal })));
const PremiumActivationModal = lazy(() => import('./PremiumActivationModal').then(m => ({ default: m.PremiumActivationModal })));
const RevisionPage = lazy(() => import('./RevisionPage').then(m => ({ default: m.RevisionPage })));

const LoadingFallback = () => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

interface DSAMasteryPageProps {
  onBack: () => void;
}

export const DSAMasteryPage: React.FC<DSAMasteryPageProps> = ({ onBack }) => {
  const {
    selectedLevel,
    expandedCategories,
    toggleCategory,
    togglePattern,
    toggleProblem,
    setShowNoteEditor,
    setSelectedNotePattern,
    showPaymentModal,
    setShowPaymentModal,
    showPremiumActivationModal,
    setShowPremiumActivationModal,
    categories,
    setCurrentView
  } = useAppStore();

  const [selectedLanguage, setSelectedLanguage] = useState<LanguageMastery | null>(null);
  const [showRevision, setShowRevision] = useState(false);

  const filteredCategories = categories.filter(cat => cat.level === selectedLevel);

  const hasCategories = filteredCategories.length > 0;

  const levelStats = React.useMemo(() => {
    const totalCategories = filteredCategories.length;
    const totalProblems = filteredCategories.reduce((acc, cat) =>
      acc + cat.patterns.reduce((pAcc, pattern) => pAcc + pattern.problems.length, 0), 0
    );
    return { totalCategories, totalProblems };
  }, [filteredCategories]);

  const handleCategoryToggle = (categoryId: string) => {
    toggleCategory(categoryId);
  };

  const handlePatternToggle = (categoryId: string, patternId: string) => {
    togglePattern(categoryId, patternId);
  };

  const handleProblemToggle = (categoryId: string, patternId: string, problemId: string) => {
    toggleProblem(categoryId, patternId, problemId);
  };

  const handleAddNote = (categoryId: string, patternId: string) => {
    const category = categories.find(c => c.id === categoryId);
    const pattern = category?.patterns.find(p => p.id === patternId);
    if (pattern) {
      setSelectedNotePattern(pattern);
      setShowNoteEditor(true);
    }
  };

  const handleUpgrade = () => {
    setShowPaymentModal(true);
  };

  // Show Revision Page
  if (showRevision) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Header />
        <div className="container mx-auto px-4 pt-6">
          <button
            onClick={() => setShowRevision(false)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to DSA Mastery
          </button>
        </div>
        <Suspense fallback={<LoadingFallback />}>
          <RevisionPage />
        </Suspense>
      </div>
    );
  }

  // Show Language Problems
  if (selectedLanguage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Header />
        <div className="container mx-auto px-4 pt-6">
          <button
            onClick={() => setSelectedLanguage(null)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to DSA Mastery
          </button>

          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 mb-8">
              <div className="flex items-center space-x-4 mb-4">
                {selectedLanguage.id === 'java-mastery' && <Coffee className="w-12 h-12 text-orange-400" />}
                {selectedLanguage.id === 'python-mastery' && <Code2 className="w-12 h-12 text-blue-400" />}
                {selectedLanguage.id === 'cpp-mastery' && <Terminal className="w-12 h-12 text-purple-400" />}
                <div>
                  <h2 className="text-3xl font-bold text-white">{selectedLanguage.name}</h2>
                  <p className="text-gray-300">{selectedLanguage.description}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {selectedLanguage.problems.map((problem) => (
                <div key={problem.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-white">{problem.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          problem.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                          problem.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {problem.difficulty}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-3">{problem.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {problem.topics.map((topic) => (
                          <span key={topic} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    {problem.platformLinks.map((link) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-colors text-sm"
                      >
                        {link.platform} →
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />

      {/* Back Button and DSA Revision */}
      <div className="container mx-auto px-4 pt-6">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <button
            onClick={() => setShowRevision(true)}
            className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <RotateCcw className="w-4 h-4" />
            <span>DSA Revision</span>
          </button>
        </div>
      </div>

      {/* Why This Approach Works Section */}
      <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border-b border-gray-600/30 relative overflow-hidden mt-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5"></div>

        <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-3">
              Why This Approach Works
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Our structured pattern-based learning system is designed to maximize your success in technical interviews and career growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* High Paying Jobs */}
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 group text-center">
              <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                High-Paying Jobs
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Solving these problems systematically prepares you for <span className="text-blue-400 font-semibold">10-25 LPA</span> positions at top tech companies and startups
              </p>
            </div>

            {/* LeetCode Rating */}
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-600/30 hover:border-emerald-500/50 transition-all duration-300 group text-center">
              <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                LeetCode Rating
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pattern recognition helps you reach <span className="text-emerald-400 font-semibold">1800+ rating</span> faster than random problem solving
              </p>
            </div>

            {/* Interview Success */}
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 group text-center">
              <div className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                Interview Success
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Master <span className="text-purple-400 font-semibold">100+ patterns</span> to confidently solve any problem thrown at you during interviews
              </p>
            </div>

            {/* Time Efficiency */}
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300 group text-center">
              <div className="p-3 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                Time Efficiency
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Learn patterns once, apply everywhere. Cut your preparation time by <span className="text-orange-400 font-semibold">50%</span> compared to random practice
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Programming Languages Section */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border-y border-gray-600/30 py-8 md:py-12 mt-0">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center justify-center space-x-3">
                <span>Choose Your Programming Language</span>
              </h3>
              <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
                Learn language-specific syntax and problem-solving techniques
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Java Card */}
              <div
                onClick={() => setSelectedLanguage(javaMastery)}
                className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/30 rounded-xl p-6 hover:border-orange-500/60 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-orange-500/20 rounded-lg group-hover:scale-110 transition-transform">
                    <Coffee className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{javaMastery.language}</h4>
                    <p className="text-sm text-gray-400">{javaMastery.totalProblems} problems</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-4">{javaMastery.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-orange-400 font-medium">Click to learn →</span>
                  <div className="text-xs text-gray-500">{javaMastery.completedProblems}/{javaMastery.totalProblems} done</div>
                </div>
              </div>

              {/* Python Card */}
              <div
                onClick={() => setSelectedLanguage(pythonMastery)}
                className="bg-gradient-to-br from-blue-500/10 to-yellow-500/10 border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/60 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg group-hover:scale-110 transition-transform">
                    <Code2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{pythonMastery.language}</h4>
                    <p className="text-sm text-gray-400">{pythonMastery.totalProblems} problems</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-4">{pythonMastery.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-400 font-medium">Click to learn →</span>
                  <div className="text-xs text-gray-500">{pythonMastery.completedProblems}/{pythonMastery.totalProblems} done</div>
                </div>
              </div>

              {/* C++ Card */}
              <div
                onClick={() => setSelectedLanguage(cppMastery)}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/60 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{cppMastery.language}</h4>
                    <p className="text-sm text-gray-400">{cppMastery.totalProblems} problems</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-4">{cppMastery.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-400 font-medium">Click to learn →</span>
                  <div className="text-xs text-gray-500">{cppMastery.completedProblems}/{cppMastery.totalProblems} done</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Level Selector */}
        <Suspense fallback={<div className="h-20 bg-gray-800/50 rounded-xl animate-pulse" />}>
          <LevelSelector />
        </Suspense>

        {/* Hero Section */}
        <div className="text-center space-y-6 py-8 md:py-12">
          <>
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
          </>
        </div>

        {/* Stats Overview */}
        <Suspense fallback={<div className="h-32 bg-gray-800/50 rounded-xl animate-pulse" />}>
          <StatsOverview />
        </Suspense>

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
            <Suspense fallback={<div className="space-y-4">{[1,2,3].map(i => <div key={i} className="h-24 bg-gray-800/50 rounded-xl animate-pulse" />)}</div>}>
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
            </Suspense>
          </div>
        </div>
      </main>

      <Suspense fallback={null}>
        <AuthModals />
        {showPaymentModal && <PaymentModal onClose={() => setShowPaymentModal(false)} />}
        {showPremiumActivationModal && (
          <PremiumActivationModal onClose={() => setShowPremiumActivationModal(false)} />
        )}
      </Suspense>
    </div>
  );
};
