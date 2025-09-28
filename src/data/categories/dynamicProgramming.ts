import { Category } from '../../types';

export const dynamicProgrammingCategory: Category = {
  id: 'dynamic-programming',
  name: 'Dynamic Programming',
  icon: 'Zap',
  level: 'pro',
  totalProblems: 20,
  completedProblems: 0,
  patterns: [
    {
      id: 'linear-dp',
      name: 'Linear DP',
      description: 'Solve 1D dynamic programming problems with optimal substructure',
      totalProblems: 8,
      completedProblems: 0,
      problems: [
        {
          id: 'climbing-stairs',
          title: 'Climbing Stairs',
          difficulty: 'Easy',
          pattern: 'linear-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/climbing-stairs/',
          estimatedTime: 20,
          tags: ['math', 'dynamic-programming', 'memoization'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'house-robber',
          title: 'House Robber',
          difficulty: 'Medium',
          pattern: 'linear-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/house-robber/',
          estimatedTime: 25,
          tags: ['array', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'house-robber-ii',
          title: 'House Robber II',
          difficulty: 'Medium',
          pattern: 'linear-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/house-robber-ii/',
          estimatedTime: 30,
          tags: ['array', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'decode-ways',
          title: 'Decode Ways',
          difficulty: 'Medium',
          pattern: 'linear-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/decode-ways/',
          estimatedTime: 35,
          tags: ['string', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'coin-change',
          title: 'Coin Change',
          difficulty: 'Medium',
          pattern: 'linear-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/coin-change/',
          estimatedTime: 30,
          tags: ['array', 'dynamic-programming', 'breadth-first-search'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximum-product-subarray',
          title: 'Maximum Product Subarray',
          difficulty: 'Medium',
          pattern: 'linear-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-product-subarray/',
          estimatedTime: 35,
          tags: ['array', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'word-break',
          title: 'Word Break',
          difficulty: 'Medium',
          pattern: 'linear-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/word-break/',
          estimatedTime: 35,
          tags: ['hash-table', 'string', 'dynamic-programming', 'trie', 'memoization'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'longest-increasing-subsequence',
          title: 'Longest Increasing Subsequence',
          difficulty: 'Medium',
          pattern: 'linear-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/longest-increasing-subsequence/',
          estimatedTime: 40,
          tags: ['array', 'binary-search', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        }
      ]
    },
    {
      id: 'grid-dp',
      name: 'Grid DP',
      description: 'Solve 2D grid-based dynamic programming problems',
      totalProblems: 6,
      completedProblems: 0,
      problems: [
        {
          id: 'unique-paths',
          title: 'Unique Paths',
          difficulty: 'Medium',
          pattern: 'grid-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/unique-paths/',
          estimatedTime: 25,
          tags: ['math', 'dynamic-programming', 'combinatorics'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'unique-paths-ii',
          title: 'Unique Paths II',
          difficulty: 'Medium',
          pattern: 'grid-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/unique-paths-ii/',
          estimatedTime: 30,
          tags: ['array', 'dynamic-programming', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'minimum-path-sum',
          title: 'Minimum Path Sum',
          difficulty: 'Medium',
          pattern: 'grid-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-path-sum/',
          estimatedTime: 30,
          tags: ['array', 'dynamic-programming', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximal-square',
          title: 'Maximal Square',
          difficulty: 'Medium',
          pattern: 'grid-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/maximal-square/',
          estimatedTime: 35,
          tags: ['array', 'dynamic-programming', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'dungeon-game',
          title: 'Dungeon Game',
          difficulty: 'Hard',
          pattern: 'grid-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/dungeon-game/',
          estimatedTime: 45,
          tags: ['array', 'dynamic-programming', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'cherry-pickup',
          title: 'Cherry Pickup',
          difficulty: 'Hard',
          pattern: 'grid-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/cherry-pickup/',
          estimatedTime: 50,
          tags: ['array', 'dynamic-programming', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        }
      ]
    },
    {
      id: 'string-dp',
      name: 'String DP',
      description: 'Dynamic programming on strings: LCS, edit distance, palindromes',
      totalProblems: 6,
      completedProblems: 0,
      problems: [
        {
          id: 'longest-common-subsequence',
          title: 'Longest Common Subsequence',
          difficulty: 'Medium',
          pattern: 'string-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/longest-common-subsequence/',
          estimatedTime: 35,
          tags: ['string', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'edit-distance',
          title: 'Edit Distance',
          difficulty: 'Hard',
          pattern: 'string-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/edit-distance/',
          estimatedTime: 45,
          tags: ['string', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'longest-palindromic-substring',
          title: 'Longest Palindromic Substring',
          difficulty: 'Medium',
          pattern: 'string-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/longest-palindromic-substring/',
          estimatedTime: 35,
          tags: ['string', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'palindromic-substrings',
          title: 'Palindromic Substrings',
          difficulty: 'Medium',
          pattern: 'string-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/palindromic-substrings/',
          estimatedTime: 30,
          tags: ['string', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'distinct-subsequences',
          title: 'Distinct Subsequences',
          difficulty: 'Hard',
          pattern: 'string-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/distinct-subsequences/',
          estimatedTime: 45,
          tags: ['string', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'regular-expression-matching',
          title: 'Regular Expression Matching',
          difficulty: 'Hard',
          pattern: 'string-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/regular-expression-matching/',
          estimatedTime: 50,
          tags: ['string', 'dynamic-programming', 'recursion'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        }
      ]
    }
  ]
};