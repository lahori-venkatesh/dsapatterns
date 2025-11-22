import React, { useState } from 'react';
import { Coffee, Code2, Terminal, Clock, ExternalLink, CheckCircle, Circle, Building2, Database, Code, ChevronDown, ChevronUp, Download, Brain, Layers } from 'lucide-react';
import { languageMasteryData } from '../data/languages';
import { LanguageMastery as LanguageMasteryType, LanguageProblem, ProblemPlatform } from '../types';
import { useAppStore } from '../store';
import { renderMarkdown } from '../utils/markdownRenderer';
import { ResumeLinkedInPage } from './ResumeLinkedInPage';
import { SystemDesignPage } from './SystemDesignPage';
import { HRInterviewPage } from './HRInterviewPage';
import { MachineCodingPage } from './MachineCodingPage';

const iconMap = {
  Coffee: Coffee,
  Code2: Code2,
  Terminal: Terminal,
  Brain: Brain,
  Database: Database,
  Code: Code,
  Layers: Layers,
  Building2: Building2
};

type WebDevCategory = 'HTML' | 'CSS' | 'JavaScript' | 'React.js' | 'Node.js' | 'MongoDB' | 'Express.js' | 'SQL' | 'System Design' | 'Computer Networks' | 'DBMS';

export const LanguageMastery: React.FC = () => {
  const { languageProblemStatus, toggleLanguageProblemComplete, selectedLanguageId, setSelectedLanguageId } = useAppStore();
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(selectedLanguageId);
  const [selectedPlatform, setSelectedPlatform] = useState<ProblemPlatform>('GeeksforGeeks');
  const [selectedCategory, setSelectedCategory] = useState<WebDevCategory>('HTML');
  const [expandedAnswers, setExpandedAnswers] = useState<Set<string>>(new Set());
  const [showResumeLinkedInPage, setShowResumeLinkedInPage] = useState(false);
  const [showSystemDesignPage, setShowSystemDesignPage] = useState(false);
  const [showHRInterviewPage, setShowHRInterviewPage] = useState(false);
  const [showMachineCodingPage, setShowMachineCodingPage] = useState(false);

  React.useEffect(() => {
    if (selectedLanguageId) {
      setSelectedLanguage(selectedLanguageId);
    }
  }, [selectedLanguageId]);

  const toggleAnswer = (problemId: string) => {
    setExpandedAnswers(prev => {
      const next = new Set(prev);
      if (next.has(problemId)) {
        next.delete(problemId);
      } else {
        next.add(problemId);
      }
      return next;
    });
  };

  const selectedLang = languageMasteryData.find(lang => lang.id === selectedLanguage);

  const getProblemsByDifficulty = (problems: LanguageProblem[]) => {
    const easy = problems.filter(p => p.difficulty === 'Easy');
    const medium = problems.filter(p => p.difficulty === 'Medium');
    const hard = problems.filter(p => p.difficulty === 'Hard');
    return { easy, medium, hard };
  };

  if (showResumeLinkedInPage) {
    return <ResumeLinkedInPage onBack={() => setShowResumeLinkedInPage(false)} />;
  }

  if (showSystemDesignPage) {
    return <SystemDesignPage onBack={() => setShowSystemDesignPage(false)} />;
  }

  if (showHRInterviewPage) {
    return <HRInterviewPage onBack={() => setShowHRInterviewPage(false)} />;
  }

  if (showMachineCodingPage) {
    return <MachineCodingPage onBack={() => setShowMachineCodingPage(false)} />;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Interview Mastery</h2>
        <p className="text-gray-400">Complete interview preparation: SQL, Web Development, System Design, Aptitude & more</p>
      </div>

      {!selectedLanguage ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {languageMasteryData.map((lang) => {
            const Icon = iconMap[lang.icon as keyof typeof iconMap];
            const { easy, medium, hard } = getProblemsByDifficulty(lang.problems);

            return (
              <button
                key={lang.id}
                onClick={() => {
                  if (lang.id === 'resume-linkedin-mastery') {
                    setShowResumeLinkedInPage(true);
                  } else if (lang.id === 'system-design') {
                    setShowSystemDesignPage(true);
                  } else if (lang.id === 'hr-interview-mastery') {
                    setShowHRInterviewPage(true);
                  } else if (lang.id === 'machine-coding-mastery') {
                    setShowMachineCodingPage(true);
                  } else {
                    setSelectedLanguage(lang.id);
                  }
                }}
                className="group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm p-8 text-left transition-all duration-300 hover:border-gray-600/50 hover:bg-gray-700/50 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${lang.color} opacity-10 group-hover:opacity-20 transition-opacity`} />

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${lang.color} p-3 mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{lang.name}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{lang.description}</p>

                  {lang.id !== 'hr-interview-mastery' && lang.id !== 'resume-linkedin-mastery' && lang.id !== 'system-design' && lang.id !== 'machine-coding-mastery' && (
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-3 py-1.5 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm font-medium">
                        {easy.length} Easy
                      </div>
                      <div className="px-3 py-1.5 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full text-sm font-medium">
                        {medium.length} Medium
                      </div>
                      <div className="px-3 py-1.5 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full text-sm font-medium">
                        {hard.length} Hard
                      </div>
                    </div>
                  )}

                  <div className="text-gray-300 font-semibold text-lg">
                    {lang.id === 'system-design'
                      ? `${lang.totalProblems} Topics`
                      : lang.id === 'resume-linkedin-mastery'
                      ? 'Complete Guide + Templates'
                      : lang.id === 'hr-interview-mastery'
                      ? 'Master HR Questions'
                      : lang.id === 'machine-coding-mastery'
                      ? 'Guide + Practice Problems'
                      : `${lang.totalProblems} ${lang.id === 'development-mastery' ? 'Questions' : 'Problems'}`
                    }
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              setSelectedLanguage(null);
              setSelectedLanguageId(null);
            }}
            className="mb-6 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-lg transition-colors flex items-center gap-2"
          >
            ← Back to Interview Mastery
          </button>

          {selectedLang && (
            <div>
              <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  {(() => {
                    const Icon = iconMap[selectedLang.icon as keyof typeof iconMap];
                    return (
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${selectedLang.color} p-3`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                    );
                  })()}
                  <div>
                    <h2 className="text-3xl font-bold text-white">{selectedLang.name}</h2>
                    <p className="text-gray-400">{selectedLang.description}</p>
                  </div>
                </div>

                {(() => {
                  // Check if this language has categories
                  const hasCategories = selectedLang.id === 'development-mastery'
                    || selectedLang.id === 'aptitude-mastery'
                    || selectedLang.id === 'machine-coding-mastery';

                  if (hasCategories) {
                    // Get unique categories
                    const categories = Array.from(
                      new Set(selectedLang.problems.map(p => p.category).filter(Boolean))
                    ) as string[];

                    return (
                      <div className="mt-6">
                        <div className="flex flex-wrap gap-2">
                          {categories.map((category) => (
                            <button
                              key={category}
                              onClick={() => setSelectedCategory(category as any)}
                              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                selectedCategory === category
                                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                              }`}
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  // For non-Web Dev languages, show platform filter
                  const availablePlatforms = Array.from(
                    new Set(
                      selectedLang.problems.flatMap(p => p.platformLinks?.map(link => link.platform) || [])
                    )
                  ) as ProblemPlatform[];

                  if (availablePlatforms.length > 0) {
                    if (!availablePlatforms.includes(selectedPlatform)) {
                      setSelectedPlatform(availablePlatforms[0]);
                    }

                    return (
                      <div className="flex items-center gap-4 mt-6">
                        <span className="text-gray-300 font-medium">Platform:</span>
                        <div className="flex gap-2">
                          {availablePlatforms.map((platform) => (
                            <button
                              key={platform}
                              onClick={() => setSelectedPlatform(platform)}
                              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                selectedPlatform === platform
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                              }`}
                            >
                              {platform}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return null;
                })()}
              </div>

              {(['Easy', 'Medium', 'Hard'] as const).map((difficulty) => {
                const hasCategories = selectedLang.id === 'development-mastery'
                  || selectedLang.id === 'aptitude-mastery'
                  || selectedLang.id === 'machine-coding-mastery';
                let problems = selectedLang.problems.filter(p => p.difficulty === difficulty);

                // Filter by category for languages that support categories
                if (hasCategories && selectedCategory) {
                  problems = problems.filter(p => p.category === selectedCategory);
                }

                if (problems.length === 0) return null;

                const colorMap = {
                  Easy: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
                  Medium: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' },
                  Hard: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400' }
                };

                const colors = colorMap[difficulty];

                return (
                  <div key={difficulty} className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className={`text-2xl font-bold ${colors.text}`}>{difficulty}</h3>
                      <span className="text-gray-400 text-lg">({problems.length} {selectedLang.id === 'development-mastery' ? 'questions' : 'problems'})</span>
                    </div>

                    <div className="space-y-3">
                      {problems.map((problem) => {
                        const platformLink = problem.platformLinks?.find(link => link.platform === selectedPlatform);
                        const status = languageProblemStatus[problem.id] || { completed: false, attempted: false };

                        return (
                          <div
                            key={problem.id}
                            className={`group ${colors.bg} border ${colors.border} rounded-xl p-5 hover:bg-opacity-20 transition-all`}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-start gap-3 mb-3">
                                  <button
                                    onClick={() => toggleLanguageProblemComplete(problem.id)}
                                    className="mt-1 flex-shrink-0 p-1 hover:bg-gray-600/30 rounded-full transition-all"
                                  >
                                    {status.completed ? (
                                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                                    ) : status.attempted ? (
                                      <Circle className="w-5 h-5 text-amber-400 fill-current" />
                                    ) : (
                                      <Circle className="w-5 h-5 text-gray-500" />
                                    )}
                                  </button>

                                  <div className="flex-1">
                                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                                      {problem.title}
                                    </h4>
                                    {(problem.id === 'mc-complete-guide' || problem.id === 'hr-complete-guide') ? (
                                      <div className="max-w-none mb-6 mt-4">
                                        {renderMarkdown(problem.description)}
                                      </div>
                                    ) : (
                                      <p className="text-sm text-gray-400 mb-3">{problem.description}</p>
                                    )}

                                    <div className="flex flex-wrap items-center gap-2 mb-3">
                                      {problem.topics.map((topic) => (
                                        <span
                                          key={topic}
                                          className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600/30"
                                        >
                                          {topic}
                                        </span>
                                      ))}
                                    </div>

                                    {problem.companies && problem.companies.length > 0 && (
                                      <div className="flex items-center gap-2 flex-wrap">
                                        <Building2 className="w-3.5 h-3.5 text-gray-400" />
                                        {problem.companies.slice(0, 4).map((company) => (
                                          <span
                                            key={company}
                                            className="text-xs px-2 py-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 rounded border border-indigo-500/30"
                                          >
                                            {company}
                                          </span>
                                        ))}
                                        {problem.companies.length > 4 && (
                                          <span className="text-xs text-gray-400">
                                            +{problem.companies.length - 4} more
                                          </span>
                                        )}
                                      </div>
                                    )}

                                    {problem.answer && (
                                      <div className="mt-4">
                                        <button
                                          onClick={() => toggleAnswer(problem.id)}
                                          className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                          {expandedAnswers.has(problem.id) ? (
                                            <>
                                              <ChevronUp className="w-4 h-4" />
                                              <span>Hide Answer</span>
                                            </>
                                          ) : (
                                            <>
                                              <ChevronDown className="w-4 h-4" />
                                              <span>Show Answer</span>
                                            </>
                                          )}
                                        </button>

                                        {expandedAnswers.has(problem.id) && (
                                          <div className="mt-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                                            <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">
                                              {problem.answer}
                                            </p>
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-col items-end gap-3">
                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                  <Clock className="w-4 h-4" />
                                  <span>{problem.estimatedTime}m</span>
                                </div>

                                {problem.platformLinks && problem.platformLinks.length > 0 && (
                                  platformLink ? (
                                    <a
                                      href={platformLink.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg text-sm font-medium transition-all shadow-lg hover:shadow-xl"
                                    >
                                      {problem.platformLinks?.[0]?.platform === 'GitHub' ? (
                                        <>
                                          <ExternalLink className="w-4 h-4" />
                                          GitHub Repos
                                        </>
                                      ) : (
                                        <>
                                          Solve
                                          <ExternalLink className="w-4 h-4" />
                                        </>
                                      )}
                                    </a>
                                  ) : (
                                    selectedPlatform && (
                                      <div className="text-xs text-gray-500">
                                        Not available on {selectedPlatform}
                                      </div>
                                    )
                                  )
                                )}

                                {problem.notesUrl && (
                                  <a
                                    href={problem.notesUrl}
                                    download
                                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-lg text-sm font-medium transition-all shadow-lg hover:shadow-xl"
                                  >
                                    <Download className="w-4 h-4" />
                                    Notes
                                  </a>
                                )}

                                {problem.platformLinks && problem.platformLinks.length > 1 && (
                                  <div className="text-xs text-gray-400">
                                    +{problem.platformLinks.length - 1} more platform{problem.platformLinks.length > 2 ? 's' : ''}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};