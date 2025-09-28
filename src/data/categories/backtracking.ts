import { Category } from '../../types';

export const backtrackingCategory: Category = {
  id: 'backtracking',
  name: 'Backtracking',
  icon: 'RotateCcw',
  level: 'pro',
  totalProblems: 14,
  completedProblems: 0,
  patterns: [
    {
      id: 'combination-permutation',
      name: 'Combinations & Permutations',
      description: 'Generate all possible combinations and permutations using backtracking',
      totalProblems: 7,
      completedProblems: 0,
      problems: [
        {
          id: 'permutations',
          title: 'Permutations',
          difficulty: 'Medium',
          pattern: 'combination-permutation',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/permutations/',
          estimatedTime: 30,
          tags: ['array', 'backtracking'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'permutations-ii',
          title: 'Permutations II',
          difficulty: 'Medium',
          pattern: 'combination-permutation',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/permutations-ii/',
          estimatedTime: 35,
          tags: ['array', 'backtracking'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'combinations',
          title: 'Combinations',
          difficulty: 'Medium',
          pattern: 'combination-permutation',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/combinations/',
          estimatedTime: 30,
          tags: ['backtracking'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'combination-sum',
          title: 'Combination Sum',
          difficulty: 'Medium',
          pattern: 'combination-permutation',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/combination-sum/',
          estimatedTime: 35,
          tags: ['array', 'backtracking'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'combination-sum-ii',
          title: 'Combination Sum II',
          difficulty: 'Medium',
          pattern: 'combination-permutation',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/combination-sum-ii/',
          estimatedTime: 35,
          tags: ['array', 'backtracking'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'subsets',
          title: 'Subsets',
          difficulty: 'Medium',
          pattern: 'combination-permutation',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/subsets/',
          estimatedTime: 30,
          tags: ['array', 'backtracking', 'bit-manipulation'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'subsets-ii',
          title: 'Subsets II',
          difficulty: 'Medium',
          pattern: 'combination-permutation',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/subsets-ii/',
          estimatedTime: 35,
          tags: ['array', 'backtracking', 'bit-manipulation'],
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
      id: 'constraint-satisfaction',
      name: 'Constraint Satisfaction',
      description: 'Solve constraint satisfaction problems using backtracking',
      totalProblems: 7,
      completedProblems: 0,
      problems: [
        {
          id: 'n-queens',
          title: 'N-Queens',
          difficulty: 'Hard',
          pattern: 'constraint-satisfaction',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/n-queens/',
          estimatedTime: 50,
          tags: ['array', 'backtracking'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'n-queens-ii',
          title: 'N-Queens II',
          difficulty: 'Hard',
          pattern: 'constraint-satisfaction',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/n-queens-ii/',
          estimatedTime: 45,
          tags: ['backtracking'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'sudoku-solver',
          title: 'Sudoku Solver',
          difficulty: 'Hard',
          pattern: 'constraint-satisfaction',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/sudoku-solver/',
          estimatedTime: 50,
          tags: ['array', 'backtracking', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'valid-sudoku',
          title: 'Valid Sudoku',
          difficulty: 'Medium',
          pattern: 'constraint-satisfaction',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/valid-sudoku/',
          estimatedTime: 30,
          tags: ['array', 'hash-table', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'word-search',
          title: 'Word Search',
          difficulty: 'Medium',
          pattern: 'constraint-satisfaction',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/word-search/',
          estimatedTime: 35,
          tags: ['array', 'backtracking', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'palindrome-partitioning',
          title: 'Palindrome Partitioning',
          difficulty: 'Medium',
          pattern: 'constraint-satisfaction',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/palindrome-partitioning/',
          estimatedTime: 40,
          tags: ['string', 'dynamic-programming', 'backtracking'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'letter-combinations-phone-number',
          title: 'Letter Combinations of a Phone Number',
          difficulty: 'Medium',
          pattern: 'constraint-satisfaction',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/',
          estimatedTime: 30,
          tags: ['hash-table', 'string', 'backtracking'],
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