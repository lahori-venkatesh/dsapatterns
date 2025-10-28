import React, { useState } from 'react';
import { BookOpen, CheckCircle, Circle, ExternalLink, StickyNote, CreditCard as Edit3, Trash2, Filter, Search, ArrowLeft, Crown, ChevronDown, ChevronRight } from 'lucide-react';
import { useAppStore } from '../store';
import { PaymentModal } from './PaymentModal';

interface RevisionPageProps {
}

export const RevisionPage: React.FC<RevisionPageProps> = () => {
  const { categories, notes, openNoteEditor, deleteNote, getNotesForProblem, currentUser, setCurrentView, toggleProblemComplete, isPaid } = useAppStore();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [expandedPatterns, setExpandedPatterns] = useState<Set<string>>(new Set());
  
  // Check if user has premium access
  const hasAccess = currentUser?.isPremium || isPaid;
  
  // If not paid, show payment gate
  if (!hasAccess) {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Back Navigation */}
            <div className="mb-6">
              <button
                onClick={() => setCurrentView('dsa-mastery')}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:transform group-hover:-translate-x-1 transition-transform duration-200" />
                <span>Back to DSA Mastery</span>
              </button>
            </div>

            <div className="text-center py-16">
              <div className="p-6 bg-amber-500/20 rounded-2xl w-fit mx-auto mb-6">
                <Crown className="w-16 h-16 mx-auto text-amber-400" />
              </div>
              <h1 className="text-3xl font-bold text-amber-300 mb-4">
                {!currentUser ? 'Login Required' : 'Premium Revision Center'}
              </h1>
              <p className="text-amber-200 text-lg mb-8 max-w-2xl mx-auto">
                {!currentUser 
                  ? 'Please login to access the revision center and track your progress'
                  : 'Access your complete revision dashboard with progress tracking, notes management, and advanced filtering for just ₹299'
                }
              </p>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto mb-8">
                <h3 className="text-xl font-bold text-white mb-4">What you'll get:</h3>
                <ul className="text-left space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>Complete problem revision dashboard</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Advanced search and filtering</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Unlimited notes and organization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Progress tracking and analytics</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setShowPaymentModal(true)}
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Upgrade Now - ₹299 Only
              </button>
              <p className="text-amber-300 text-sm mt-4">
                ⚡ One-time payment • Lifetime access • 30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
        
        {/* Payment Modal */}
        <PaymentModal 
          isOpen={showPaymentModal} 
          onClose={() => setShowPaymentModal(false)} 
        />
      </>
    );
  }

  // Get all solved problems with their category and pattern info
  const getSolvedProblemsWithNotes = () => {
    const solvedProblems: Array<{
      problem: any;
      category: string;
      pattern: string;
      categoryId: string;
      patternId: string;
      notes: any[];
    }> = [];

    categories.forEach(category => {
      category.patterns.forEach(pattern => {
        pattern.problems.forEach(problem => {
          // Only include solved problems
          if (problem.userStatus.completed) {
            const problemNotes = getNotesForProblem(problem.id);
            console.log(`Problem ${problem.title} (${problem.id}) has ${problemNotes.length} notes:`, problemNotes);
            solvedProblems.push({
              problem,
              category: category.name,
              pattern: pattern.name,
              categoryId: category.id,
              patternId: pattern.id,
              notes: problemNotes
            });
          }
        });
      });
    });

    console.log('All solved problems with notes:', solvedProblems);
    return solvedProblems;
  };

  const solvedProblems = getSolvedProblemsWithNotes();

  // Group solved problems by category and pattern
  const groupedProblems = solvedProblems.reduce((acc, item) => {
    if (!acc[item.categoryId]) {
      acc[item.categoryId] = {
        categoryName: item.category,
        patterns: {}
      };
    }
    
    if (!acc[item.categoryId].patterns[item.patternId]) {
      acc[item.categoryId].patterns[item.patternId] = {
        patternName: item.pattern,
        problems: []
      };
    }
    
    acc[item.categoryId].patterns[item.patternId].problems.push(item);
    return acc;
  }, {} as any);

  const handleEditNote = (note: any) => {
    openNoteEditor(note);
  };

  const handleDeleteNote = (noteId: string) => {
    if (confirm('Are you sure you want to delete this note?')) {
      deleteNote(noteId);
    }
  };

  const handleProblemCheck = (problemId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    toggleProblemComplete(problemId);
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const togglePattern = (patternId: string) => {
    setExpandedPatterns(prev => {
      const newSet = new Set(prev);
      if (newSet.has(patternId)) {
        newSet.delete(patternId);
      } else {
        newSet.add(patternId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Revision Center
              </h1>
              <p className="text-gray-400">Review your solved problems and notes</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Solved Problems</p>
                  <p className="text-2xl font-bold text-white">{solvedProblems.length}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Total Notes</p>
                  <p className="text-2xl font-bold text-white">{notes.length}</p>
                </div>
                <StickyNote className="w-8 h-8 text-purple-400" />
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Categories</p>
                  <p className="text-2xl font-bold text-white">{Object.keys(groupedProblems).length}</p>
                </div>
                <Filter className="w-8 h-8 text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Solved Problems by Category */}
        {Object.keys(groupedProblems).length === 0 ? (
          <div className="text-center py-12">
            <div className="p-4 bg-gray-800/50 rounded-2xl w-fit mx-auto mb-4">
              <CheckCircle className="w-12 h-12 mx-auto text-gray-500" />
            </div>
            <p className="text-lg font-medium text-gray-400 mb-2">No solved problems yet</p>
            <p className="text-sm text-gray-500">Start solving problems to see them here for revision</p>
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(groupedProblems).map(([categoryId, categoryData]: [string, any]) => (
              <div key={categoryId} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(categoryId)}
                  className="w-full p-6 text-left hover:bg-gray-700/30 transition-all duration-200 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl">
                      <BookOpen className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">{categoryData.categoryName}</h2>
                      <p className="text-sm text-gray-400">
                        {Object.keys(categoryData.patterns).length} patterns • {
                          Object.values(categoryData.patterns).reduce((sum: number, pattern: any) => sum + pattern.problems.length, 0)
                        } solved problems
                      </p>
                    </div>
                  </div>
                  {expandedCategories.has(categoryId) ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {/* Category Content */}
                {expandedCategories.has(categoryId) && (
                  <div className="border-t border-gray-700/50 bg-gray-900/30">
                    <div className="p-6 space-y-4">
                      {Object.entries(categoryData.patterns).map(([patternId, patternData]: [string, any]) => (
                        <div key={patternId} className="bg-gray-700/30 rounded-xl overflow-hidden">
                          {/* Pattern Header */}
                          <button
                            onClick={() => togglePattern(patternId)}
                            className="w-full p-4 text-left hover:bg-gray-600/30 transition-all duration-200 flex items-center justify-between"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
                              <div>
                                <h3 className="text-lg font-semibold text-blue-300">{patternData.patternName}</h3>
                                <p className="text-sm text-gray-400">{patternData.problems.length} solved problems</p>
                              </div>
                            </div>
                            {expandedPatterns.has(patternId) ? (
                              <ChevronDown className="w-4 h-4 text-gray-400" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                            )}
                          </button>

                          {/* Pattern Problems */}
                          {expandedPatterns.has(patternId) && (
                            <div className="border-t border-gray-600/30 bg-gray-800/30">
                              <div className="p-4 space-y-3">
                                {patternData.problems.map((item: any) => (
                                  <div key={item.problem.id} className="bg-gray-600/30 rounded-lg p-4 border border-gray-500/30">
                                    <div className="flex items-start justify-between mb-3">
                                      <div className="flex items-start space-x-3 flex-1">
                                        <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                                        <div className="flex-1">
                                          <h4 className="font-semibold text-white mb-2">{item.problem.title}</h4>
                                          <div className="flex items-center space-x-3 mb-3">
                                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                                              item.problem.difficulty === 'Easy' 
                                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                                : item.problem.difficulty === 'Medium'
                                                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                                : 'bg-red-500/20 text-red-400 border border-red-500/30'
                                            }`}>
                                              {item.problem.difficulty}
                                            </span>
                                            {item.notes.length > 0 && (
                                              <div className="flex items-center space-x-1 text-purple-400">
                                                <StickyNote className="w-3 h-3" />
                                                <span className="text-xs">{item.notes.length} note{item.notes.length > 1 ? 's' : ''}</span>
                                              </div>
                                            )}
                                          </div>
                                          
                                          {/* Notes */}
                                          {item.notes.length > 0 && (
                                            <div className="space-y-2">
                                             <h6 className="text-sm font-medium text-purple-300 mb-2">📝 Your Notes:</h6>
                                              {item.notes.map((note: any) => (
                                                <div key={note.id} className="bg-gray-700/50 rounded-lg p-3 border border-gray-600/30">
                                                  <div className="flex items-start justify-between mb-2">
                                                    <h5 className="font-medium text-white text-sm">{note.title}</h5>
                                                    <div className="flex items-center space-x-1">
                                                      <button
                                                        onClick={() => handleEditNote(note)}
                                                        className="p-1 text-gray-400 hover:text-blue-400 transition-colors"
                                                      >
                                                        <Edit3 className="w-3 h-3" />
                                                      </button>
                                                      <button
                                                        onClick={() => handleDeleteNote(note.id)}
                                                        className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                                                      >
                                                        <Trash2 className="w-3 h-3" />
                                                      </button>
                                                    </div>
                                                  </div>
                                                  {note.content && note.content.trim() && (
                                                    <div className="mb-3">
                                                      <p className="text-xs text-gray-400 mb-1">Text Notes:</p>
                                                      <div className="bg-gray-800/50 rounded p-2 max-h-32 overflow-y-auto">
                                                        <p className="text-xs text-gray-300 leading-relaxed whitespace-pre-wrap">{note.content}</p>
                                                      </div>
                                                    </div>
                                                  )}
                                                  {note.drawingData && note.drawingData !== '[]' && (
                                                    <div className="mb-3">
                                                      <p className="text-xs text-gray-400 mb-1">Drawing Notes:</p>
                                                      <div className="bg-white rounded p-2">
                                                        <canvas 
                                                          ref={(canvas) => {
                                                            if (canvas && note.drawingData) {
                                                              try {
                                                                const paths = JSON.parse(note.drawingData);
                                                                const ctx = canvas.getContext('2d');
                                                                if (ctx && paths.length > 0) {
                                                                  ctx.clearRect(0, 0, canvas.width, canvas.height);
                                                                  paths.forEach((path: any) => {
                                                                    if (path.points && path.points.length > 0) {
                                                                      ctx.beginPath();
                                                                      ctx.strokeStyle = path.color || '#000000';
                                                                      ctx.lineWidth = path.size || 2;
                                                                      ctx.lineCap = 'round';
                                                                      ctx.lineJoin = 'round';
                                                                      ctx.moveTo(path.points[0].x, path.points[0].y);
                                                                      path.points.forEach((point: any) => {
                                                                        ctx.lineTo(point.x, point.y);
                                                                      });
                                                                      ctx.stroke();
                                                                    }
                                                                  });
                                                                }
                                                              } catch (error) {
                                                                console.error('Error rendering drawing:', error);
                                                              }
                                                            }
                                                          }}
                                                          width={300}
                                                          height={200}
                                                          className="border border-gray-300 rounded max-w-full"
                                                        />
                                                      </div>
                                                    </div>
                                                  )}
                                                  {note.tags.length > 0 && (
                                                    <div className="flex flex-wrap gap-1">
                                                      {note.tags.map((tag: string) => (
                                                        <span key={tag} className="text-xs px-2 py-1 bg-gray-600/50 text-gray-400 rounded-full">
                                                          {tag}
                                                        </span>
                                                      ))}
                                                    </div>
                                                  )}
                                                </div>
                                              ))}
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                      
                                      <a
                                        href={item.problem.leetcodeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-1 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-xs rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl flex-shrink-0"
                                      >
                                        <span>Solve Again</span>
                                        <ExternalLink className="w-3 h-3" />
                                      </a>
                                    </div>
                                    
                                    {/* Show message if no notes */}
                                    {(!item.notes || item.notes.length === 0) && (
                                      <div className="mt-3 p-2 bg-gray-700/30 rounded-lg border border-gray-600/30">
                                        <p className="text-xs text-gray-400 text-center">No notes added for this problem yet</p>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};