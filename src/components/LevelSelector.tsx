import React from 'react';
import { Trophy, Target, Zap, Star, Crown, Award, Medal, Flame } from 'lucide-react';
import { useAppStore } from '../store';
import { Level } from '../types';

export const LevelSelector: React.FC = () => {
  const { selectedLevel, setSelectedLevel, categories } = useAppStore();

  const levels = [
    {
      id: 'beginner' as Level,
      name: 'Beginner',
      description: 'Build strong foundations with core DSA concepts',
      icon: Target,
      color: 'from-green-500 to-emerald-600',
      borderColor: 'border-green-500/50',
      bgColor: 'bg-green-500/20',
      textColor: 'text-green-300',
      badgeColor: 'bg-green-500/30 text-green-200',
      count: categories.filter(cat => {
        console.log('Level count - Category:', cat.name, 'Level:', cat.level);
        return cat.level === 'beginner';
      }).length,
      salary: '10-15 LPA',
      badge: 'Foundation',
      totalProblems: categories.filter(cat => cat.level === 'beginner').reduce((sum, cat) => sum + cat.totalProblems, 0)
    },
    {
      id: 'intermediate' as Level,
      name: 'Intermediate',
      description: 'Master advanced algorithms and complex patterns',
      icon: Trophy,
      color: 'from-blue-500 to-purple-600',
      borderColor: 'border-blue-500/50',
      bgColor: 'bg-blue-500/20',
      textColor: 'text-blue-300',
      badgeColor: 'bg-blue-500/30 text-blue-200',
      count: categories.filter(cat => cat.level === 'intermediate').length,
      salary: '15-20 LPA',
      badge: 'Advanced',
      totalProblems: categories.filter(cat => cat.level === 'intermediate').reduce((sum, cat) => sum + cat.totalProblems, 0)
    },
    {
      id: 'pro' as Level,
      name: 'Pro Level',
      description: 'Conquer FAANG interviews with expert techniques',
      icon: Crown,
      color: 'from-amber-500 to-orange-600',
      borderColor: 'border-amber-500/50',
      bgColor: 'bg-amber-500/20',
      textColor: 'text-amber-300',
      badgeColor: 'bg-amber-500/30 text-amber-200',
      count: categories.filter(cat => cat.level === 'pro').length,
      salary: '20+ LPA',
      badge: 'Expert',
      totalProblems: categories.filter(cat => cat.level === 'pro').reduce((sum, cat) => sum + cat.totalProblems, 0)
    }
  ];

  // Calculate progress for each level
  const getLevelProgress = (levelId: string) => {
    const levelCategories = categories.filter(cat => {
      console.log('Level progress - Category:', cat.name, 'Level:', cat.level, 'Target:', levelId);
      return cat.level === levelId;
    });
    const total = levelCategories.reduce((sum, cat) => sum + cat.totalProblems, 0);
    const completed = levelCategories.reduce((sum, cat) => sum + cat.completedProblems, 0);
    return { total, completed, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
  };

  // Get achievement badge based on progress
  const getAchievementBadge = (percentage: number) => {
    if (percentage >= 100) return { icon: Crown, text: 'Mastered', color: 'text-yellow-400' };
    if (percentage >= 75) return { icon: Trophy, text: 'Expert', color: 'text-purple-400' };
    if (percentage >= 50) return { icon: Award, text: 'Proficient', color: 'text-blue-400' };
    if (percentage >= 25) return { icon: Medal, text: 'Learning', color: 'text-green-400' };
    return { icon: Target, text: 'Getting Started', color: 'text-gray-400' };
  };

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Choose Your Learning Path</h2>
        <p className="text-gray-400">Progress through structured levels to achieve your career goals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 justify-items-center max-w-6xl mx-auto">
        {levels.map((level) => {
          const IconComponent = level.icon;
          const isSelected = selectedLevel === level.id;
          const progress = getLevelProgress(level.id);
          const achievement = getAchievementBadge(progress.percentage);
          const AchievementIcon = achievement.icon;
          
          return (
            <button
              key={level.id}
              onClick={() => setSelectedLevel(level.id)}
              className={`w-full max-w-sm p-6 rounded-2xl border transition-all duration-300 text-center group relative overflow-hidden transform hover:scale-105 ${
                isSelected 
                  ? `${level.borderColor} ${level.bgColor} backdrop-blur-sm shadow-2xl ring-2 ring-opacity-50` 
                  : 'border-gray-700/50 hover:border-gray-600/50 bg-gray-800/40 hover:bg-gray-700/50 backdrop-blur-sm'
              }`}
              style={{
                boxShadow: isSelected ? `0 0 30px ${level.color.includes('green') ? '#10b981' : level.color.includes('blue') ? '#3b82f6' : level.color.includes('amber') ? '#f59e0b' : '#6b7280'}40` : undefined
              }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${level.color}`}></div>
              
              {/* Active indicator */}
              {isSelected && (
                <div className="absolute top-3 right-3">
                  <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                    <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold">ACTIVE</span>
                  </div>
                </div>
              )}
              
              <div className="relative z-10">
                <div className="flex flex-col items-center mb-4">
                  <div className={`p-3 rounded-xl transition-all duration-300 mb-3 ${
                    isSelected ? level.bgColor : 'bg-gray-700/50'
                  } ${isSelected ? level.borderColor : 'border-gray-600/50'} border group-hover:scale-110`}>
                    <IconComponent className={`w-6 h-6 ${
                      isSelected ? level.textColor : 'text-gray-400'
                    } transition-colors duration-300`} />
                  </div>
                  
                  {/* Achievement badge */}
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${level.badgeColor} border ${level.borderColor}`}>
                    <AchievementIcon className={`w-3 h-3 ${achievement.color}`} />
                    <span>{achievement.text}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className={`text-lg font-bold mb-1 transition-colors duration-300 ${
                    isSelected ? 'text-white' : 'text-gray-300 group-hover:text-white'
                  }`}>
                    {level.name}
                  </h3>
                  
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className={`text-sm font-semibold ${level.textColor}`}>
                      {level.salary}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-400">
                      {level.totalProblems} problems
                    </span>
                  </div>
                </div>
                
                <p className={`text-sm leading-relaxed mb-4 transition-colors duration-300 text-center ${
                  isSelected ? 'text-gray-200' : 'text-gray-400 group-hover:text-gray-300'
                }`}>
                  {level.description}
                </p>
                
                {/* Progress section */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-xs mb-2">
                    <span className="text-gray-400">Progress</span>
                    <span className={`font-bold ${level.textColor}`}>
                      {progress.completed}/{progress.total} ({progress.percentage}%)
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden mx-auto">
                    <div 
                      className={`h-2 rounded-full transition-all duration-700 bg-gradient-to-r ${level.color} shadow-lg`}
                      style={{ width: `${progress.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Level comparison chart */}

      {/* Value Proposition Section */}
      <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-600/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-3">
              Why This Approach Works
            </h3>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012-2m-6 0a2 2 0 002 2h2a2 2 0 002-2" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                LeetCode Rating Boost
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pattern-based learning helps you achieve <span className="text-emerald-400 font-semibold">1800+ rating</span> faster by recognizing problem types instantly
              </p>
            </div>

            {/* Fast Revision */}
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 group text-center">
              <div className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                Lightning Fast Revision
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Organized patterns enable <span className="text-purple-400 font-semibold">3x faster</span> revision before interviews with our structured approach
              </p>
            </div>

            {/* DSA Mastery */}
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-600/30 hover:border-amber-500/50 transition-all duration-300 group text-center">
              <div className="p-3 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                Simple DSA Mastery
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Break down complex algorithms into <span className="text-amber-400 font-semibold">digestible patterns</span> making DSA mastery achievable for everyone
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-6 md:mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300 font-medium">
                Join thousands of developers who've landed their dream jobs using this method
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};