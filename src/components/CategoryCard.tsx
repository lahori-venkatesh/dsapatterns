import React, { memo, useMemo, useCallback } from 'react';
import * as Icons from 'lucide-react';
import { ChevronDown, ChevronRight, Sparkles, Lock, Crown } from 'lucide-react';
import { Category } from '../types';
import { useAppStore } from '../store';
import { PatternItem } from './PatternItem';

interface CategoryCardProps {
  category: Category;
  isExpanded: boolean;
  onToggle: (categoryId: string) => void;
  onPatternToggle: (patternId: string | null) => void;
  onProblemToggle: (problemId: string) => void;
  onAddNote: (problemId: string) => void;
  onUpgrade: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = memo(({ 
  category, 
  isExpanded, 
  onToggle,
  onPatternToggle,
  onProblemToggle,
  onAddNote,
  onUpgrade
}) => {
  const { selectedPattern, currentUser, isPaid } = useAppStore();
  
  // Arrays & Strings is free to view as a model, others require payment
  const isFreeCategory = category.name === 'Arrays & Strings';
  const hasAccess = (currentUser?.isPremium || isPaid) || isFreeCategory;
  
  // Memoized icon component for better performance
  const IconComponent = useMemo(() => {
    return Icons[category.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
  }, [category.icon]);
  
  // Memoized completion percentage
  const completionPercentage = useMemo(() => {
    return category.totalProblems > 0 
      ? Math.round((category.completedProblems / category.totalProblems) * 100)
      : 0;
  }, [category.totalProblems, category.completedProblems]);

  // Helper function for level styling
  const getLevelStyling = (level: string) => {
    switch (level) {
      case 'beginner':
        return {
          gradient: 'from-green-500/20 to-emerald-500/20',
          border: 'border-green-500/30',
          text: 'text-green-300',
          badge: 'bg-green-500/20 text-green-400 border-green-500/30'
        };
      case 'intermediate':
        return {
          gradient: 'from-blue-500/20 to-purple-500/20',
          border: 'border-blue-500/30',
          text: 'text-blue-300',
          badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
        };
      case 'pro':
        return {
          gradient: 'from-amber-500/20 to-orange-500/20',
          border: 'border-amber-500/30',
          text: 'text-amber-300',
          badge: 'bg-amber-500/20 text-amber-400 border-amber-500/30'
        };
      default:
        return {
          gradient: 'from-blue-500/20 to-purple-500/20',
          border: 'border-blue-500/30',
          text: 'text-blue-300',
          badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
        };
    }
  };

  // Memoized level styling for better performance
  const levelStyling = useMemo(() => {
    return getLevelStyling(category.level);
  }, [category.level]);

  // Optimized toggle handler
  const handleToggle = useCallback(() => {
    onToggle(category.id);
  }, [category.id, onToggle]);

  const handleUpgradeClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onUpgrade();
  }, [onUpgrade]);
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden transition-all duration-300 hover:border-gray-600/50 hover:bg-gray-800/70 group w-full max-w-none">
      <button
        onClick={handleToggle}
        className="w-full p-4 md:p-6 text-left hover:bg-gray-700/30 transition-all duration-200"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 md:space-x-4 flex-1 min-w-0">
            <div className="relative">
              <div className={`p-3 bg-gradient-to-br ${levelStyling.gradient} rounded-xl border ${levelStyling.border} group-hover:border-opacity-70 transition-all duration-200`}>
                <IconComponent className={`w-6 h-6 ${levelStyling.text} group-hover:opacity-90 transition-all duration-200`} />
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className={`text-lg font-bold text-white group-hover:${levelStyling.text} transition-colors duration-200`}>
                {category.name}
                </h3>
                <span className={`text-xs px-2 py-1 rounded-full font-medium border ${levelStyling.badge}`}>
                  {category.level && typeof category.level === 'string' ? category.level.charAt(0).toUpperCase() + category.level.slice(1) : 'Unknown'}
                </span>
                {completionPercentage === 100 && (
                  <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                )}
              </div>
              <div className="flex items-center flex-wrap gap-2 md:gap-3 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span>{category.patterns.length} patterns</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  <span>{category.totalProblems} problems</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                  <span className="text-emerald-400 font-semibold">
                    {completionPercentage}% complete
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
            {/* Pro Badge for Non-Free Categories - Only show if user doesn't have access */}
            {!isFreeCategory && !hasAccess && (
              <div className="flex items-center space-x-1 bg-amber-500/20 border border-amber-500/30 px-2 py-1 rounded-full">
                <Lock className="w-3 h-3 text-amber-400" />
                <span className="text-xs text-amber-300 font-medium">Pro</span>
              </div>
            )}
            
            {/* Premium Badge for users who have premium access */}
            {!isFreeCategory && hasAccess && (
              <div className="flex items-center space-x-1 bg-emerald-500/20 border border-emerald-500/30 px-2 py-1 rounded-full">
                <Crown className="w-3 h-3 text-emerald-400" />
                <span className="text-xs text-emerald-300 font-medium">Premium</span>
              </div>
            )}
            
            {/* Progress Bar */}
            <div className="w-16 md:w-24 bg-gray-700 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 h-2 rounded-full transition-all duration-500 shadow-sm"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            
            {/* Expand/Collapse Icon */}
            {isExpanded ? (
              <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
            )}
          </div>
        </div>
      </button>

      {/* Patterns List */}
      {isExpanded && (
        <div className="border-t border-gray-700/50 bg-gray-900/30 relative">
          {!hasAccess && (
            <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm z-10 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="p-3 bg-amber-500/20 rounded-xl w-fit mx-auto mb-3">
                  <Lock className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-amber-300 mb-2">Premium Content</h3>
                <p className="text-amber-200 text-sm mb-4">
                  Upgrade to access all problems and patterns
                </p>
                <button 
                onClick={handleUpgradeClick}
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-lg font-medium transition-all duration-200">
                  Upgrade for ₹299
                </button>
              </div>
            </div>
          )}
          <div className={`p-4 md:p-6 space-y-4 ${!hasAccess ? 'opacity-30' : ''}`}>
            {category.patterns.map((pattern) => (
              <PatternItem 
                key={pattern.id} 
                pattern={pattern}
                isSelected={selectedPattern === pattern.id}
                onToggle={hasAccess ? onPatternToggle : () => {}}
                onProblemToggle={hasAccess ? onProblemToggle : () => {}}
                onAddNote={hasAccess ? onAddNote : () => {}}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

CategoryCard.displayName = 'CategoryCard';