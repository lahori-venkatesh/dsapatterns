import { Category } from '../../types';

export const backtrackingCategory: Category = {
  id: 'backtracking',
  name: 'Backtracking',
  icon: 'RotateCcw',
  level: 'pro',
  totalProblems: 45,
  completedProblems: 0,
  patterns: [
    {
      id: 'basic-backtracking',
      name: 'Basic Backtracking',
      description: 'Learn fundamental backtracking concepts with simple problems',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'generate-parentheses',
          title: 'Generate Parentheses',
          difficulty: 'Easy',
          pattern: 'basic-backtracking',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/generate-parentheses/',
          estimatedTime: 30,
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
          difficulty: 'Easy',
          pattern: 'basic-backtracking',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/',
          estimatedTime: 25,
          tags: ['hash-table', 'string', 'backtracking'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'binary-watch',
          title: 'Binary Watch',
          difficulty: 'Easy',
          pattern: 'basic-backtracking',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/binary-watch/',
          estimatedTime: 25,
          tags: ['bit-manipulation', 'backtracking'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'find-unique-binary-string',
          title: 'Find Unique Binary String',
          difficulty: 'Easy',
          pattern: 'basic-backtracking',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/find-unique-binary-string/',
          estimatedTime: 20,
          tags: ['array', 'string', 'backtracking'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'additive-number',
          title: 'Additive Number',
          difficulty: 'Easy',
          pattern: 'basic-backtracking',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/additive-number/',
          estimatedTime: 30,
          tags: ['string', 'backtracking'],
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
          pattern: 'basic-backtracking',
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
          pattern: 'basic-backtracking',
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
          id: 'subsets',
          title: 'Subsets',
          difficulty: 'Medium',
          pattern: 'basic-backtracking',
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
          id: 'permutations',
          title: 'Permutations',
          difficulty: 'Medium',
          pattern: 'basic-backtracking',
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
          id: 'combination-sum-ii',
          title: 'Combination Sum II',
          difficulty: 'Medium',
          pattern: 'basic-backtracking',
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
          id: 'permutations-ii',
          title: 'Permutations II',
          difficulty: 'Medium',
          pattern: 'basic-backtracking',
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
          id: 'subsets-ii',
          title: 'Subsets II',
          difficulty: 'Medium',
          pattern: 'basic-backtracking',
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
        },
        {
          id: 'palindrome-partitioning',
          title: 'Palindrome Partitioning',
          difficulty: 'Medium',
          pattern: 'basic-backtracking',
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
          id: 'combination-sum-iii',
          title: 'Combination Sum III',
          difficulty: 'Medium',
          pattern: 'basic-backtracking',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/combination-sum-iii/',
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
          id: 'factor-combinations',
          title: 'Factor Combinations',
          difficulty: 'Medium',
          pattern: 'basic-backtracking',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/factor-combinations/',
          estimatedTime: 35,
          tags: ['array', 'backtracking'],
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
      id: 'word-search-problems',
      name: 'Word Search Problems',
      description: 'Solve word search and pattern matching problems using backtracking',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'n-queens',
          title: 'N-Queens',
          difficulty: 'Hard',
          pattern: 'word-search-problems',
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
          id: 'word-search',
          title: 'Word Search',
          difficulty: 'Medium',
          pattern: 'word-search-problems',
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
          id: 'word-search-ii',
          title: 'Word Search II',
          difficulty: 'Hard',
          pattern: 'word-search-problems',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/word-search-ii/',
          estimatedTime: 50,
          tags: ['array', 'string', 'backtracking', 'trie', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'restore-ip-addresses',
          title: 'Restore IP Addresses',
          difficulty: 'Medium',
          pattern: 'word-search-problems',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/restore-ip-addresses/',
          estimatedTime: 30,
          tags: ['string', 'backtracking'],
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
          pattern: 'word-search-problems',
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
          pattern: 'word-search-problems',
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
          id: 'n-queens-ii',
          title: 'N-Queens II',
          difficulty: 'Hard',
          pattern: 'word-search-problems',
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
          id: 'word-pattern-ii',
          title: 'Word Pattern II',
          difficulty: 'Medium',
          pattern: 'word-search-problems',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/word-pattern-ii/',
          estimatedTime: 35,
          tags: ['hash-table', 'string', 'backtracking'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'generalized-abbreviation',
          title: 'Generalized Abbreviation',
          difficulty: 'Medium',
          pattern: 'word-search-problems',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/generalized-abbreviation/',
          estimatedTime: 30,
          tags: ['string', 'backtracking', 'bit-manipulation'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'word-squares',
          title: 'Word Squares',
          difficulty: 'Hard',
          pattern: 'word-search-problems',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/word-squares/',
          estimatedTime: 50,
          tags: ['array', 'string', 'backtracking', 'trie'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'android-unlock-patterns',
          title: 'Android Unlock Patterns',
          difficulty: 'Medium',
          pattern: 'word-search-problems',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/android-unlock-patterns/',
          estimatedTime: 40,
          tags: ['dynamic-programming', 'backtracking'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'letter-case-permutation',
          title: 'Letter Case Permutation',
          difficulty: 'Medium',
          pattern: 'word-search-problems',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/letter-case-permutation/',
          estimatedTime: 25,
          tags: ['string', 'backtracking', 'bit-manipulation'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'beautiful-arrangement',
          title: 'Beautiful Arrangement',
          difficulty: 'Medium',
          pattern: 'word-search-problems',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/beautiful-arrangement/',
          estimatedTime: 35,
          tags: ['array', 'dynamic-programming', 'backtracking', 'bit-manipulation', 'bitmask'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'partition-k-equal-sum-subsets',
          title: 'Partition to K Equal Sum Subsets',
          difficulty: 'Medium',
          pattern: 'word-search-problems',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/partition-to-k-equal-sum-subsets/',
          estimatedTime: 40,
          tags: ['array', 'dynamic-programming', 'backtracking', 'bit-manipulation', 'memoization', 'bitmask'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'split-string-into-max-unique-substrings',
          title: 'Split a String Into the Max Number of Unique Substrings',
          difficulty: 'Medium',
          pattern: 'word-search-problems',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/',
          estimatedTime: 35,
          tags: ['hash-table', 'string', 'backtracking'],
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
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'remove-invalid-parentheses',
          title: 'Remove Invalid Parentheses',
          difficulty: 'Hard',
          pattern: 'constraint-satisfaction',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/remove-invalid-parentheses/',
          estimatedTime: 50,
          tags: ['string', 'backtracking', 'breadth-first-search'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'expression-add-operators',
          title: 'Expression Add Operators',
          difficulty: 'Hard',
          pattern: 'constraint-satisfaction',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/expression-add-operators/',
          estimatedTime: 50,
          tags: ['math', 'string', 'backtracking'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'wildcard-matching',
          title: 'Wildcard Matching',
          difficulty: 'Hard',
          pattern: 'constraint-satisfaction',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/wildcard-matching/',
          estimatedTime: 50,
          tags: ['string', 'dynamic-programming', 'greedy', 'recursion'],
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
          pattern: 'constraint-satisfaction',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/regular-expression-matching/',
          estimatedTime: 50,
          tags: ['string', 'dynamic-programming', 'recursion'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'word-break-ii',
          title: 'Word Break II',
          difficulty: 'Hard',
          pattern: 'constraint-satisfaction',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/word-break-ii/',
          estimatedTime: 45,
          tags: ['hash-table', 'string', 'dynamic-programming', 'backtracking', 'trie', 'memoization'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'palindrome-partitioning-ii',
          title: 'Palindrome Partitioning II',
          difficulty: 'Hard',
          pattern: 'constraint-satisfaction',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/palindrome-partitioning-ii/',
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
          id: 'concatenated-words',
          title: 'Concatenated Words',
          difficulty: 'Hard',
          pattern: 'constraint-satisfaction',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/concatenated-words/',
          estimatedTime: 45,
          tags: ['array', 'string', 'dynamic-programming', 'depth-first-search', 'trie'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'word-ladder-ii',
          title: 'Word Ladder II',
          difficulty: 'Hard',
          pattern: 'constraint-satisfaction',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/word-ladder-ii/',
          estimatedTime: 60,
          tags: ['hash-table', 'string', 'backtracking', 'breadth-first-search'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'strobogrammatic-number-ii',
          title: 'Strobogrammatic Number II',
          difficulty: 'Medium',
          pattern: 'constraint-satisfaction',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/strobogrammatic-number-ii/',
          estimatedTime: 35,
          tags: ['array', 'string', 'recursion'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'strobogrammatic-number-iii',
          title: 'Strobogrammatic Number III',
          difficulty: 'Hard',
          pattern: 'constraint-satisfaction',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/strobogrammatic-number-iii/',
          estimatedTime: 50,
          tags: ['array', 'string', 'recursion'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'confusing-number-ii',
          title: 'Confusing Number II',
          difficulty: 'Hard',
          pattern: 'constraint-satisfaction',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/confusing-number-ii/',
          estimatedTime: 50,
          tags: ['math', 'backtracking'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximum-length-concatenated-string',
          title: 'Maximum Length of a Concatenated String with Unique Characters',
          difficulty: 'Medium',
          pattern: 'constraint-satisfaction',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/',
          estimatedTime: 35,
          tags: ['array', 'string', 'backtracking', 'bit-manipulation'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'iterator-for-combination',
          title: 'Iterator for Combination',
          difficulty: 'Medium',
          pattern: 'constraint-satisfaction',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/iterator-for-combination/',
          estimatedTime: 35,
          tags: ['string', 'backtracking', 'design', 'iterator'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'numbers-with-same-consecutive-differences',
          title: 'Numbers With Same Consecutive Differences',
          difficulty: 'Medium',
          pattern: 'constraint-satisfaction',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/numbers-with-same-consecutive-differences/',
          estimatedTime: 30,
          tags: ['backtracking', 'breadth-first-search'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'flip-game-ii',
          title: 'Flip Game II',
          difficulty: 'Medium',
          pattern: 'constraint-satisfaction',
          category: 'backtracking',
          leetcodeUrl: 'https://leetcode.com/problems/flip-game-ii/',
          estimatedTime: 40,
          tags: ['math', 'dynamic-programming', 'backtracking', 'game-theory', 'memoization'],
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
}