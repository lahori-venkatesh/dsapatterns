import { Category } from '../../types';

// Intermediate level Arrays & Strings - REFINED FOR QUALITY
export const arraysStringsIntermediateCategory: Category = {
  id: 'arrays-strings-intermediate',
  name: 'Arrays & Strings',
  icon: 'Grid3X3',
  level: 'intermediate',
  totalProblems: 30,
  completedProblems: 0,
  patterns: [
    {
      id: 'two-pointers-intermediate',
      name: 'Two Pointers & Binary Search',
      description: 'Essential two pointer and binary search problems asked by top companies',
      totalProblems: 10,
      completedProblems: 0,
      problems: [
        {
          id: 'three-sum',
          title: '3Sum',
          difficulty: 'Medium',
          pattern: 'two-pointers-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/3sum/',
          estimatedTime: 30,
          tags: ['array', 'two-pointers', 'sorting'],
          companies: ['Amazon', 'Microsoft', 'Meta', 'Apple', 'Google', 'Adobe', 'Bloomberg'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'container-with-most-water',
          title: 'Container With Most Water',
          difficulty: 'Medium',
          pattern: 'two-pointers-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/container-with-most-water/',
          estimatedTime: 25,
          tags: ['array', 'two-pointers', 'greedy'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Bloomberg'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'sort-colors',
          title: 'Sort Colors',
          difficulty: 'Medium',
          pattern: 'two-pointers-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/sort-colors/',
          estimatedTime: 25,
          tags: ['array', 'two-pointers', 'sorting'],
          companies: ['Microsoft', 'Amazon', 'Meta', 'Adobe', 'Bloomberg'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'search-2d-matrix-ii',
          title: 'Search a 2D Matrix II',
          difficulty: 'Medium',
          pattern: 'two-pointers-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/search-a-2d-matrix-ii/',
          estimatedTime: 30,
          tags: ['array', 'binary-search', 'divide-and-conquer', 'matrix'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Adobe'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'find-first-last-position',
          title: 'Find First and Last Position of Element in Sorted Array',
          difficulty: 'Medium',
          pattern: 'two-pointers-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/',
          estimatedTime: 30,
          tags: ['array', 'binary-search'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'LinkedIn', 'Bloomberg'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'search-rotated-sorted-array',
          title: 'Search in Rotated Sorted Array',
          difficulty: 'Medium',
          pattern: 'two-pointers-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/search-in-rotated-sorted-array/',
          estimatedTime: 30,
          tags: ['array', 'binary-search'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'LinkedIn', 'Adobe', 'Bloomberg', 'Uber'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'find-minimum-rotated-sorted-array',
          title: 'Find Minimum in Rotated Sorted Array',
          difficulty: 'Medium',
          pattern: 'two-pointers-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/',
          estimatedTime: 25,
          tags: ['array', 'binary-search'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Bloomberg'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'find-peak-element',
          title: 'Find Peak Element',
          difficulty: 'Medium',
          pattern: 'two-pointers-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/find-peak-element/',
          estimatedTime: 25,
          tags: ['array', 'binary-search'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Adobe'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'three-sum-closest',
          title: '3Sum Closest',
          difficulty: 'Medium',
          pattern: 'two-pointers-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/3sum-closest/',
          estimatedTime: 30,
          tags: ['array', 'two-pointers', 'sorting'],
          companies: ['Amazon', 'Microsoft', 'Adobe', 'Bloomberg'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'remove-duplicates-sorted-array-ii',
          title: 'Remove Duplicates from Sorted Array II',
          difficulty: 'Medium',
          pattern: 'two-pointers-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/',
          estimatedTime: 25,
          tags: ['array', 'two-pointers'],
          companies: ['Google', 'Microsoft', 'Meta', 'Adobe'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    },
    {
      id: 'sliding-window-intermediate',
      name: 'Sliding Window',
      description: 'Master sliding window problems frequently asked in top tech companies',
      totalProblems: 10,
      completedProblems: 0,
      problems: [
        {
          id: 'longest-substring-without-repeating',
          title: 'Longest Substring Without Repeating Characters',
          difficulty: 'Medium',
          pattern: 'sliding-window-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
          estimatedTime: 30,
          tags: ['hash-table', 'string', 'sliding-window'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'longest-repeating-character-replacement',
          title: 'Longest Repeating Character Replacement',
          difficulty: 'Medium',
          pattern: 'sliding-window-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/longest-repeating-character-replacement/',
          estimatedTime: 35,
          tags: ['hash-table', 'string', 'sliding-window'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'permutation-in-string',
          title: 'Permutation in String',
          difficulty: 'Medium',
          pattern: 'sliding-window-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/permutation-in-string/',
          estimatedTime: 30,
          tags: ['hash-table', 'two-pointers', 'string', 'sliding-window'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'find-all-anagrams-string',
          title: 'Find All Anagrams in a String',
          difficulty: 'Medium',
          pattern: 'sliding-window-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/',
          estimatedTime: 30,
          tags: ['hash-table', 'string', 'sliding-window'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'minimum-size-subarray-sum',
          title: 'Minimum Size Subarray Sum',
          difficulty: 'Medium',
          pattern: 'sliding-window-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-size-subarray-sum/',
          estimatedTime: 30,
          tags: ['array', 'binary-search', 'sliding-window', 'prefix-sum'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'fruit-into-baskets',
          title: 'Fruit Into Baskets',
          difficulty: 'Medium',
          pattern: 'sliding-window-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/fruit-into-baskets/',
          estimatedTime: 30,
          tags: ['array', 'hash-table', 'sliding-window'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'max-consecutive-ones-iii',
          title: 'Max Consecutive Ones III',
          difficulty: 'Medium',
          pattern: 'sliding-window-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/max-consecutive-ones-iii/',
          estimatedTime: 30,
          tags: ['array', 'binary-search', 'sliding-window', 'prefix-sum'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'longest-subarray-1s-deleting-one',
          title: 'Longest Subarray of 1\'s After Deleting One Element',
          difficulty: 'Medium',
          pattern: 'sliding-window-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/',
          estimatedTime: 30,
          tags: ['array', 'dynamic-programming', 'sliding-window'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'max-points-cards',
          title: 'Maximum Points You Can Obtain from Cards',
          difficulty: 'Medium',
          pattern: 'sliding-window-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/',
          estimatedTime: 30,
          tags: ['array', 'sliding-window', 'prefix-sum'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'frequency-most-frequent-element',
          title: 'Frequency of the Most Frequent Element',
          difficulty: 'Medium',
          pattern: 'sliding-window-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/frequency-of-the-most-frequent-element/',
          estimatedTime: 35,
          tags: ['array', 'binary-search', 'greedy', 'sliding-window', 'sorting', 'prefix-sum'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    },
    {
      id: 'prefix-sum-intermediate',
      name: 'Prefix Sum & Hashing',
      description: 'Essential prefix sum and hash table problems for FAANG interviews',
      totalProblems: 10,
      completedProblems: 0,
      problems: [
        {
          id: 'subarray-sum-equals-k',
          title: 'Subarray Sum Equals K',
          difficulty: 'Medium',
          pattern: 'prefix-sum-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/subarray-sum-equals-k/',
          estimatedTime: 30,
          tags: ['array', 'hash-table', 'prefix-sum'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'product-array-except-self',
          title: 'Product of Array Except Self',
          difficulty: 'Medium',
          pattern: 'prefix-sum-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/product-of-array-except-self/',
          estimatedTime: 25,
          tags: ['array', 'prefix-sum'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'range-sum-query-2d-immutable',
          title: 'Range Sum Query 2D - Immutable',
          difficulty: 'Medium',
          pattern: 'prefix-sum-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/range-sum-query-2d-immutable/',
          estimatedTime: 30,
          tags: ['array', 'design', 'matrix', 'prefix-sum'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'continuous-subarray-sum',
          title: 'Continuous Subarray Sum',
          difficulty: 'Medium',
          pattern: 'prefix-sum-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/continuous-subarray-sum/',
          estimatedTime: 35,
          tags: ['array', 'hash-table', 'math', 'prefix-sum'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'subarray-sums-divisible-k',
          title: 'Subarray Sums Divisible by K',
          difficulty: 'Medium',
          pattern: 'prefix-sum-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/subarray-sums-divisible-by-k/',
          estimatedTime: 35,
          tags: ['array', 'hash-table', 'prefix-sum'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'contiguous-array',
          title: 'Contiguous Array',
          difficulty: 'Medium',
          pattern: 'prefix-sum-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/contiguous-array/',
          estimatedTime: 30,
          tags: ['array', 'hash-table', 'prefix-sum'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'count-number-nice-subarrays',
          title: 'Count Number of Nice Subarrays',
          difficulty: 'Medium',
          pattern: 'prefix-sum-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/count-number-of-nice-subarrays/',
          estimatedTime: 35,
          tags: ['array', 'hash-table', 'math', 'sliding-window'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'matrix-block-sum',
          title: 'Matrix Block Sum',
          difficulty: 'Medium',
          pattern: 'prefix-sum-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/matrix-block-sum/',
          estimatedTime: 30,
          tags: ['array', 'matrix', 'prefix-sum'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'maximum-size-subarray-sum-k',
          title: 'Maximum Size Subarray Sum Equals k',
          difficulty: 'Medium',
          pattern: 'prefix-sum-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/',
          estimatedTime: 30,
          tags: ['array', 'hash-table', 'prefix-sum'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'longest-well-performing-interval',
          title: 'Longest Well-Performing Interval',
          difficulty: 'Medium',
          pattern: 'prefix-sum-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/longest-well-performing-interval/',
          estimatedTime: 35,
          tags: ['array', 'hash-table', 'stack', 'monotonic-stack', 'prefix-sum'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    }
  ]
};