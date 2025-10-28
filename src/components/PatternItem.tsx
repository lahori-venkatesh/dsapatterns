import React, { memo, useMemo, useCallback } from 'react';
import { Code, Clock, CheckCircle, Circle, ExternalLink, Zap, StickyNote, Plus } from 'lucide-react';
import { Pattern } from '../types';
import { useAppStore } from '../store';

interface PatternItemProps {
  pattern: Pattern;
  isSelected: boolean;
  onToggle: (patternId: string | null) => void;
  onProblemToggle: (problemId: string) => void;
  onAddNote: (problemId: string) => void;
}

export const PatternItem: React.FC<PatternItemProps> = memo(({ 
  pattern, 
  isSelected, 
  onToggle, 
  onProblemToggle, 
  onAddNote 
}) => {
  const { currentUser, categories, isPaid } = useAppStore();
  
  // Find the category this pattern belongs to
  const parentCategory = categories.find(cat => 
    cat.patterns.some(p => p.id === pattern.id)
  );
  
  // Arrays & Strings is free to use as a model, others require payment
  const isFreeCategory = parentCategory?.name === 'Arrays & Strings';
  const hasAccess = (currentUser?.isPremium || isPaid) || isFreeCategory;
  
  // Memoized completion percentage
  const completionPercentage = useMemo(() => {
    return pattern.totalProblems > 0 
      ? Math.round((pattern.completedProblems / pattern.totalProblems) * 100)
      : 0;
  }, [pattern.totalProblems, pattern.completedProblems]);
  
  // Memoized difficulty distribution
  const difficulties = useMemo(() => {
    return pattern.problems.reduce((acc, problem) => {
      acc[problem.difficulty] = (acc[problem.difficulty] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, [pattern.problems]);

  // Optimized event handlers
  const handleToggle = useCallback(() => {
    onToggle(isSelected ? null : pattern.id);
  }, [isSelected, pattern.id, onToggle]);

  const handleProblemCheck = useCallback((problemId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onProblemToggle(problemId);
  }, [onProblemToggle]);

  const handleAddNote = useCallback((problemId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    // Store the problem ID globally so NoteEditor can access it
    (window as any).currentProblemId = problemId;
    onAddNote(problemId);
  }, [onAddNote]);

  return (
    <button
      onClick={handleToggle}
      className={`w-full p-5 rounded-xl border transition-all duration-300 text-left group ${
        isSelected 
          ? 'border-blue-500/50 bg-blue-500/10 backdrop-blur-sm' 
          : 'border-gray-600/50 hover:border-gray-500/50 bg-gray-800/30 hover:bg-gray-700/40 backdrop-blur-sm'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-1.5 bg-blue-500/20 rounded-lg">
              <Code className="w-4 h-4 text-blue-400" />
            </div>
            <h4 className="font-bold text-white group-hover:text-blue-300 transition-colors duration-200">
              {pattern.name}
            </h4>
            {completionPercentage === 100 && (
              <div className="flex items-center space-x-1 bg-emerald-500/20 px-2 py-1 rounded-full">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span className="text-xs text-emerald-400 font-medium">Complete</span>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-300 mb-4 leading-relaxed">
            {pattern.description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 text-sm text-gray-400">
            <Zap className="w-3 h-3" />
            <span>{pattern.totalProblems} problems</span>
          </div>
          <div className="flex items-center space-x-2">
            {difficulties.Easy && (
              <span className="px-2 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-medium">
                {difficulties.Easy}E
              </span>
            )}
            {difficulties.Medium && (
              <span className="px-2 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full text-xs font-medium">
                {difficulties.Medium}M
              </span>
            )}
            {difficulties.Hard && (
              <span className="px-2 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full text-xs font-medium">
                {difficulties.Hard}H
              </span>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-20 bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <span className="text-xs text-gray-400 min-w-[3rem] font-medium">
            {completionPercentage}%
          </span>
        </div>
      </div>

      {/* Problems List (when selected) */}
      {isSelected && pattern.problems.length > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-600/50 space-y-3">
          {pattern.problems.map((problem) => (
            <div
              key={problem.id}
              className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-200 border border-gray-700/50 hover:border-gray-600/50 group"
            >
              <div className="flex items-center space-x-3">
                <button
                  onClick={(e) => handleProblemCheck(problem.id, e)}
                  className="flex-shrink-0 p-1 hover:bg-gray-600/30 rounded-full transition-all duration-200"
                >
                  {problem.userStatus.completed ? (
                    <CheckCircle className="w-5 h-5 text-emerald-400 hover:text-emerald-300" />
                  ) : problem.userStatus.attempted ? (
                    <Circle className="w-5 h-5 text-amber-400 hover:text-amber-300 fill-current" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-500 hover:text-gray-400" />
                  )}
                </button>
                
                <div>
                  <h5 className="font-semibold text-white text-sm group-hover:text-blue-300 transition-colors duration-200">
                    {problem.title}
                  </h5>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      problem.difficulty === 'Easy'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : problem.difficulty === 'Medium'
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      {problem.difficulty}
                    </span>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs">{problem.estimatedTime}m</span>
                    </div>
                  </div>
                  {problem.companies && problem.companies.length > 0 && (
                    <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                      {problem.companies.slice(0, 5).map((company) => (
                        <span
                          key={company}
                          className="text-xs px-2 py-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 rounded border border-indigo-500/30 font-medium"
                          title={`Asked by ${company}`}
                        >
                          {company}
                        </span>
                      ))}
                      {problem.companies.length > 5 && (
                        <span
                          className="text-xs px-2 py-0.5 bg-gray-700/50 text-gray-400 rounded border border-gray-600/30"
                          title={problem.companies.slice(5).join(', ')}
                        >
                          +{problem.companies.length - 5}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={(e) => handleAddNote(problem.id, e)}
                  className={`p-2 rounded-lg transition-all duration-200 border ${
                    hasAccess
                      ? 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 hover:text-purple-300 border-purple-500/30 hover:border-purple-400/50'
                      : 'bg-gray-600/20 text-gray-500 border-gray-600/30 cursor-not-allowed'
                  }`}
                  title="Add Note"
                  disabled={!hasAccess}
                >
                  <Plus className="w-4 h-4" />
                </button>
                <a
                  href={problem.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-1 px-3 py-2 text-xs rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl ${
                    hasAccess
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                      : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!hasAccess) e.preventDefault();
                  }}
                >
                  <span>{hasAccess ? 'Solve' : 'Premium'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </button>
  );
});

PatternItem.displayName = 'PatternItem';