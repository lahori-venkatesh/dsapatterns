import { Category } from '../../types';

// Pro Level Arrays & Strings - REFINED WITH COMPANY TAGS
export const arraysStringsProCategory: Category = {
  id: 'arrays-strings-pro',
  name: 'Arrays & Strings',
  icon: 'Grid3X3',
  level: 'pro',
  totalProblems: 25,
  completedProblems: 0,
  patterns: [
    {
      id: 'advanced-two-pointers-pro',
      name: 'Advanced Two Pointers',
      description: 'Master the most challenging two pointer problems asked in FAANG interviews',
      totalProblems: 8,
      completedProblems: 0,
      problems: [
        {
          id: 'trapping-rain-water',
          title: 'Trapping Rain Water',
          difficulty: 'Hard',
          pattern: 'advanced-two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/trapping-rain-water/',
          estimatedTime: 40,
          tags: ['array', 'two-pointers', 'dynamic-programming', 'stack', 'monotonic-stack'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Bloomberg', 'Adobe', 'Uber'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'four-sum',
          title: '4Sum',
          difficulty: 'Medium',
          pattern: 'advanced-two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/4sum/',
          estimatedTime: 35,
          tags: ['array', 'two-pointers', 'sorting'],
          companies: ['Amazon', 'Microsoft', 'Adobe', 'Bloomberg', 'Uber'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'shortest-unsorted-continuous-subarray',
          title: 'Shortest Unsorted Continuous Subarray',
          difficulty: 'Medium',
          pattern: 'advanced-two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/shortest-unsorted-continuous-subarray/',
          estimatedTime: 30,
          tags: ['array', 'two-pointers', 'stack', 'greedy', 'sorting', 'monotonic-stack'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'minimum-window-substring',
          title: 'Minimum Window Substring',
          difficulty: 'Hard',
          pattern: 'advanced-two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-window-substring/',
          estimatedTime: 45,
          tags: ['hash-table', 'string', 'sliding-window'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'LinkedIn', 'Adobe', 'Uber', 'Airbnb'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'longest-substring-with-at-most-k-distinct',
          title: 'Longest Substring with At Most K Distinct Characters',
          difficulty: 'Medium',
          pattern: 'advanced-two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/',
          estimatedTime: 35,
          tags: ['hash-table', 'string', 'sliding-window'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Bloomberg', 'Uber'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'substring-concatenation-all-words',
          title: 'Substring with Concatenation of All Words',
          difficulty: 'Hard',
          pattern: 'advanced-two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/substring-with-concatenation-of-all-words/',
          estimatedTime: 45,
          tags: ['hash-table', 'string', 'sliding-window'],
          companies: ['Amazon', 'Microsoft', 'Google', 'Bloomberg'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'subarrays-k-different-integers',
          title: 'Subarrays with K Different Integers',
          difficulty: 'Hard',
          pattern: 'advanced-two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/subarrays-with-k-different-integers/',
          estimatedTime: 45,
          tags: ['array', 'hash-table', 'sliding-window', 'counting'],
          companies: ['Google', 'Meta', 'Amazon'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'minimum-window-subsequence',
          title: 'Minimum Window Subsequence',
          difficulty: 'Hard',
          pattern: 'advanced-two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-window-subsequence/',
          estimatedTime: 50,
          tags: ['string', 'dynamic-programming', 'sliding-window'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Uber'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    },
    {
      id: 'advanced-dp-pro',
      name: 'Advanced Dynamic Programming',
      description: 'Master complex DP problems on arrays frequently asked in top tech interviews',
      totalProblems: 10,
      completedProblems: 0,
      problems: [
        {
          id: 'longest-increasing-subsequence',
          title: 'Longest Increasing Subsequence',
          difficulty: 'Medium',
          pattern: 'advanced-dp-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/longest-increasing-subsequence/',
          estimatedTime: 35,
          tags: ['array', 'binary-search', 'dynamic-programming'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Netflix', 'Adobe', 'Bloomberg'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'russian-doll-envelopes',
          title: 'Russian Doll Envelopes',
          difficulty: 'Hard',
          pattern: 'advanced-dp-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/russian-doll-envelopes/',
          estimatedTime: 45,
          tags: ['array', 'binary-search', 'dynamic-programming', 'sorting'],
          companies: ['Google', 'Meta', 'Amazon', 'Microsoft'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'maximum-product-subarray',
          title: 'Maximum Product Subarray',
          difficulty: 'Medium',
          pattern: 'advanced-dp-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-product-subarray/',
          estimatedTime: 30,
          tags: ['array', 'dynamic-programming'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'LinkedIn', 'Adobe', 'Bloomberg'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'best-time-buy-sell-stock-iii',
          title: 'Best Time to Buy and Sell Stock III',
          difficulty: 'Hard',
          pattern: 'advanced-dp-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/',
          estimatedTime: 45,
          tags: ['array', 'dynamic-programming'],
          companies: ['Amazon', 'Microsoft', 'Google', 'Bloomberg', 'Uber', 'Citadel'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'best-time-buy-sell-stock-iv',
          title: 'Best Time to Buy and Sell Stock IV',
          difficulty: 'Hard',
          pattern: 'advanced-dp-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/',
          estimatedTime: 50,
          tags: ['array', 'dynamic-programming'],
          companies: ['Amazon', 'Microsoft', 'Google', 'Bloomberg', 'Citadel', 'Goldman'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'decode-ways',
          title: 'Decode Ways',
          difficulty: 'Medium',
          pattern: 'advanced-dp-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/decode-ways/',
          estimatedTime: 35,
          tags: ['string', 'dynamic-programming'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'LinkedIn', 'Uber'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'decode-ways-ii',
          title: 'Decode Ways II',
          difficulty: 'Hard',
          pattern: 'advanced-dp-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/decode-ways-ii/',
          estimatedTime: 50,
          tags: ['string', 'dynamic-programming'],
          companies: ['Google', 'Amazon', 'Meta'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'maximal-rectangle',
          title: 'Maximal Rectangle',
          difficulty: 'Hard',
          pattern: 'advanced-dp-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/maximal-rectangle/',
          estimatedTime: 50,
          tags: ['array', 'dynamic-programming', 'stack', 'matrix', 'monotonic-stack'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Bloomberg'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'longest-valid-parentheses',
          title: 'Longest Valid Parentheses',
          difficulty: 'Hard',
          pattern: 'advanced-dp-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/longest-valid-parentheses/',
          estimatedTime: 45,
          tags: ['string', 'dynamic-programming', 'stack'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Adobe', 'Bloomberg'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'edit-distance',
          title: 'Edit Distance',
          difficulty: 'Hard',
          pattern: 'advanced-dp-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/edit-distance/',
          estimatedTime: 45,
          tags: ['string', 'dynamic-programming'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'LinkedIn', 'Bloomberg', 'Uber'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    },
    {
      id: 'expert-techniques-pro',
      name: 'Expert Techniques',
      description: 'Master the hardest array/string problems asked in top tech companies',
      totalProblems: 7,
      completedProblems: 0,
      problems: [
        {
          id: 'median-two-sorted-arrays',
          title: 'Median of Two Sorted Arrays',
          difficulty: 'Hard',
          pattern: 'expert-techniques-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
          estimatedTime: 50,
          tags: ['array', 'binary-search', 'divide-and-conquer'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Adobe', 'Bloomberg', 'Uber', 'Airbnb'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'first-missing-positive',
          title: 'First Missing Positive',
          difficulty: 'Hard',
          pattern: 'expert-techniques-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/first-missing-positive/',
          estimatedTime: 40,
          tags: ['array', 'hash-table'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Bloomberg', 'Uber'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'sliding-window-maximum',
          title: 'Sliding Window Maximum',
          difficulty: 'Hard',
          pattern: 'expert-techniques-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/sliding-window-maximum/',
          estimatedTime: 45,
          tags: ['array', 'queue', 'sliding-window', 'heap', 'monotonic-queue'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'LinkedIn', 'Adobe', 'Bloomberg'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'longest-duplicate-substring',
          title: 'Longest Duplicate Substring',
          difficulty: 'Hard',
          pattern: 'expert-techniques-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/longest-duplicate-substring/',
          estimatedTime: 60,
          tags: ['string', 'binary-search', 'sliding-window', 'rolling-hash', 'suffix-array'],
          companies: ['Google', 'Meta', 'Amazon'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'regular-expression-matching',
          title: 'Regular Expression Matching',
          difficulty: 'Hard',
          pattern: 'expert-techniques-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/regular-expression-matching/',
          estimatedTime: 50,
          tags: ['string', 'dynamic-programming', 'recursion'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Adobe', 'Bloomberg', 'Airbnb'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'wildcard-matching',
          title: 'Wildcard Matching',
          difficulty: 'Hard',
          pattern: 'expert-techniques-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/wildcard-matching/',
          estimatedTime: 50,
          tags: ['string', 'dynamic-programming', 'greedy', 'recursion'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Bloomberg'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'text-justification',
          title: 'Text Justification',
          difficulty: 'Hard',
          pattern: 'expert-techniques-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/text-justification/',
          estimatedTime: 45,
          tags: ['array', 'string', 'simulation'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'LinkedIn', 'Airbnb'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    }
  ]
};