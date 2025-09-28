import React, { useState } from 'react';
import { BookOpen, CheckCircle, Circle, ExternalLink, StickyNote, CreditCard as Edit3, Trash2, Filter, Search, ArrowLeft, Crown } from 'lucide-react';
import { useAppStore } from '../store';
import { PaymentModal } from './PaymentModal';

interface RevisionPageProps {
}

export const RevisionPage: React.FC<RevisionPageProps> = () => {
  const { categories, notes, openNoteEditor, deleteNote, getNotesForProblem, currentUser, setCurrentView, toggleProblemComplete } = useAppStore();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  
  // If not paid, show payment gate
  if (!currentUser?.isPremium) {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Back Navigation */}
            <div className="mb-6">
              <button
                onClick={() => setCurrentView('dashboard')}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:transform group-hover:-translate-x-1 transition-transform duration-200" />
                <span>Back to Dashboard</span>
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
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCompleted, setFilterCompleted] = useState<'all' | 'completed' | 'incomplete'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [groupBy, setGroupBy] = useState<'category' | 'flat'>('category');

  // Get all problems with their category and pattern info
  const getAllProblems = () => {
    const allProblems: Array<{
      problem: any;
      category: string;
      pattern: string;
      categoryId: string;
      patternId: string;
    }> = [];

    categories.forEach(category => {
      category.patterns.forEach(pattern => {
        pattern.problems.forEach(problem => {
          allProblems.push({
            problem,
            category: category.name,
            pattern: pattern.name,
            categoryId: category.id,
            patternId: pattern.id
          });
        });
      });
    });

    return allProblems;
  };

  // Filter problems based on search and filters
  const filteredProblems = getAllProblems().filter(({ problem, category, pattern }) => {
    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      if (!problem.title.toLowerCase().includes(query) &&
          !category.toLowerCase().includes(query) &&
          !pattern.toLowerCase().includes(query)) {
        return false;
      }
    }

    // Completion filter
    if (filterCompleted === 'completed' && !problem.userStatus.completed) return false;
    if (filterCompleted === 'incomplete' && problem.userStatus.completed) return false;

    // Category filter
    if (selectedCategory !== 'all' && selectedCategory !== problem.category) return false;

    return true;
  });

  // Get completed problems count
  const completedCount = getAllProblems().filter(({ problem }) => problem.userStatus.completed).length;
  const totalCount = getAllProblems().length;

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <button
            onClick={() => setCurrentView('dashboard')}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:transform group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Dashboard</span>
          </button>
        </div>

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
              <p className="text-gray-400">Review your progress and notes across all patterns</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Total Progress</p>
                  <p className="text-2xl font-bold text-white">{completedCount} / {totalCount}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-emerald-400 font-semibold">
                    {Math.round((completedCount / totalCount) * 100)}%
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Total Notes</p>
                  <p className="text-2xl font-bold text-white">{notes.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Categories</p>
                  <p className="text-2xl font-bold text-white">{categories.length}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search problems, categories, patterns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
              />
            </div>
            <select
              value={filterCompleted}
              onChange={(e) => setFilterCompleted(e.target.value as any)}
              className="px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
            >
              <option value="all">All Problems</option>
              <option value="completed">Completed</option>
              <option value="incomplete">Incomplete</option>
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category.id} value={category.name}>{category.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Problems List */}
        {groupBy === 'category' ? (
          <div className="space-y-8">
            {categories.map(category => {
              const categoryProblems = filteredProblems.filter(({ problem }) => 
                problem.category === category.name
              );
              
              if (categoryProblems.length === 0) return null;
              
              return (
                <div key={category.id} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl">
                      <div className="w-6 h-6 bg-blue-400 rounded"></div>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">{category.name}</h2>
                      <p className="text-sm text-gray-400">{categoryProblems.length} problems</p>
                    </div>
                  </div>
                  
                  {/* Group by patterns within category */}
                  {category.patterns.map(pattern => {
                    const patternProblems = categoryProblems.filter(({ problem }) => 
                      problem.pattern === pattern.name
                    );
                    
                    if (patternProblems.length === 0) return null;
                    
                    return (
                      <div key={pattern.id} className="mb-6 last:mb-0">
                        <h3 className="text-lg font-semibold text-blue-300 mb-4 flex items-center space-x-2">
                          <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
                          <span>{pattern.name}</span>
                          <span className="text-sm text-gray-400">({patternProblems.length})</span>
                        </h3>
                        
                        <div className="space-y-3">
                          {patternProblems.map(({ problem }) => {
                            const problemNotes = getNotesForProblem(problem.id);
                            
                            return (
                              <div key={problem.id} className="bg-gray-700/30 rounded-xl p-4 border border-gray-600/30">
                                <div className="flex items-start justify-between">
                                  <div className="flex items-start space-x-3 flex-1">
                                    <div className="flex-shrink-0 mt-1">
                                      {problem.userStatus.completed ? (
                                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                                      ) : problem.userStatus.attempted ? (
                                        <Circle className="w-5 h-5 text-amber-400 fill-current" />
                                      ) : (
                                        <Circle className="w-5 h-5 text-gray-500" />
                                      )}
                                    </div>
                                    
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-white mb-2">{problem.title}</h4>
                                      <div className="flex items-center space-x-3 mb-3">
                                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                                          problem.difficulty === 'Easy' 
                                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                            : problem.difficulty === 'Medium'
                                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                            : 'bg-red-500/20 text-red-400 border border-red-500/30'
                                        }`}>
                                          {problem.difficulty}
                                        </span>
                                        {problemNotes.length > 0 && (
                                          <div className="flex items-center space-x-1 text-purple-400">
                                            <StickyNote className="w-3 h-3" />
                                            <span className="text-xs">{problemNotes.length} note{problemNotes.length > 1 ? 's' : ''}</span>
                                          </div>
                                        )}
                                      </div>
                                      
                                      {/* Notes */}
                                      {problemNotes.length > 0 && (
                                        <div className="space-y-2">
                                          {problemNotes.map((note) => (
                                            <div key={note.id} className="bg-gray-800/50 rounded-lg p-3 border border-gray-600/30">
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
                                              {note.content && (
                                                <p className="text-xs text-gray-300 mb-2 line-clamp-2 leading-relaxed">{note.content}</p>
                                              )}
                                              {note.drawingData && (
                                                <div className="mb-2">
                                                  <div className="text-xs text-purple-400 mb-2">🎨 Drawing:</div>
                                                  <div className="bg-white rounded-lg p-2 max-w-full overflow-hidden">
                                                    <canvas
                                                      ref={(canvas) => {
                                                        if (canvas && note.drawingData) {
                                                          try {
                                                            const paths = JSON.parse(note.drawingData);
                                                            const ctx = canvas.getContext('2d');
                                                            if (ctx && paths.length > 0) {
                                                              // Set canvas size
                                                              canvas.width = 300;
                                                              canvas.height = 200;
                                                              
                                                              // Clear canvas
                                                              ctx.clearRect(0, 0, canvas.width, canvas.height);
                                                              
                                                              // Set line properties
                                                              ctx.lineCap = 'round';
                                                              ctx.lineJoin = 'round';
                                                              
                                                              // Draw all paths
                                                              paths.forEach((path: any) => {
                                                                if (path.points && path.points.length > 0) {
                                                                  ctx.beginPath();
                                                                  ctx.strokeStyle = path.color || '#3B82F6';
                                                                  ctx.lineWidth = path.size || 3;
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
                                                      className="max-w-full h-auto border border-gray-300 rounded"
                                                      style={{ maxWidth: '100%', height: 'auto' }}
                                                    />
                                                  </div>
                                                </div>
                                              )}
                                              {note.tags.length > 0 && (
                                                <div className="flex flex-wrap gap-1">
                                                  {note.tags.map((tag) => (
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
                                    href={problem.leetcodeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-1 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-xs rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl flex-shrink-0"
                                  >
                                    <span>Solve</span>
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProblems.map(({ problem, category, pattern }) => {
              const problemNotes = getNotesForProblem(problem.id);
              
              return (
                <div
                  key={problem.id}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4 flex-1">
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
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">{problem.title}</h3>
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="text-sm text-gray-400">{category} → {pattern}</span>
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                            problem.difficulty === 'Easy' 
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                              : problem.difficulty === 'Medium'
                              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                              : 'bg-red-500/20 text-red-400 border border-red-500/30'
                          }`}>
                            {problem.difficulty}
                          </span>
                          {problemNotes.length > 0 && (
                            <div className="flex items-center space-x-1 text-purple-400">
                              <StickyNote className="w-3 h-3" />
                              <span className="text-xs">{problemNotes.length} note{problemNotes.length > 1 ? 's' : ''}</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Notes */}
                        {problemNotes.length > 0 && (
                          <div className="space-y-3">
                            {problemNotes.map((note) => (
                              <div key={note.id} className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                                <div className="flex items-start justify-between mb-2">
                                  <h4 className="font-medium text-white">{note.title}</h4>
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
                                {note.content && (
                                  <p className="text-sm text-gray-300 mb-2 leading-relaxed">{note.content}</p>
                                )}
                                {note.drawingData && (
                                  <div className="mb-2">
                                    <div className="text-sm text-purple-400 mb-2">🎨 Drawing:</div>
                                    <div className="bg-white rounded-lg p-2 max-w-full overflow-hidden">
                                      <canvas
                                        ref={(canvas) => {
                                          if (canvas && note.drawingData) {
                                            try {
                                              const paths = JSON.parse(note.drawingData);
                                              const ctx = canvas.getContext('2d');
                                              if (ctx && paths.length > 0) {
                                                // Set canvas size
                                                canvas.width = 400;
                                                canvas.height = 250;
                                                
                                                // Clear canvas
                                                ctx.clearRect(0, 0, canvas.width, canvas.height);
                                                
                                                // Set line properties
                                                ctx.lineCap = 'round';
                                                ctx.lineJoin = 'round';
                                                
                                                // Draw all paths
                                                paths.forEach((path: any) => {
                                                  if (path.points && path.points.length > 0) {
                                                    ctx.beginPath();
                                                    ctx.strokeStyle = path.color || '#3B82F6';
                                                    ctx.lineWidth = path.size || 3;
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
                                        className="max-w-full h-auto border border-gray-300 rounded"
                                        style={{ maxWidth: '100%', height: 'auto' }}
                                      />
                                    </div>
                                  </div>
                                )}
                                {note.tags.length > 0 && (
                                  <div className="flex flex-wrap gap-1">
                                    {note.tags.map((tag) => (
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
                      href={problem.leetcodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl flex-shrink-0"
                    >
                      <span>Solve</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {filteredProblems.length === 0 && (
          <div className="text-center py-12">
            <div className="p-4 bg-gray-800/50 rounded-2xl w-fit mx-auto mb-4">
              <Filter className="w-12 h-12 mx-auto text-gray-500" />
            </div>
            <p className="text-lg font-medium text-gray-400 mb-2">No problems found</p>
            <p className="text-sm text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};