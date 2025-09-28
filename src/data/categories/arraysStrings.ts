import { Category } from '../../types';

export const arraysStringsCategory: Category = {
  id: 'arrays-strings',
  name: 'Arrays & Strings',
  icon: 'Grid3X3',
  level: 'beginner',
  totalProblems: 20,
  completedProblems: 0,
  patterns: [
    {
      id: 'two-pointers',
      name: 'Two Pointers',
      description: 'Use two pointers to solve array problems efficiently',
      totalProblems: 8,
      completedProblems: 0,
      problems: [
        {
          id: 'two-sum',
          title: 'Two Sum',
          difficulty: 'Easy',
          pattern: 'two-pointers',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/two-sum/',
          estimatedTime: 15,
          tags: ['array', 'hash-table'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'valid-palindrome',
          title: 'Valid Palindrome',
          difficulty: 'Easy',
          pattern: 'two-pointers',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/valid-palindrome/',
          estimatedTime: 20,
          tags: ['string', 'two-pointers'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'three-sum',
          title: '3Sum',
          difficulty: 'Medium',
          pattern: 'two-pointers',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/3sum/',
          estimatedTime: 30,
          tags: ['array', 'two-pointers', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'container-with-most-water',
          title: 'Container With Most Water',
          difficulty: 'Medium',
          pattern: 'two-pointers',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/container-with-most-water/',
          estimatedTime: 25,
          tags: ['array', 'two-pointers', 'greedy'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'trapping-rain-water',
          title: 'Trapping Rain Water',
          difficulty: 'Hard',
          pattern: 'two-pointers',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/trapping-rain-water/',
          estimatedTime: 40,
          tags: ['array', 'two-pointers', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'remove-duplicates-sorted-array',
          title: 'Remove Duplicates from Sorted Array',
          difficulty: 'Easy',
          pattern: 'two-pointers',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/',
          estimatedTime: 15,
          tags: ['array', 'two-pointers'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'move-zeroes',
          title: 'Move Zeroes',
          difficulty: 'Easy',
          pattern: 'two-pointers',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/move-zeroes/',
          estimatedTime: 20,
          tags: ['array', 'two-pointers'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'sort-colors',
          title: 'Sort Colors',
          difficulty: 'Medium',
          pattern: 'two-pointers',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/sort-colors/',
          estimatedTime: 25,
          tags: ['array', 'two-pointers', 'sorting'],
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
      id: 'sliding-window',
      name: 'Sliding Window',
      description: 'Efficiently solve subarray/substring problems using sliding window technique',
      totalProblems: 7,
      completedProblems: 0,
      problems: [
        {
          id: 'maximum-subarray',
          title: 'Maximum Subarray',
          difficulty: 'Medium',
          pattern: 'sliding-window',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-subarray/',
          estimatedTime: 25,
          tags: ['array', 'divide-and-conquer', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'longest-substring-without-repeating',
          title: 'Longest Substring Without Repeating Characters',
          difficulty: 'Medium',
          pattern: 'sliding-window',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
          estimatedTime: 30,
          tags: ['hash-table', 'string', 'sliding-window'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'minimum-window-substring',
          title: 'Minimum Window Substring',
          difficulty: 'Hard',
          pattern: 'sliding-window',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-window-substring/',
          estimatedTime: 45,
          tags: ['hash-table', 'string', 'sliding-window'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'best-time-buy-sell-stock',
          title: 'Best Time to Buy and Sell Stock',
          difficulty: 'Easy',
          pattern: 'sliding-window',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
          estimatedTime: 20,
          tags: ['array', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'longest-repeating-character-replacement',
          title: 'Longest Repeating Character Replacement',
          difficulty: 'Medium',
          pattern: 'sliding-window',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/longest-repeating-character-replacement/',
          estimatedTime: 35,
          tags: ['hash-table', 'string', 'sliding-window'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'permutation-in-string',
          title: 'Permutation in String',
          difficulty: 'Medium',
          pattern: 'sliding-window',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/permutation-in-string/',
          estimatedTime: 30,
          tags: ['hash-table', 'two-pointers', 'string', 'sliding-window'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'sliding-window-maximum',
          title: 'Sliding Window Maximum',
          difficulty: 'Hard',
          pattern: 'sliding-window',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/sliding-window-maximum/',
          estimatedTime: 40,
          tags: ['array', 'queue', 'sliding-window', 'heap', 'monotonic-queue'],
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
      id: 'prefix-sum',
      name: 'Prefix Sum',
      description: 'Use prefix sums to efficiently calculate range sums and solve subarray problems',
      totalProblems: 5,
      completedProblems: 0,
      problems: [
        {
          id: 'range-sum-query-immutable',
          title: 'Range Sum Query - Immutable',
          difficulty: 'Easy',
          pattern: 'prefix-sum',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/range-sum-query-immutable/',
          estimatedTime: 20,
          tags: ['array', 'design', 'prefix-sum'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'subarray-sum-equals-k',
          title: 'Subarray Sum Equals K',
          difficulty: 'Medium',
          pattern: 'prefix-sum',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/subarray-sum-equals-k/',
          estimatedTime: 30,
          tags: ['array', 'hash-table', 'prefix-sum'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'product-array-except-self',
          title: 'Product of Array Except Self',
          difficulty: 'Medium',
          pattern: 'prefix-sum',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/product-of-array-except-self/',
          estimatedTime: 25,
          tags: ['array', 'prefix-sum'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'continuous-subarray-sum',
          title: 'Continuous Subarray Sum',
          difficulty: 'Medium',
          pattern: 'prefix-sum',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/continuous-subarray-sum/',
          estimatedTime: 35,
          tags: ['array', 'hash-table', 'math', 'prefix-sum'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'range-sum-query-2d-immutable',
          title: 'Range Sum Query 2D - Immutable',
          difficulty: 'Medium',
          pattern: 'prefix-sum',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/range-sum-query-2d-immutable/',
          estimatedTime: 30,
          tags: ['array', 'design', 'matrix', 'prefix-sum'],
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