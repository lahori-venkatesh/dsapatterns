import React, { useState } from 'react';
import { ArrowLeft, FileText, Linkedin, Download, Eye } from 'lucide-react';
import { renderMarkdown } from '../utils/markdownRenderer';
import { resumeLinkedInContent } from '../data/resumeLinkedInContent';

interface ResumeLinkedInPageProps {
  onBack: () => void;
}

interface ResumeTemplate {
  id: string;
  name: string;
  description: string;
  preview: string;
  downloadUrl: string;
  bestFor: string[];
}

const resumeTemplates: ResumeTemplate[] = [
  {
    id: 'modern-tech',
    name: 'Modern Tech Resume',
    description: 'Clean, ATS-friendly template perfect for software engineers and developers. Single column layout with clear sections.',
    preview: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop',
    downloadUrl: '/templates/modern-tech-resume.pdf',
    bestFor: ['Software Engineers', 'Full Stack Developers', 'Data Scientists', 'DevOps Engineers']
  },
  {
    id: 'professional-classic',
    name: 'Professional Classic',
    description: 'Traditional two-column resume with elegant design. Ideal for showcasing multiple projects and technical skills.',
    preview: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=400&h=500&fit=crop',
    downloadUrl: '/templates/professional-classic-resume.pdf',
    bestFor: ['Product Managers', 'Business Analysts', 'Consultants', 'Freshers']
  }
];

export const ResumeLinkedInPage: React.FC<ResumeLinkedInPageProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'guide' | 'templates'>('guide');
  const [contentTab, setContentTab] = useState<'resume' | 'linkedin'>('resume');
  const [previewTemplate, setPreviewTemplate] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="mb-8 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Interview Mastery</span>
        </button>

        <div className="space-y-6">
          {/* Main Title */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 flex items-center justify-center space-x-3">
              <span className="text-4xl">📄</span>
              <span>Resume & LinkedIn Mastery</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Build standout resumes and optimize your LinkedIn profile to land your dream job
            </p>
          </div>

          {/* Main Tabs */}
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => setActiveTab('guide')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'guide'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              <FileText className="w-5 h-5 inline mr-2" />
              Complete Guide
            </button>
            <button
              onClick={() => setActiveTab('templates')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'templates'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Download className="w-5 h-5 inline mr-2" />
              Resume Templates (2)
            </button>
          </div>

          {/* Guide Tab */}
          {activeTab === 'guide' && (
            <>
              {/* Introduction */}
              <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-indigo-500/30">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                  <span className="text-3xl">🎯</span>
                  <span>Why Resume & LinkedIn Matter</span>
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    Your <strong className="text-white">resume</strong> is your first impression, and your <strong className="text-white">LinkedIn profile</strong> is your ongoing professional brand. Together, they open doors to opportunities.
                  </p>
                  <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-4">
                    <p className="text-indigo-200 font-medium">
                      <span className="text-xl mr-2">💡</span>
                      <strong>Key Stats:</strong> 87% of recruiters use LinkedIn to find candidates. An ATS-optimized resume increases your chances by 75%.
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Sub-tabs */}
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => setContentTab('resume')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    contentTab === 'resume'
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  Resume Building
                </button>
                <button
                  onClick={() => setContentTab('linkedin')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    contentTab === 'linkedin'
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  LinkedIn Optimization
                </button>
              </div>

              {/* Content */}
              <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="prose prose-invert max-w-none">
                  {renderMarkdown(contentTab === 'resume' ? resumeLinkedInContent.resume : resumeLinkedInContent.linkedin)}
                </div>
              </div>
            </>
          )}

          {/* Templates Tab */}
          {activeTab === 'templates' && (
            <>
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-blue-500/30">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                  <span className="text-3xl">📋</span>
                  <span>Professional Resume Templates</span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Download our ATS-friendly resume templates designed specifically for tech roles. Each template is professionally crafted and ready to use.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {resumeTemplates.map((template) => (
                  <div
                    key={template.id}
                    className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-gray-600/50 transition-all duration-300"
                  >
                    {/* Preview Image */}
                    <div className="relative h-64 bg-gray-700/50 overflow-hidden group">
                      <img
                        src={template.preview}
                        alt={template.name}
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <button
                          onClick={() => setPreviewTemplate(template.id)}
                          className="px-3 py-2 bg-blue-500/90 hover:bg-blue-600 text-white rounded-lg font-medium transition-all text-sm flex items-center gap-2"
                        >
                          <Eye className="w-4 h-4" />
                          Preview
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{template.name}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{template.description}</p>

                      {/* Best For Tags */}
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Best For:</p>
                        <div className="flex flex-wrap gap-2">
                          {template.bestFor.map((role) => (
                            <span
                              key={role}
                              className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-sm"
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Download Button */}
                      <a
                        href={template.downloadUrl}
                        download
                        className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
                      >
                        <Download className="w-5 h-5" />
                        Download Template
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Template Preview Modal */}
              {previewTemplate && (
                <div
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                  onClick={() => setPreviewTemplate(null)}
                >
                  <div
                    className="bg-gray-800 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">
                        {resumeTemplates.find(t => t.id === previewTemplate)?.name}
                      </h3>
                      <button
                        onClick={() => setPreviewTemplate(null)}
                        className="text-gray-400 hover:text-white text-2xl"
                      >
                        ×
                      </button>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden">
                      <img
                        src={resumeTemplates.find(t => t.id === previewTemplate)?.preview}
                        alt="Template Preview"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
