import React from 'react';
import { TrendingUp, Zap, Activity, AlertTriangle, AlertCircle, ArrowLeft } from 'lucide-react';

interface BigONotationPageProps {
  onBack: () => void;
}

export const BigONotationPage: React.FC<BigONotationPageProps> = ({ onBack }) => {
  const complexities = [
    {
      notation: 'O(1)',
      name: 'Constant',
      color: 'from-green-500 to-emerald-600',
      icon: Zap,
      description: 'Execution time stays the same regardless of input size',
      performance: 'Excellent',
      performanceColor: 'text-green-400',
      examples: [
        'Accessing array element by index: arr[5]',
        'Hash table lookup: map.get(key)',
        'Adding to front of linked list',
        'Push/pop from stack'
      ],
      useCases: 'Direct access operations, hash table operations',
      realWorld: 'Looking up a contact by phone number'
    },
    {
      notation: 'O(log n)',
      name: 'Logarithmic',
      color: 'from-blue-500 to-cyan-600',
      icon: TrendingUp,
      description: 'Execution time grows slowly as input doubles',
      performance: 'Great',
      performanceColor: 'text-blue-400',
      examples: [
        'Binary search in sorted array',
        'Balanced tree operations (BST, AVL)',
        'Finding element in sorted array',
        'Divide and conquer algorithms'
      ],
      useCases: 'Searching in sorted data, tree operations',
      realWorld: 'Finding a word in a dictionary by opening to the middle'
    },
    {
      notation: 'O(n)',
      name: 'Linear',
      color: 'from-yellow-500 to-amber-600',
      icon: Activity,
      description: 'Execution time grows directly with input size',
      performance: 'Good',
      performanceColor: 'text-yellow-400',
      examples: [
        'Array traversal: for loop through array',
        'Finding max/min element',
        'Linear search',
        'Counting occurrences'
      ],
      useCases: 'Processing each element once, searching unsorted data',
      realWorld: 'Reading every page in a book to find a word'
    },
    {
      notation: 'O(n log n)',
      name: 'Linearithmic',
      color: 'from-orange-500 to-amber-600',
      icon: TrendingUp,
      description: 'Execution time is linear times logarithmic',
      performance: 'Fair',
      performanceColor: 'text-orange-400',
      examples: [
        'Merge sort',
        'Quick sort (average case)',
        'Heap sort',
        'Efficient sorting algorithms'
      ],
      useCases: 'Efficient sorting, divide and conquer with merge',
      realWorld: 'Organizing a deck of cards efficiently'
    },
    {
      notation: 'O(n²)',
      name: 'Quadratic',
      color: 'from-red-500 to-rose-600',
      icon: AlertTriangle,
      description: 'Execution time grows with square of input size',
      performance: 'Poor',
      performanceColor: 'text-red-400',
      examples: [
        'Bubble sort, selection sort',
        'Nested loops: checking all pairs',
        'Insertion sort',
        'Comparing every element with every other'
      ],
      useCases: 'Simple sorting, finding duplicates (naive approach)',
      realWorld: 'Checking if everyone in a room has met everyone else'
    },
    {
      notation: 'O(2ⁿ)',
      name: 'Exponential',
      color: 'from-purple-500 to-pink-600',
      icon: AlertCircle,
      description: 'Execution time doubles with each input addition',
      performance: 'Very Poor',
      performanceColor: 'text-purple-400',
      examples: [
        'Recursive fibonacci (naive)',
        'Generating all subsets',
        'Solving tower of Hanoi',
        'Brute force password cracking'
      ],
      useCases: 'Exhaustive search, backtracking without memoization',
      realWorld: 'Trying every possible combination for a lock'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
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
              <span className="text-4xl">📊</span>
              <span>Big O Notation Cheat Sheet</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Understand time complexity and algorithm efficiency for interview success
            </p>
          </div>

      {/* What is Big O */}
      <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-indigo-500/30">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
          <span className="text-3xl">🎯</span>
          <span>What is Big O Notation?</span>
        </h3>
        <div className="space-y-4 text-gray-300">
          <p className="text-lg leading-relaxed">
            <strong className="text-white">Big O Notation</strong> measures how the runtime or memory usage of an algorithm grows as the input size increases.
            It helps you understand if your code will work efficiently with large datasets.
          </p>
          <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-4">
            <p className="text-indigo-200 font-medium">
              <span className="text-xl mr-2">💡</span>
              <strong>Think of it like:</strong> If you have 10 items, then 100 items, then 1,000 items - how much slower does your code get?
            </p>
          </div>
        </div>
      </div>

      {/* Complexity Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {complexities.map((complexity, index) => {
          const Icon = complexity.icon;
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className={`inline-block px-4 py-2 rounded-xl bg-gradient-to-r ${complexity.color} text-white font-mono font-bold text-xl mb-2`}>
                    {complexity.notation}
                  </div>
                  <h4 className="text-lg font-bold text-white">{complexity.name}</h4>
                </div>
                <div className={`p-3 rounded-xl bg-gradient-to-r ${complexity.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Performance Badge */}
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-lg bg-gray-700/50 ${complexity.performanceColor} font-semibold text-sm`}>
                  {complexity.performance} Performance
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {complexity.description}
              </p>

              {/* Examples */}
              <div className="mb-4">
                <p className="text-gray-400 font-semibold text-xs uppercase tracking-wider mb-2">Examples:</p>
                <ul className="space-y-2">
                  {complexity.examples.slice(0, 3).map((example, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm">
                      <span className="text-gray-500 mt-0.5">•</span>
                      <span className="text-gray-300">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div className="bg-gray-700/30 rounded-lg p-3 mb-3">
                <p className="text-gray-400 font-semibold text-xs uppercase tracking-wider mb-1">When to Use:</p>
                <p className="text-gray-300 text-sm">{complexity.useCases}</p>
              </div>

              {/* Real World */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                <p className="text-blue-400 font-semibold text-xs uppercase tracking-wider mb-1">Real World:</p>
                <p className="text-blue-200 text-sm italic">{complexity.realWorld}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Speed Comparison - Visual */}
      <div className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
          <span className="text-3xl">⚡</span>
          <span>Speed Comparison: How Fast Are They?</span>
        </h3>
        <p className="text-gray-400 mb-8 text-lg">
          Imagine you have 100 items to process. Here's how many operations each complexity needs:
        </p>

        <div className="space-y-6">
          {/* O(1) */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white font-mono font-bold">
                  O(1)
                </div>
                <h4 className="text-xl font-bold text-white">Constant - Lightning Fast ⚡</h4>
              </div>
              <span className="text-green-400 font-bold text-2xl">1 step</span>
            </div>
            <div className="bg-green-500/20 rounded-lg h-3 mb-2" style={{ width: '2%' }}></div>
            <p className="text-gray-300 text-sm">
              Takes the <strong className="text-white">same time</strong> whether you have 10 items or 10 million items!
            </p>
          </div>

          {/* O(log n) */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg text-white font-mono font-bold">
                  O(log n)
                </div>
                <h4 className="text-xl font-bold text-white">Logarithmic - Very Fast 🚀</h4>
              </div>
              <span className="text-blue-400 font-bold text-2xl">7 steps</span>
            </div>
            <div className="bg-blue-500/20 rounded-lg h-3 mb-2" style={{ width: '7%' }}></div>
            <p className="text-gray-300 text-sm">
              Even if data <strong className="text-white">doubles</strong>, only adds 1 more step! (Binary search magic)
            </p>
          </div>

          {/* O(n) */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-lg text-white font-mono font-bold">
                  O(n)
                </div>
                <h4 className="text-xl font-bold text-white">Linear - Pretty Fast 🏃</h4>
              </div>
              <span className="text-yellow-400 font-bold text-2xl">100 steps</span>
            </div>
            <div className="bg-yellow-500/20 rounded-lg h-3 mb-2" style={{ width: '25%' }}></div>
            <p className="text-gray-300 text-sm">
              Checks <strong className="text-white">each item once</strong>. 100 items = 100 checks. Simple!
            </p>
          </div>

          {/* O(n log n) */}
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg text-white font-mono font-bold">
                  O(n log n)
                </div>
                <h4 className="text-xl font-bold text-white">Linearithmic - Acceptable 👍</h4>
              </div>
              <span className="text-orange-400 font-bold text-2xl">664 steps</span>
            </div>
            <div className="bg-orange-500/20 rounded-lg h-3 mb-2" style={{ width: '50%' }}></div>
            <p className="text-gray-300 text-sm">
              Best sorting algorithms use this. <strong className="text-white">Slower than linear</strong>, but still good!
            </p>
          </div>

          {/* O(n²) */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="px-4 py-2 bg-gradient-to-r from-red-500 to-rose-600 rounded-lg text-white font-mono font-bold">
                  O(n²)
                </div>
                <h4 className="text-xl font-bold text-white">Quadratic - Slow 🐌</h4>
              </div>
              <span className="text-red-400 font-bold text-2xl">10,000 steps</span>
            </div>
            <div className="bg-red-500/20 rounded-lg h-3 mb-2" style={{ width: '80%' }}></div>
            <p className="text-gray-300 text-sm">
              Nested loops! <strong className="text-white">Avoid this</strong> when possible. Gets slow quickly!
            </p>
          </div>

          {/* O(2^n) */}
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-white font-mono font-bold">
                  O(2ⁿ)
                </div>
                <h4 className="text-xl font-bold text-white">Exponential - Extremely Slow 💀</h4>
              </div>
              <span className="text-purple-400 font-bold text-xl">1,267,650,600,228,229,401,496,703,205,376 steps</span>
            </div>
            <div className="bg-purple-500/20 rounded-lg h-3 mb-2" style={{ width: '100%' }}></div>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Doubles with each new item!</strong> Even 100 items takes longer than the universe's age! ⚠️
            </p>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
          <h4 className="text-lg font-bold text-white mb-3 flex items-center space-x-2">
            <span className="text-2xl">💡</span>
            <span>Key Takeaway</span>
          </h4>
          <p className="text-gray-300 leading-relaxed">
            The <strong className="text-green-400">green and blue</strong> ones are fast enough for any data size.
            <strong className="text-yellow-400"> Yellow</strong> is usually fine.
            <strong className="text-orange-400"> Orange</strong> is acceptable for moderate data.
            <strong className="text-red-400"> Red and purple</strong> can crash your app with large data!
          </p>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
          <div className="text-3xl mb-3">🎯</div>
          <h4 className="text-lg font-bold text-white mb-2">Best to Worst</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            O(1) → O(log n) → O(n) → O(n log n) → O(n²) → O(2ⁿ)
          </p>
          <p className="text-green-400 text-xs mt-2">Always aim for the left side!</p>
        </div>

        <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
          <div className="text-3xl mb-3">🔍</div>
          <h4 className="text-lg font-bold text-white mb-2">Interview Tip</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            Always analyze and discuss the time complexity of your solution. Interviewers expect it!
          </p>
          <p className="text-blue-400 text-xs mt-2">Explain your thought process</p>
        </div>

        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
          <div className="text-3xl mb-3">⚠️</div>
          <h4 className="text-lg font-bold text-white mb-2">Common Mistakes</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            Nested loops usually mean O(n²). Avoid them when possible by using hash maps or other techniques.
          </p>
          <p className="text-purple-400 text-xs mt-2">Optimize nested loops!</p>
        </div>
      </div>

      {/* Space Complexity Note */}
      <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/30">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center space-x-2">
          <span className="text-2xl">💾</span>
          <span>Space Complexity</span>
        </h3>
        <p className="text-gray-300 leading-relaxed">
          <strong className="text-white">Space complexity</strong> uses the same Big O notation but measures memory usage instead of time.
          For example, creating a new array of size n uses O(n) space, while using a few variables uses O(1) space.
        </p>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
            <p className="text-amber-400 font-semibold mb-2">✅ Good Space Usage:</p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Modifying array in-place</li>
              <li>• Using constant variables</li>
              <li>• Iterative solutions</li>
            </ul>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
            <p className="text-amber-400 font-semibold mb-2">⚠️ Watch Out For:</p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Creating copy of entire array</li>
              <li>• Deep recursion (call stack)</li>
              <li>• Multiple data structures</li>
            </ul>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};