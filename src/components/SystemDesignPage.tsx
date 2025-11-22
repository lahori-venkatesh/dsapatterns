import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { renderMarkdown } from '../utils/markdownRenderer';
import { systemDesignConcepts, SystemConcept } from '../data/systemDesignConcepts';

interface SystemDesignPageProps {
  onBack: () => void;
}

export const SystemDesignPage: React.FC<SystemDesignPageProps> = ({ onBack }) => {
  const [selectedConcept, setSelectedConcept] = useState<SystemConcept | null>(null);

  const concepts = systemDesignConcepts;

  const ConceptCard: React.FC<{ concept: SystemConcept }> = ({ concept }) => {
    const Icon = concept.icon;

    return (
      <div
        onClick={() => setSelectedConcept(concept)}
        className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className={`inline-block px-4 py-2 rounded-xl bg-gradient-to-r ${concept.color} text-white font-bold text-lg mb-2`}>
              #{concept.number}
            </div>
            <h4 className="text-lg font-bold text-white">{concept.title}</h4>
          </div>
          <div className={`p-3 rounded-xl bg-gradient-to-r ${concept.color}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {concept.description}
        </p>

        {/* Key Points */}
        <div className="mb-4">
          <p className="text-gray-400 font-semibold text-xs uppercase tracking-wider mb-2">Key Points:</p>
          <ul className="space-y-2">
            {concept.keyPoints.slice(0, 3).map((point, idx) => (
              <li key={idx} className="flex items-start space-x-2 text-sm">
                <span className="text-gray-500 mt-0.5">•</span>
                <span className="text-gray-300">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Real World */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
          <p className="text-blue-400 font-semibold text-xs uppercase tracking-wider mb-1">Real World:</p>
          <p className="text-blue-200 text-sm italic">{concept.realWorld}</p>
        </div>

        {/* Click to Learn More */}
        <div className="mt-4 text-center">
          <span className="text-xs text-gray-500">Click to learn more →</span>
        </div>
      </div>
    );
  };

  if (selectedConcept) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => setSelectedConcept(null)}
            className="mb-8 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to All Concepts</span>
          </button>

          <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="flex items-center space-x-4 mb-6">
              <div className={`p-4 rounded-xl bg-gradient-to-r ${selectedConcept.color}`}>
                {React.createElement(selectedConcept.icon, { className: 'w-8 h-8 text-white' })}
              </div>
              <div>
                <div className={`inline-block px-3 py-1 rounded-lg bg-gradient-to-r ${selectedConcept.color} text-white font-bold text-sm mb-2`}>
                  Concept #{selectedConcept.number}
                </div>
                <h2 className="text-3xl font-bold text-white">{selectedConcept.title}</h2>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              {renderMarkdown(selectedConcept.content)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="mb-8 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </button>

        <div className="space-y-6">
          {/* Main Title */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 flex items-center justify-center space-x-3">
              <span className="text-4xl">🏗️</span>
              <span>System Design Concepts</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Master the building blocks of scalable systems for technical interviews
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-indigo-500/30">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
              <span className="text-3xl">🎯</span>
              <span>What is System Design?</span>
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                <strong className="text-white">System Design</strong> is the process of defining architecture, components, and data flow for large-scale applications. It's essential for building scalable, reliable, and efficient systems.
              </p>
              <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-4">
                <p className="text-indigo-200 font-medium">
                  <span className="text-xl mr-2">💡</span>
                  <strong>Why it matters:</strong> Top tech companies expect engineers to design systems that can handle millions of users, terabytes of data, and high availability requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Concept Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {concepts.map((concept) => (
              <ConceptCard key={concept.id} concept={concept} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
