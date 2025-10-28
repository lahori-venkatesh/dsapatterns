import React, { useState, useMemo } from 'react';
import { X, Search, ExternalLink, FileText, Sparkles } from 'lucide-react';
import { useAppStore } from '../store';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, toggleSearch, searchQuery, setSearchQuery, categories, notes, isPaid, currentUser } = useAppStore();
  const [activeTab, setActiveTab] = useState<'problems' | 'notes'>('problems');

  // Search through problems
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const results: Array<{
      type: 'problem' | 'note';
      item: any;
      category?: string;
      pattern?: string;
    }> = [];

    // Search problems
    categories.forEach(category => {
      category.patterns.forEach(pattern => {
        pattern.problems.forEach(problem => {
          if (
            problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            problem.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
            pattern.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            category.name.toLowerCase().includes(searchQuery.toLowerCase())
          ) {
            results.push({
              type: 'problem',
              item: problem,
              category: category.name,
              pattern: pattern.name
            });
          }
        });
      });
    });

    // Search notes
    notes.forEach(note => {
      if (
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      ) {
        results.push({
          type: 'note',
          item: note
        });
      }
    });

    return results;
  }, [searchQuery, categories, notes]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
      <div className="bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 w-full max-w-2xl max-h-[70vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center space-x-3 p-6 border-b border-gray-700/50">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Search className="w-4 h-4 text-blue-400" />
          </div>
          <input
            type="text"
            placeholder="Search problems, notes, patterns... ✨"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400 text-lg"
            autoFocus
          />
          <button
            onClick={toggleSearch}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-4 h-4 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Payment Gate */}

        {/* Tabs */}
        <div className="flex border-b border-gray-700/50 bg-gray-900/50">
          <button
            onClick={() => setActiveTab('problems')}
            className={`px-6 py-4 text-sm font-medium transition-all duration-200 relative ${
              activeTab === 'problems'
                ? 'text-blue-400 bg-blue-500/10'
                : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
            }`}
          >
            {activeTab === 'problems' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            )}
            Problems ({searchResults.filter(r => r.type === 'problem').length})
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`px-6 py-4 text-sm font-medium transition-all duration-200 relative ${
              activeTab === 'notes'
                ? 'text-blue-400 bg-blue-500/10'
                : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
            }`}
          >
            {activeTab === 'notes' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            )}
            Notes ({searchResults.filter(r => r.type === 'note').length})
          </button>
        </div>

        {/* Results */}
        <div className="overflow-y-auto max-h-96 bg-gray-900/30">
          {searchQuery.trim() === '' ? (
            <div className="p-12 text-center text-gray-400">
              <div className="p-4 bg-gray-800/50 rounded-2xl w-fit mx-auto mb-4">
                <Sparkles className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <p className="text-lg font-medium mb-2">Start your search journey</p>
              <p className="text-sm">Type to discover problems, patterns, and notes</p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="p-12 text-center text-gray-400">
              <div className="p-4 bg-gray-800/50 rounded-2xl w-fit mx-auto mb-4">
                <Search className="w-12 h-12 mx-auto text-gray-500" />
              </div>
              <p className="text-lg font-medium mb-2">No results found</p>
              <p className="text-sm">Try different keywords for "{searchQuery}"</p>
            </div>
          ) : (
            <div className="p-4">
              {searchResults
                .filter(result => result.type === activeTab)
                .map((result, index) => (
                  <div key={index} className="p-4 hover:bg-gray-800/50 rounded-xl transition-all duration-200 border border-transparent hover:border-gray-700/50 group">
                    {result.type === 'problem' ? (
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-200">
                            {result.item.title}
                          </h3>
                          <p className="text-sm text-gray-400 mt-1">
                            {result.category} • {result.pattern}
                          </p>
                          <div className="flex items-center space-x-2 mt-3">
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                              result.item.difficulty === 'Easy' 
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                : result.item.difficulty === 'Medium'
                                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                : 'bg-red-500/20 text-red-400 border border-red-500/30'
                            }`}>
                              {result.item.difficulty}
                            </span>
                          </div>
                        </div>
                        <a
                          href={result.item.leetcodeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center space-x-2 px-4 py-2 text-sm rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl ${
                            currentUser?.isPremium || isPaid
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                              : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                          }`}
                          onClick={!(currentUser?.isPremium || isPaid) ? (e) => e.preventDefault() : undefined}
                        >
                          <span>{(currentUser?.isPremium || isPaid) ? 'Solve' : 'Premium'}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    ) : (
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-purple-500/20 rounded-lg mt-0.5">
                          <FileText className="w-4 h-4 text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors duration-200">
                            {result.item.title}
                          </h3>
                          <p className="text-sm text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                            {result.item.content.substring(0, 150)}...
                          </p>
                          {result.item.tags.length > 0 && (
                            <div className="flex items-center space-x-2 mt-3">
                              {result.item.tags.slice(0, 3).map((tag: string) => (
                                <span key={tag} className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 border border-gray-600/50 rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};