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

    </div>
  );
};