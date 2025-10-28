import { Category } from '../../types';

export const arraysStringsCategory: Category = {
  id: 'arrays-strings',
  name: 'Arrays & Strings',
  icon: 'Grid3X3',
  level: 'beginner',
  totalProblems: 50,
  completedProblems: 0,
  patterns: [
    {
      id: 'two-pointers-beginner',
      name: 'Two Pointers (Beginner)',
      description: 'Master basic two pointer technique with simple array problems',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'two-sum',
          title: 'Two Sum',
          difficulty: 'Easy',
          pattern: 'two-pointers-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/two-sum/',
          estimatedTime: 15,
          tags: ['array', 'hash-table'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'valid-palindrome',
          title: 'Valid Palindrome',
          difficulty: 'Easy',
          pattern: 'two-pointers-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/valid-palindrome/',
          estimatedTime: 20,
          tags: ['string', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'remove-duplicates-sorted-array',
          title: 'Remove Duplicates from Sorted Array',
          difficulty: 'Easy',
          pattern: 'two-pointers-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/',
          estimatedTime: 15,
          tags: ['array', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'move-zeroes',
          title: 'Move Zeroes',
          difficulty: 'Easy',
          pattern: 'two-pointers-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/move-zeroes/',
          estimatedTime: 20,
          tags: ['array', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'squares-sorted-array',
          title: 'Squares of a Sorted Array',
          difficulty: 'Easy',
          pattern: 'two-pointers-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/squares-of-a-sorted-array/',
          estimatedTime: 20,
          tags: ['array', 'two-pointers', 'sorting'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'reverse-string',
          title: 'Reverse String',
          difficulty: 'Easy',
          pattern: 'two-pointers-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/reverse-string/',
          estimatedTime: 10,
          tags: ['string', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'reverse-words-string-iii',
          title: 'Reverse Words in a String III',
          difficulty: 'Easy',
          pattern: 'two-pointers-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/reverse-words-in-a-string-iii/',
          estimatedTime: 15,
          tags: ['string', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'merge-sorted-array',
          title: 'Merge Sorted Array',
          difficulty: 'Easy',
          pattern: 'two-pointers-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/merge-sorted-array/',
          estimatedTime: 20,
          tags: ['array', 'two-pointers', 'sorting'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'intersection-two-arrays-ii',
          title: 'Intersection of Two Arrays II',
          difficulty: 'Easy',
          pattern: 'two-pointers-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/intersection-of-two-arrays-ii/',
          estimatedTime: 25,
          tags: ['array', 'hash-table', 'two-pointers', 'binary-search', 'sorting'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'remove-element',
          title: 'Remove Element',
          difficulty: 'Easy',
          pattern: 'two-pointers-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/remove-element/',
          estimatedTime: 15,
          tags: ['array', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'find-all-numbers-disappeared',
          title: 'Find All Numbers Disappeared in an Array',
          difficulty: 'Easy',
          pattern: 'two-pointers-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/',
          estimatedTime: 25,
          tags: ['array', 'hash-table'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'third-maximum-number',
          title: 'Third Maximum Number',
          difficulty: 'Easy',
          pattern: 'two-pointers-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/third-maximum-number/',
          estimatedTime: 20,
          tags: ['array', 'sorting'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'height-checker',
          title: 'Height Checker',
          difficulty: 'Easy',
          pattern: 'two-pointers-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/height-checker/',
          estimatedTime: 15,
          tags: ['array', 'sorting', 'counting-sort'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'max-consecutive-ones',
          title: 'Max Consecutive Ones',
          difficulty: 'Easy',
          pattern: 'two-pointers-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/max-consecutive-ones/',
          estimatedTime: 15,
          tags: ['array'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'duplicate-zeros',
          title: 'Duplicate Zeros',
          difficulty: 'Easy',
          pattern: 'two-pointers-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/duplicate-zeros/',
          estimatedTime: 20,
          tags: ['array', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    },
    {
      id: 'sliding-window-beginner',
      name: 'Sliding Window (Beginner)',
      description: 'Learn sliding window technique with basic subarray problems',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'best-time-buy-sell-stock',
          title: 'Best Time to Buy and Sell Stock',
          difficulty: 'Easy',
          pattern: 'sliding-window-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
          estimatedTime: 20,
          tags: ['array', 'dynamic-programming'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'contains-duplicate',
          title: 'Contains Duplicate',
          difficulty: 'Easy',
          pattern: 'sliding-window-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/contains-duplicate/',
          estimatedTime: 15,
          tags: ['array', 'hash-table', 'sorting'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'maximum-subarray',
          title: 'Maximum Subarray',
          difficulty: 'Medium',
          pattern: 'sliding-window-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-subarray/',
          estimatedTime: 25,
          tags: ['array', 'divide-and-conquer', 'dynamic-programming'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'find-pivot-index',
          title: 'Find Pivot Index',
          difficulty: 'Easy',
          pattern: 'sliding-window-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/find-pivot-index/',
          estimatedTime: 20,
          tags: ['array', 'prefix-sum'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'largest-number-twice-others',
          title: 'Largest Number At Least Twice of Others',
          difficulty: 'Easy',
          pattern: 'sliding-window-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/largest-number-at-least-twice-of-others/',
          estimatedTime: 15,
          tags: ['array'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'plus-one',
          title: 'Plus One',
          difficulty: 'Easy',
          pattern: 'sliding-window-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/plus-one/',
          estimatedTime: 15,
          tags: ['array', 'math'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'diagonal-traverse',
          title: 'Diagonal Traverse',
          difficulty: 'Medium',
          pattern: 'sliding-window-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/diagonal-traverse/',
          estimatedTime: 30,
          tags: ['array', 'matrix', 'simulation'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'spiral-matrix',
          title: 'Spiral Matrix',
          difficulty: 'Medium',
          pattern: 'sliding-window-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/spiral-matrix/',
          estimatedTime: 30,
          tags: ['array', 'matrix', 'simulation'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'pascal-triangle',
          title: 'Pascal\'s Triangle',
          difficulty: 'Easy',
          pattern: 'sliding-window-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/pascals-triangle/',
          estimatedTime: 20,
          tags: ['array', 'dynamic-programming'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'add-binary',
          title: 'Add Binary',
          difficulty: 'Easy',
          pattern: 'sliding-window-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/add-binary/',
          estimatedTime: 25,
          tags: ['math', 'string', 'bit-manipulation', 'simulation'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'implement-strstr',
          title: 'Implement strStr()',
          difficulty: 'Easy',
          pattern: 'sliding-window-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/implement-strstr/',
          estimatedTime: 25,
          tags: ['two-pointers', 'string', 'string-matching'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'longest-common-prefix',
          title: 'Longest Common Prefix',
          difficulty: 'Easy',
          pattern: 'sliding-window-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/longest-common-prefix/',
          estimatedTime: 20,
          tags: ['string'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'reverse-words-string',
          title: 'Reverse Words in a String',
          difficulty: 'Medium',
          pattern: 'sliding-window-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/reverse-words-in-a-string/',
          estimatedTime: 25,
          tags: ['two-pointers', 'string'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'reverse-string-ii',
          title: 'Reverse String II',
          difficulty: 'Easy',
          pattern: 'sliding-window-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/reverse-string-ii/',
          estimatedTime: 20,
          tags: ['two-pointers', 'string'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'array-partition-i',
          title: 'Array Partition I',
          difficulty: 'Easy',
          pattern: 'sliding-window-beginner',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/array-partition-i/',
          estimatedTime: 15,
          tags: ['array', 'greedy', 'sorting', 'counting-sort'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    },
    {
      id: 'basic-operations',
      name: 'Basic Array Operations',
      description: 'Master fundamental array and string operations',
      totalProblems: 20,
      completedProblems: 0,
      problems: [
        {
          id: 'single-number',
          title: 'Single Number',
          difficulty: 'Easy',
          pattern: 'basic-operations',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/single-number/',
          estimatedTime: 15,
          tags: ['array', 'bit-manipulation'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'majority-element',
          title: 'Majority Element',
          difficulty: 'Easy',
          pattern: 'basic-operations',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/majority-element/',
          estimatedTime: 15,
          tags: ['array', 'hash-table', 'divide-and-conquer', 'sorting', 'counting'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'missing-number',
          title: 'Missing Number',
          difficulty: 'Easy',
          pattern: 'basic-operations',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/missing-number/',
          estimatedTime: 15,
          tags: ['array', 'hash-table', 'math', 'bit-manipulation', 'sorting'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'valid-anagram',
          title: 'Valid Anagram',
          difficulty: 'Easy',
          pattern: 'basic-operations',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/valid-anagram/',
          estimatedTime: 15,
          tags: ['hash-table', 'string', 'sorting'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'is-subsequence',
          title: 'Is Subsequence',
          difficulty: 'Easy',
          pattern: 'basic-operations',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/is-subsequence/',
          estimatedTime: 15,
          tags: ['two-pointers', 'string', 'dynamic-programming'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'running-sum-1d-array',
          title: 'Running Sum of 1d Array',
          difficulty: 'Easy',
          pattern: 'basic-operations',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/running-sum-of-1d-array/',
          estimatedTime: 10,
          tags: ['array', 'prefix-sum'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'shuffle-array',
          title: 'Shuffle the Array',
          difficulty: 'Easy',
          pattern: 'basic-operations',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/shuffle-the-array/',
          estimatedTime: 10,
          tags: ['array'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'richest-customer-wealth',
          title: 'Richest Customer Wealth',
          difficulty: 'Easy',
          pattern: 'basic-operations',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/richest-customer-wealth/',
          estimatedTime: 10,
          tags: ['array', 'matrix'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'kids-greatest-candies',
          title: 'Kids With the Greatest Number of Candies',
          difficulty: 'Easy',
          pattern: 'basic-operations',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/',
          estimatedTime: 10,
          tags: ['array'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'number-good-pairs',
          title: 'Number of Good Pairs',
          difficulty: 'Easy',
          pattern: 'basic-operations',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/number-of-good-pairs/',
          estimatedTime: 10,
          tags: ['array', 'hash-table', 'math', 'counting'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'how-many-numbers-smaller',
          title: 'How Many Numbers Are Smaller Than the Current Number',
          difficulty: 'Easy',
          pattern: 'basic-operations',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/',
          estimatedTime: 15,
          tags: ['array', 'hash-table', 'sorting', 'counting'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'decompress-run-length-encoded',
          title: 'Decompress Run-Length Encoded List',
          difficulty: 'Easy',
          pattern: 'basic-operations',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/decompress-run-length-encoded-list/',
          estimatedTime: 15,
          tags: ['array'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'create-target-array',
          title: 'Create Target Array in the Given Order',
          difficulty: 'Easy',
          pattern: 'basic-operations',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/create-target-array-in-the-given-order/',
          estimatedTime: 15,
          tags: ['array', 'simulation'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'xor-operation-array',
          title: 'XOR Operation in an Array',
          difficulty: 'Easy',
          pattern: 'basic-operations',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/xor-operation-in-an-array/',
          estimatedTime: 10,
          tags: ['math', 'bit-manipulation'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'count-items-matching-rule',
          title: 'Count Items Matching a Rule',
          difficulty: 'Easy',
          pattern: 'basic-operations',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/count-items-matching-a-rule/',
          estimatedTime: 10,
          tags: ['array', 'string'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'find-center-star-graph',
          title: 'Find Center of Star Graph',
          difficulty: 'Easy',
          pattern: 'basic-operations',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/find-center-of-star-graph/',
          estimatedTime: 10,
          tags: ['graph'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'sum-1d-array-after-queries',
          title: 'Sum of All Odd Length Subarrays',
          difficulty: 'Easy',
          pattern: 'basic-operations',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/sum-of-all-odd-length-subarrays/',
          estimatedTime: 20,
          tags: ['array', 'math', 'prefix-sum'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'matrix-diagonal-sum',
          title: 'Matrix Diagonal Sum',
          difficulty: 'Easy',
          pattern: 'basic-operations',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/matrix-diagonal-sum/',
          estimatedTime: 15,
          tags: ['array', 'matrix'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'flipping-image',
          title: 'Flipping an Image',
          difficulty: 'Easy',
          pattern: 'basic-operations',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/flipping-an-image/',
          estimatedTime: 15,
          tags: ['array', 'two-pointers', 'matrix', 'simulation'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'transpose-matrix',
          title: 'Transpose Matrix',
          difficulty: 'Easy',
          pattern: 'basic-operations',
          category: 'arrays-strings',
          leetcodeUrl: 'https://leetcode.com/problems/transpose-matrix/',
          estimatedTime: 15,
          tags: ['array', 'matrix', 'simulation'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    }
  ]
};

// Import intermediate category from separate file
export { arraysStringsIntermediateCategory } from './arraysStringsIntermediate';

// OLD Intermediate level - REPLACED WITH REFINED VERSION ABOVE
/*
export const arraysStringsIntermediateCategory: Category = {
  id: 'arrays-strings-intermediate',
  name: 'Arrays & Strings',
  icon: 'Grid3X3',
  level: 'intermediate',
  totalProblems: 45,
  completedProblems: 0,
  patterns: [
    {
      id: 'two-pointers-intermediate',
      name: 'Advanced Two Pointers',
      description: 'Master complex two pointer problems with multiple arrays and advanced techniques',
      totalProblems: 15,
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
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'four-sum',
          title: '4Sum',
          difficulty: 'Medium',
          pattern: 'two-pointers-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/4sum/',
          estimatedTime: 35,
          tags: ['array', 'two-pointers', 'sorting'],
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
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'search-2d-matrix',
          title: 'Search a 2D Matrix',
          difficulty: 'Medium',
          pattern: 'two-pointers-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/search-a-2d-matrix/',
          estimatedTime: 25,
          tags: ['array', 'binary-search', 'matrix'],
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
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'search-rotated-sorted-array-ii',
          title: 'Search in Rotated Sorted Array II',
          difficulty: 'Medium',
          pattern: 'two-pointers-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/search-in-rotated-sorted-array-ii/',
          estimatedTime: 35,
          tags: ['array', 'binary-search'],
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
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'find-minimum-rotated-sorted-array-ii',
          title: 'Find Minimum in Rotated Sorted Array II',
          difficulty: 'Hard',
          pattern: 'two-pointers-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/',
          estimatedTime: 35,
          tags: ['array', 'binary-search'],
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
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'search-insert-position',
          title: 'Search Insert Position',
          difficulty: 'Easy',
          pattern: 'two-pointers-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/search-insert-position/',
          estimatedTime: 20,
          tags: ['array', 'binary-search'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    },
    {
      id: 'sliding-window-intermediate',
      name: 'Advanced Sliding Window',
      description: 'Master complex sliding window problems with variable window sizes',
      totalProblems: 15,
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
          id: 'binary-subarrays-with-sum',
          title: 'Binary Subarrays With Sum',
          difficulty: 'Medium',
          pattern: 'sliding-window-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/binary-subarrays-with-sum/',
          estimatedTime: 35,
          tags: ['array', 'hash-table', 'sliding-window', 'prefix-sum'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'subarrays-k-different-integers',
          title: 'Subarrays with K Different Integers',
          difficulty: 'Hard',
          pattern: 'sliding-window-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/subarrays-with-k-different-integers/',
          estimatedTime: 45,
          tags: ['array', 'hash-table', 'sliding-window', 'counting'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'replace-substring-balanced-string',
          title: 'Replace the Substring for Balanced String',
          difficulty: 'Medium',
          pattern: 'sliding-window-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/replace-the-substring-for-balanced-string/',
          estimatedTime: 40,
          tags: ['string', 'sliding-window'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'get-equal-substrings-budget',
          title: 'Get Equal Substrings Within Budget',
          difficulty: 'Medium',
          pattern: 'sliding-window-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/get-equal-substrings-within-budget/',
          estimatedTime: 30,
          tags: ['string', 'binary-search', 'sliding-window', 'prefix-sum'],
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
          id: 'frequency-most-frequent-element',
          title: 'Frequency of the Most Frequent Element',
          difficulty: 'Medium',
          pattern: 'sliding-window-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/frequency-of-the-most-frequent-element/',
          estimatedTime: 35,
          tags: ['array', 'binary-search', 'greedy', 'sliding-window', 'sorting', 'prefix-sum'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'longest-nice-substring',
          title: 'Longest Nice Substring',
          difficulty: 'Easy',
          pattern: 'sliding-window-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/longest-nice-substring/',
          estimatedTime: 25,
          tags: ['hash-table', 'string', 'divide-and-conquer', 'bit-manipulation', 'sliding-window'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    },
    {
      id: 'prefix-sum-intermediate',
      name: 'Advanced Prefix Sum',
      description: 'Master complex prefix sum problems with 2D arrays and range queries',
      totalProblems: 15,
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
          id: 'range-sum-query-mutable',
          title: 'Range Sum Query - Mutable',
          difficulty: 'Medium',
          pattern: 'prefix-sum-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/range-sum-query-mutable/',
          estimatedTime: 35,
          tags: ['array', 'design', 'binary-indexed-tree', 'segment-tree'],
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
          id: 'path-sum-iii',
          title: 'Path Sum III',
          difficulty: 'Medium',
          pattern: 'prefix-sum-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/path-sum-iii/',
          estimatedTime: 35,
          tags: ['tree', 'depth-first-search', 'binary-tree'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'find-pivot-index',
          title: 'Find Pivot Index',
          difficulty: 'Easy',
          pattern: 'prefix-sum-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/find-pivot-index/',
          estimatedTime: 20,
          tags: ['array', 'prefix-sum'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'minimum-value-positive-step-sum',
          title: 'Minimum Value to Get Positive Step by Step Sum',
          difficulty: 'Easy',
          pattern: 'prefix-sum-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/',
          estimatedTime: 20,
          tags: ['array', 'prefix-sum'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'corporate-flight-bookings',
          title: 'Corporate Flight Bookings',
          difficulty: 'Medium',
          pattern: 'prefix-sum-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/corporate-flight-bookings/',
          estimatedTime: 30,
          tags: ['array', 'prefix-sum'],
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
          id: 'ways-split-array-three-subarrays',
          title: 'Ways to Split Array Into Three Subarrays',
          difficulty: 'Medium',
          pattern: 'prefix-sum-intermediate',
          category: 'arrays-strings-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/',
          estimatedTime: 40,
          tags: ['array', 'two-pointers', 'binary-search', 'prefix-sum'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    }
  ]
};
*/

// Import pro category from separate file
export { arraysStringsProCategory } from './arraysStringsPro';

// OLD Pro level - REPLACED WITH REFINED VERSION ABOVE
/*
export const arraysStringsProCategory: Category = {
  id: 'arrays-strings-pro',
  name: 'Arrays & Strings',
  icon: 'Grid3X3',
  level: 'pro',
  totalProblems: 45,
  completedProblems: 0,
  patterns: [
    {
      id: 'two-pointers-pro',
      name: 'Expert Two Pointers',
      description: 'Master the most challenging two pointer problems for FAANG interviews',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'trapping-rain-water',
          title: 'Trapping Rain Water',
          difficulty: 'Hard',
          pattern: 'two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/trapping-rain-water/',
          estimatedTime: 40,
          tags: ['array', 'two-pointers', 'dynamic-programming', 'stack', 'monotonic-stack'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'candy',
          title: 'Candy',
          difficulty: 'Hard',
          pattern: 'two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/candy/',
          estimatedTime: 45,
          tags: ['array', 'greedy'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'first-missing-positive',
          title: 'First Missing Positive',
          difficulty: 'Hard',
          pattern: 'two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/first-missing-positive/',
          estimatedTime: 40,
          tags: ['array', 'hash-table'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'largest-rectangle-histogram',
          title: 'Largest Rectangle in Histogram',
          difficulty: 'Hard',
          pattern: 'two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/largest-rectangle-in-histogram/',
          estimatedTime: 45,
          tags: ['array', 'stack', 'monotonic-stack'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'maximal-rectangle',
          title: 'Maximal Rectangle',
          difficulty: 'Hard',
          pattern: 'two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/maximal-rectangle/',
          estimatedTime: 50,
          tags: ['array', 'dynamic-programming', 'stack', 'matrix', 'monotonic-stack'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'median-two-sorted-arrays',
          title: 'Median of Two Sorted Arrays',
          difficulty: 'Hard',
          pattern: 'two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
          estimatedTime: 45,
          tags: ['array', 'binary-search', 'divide-and-conquer'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'merge-k-sorted-arrays',
          title: 'Merge k Sorted Arrays',
          difficulty: 'Hard',
          pattern: 'two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/merge-k-sorted-lists/',
          estimatedTime: 40,
          tags: ['linked-list', 'divide-and-conquer', 'heap', 'merge-sort'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'sliding-window-maximum',
          title: 'Sliding Window Maximum',
          difficulty: 'Hard',
          pattern: 'two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/sliding-window-maximum/',
          estimatedTime: 40,
          tags: ['array', 'queue', 'sliding-window', 'heap', 'monotonic-queue'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'minimum-window-substring',
          title: 'Minimum Window Substring',
          difficulty: 'Hard',
          pattern: 'two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-window-substring/',
          estimatedTime: 45,
          tags: ['hash-table', 'string', 'sliding-window'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'substring-concatenation-words',
          title: 'Substring with Concatenation of All Words',
          difficulty: 'Hard',
          pattern: 'two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/substring-with-concatenation-of-all-words/',
          estimatedTime: 50,
          tags: ['hash-table', 'string', 'sliding-window'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'longest-duplicate-substring',
          title: 'Longest Duplicate Substring',
          difficulty: 'Hard',
          pattern: 'two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/longest-duplicate-substring/',
          estimatedTime: 60,
          tags: ['string', 'binary-search', 'sliding-window', 'rolling-hash', 'suffix-array'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'shortest-subarray-sum-k',
          title: 'Shortest Subarray with Sum at Least K',
          difficulty: 'Hard',
          pattern: 'two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/',
          estimatedTime: 45,
          tags: ['array', 'binary-search', 'queue', 'sliding-window', 'heap', 'prefix-sum', 'monotonic-queue'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'max-chunks-make-sorted-ii',
          title: 'Max Chunks To Make Sorted II',
          difficulty: 'Hard',
          pattern: 'two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/max-chunks-to-make-sorted-ii/',
          estimatedTime: 40,
          tags: ['array', 'stack', 'greedy', 'sorting', 'monotonic-stack'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'count-subarrays-median-k',
          title: 'Count Subarrays With Median K',
          difficulty: 'Hard',
          pattern: 'two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/count-subarrays-with-median-k/',
          estimatedTime: 50,
          tags: ['array', 'hash-table', 'prefix-sum'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'number-subarrays-bounded-maximum',
          title: 'Number of Subarrays with Bounded Maximum',
          difficulty: 'Medium',
          pattern: 'two-pointers-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/',
          estimatedTime: 35,
          tags: ['array', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    },
    {
      id: 'advanced-algorithms-pro',
      name: 'Advanced Array Algorithms',
      description: 'Master complex algorithmic patterns for expert-level problems',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'regular-expression-matching',
          title: 'Regular Expression Matching',
          difficulty: 'Hard',
          pattern: 'advanced-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/regular-expression-matching/',
          estimatedTime: 50,
          tags: ['string', 'dynamic-programming', 'recursion'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'wildcard-matching',
          title: 'Wildcard Matching',
          difficulty: 'Hard',
          pattern: 'advanced-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/wildcard-matching/',
          estimatedTime: 50,
          tags: ['string', 'dynamic-programming', 'greedy', 'recursion'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'edit-distance',
          title: 'Edit Distance',
          difficulty: 'Hard',
          pattern: 'advanced-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/edit-distance/',
          estimatedTime: 45,
          tags: ['string', 'dynamic-programming'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'interleaving-string',
          title: 'Interleaving String',
          difficulty: 'Medium',
          pattern: 'advanced-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/interleaving-string/',
          estimatedTime: 40,
          tags: ['string', 'dynamic-programming'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'scramble-string',
          title: 'Scramble String',
          difficulty: 'Hard',
          pattern: 'advanced-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/scramble-string/',
          estimatedTime: 50,
          tags: ['string', 'dynamic-programming'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'distinct-subsequences',
          title: 'Distinct Subsequences',
          difficulty: 'Hard',
          pattern: 'advanced-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/distinct-subsequences/',
          estimatedTime: 45,
          tags: ['string', 'dynamic-programming'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'palindrome-partitioning-ii',
          title: 'Palindrome Partitioning II',
          difficulty: 'Hard',
          pattern: 'advanced-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/palindrome-partitioning-ii/',
          estimatedTime: 50,
          tags: ['string', 'dynamic-programming'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'word-break-ii',
          title: 'Word Break II',
          difficulty: 'Hard',
          pattern: 'advanced-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/word-break-ii/',
          estimatedTime: 45,
          tags: ['hash-table', 'string', 'dynamic-programming', 'backtracking', 'trie', 'memoization'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'text-justification',
          title: 'Text Justification',
          difficulty: 'Hard',
          pattern: 'advanced-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/text-justification/',
          estimatedTime: 45,
          tags: ['array', 'string', 'simulation'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'basic-calculator',
          title: 'Basic Calculator',
          difficulty: 'Hard',
          pattern: 'advanced-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/basic-calculator/',
          estimatedTime: 40,
          tags: ['math', 'string', 'stack', 'recursion'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'basic-calculator-ii',
          title: 'Basic Calculator II',
          difficulty: 'Medium',
          pattern: 'advanced-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/basic-calculator-ii/',
          estimatedTime: 35,
          tags: ['math', 'string', 'stack'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'basic-calculator-iii',
          title: 'Basic Calculator III',
          difficulty: 'Hard',
          pattern: 'advanced-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/basic-calculator-iii/',
          estimatedTime: 50,
          tags: ['math', 'string', 'stack', 'recursion'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'expression-add-operators',
          title: 'Expression Add Operators',
          difficulty: 'Hard',
          pattern: 'advanced-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/expression-add-operators/',
          estimatedTime: 55,
          tags: ['math', 'string', 'backtracking'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'valid-number',
          title: 'Valid Number',
          difficulty: 'Hard',
          pattern: 'advanced-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/valid-number/',
          estimatedTime: 40,
          tags: ['string'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'integer-to-english-words',
          title: 'Integer to English Words',
          difficulty: 'Hard',
          pattern: 'advanced-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/integer-to-english-words/',
          estimatedTime: 45,
          tags: ['math', 'string', 'recursion'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    },
    {
      id: 'matrix-algorithms-pro',
      name: 'Advanced Matrix Algorithms',
      description: 'Master complex 2D array and matrix manipulation problems',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'rotate-image',
          title: 'Rotate Image',
          difficulty: 'Medium',
          pattern: 'matrix-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/rotate-image/',
          estimatedTime: 30,
          tags: ['array', 'math', 'matrix'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'spiral-matrix-ii',
          title: 'Spiral Matrix II',
          difficulty: 'Medium',
          pattern: 'matrix-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/spiral-matrix-ii/',
          estimatedTime: 30,
          tags: ['array', 'matrix', 'simulation'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'set-matrix-zeroes',
          title: 'Set Matrix Zeroes',
          difficulty: 'Medium',
          pattern: 'matrix-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/set-matrix-zeroes/',
          estimatedTime: 30,
          tags: ['array', 'hash-table', 'matrix'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'game-of-life',
          title: 'Game of Life',
          difficulty: 'Medium',
          pattern: 'matrix-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/game-of-life/',
          estimatedTime: 35,
          tags: ['array', 'matrix', 'simulation'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'word-search-ii',
          title: 'Word Search II',
          difficulty: 'Hard',
          pattern: 'matrix-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/word-search-ii/',
          estimatedTime: 50,
          tags: ['array', 'string', 'backtracking', 'trie', 'matrix'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'sudoku-solver',
          title: 'Sudoku Solver',
          difficulty: 'Hard',
          pattern: 'matrix-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/sudoku-solver/',
          estimatedTime: 50,
          tags: ['array', 'backtracking', 'matrix'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'n-queens',
          title: 'N-Queens',
          difficulty: 'Hard',
          pattern: 'matrix-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/n-queens/',
          estimatedTime: 50,
          tags: ['array', 'backtracking'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'n-queens-ii',
          title: 'N-Queens II',
          difficulty: 'Hard',
          pattern: 'matrix-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/n-queens-ii/',
          estimatedTime: 45,
          tags: ['backtracking'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'unique-paths-iii',
          title: 'Unique Paths III',
          difficulty: 'Hard',
          pattern: 'matrix-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/unique-paths-iii/',
          estimatedTime: 45,
          tags: ['array', 'backtracking', 'bit-manipulation', 'matrix'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'shortest-path-binary-matrix',
          title: 'Shortest Path in Binary Matrix',
          difficulty: 'Medium',
          pattern: 'matrix-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/shortest-path-in-binary-matrix/',
          estimatedTime: 35,
          tags: ['array', 'breadth-first-search', 'matrix'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'dungeon-game',
          title: 'Dungeon Game',
          difficulty: 'Hard',
          pattern: 'matrix-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/dungeon-game/',
          estimatedTime: 45,
          tags: ['array', 'dynamic-programming', 'matrix'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'cherry-pickup',
          title: 'Cherry Pickup',
          difficulty: 'Hard',
          pattern: 'matrix-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/cherry-pickup/',
          estimatedTime: 50,
          tags: ['array', 'dynamic-programming', 'matrix'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'cherry-pickup-ii',
          title: 'Cherry Pickup II',
          difficulty: 'Hard',
          pattern: 'matrix-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/cherry-pickup-ii/',
          estimatedTime: 50,
          tags: ['array', 'dynamic-programming', 'matrix'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'minimum-path-sum',
          title: 'Minimum Path Sum',
          difficulty: 'Medium',
          pattern: 'matrix-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-path-sum/',
          estimatedTime: 30,
          tags: ['array', 'dynamic-programming', 'matrix'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'maximal-square',
          title: 'Maximal Square',
          difficulty: 'Medium',
          pattern: 'matrix-algorithms-pro',
          category: 'arrays-strings-pro',
          leetcodeUrl: 'https://leetcode.com/problems/maximal-square/',
          estimatedTime: 35,
          tags: ['array', 'dynamic-programming', 'matrix'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    }
  ]
};*/
