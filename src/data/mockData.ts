import { Category } from '../types';

// Beginner Level Categories (10-15 LPA Jobs)
export const beginnerCategories: Category[] = [
  {
    id: 'beginner-arrays',
    name: 'Arrays & Strings',
    icon: 'Grid3X3',
    level: 'beginner',
    patterns: [
      {
        id: 'beginner-two-pointers',
        name: 'Two Pointers',
        description: 'Master the two-pointer technique for array problems',
        problems: [
          {
            id: 'two-sum',
            title: 'Two Sum',
            difficulty: 'Easy' as const,
            pattern: 'Two Pointers',
            category: 'Arrays & Strings',
            leetcodeUrl: 'https://leetcode.com/problems/two-sum/',
            estimatedTime: 15,
            tags: ['Array', 'Hash Table'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'valid-palindrome',
            title: 'Valid Palindrome',
            difficulty: 'Easy' as const,
            pattern: 'Two Pointers',
            category: 'Arrays & Strings',
            leetcodeUrl: 'https://leetcode.com/problems/valid-palindrome/',
            estimatedTime: 20,
            tags: ['Two Pointers', 'String'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'remove-duplicates-sorted-array',
            title: 'Remove Duplicates from Sorted Array',
            difficulty: 'Easy' as const,
            pattern: 'Two Pointers',
            category: 'Arrays & Strings',
            leetcodeUrl: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/',
            estimatedTime: 15,
            tags: ['Array', 'Two Pointers'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 3,
        completedProblems: 0
      },
      {
        id: 'beginner-sliding-window',
        name: 'Sliding Window',
        description: 'Learn sliding window technique for substring problems',
        problems: [
          {
            id: 'best-time-buy-sell-stock',
            title: 'Best Time to Buy and Sell Stock',
            difficulty: 'Easy' as const,
            pattern: 'Sliding Window',
            category: 'Arrays & Strings',
            leetcodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
            estimatedTime: 20,
            tags: ['Array', 'Dynamic Programming'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'maximum-average-subarray',
            title: 'Maximum Average Subarray I',
            difficulty: 'Easy' as const,
            pattern: 'Sliding Window',
            category: 'Arrays & Strings',
            leetcodeUrl: 'https://leetcode.com/problems/maximum-average-subarray-i/',
            estimatedTime: 15,
            tags: ['Array', 'Sliding Window'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 5,
    completedProblems: 0
  },
  {
    id: 'beginner-linked-lists',
    name: 'Linked Lists',
    icon: 'Link',
    level: 'beginner',
    patterns: [
      {
        id: 'beginner-linked-list-basics',
        name: 'Linked List Basics',
        description: 'Fundamental linked list operations',
        problems: [
          {
            id: 'reverse-linked-list',
            title: 'Reverse Linked List',
            difficulty: 'Easy' as const,
            pattern: 'Linked List Basics',
            category: 'Linked Lists',
            leetcodeUrl: 'https://leetcode.com/problems/reverse-linked-list/',
            estimatedTime: 20,
            tags: ['Linked List', 'Recursion'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'merge-two-sorted-lists',
            title: 'Merge Two Sorted Lists',
            difficulty: 'Easy' as const,
            pattern: 'Linked List Basics',
            category: 'Linked Lists',
            leetcodeUrl: 'https://leetcode.com/problems/merge-two-sorted-lists/',
            estimatedTime: 25,
            tags: ['Linked List', 'Recursion'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'delete-node-linked-list',
            title: 'Delete Node in a Linked List',
            difficulty: 'Easy' as const,
            pattern: 'Linked List Basics',
            category: 'Linked Lists',
            leetcodeUrl: 'https://leetcode.com/problems/delete-node-in-a-linked-list/',
            estimatedTime: 10,
            tags: ['Linked List'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 3,
        completedProblems: 0
      }
    ],
    totalProblems: 3,
    completedProblems: 0
  },
  {
    id: 'beginner-stacks-queues',
    name: 'Stacks & Queues',
    icon: 'Layers',
    level: 'beginner',
    patterns: [
      {
        id: 'beginner-stack-basics',
        name: 'Stack Basics',
        description: 'Basic stack operations and applications',
        problems: [
          {
            id: 'valid-parentheses',
            title: 'Valid Parentheses',
            difficulty: 'Easy' as const,
            pattern: 'Stack Basics',
            category: 'Stacks & Queues',
            leetcodeUrl: 'https://leetcode.com/problems/valid-parentheses/',
            estimatedTime: 20,
            tags: ['String', 'Stack'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'implement-queue-using-stacks',
            title: 'Implement Queue using Stacks',
            difficulty: 'Easy' as const,
            pattern: 'Stack Basics',
            category: 'Stacks & Queues',
            leetcodeUrl: 'https://leetcode.com/problems/implement-queue-using-stacks/',
            estimatedTime: 25,
            tags: ['Stack', 'Design', 'Queue'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  },
  {
    id: 'beginner-binary-trees',
    name: 'Binary Trees',
    icon: 'GitBranch',
    level: 'beginner',
    patterns: [
      {
        id: 'beginner-tree-traversal',
        name: 'Tree Traversal',
        description: 'Basic tree traversal techniques',
        problems: [
          {
            id: 'inorder-traversal',
            title: 'Binary Tree Inorder Traversal',
            difficulty: 'Easy' as const,
            pattern: 'Tree Traversal',
            category: 'Binary Trees',
            leetcodeUrl: 'https://leetcode.com/problems/binary-tree-inorder-traversal/',
            estimatedTime: 20,
            tags: ['Tree', 'Depth-First Search'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'maximum-depth-binary-tree',
            title: 'Maximum Depth of Binary Tree',
            difficulty: 'Easy' as const,
            pattern: 'Tree Traversal',
            category: 'Binary Trees',
            leetcodeUrl: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
            estimatedTime: 15,
            tags: ['Tree', 'Depth-First Search'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'same-tree',
            title: 'Same Tree',
            difficulty: 'Easy' as const,
            pattern: 'Tree Traversal',
            category: 'Binary Trees',
            leetcodeUrl: 'https://leetcode.com/problems/same-tree/',
            estimatedTime: 15,
            tags: ['Tree', 'Depth-First Search'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 3,
        completedProblems: 0
      }
    ],
    totalProblems: 3,
    completedProblems: 0
  },
  {
    id: 'beginner-hash-tables',
    name: 'Hash Tables',
    icon: 'Hash',
    level: 'beginner',
    patterns: [
      {
        id: 'beginner-hash-map',
        name: 'Hash Map Operations',
        description: 'Basic hash map usage and operations',
        problems: [
          {
            id: 'contains-duplicate',
            title: 'Contains Duplicate',
            difficulty: 'Easy' as const,
            pattern: 'Hash Map Operations',
            category: 'Hash Tables',
            leetcodeUrl: 'https://leetcode.com/problems/contains-duplicate/',
            estimatedTime: 15,
            tags: ['Array', 'Hash Table'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'valid-anagram',
            title: 'Valid Anagram',
            difficulty: 'Easy' as const,
            pattern: 'Hash Map Operations',
            category: 'Hash Tables',
            leetcodeUrl: 'https://leetcode.com/problems/valid-anagram/',
            estimatedTime: 15,
            tags: ['Hash Table', 'String', 'Sorting'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  },
  {
    id: 'beginner-sorting-searching',
    name: 'Sorting & Searching',
    icon: 'Search',
    level: 'beginner',
    patterns: [
      {
        id: 'beginner-binary-search',
        name: 'Binary Search Basics',
        description: 'Fundamental binary search technique',
        problems: [
          {
            id: 'binary-search',
            title: 'Binary Search',
            difficulty: 'Easy' as const,
            pattern: 'Binary Search Basics',
            category: 'Sorting & Searching',
            leetcodeUrl: 'https://leetcode.com/problems/binary-search/',
            estimatedTime: 20,
            tags: ['Array', 'Binary Search'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'search-insert-position',
            title: 'Search Insert Position',
            difficulty: 'Easy' as const,
            pattern: 'Binary Search Basics',
            category: 'Sorting & Searching',
            leetcodeUrl: 'https://leetcode.com/problems/search-insert-position/',
            estimatedTime: 15,
            tags: ['Array', 'Binary Search'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  },
  {
    id: 'beginner-recursion',
    name: 'Recursion',
    icon: 'RotateCcw',
    level: 'beginner',
    patterns: [
      {
        id: 'beginner-basic-recursion',
        name: 'Basic Recursion',
        description: 'Fundamental recursion concepts',
        problems: [
          {
            id: 'fibonacci-number',
            title: 'Fibonacci Number',
            difficulty: 'Easy' as const,
            pattern: 'Basic Recursion',
            category: 'Recursion',
            leetcodeUrl: 'https://leetcode.com/problems/fibonacci-number/',
            estimatedTime: 15,
            tags: ['Math', 'Dynamic Programming', 'Recursion'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'power-of-two',
            title: 'Power of Two',
            difficulty: 'Easy' as const,
            pattern: 'Basic Recursion',
            category: 'Recursion',
            leetcodeUrl: 'https://leetcode.com/problems/power-of-two/',
            estimatedTime: 10,
            tags: ['Math', 'Bit Manipulation', 'Recursion'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  },
  {
    id: 'beginner-math-logic',
    name: 'Math & Logic',
    icon: 'Calculator',
    level: 'beginner',
    patterns: [
      {
        id: 'beginner-mathematical-problems',
        name: 'Mathematical Problems',
        description: 'Basic mathematical and logical problems',
        problems: [
          {
            id: 'palindrome-number',
            title: 'Palindrome Number',
            difficulty: 'Easy' as const,
            pattern: 'Mathematical Problems',
            category: 'Math & Logic',
            leetcodeUrl: 'https://leetcode.com/problems/palindrome-number/',
            estimatedTime: 15,
            tags: ['Math'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'roman-to-integer',
            title: 'Roman to Integer',
            difficulty: 'Easy' as const,
            pattern: 'Mathematical Problems',
            category: 'Math & Logic',
            leetcodeUrl: 'https://leetcode.com/problems/roman-to-integer/',
            estimatedTime: 20,
            tags: ['Hash Table', 'Math', 'String'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  },
  {
    id: 'beginner-greedy',
    name: 'Greedy Algorithms',
    icon: 'TrendingUp',
    level: 'beginner',
    patterns: [
      {
        id: 'beginner-greedy-approach',
        name: 'Greedy Approach',
        description: 'Basic greedy algorithm problems',
        problems: [
          {
            id: 'maximum-subarray',
            title: 'Maximum Subarray',
            difficulty: 'Easy' as const,
            pattern: 'Greedy Approach',
            category: 'Greedy Algorithms',
            leetcodeUrl: 'https://leetcode.com/problems/maximum-subarray/',
            estimatedTime: 20,
            tags: ['Array', 'Divide and Conquer', 'Dynamic Programming'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'assign-cookies',
            title: 'Assign Cookies',
            difficulty: 'Easy' as const,
            pattern: 'Greedy Approach',
            category: 'Greedy Algorithms',
            leetcodeUrl: 'https://leetcode.com/problems/assign-cookies/',
            estimatedTime: 15,
            tags: ['Array', 'Two Pointers', 'Greedy', 'Sorting'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  },
  {
    id: 'beginner-dynamic-programming',
    name: 'Dynamic Programming',
    icon: 'Zap',
    level: 'beginner',
    patterns: [
      {
        id: 'beginner-dp-fundamentals',
        name: 'DP Fundamentals',
        description: 'Basic dynamic programming concepts',
        problems: [
          {
            id: 'climbing-stairs',
            title: 'Climbing Stairs',
            difficulty: 'Easy' as const,
            pattern: 'DP Fundamentals',
            category: 'Dynamic Programming',
            leetcodeUrl: 'https://leetcode.com/problems/climbing-stairs/',
            estimatedTime: 20,
            tags: ['Math', 'Dynamic Programming', 'Memoization'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'min-cost-climbing-stairs',
            title: 'Min Cost Climbing Stairs',
            difficulty: 'Easy' as const,
            pattern: 'DP Fundamentals',
            category: 'Dynamic Programming',
            leetcodeUrl: 'https://leetcode.com/problems/min-cost-climbing-stairs/',
            estimatedTime: 25,
            tags: ['Array', 'Dynamic Programming'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  }
];

// Intermediate Level Categories (15-20 LPA Positions)
export const intermediateCategories: Category[] = [
  {
    id: 'intermediate-arrays',
    name: 'Arrays & Strings',
    icon: 'Grid3X3',
    level: 'intermediate',
    patterns: [
      {
        id: 'intermediate-advanced-two-pointers',
        name: 'Advanced Two Pointers',
        description: 'Complex two-pointer problems',
        problems: [
          {
            id: 'container-with-most-water',
            title: 'Container With Most Water',
            difficulty: 'Medium' as const,
            pattern: 'Advanced Two Pointers',
            category: 'Arrays & Strings',
            leetcodeUrl: 'https://leetcode.com/problems/container-with-most-water/',
            estimatedTime: 25,
            tags: ['Array', 'Two Pointers', 'Greedy'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'three-sum',
            title: '3Sum',
            difficulty: 'Medium' as const,
            pattern: 'Advanced Two Pointers',
            category: 'Arrays & Strings',
            leetcodeUrl: 'https://leetcode.com/problems/3sum/',
            estimatedTime: 30,
            tags: ['Array', 'Two Pointers', 'Sorting'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'sort-colors',
            title: 'Sort Colors',
            difficulty: 'Medium' as const,
            pattern: 'Advanced Two Pointers',
            category: 'Arrays & Strings',
            leetcodeUrl: 'https://leetcode.com/problems/sort-colors/',
            estimatedTime: 20,
            tags: ['Array', 'Two Pointers', 'Sorting'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 3,
        completedProblems: 0
      },
      {
        id: 'intermediate-advanced-sliding-window',
        name: 'Advanced Sliding Window',
        description: 'Complex sliding window problems',
        problems: [
          {
            id: 'longest-substring-without-repeating',
            title: 'Longest Substring Without Repeating Characters',
            difficulty: 'Medium' as const,
            pattern: 'Advanced Sliding Window',
            category: 'Arrays & Strings',
            leetcodeUrl: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
            estimatedTime: 25,
            tags: ['Hash Table', 'String', 'Sliding Window'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'minimum-window-substring',
            title: 'Minimum Window Substring',
            difficulty: 'Hard' as const,
            pattern: 'Advanced Sliding Window',
            category: 'Arrays & Strings',
            leetcodeUrl: 'https://leetcode.com/problems/minimum-window-substring/',
            estimatedTime: 40,
            tags: ['Hash Table', 'String', 'Sliding Window'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 5,
    completedProblems: 0
  },
  {
    id: 'intermediate-linked-lists',
    name: 'Linked Lists',
    icon: 'Link',
    level: 'intermediate',
    patterns: [
      {
        id: 'intermediate-cycle-detection',
        name: 'Cycle Detection',
        description: 'Detect and handle cycles in linked lists',
        problems: [
          {
            id: 'linked-list-cycle',
            title: 'Linked List Cycle',
            difficulty: 'Easy' as const,
            pattern: 'Cycle Detection',
            category: 'Linked Lists',
            leetcodeUrl: 'https://leetcode.com/problems/linked-list-cycle/',
            estimatedTime: 20,
            tags: ['Hash Table', 'Linked List', 'Two Pointers'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'linked-list-cycle-ii',
            title: 'Linked List Cycle II',
            difficulty: 'Medium' as const,
            pattern: 'Cycle Detection',
            category: 'Linked Lists',
            leetcodeUrl: 'https://leetcode.com/problems/linked-list-cycle-ii/',
            estimatedTime: 30,
            tags: ['Hash Table', 'Linked List', 'Two Pointers'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'remove-nth-node-from-end',
            title: 'Remove Nth Node From End of List',
            difficulty: 'Medium' as const,
            pattern: 'Cycle Detection',
            category: 'Linked Lists',
            leetcodeUrl: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
            estimatedTime: 25,
            tags: ['Linked List', 'Two Pointers'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 3,
        completedProblems: 0
      }
    ],
    totalProblems: 3,
    completedProblems: 0
  },
  {
    id: 'intermediate-stacks-queues',
    name: 'Stacks & Queues',
    icon: 'Layers',
    level: 'intermediate',
    patterns: [
      {
        id: 'intermediate-monotonic-stack',
        name: 'Monotonic Stack',
        description: 'Advanced stack patterns for optimization',
        problems: [
          {
            id: 'daily-temperatures',
            title: 'Daily Temperatures',
            difficulty: 'Medium' as const,
            pattern: 'Monotonic Stack',
            category: 'Stacks & Queues',
            leetcodeUrl: 'https://leetcode.com/problems/daily-temperatures/',
            estimatedTime: 25,
            tags: ['Array', 'Stack', 'Monotonic Stack'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'next-greater-element-i',
            title: 'Next Greater Element I',
            difficulty: 'Easy' as const,
            pattern: 'Monotonic Stack',
            category: 'Stacks & Queues',
            leetcodeUrl: 'https://leetcode.com/problems/next-greater-element-i/',
            estimatedTime: 20,
            tags: ['Array', 'Hash Table', 'Stack', 'Monotonic Stack'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  },
  {
    id: 'intermediate-binary-trees',
    name: 'Binary Trees',
    icon: 'GitBranch',
    level: 'intermediate',
    patterns: [
      {
        id: 'intermediate-tree-construction',
        name: 'Tree Construction',
        description: 'Build trees from different representations',
        problems: [
          {
            id: 'construct-binary-tree-preorder-inorder',
            title: 'Construct Binary Tree from Preorder and Inorder Traversal',
            difficulty: 'Medium' as const,
            pattern: 'Tree Construction',
            category: 'Binary Trees',
            leetcodeUrl: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/',
            estimatedTime: 35,
            tags: ['Array', 'Hash Table', 'Divide and Conquer', 'Tree', 'Binary Tree'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'validate-binary-search-tree',
            title: 'Validate Binary Search Tree',
            difficulty: 'Medium' as const,
            pattern: 'Tree Construction',
            category: 'Binary Trees',
            leetcodeUrl: 'https://leetcode.com/problems/validate-binary-search-tree/',
            estimatedTime: 25,
            tags: ['Tree', 'Depth-First Search', 'Binary Search Tree', 'Binary Tree'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'binary-tree-level-order-traversal',
            title: 'Binary Tree Level Order Traversal',
            difficulty: 'Medium' as const,
            pattern: 'Tree Construction',
            category: 'Binary Trees',
            leetcodeUrl: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
            estimatedTime: 20,
            tags: ['Tree', 'Breadth-First Search', 'Binary Tree'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 3,
        completedProblems: 0
      }
    ],
    totalProblems: 3,
    completedProblems: 0
  },
  {
    id: 'intermediate-hash-tables',
    name: 'Hash Tables',
    icon: 'Hash',
    level: 'intermediate',
    patterns: [
      {
        id: 'intermediate-advanced-hashing',
        name: 'Advanced Hashing',
        description: 'Complex hash table applications',
        problems: [
          {
            id: 'group-anagrams',
            title: 'Group Anagrams',
            difficulty: 'Medium' as const,
            pattern: 'Advanced Hashing',
            category: 'Hash Tables',
            leetcodeUrl: 'https://leetcode.com/problems/group-anagrams/',
            estimatedTime: 25,
            tags: ['Array', 'Hash Table', 'String', 'Sorting'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'top-k-frequent-elements',
            title: 'Top K Frequent Elements',
            difficulty: 'Medium' as const,
            pattern: 'Advanced Hashing',
            category: 'Hash Tables',
            leetcodeUrl: 'https://leetcode.com/problems/top-k-frequent-elements/',
            estimatedTime: 30,
            tags: ['Array', 'Hash Table', 'Divide and Conquer', 'Sorting', 'Heap (Priority Queue)', 'Bucket Sort', 'Counting', 'Quickselect'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  },
  {
    id: 'intermediate-sorting-searching',
    name: 'Sorting & Searching',
    icon: 'Search',
    level: 'intermediate',
    patterns: [
      {
        id: 'intermediate-advanced-binary-search',
        name: 'Advanced Binary Search',
        description: 'Complex binary search variations',
        problems: [
          {
            id: 'search-rotated-sorted-array',
            title: 'Search in Rotated Sorted Array',
            difficulty: 'Medium' as const,
            pattern: 'Advanced Binary Search',
            category: 'Sorting & Searching',
            leetcodeUrl: 'https://leetcode.com/problems/search-in-rotated-sorted-array/',
            estimatedTime: 30,
            tags: ['Array', 'Binary Search'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'find-minimum-rotated-sorted-array',
            title: 'Find Minimum in Rotated Sorted Array',
            difficulty: 'Medium' as const,
            pattern: 'Advanced Binary Search',
            category: 'Sorting & Searching',
            leetcodeUrl: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/',
            estimatedTime: 25,
            tags: ['Array', 'Binary Search'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  },
  {
    id: 'intermediate-recursion',
    name: 'Recursion',
    icon: 'RotateCcw',
    level: 'intermediate',
    patterns: [
      {
        id: 'intermediate-advanced-recursion',
        name: 'Advanced Recursion',
        description: 'Complex recursive problems',
        problems: [
          {
            id: 'generate-parentheses',
            title: 'Generate Parentheses',
            difficulty: 'Medium' as const,
            pattern: 'Advanced Recursion',
            category: 'Recursion',
            leetcodeUrl: 'https://leetcode.com/problems/generate-parentheses/',
            estimatedTime: 30,
            tags: ['String', 'Dynamic Programming', 'Backtracking'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'permutations',
            title: 'Permutations',
            difficulty: 'Medium' as const,
            pattern: 'Advanced Recursion',
            category: 'Recursion',
            leetcodeUrl: 'https://leetcode.com/problems/permutations/',
            estimatedTime: 25,
            tags: ['Array', 'Backtracking'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  },
  {
    id: 'intermediate-math-logic',
    name: 'Math & Logic',
    icon: 'Calculator',
    level: 'intermediate',
    patterns: [
      {
        id: 'intermediate-advanced-math',
        name: 'Advanced Mathematical Problems',
        description: 'Complex mathematical and logical problems',
        problems: [
          {
            id: 'powx-n',
            title: 'Pow(x, n)',
            difficulty: 'Medium' as const,
            pattern: 'Advanced Mathematical Problems',
            category: 'Math & Logic',
            leetcodeUrl: 'https://leetcode.com/problems/powx-n/',
            estimatedTime: 25,
            tags: ['Math', 'Recursion'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'spiral-matrix',
            title: 'Spiral Matrix',
            difficulty: 'Medium' as const,
            pattern: 'Advanced Mathematical Problems',
            category: 'Math & Logic',
            leetcodeUrl: 'https://leetcode.com/problems/spiral-matrix/',
            estimatedTime: 30,
            tags: ['Array', 'Matrix', 'Simulation'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  },
  {
    id: 'intermediate-greedy',
    name: 'Greedy Algorithms',
    icon: 'TrendingUp',
    level: 'intermediate',
    patterns: [
      {
        id: 'intermediate-advanced-greedy',
        name: 'Advanced Greedy',
        description: 'Complex greedy algorithm problems',
        problems: [
          {
            id: 'jump-game',
            title: 'Jump Game',
            difficulty: 'Medium' as const,
            pattern: 'Advanced Greedy',
            category: 'Greedy Algorithms',
            leetcodeUrl: 'https://leetcode.com/problems/jump-game/',
            estimatedTime: 25,
            tags: ['Array', 'Dynamic Programming', 'Greedy'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'gas-station',
            title: 'Gas Station',
            difficulty: 'Medium' as const,
            pattern: 'Advanced Greedy',
            category: 'Greedy Algorithms',
            leetcodeUrl: 'https://leetcode.com/problems/gas-station/',
            estimatedTime: 30,
            tags: ['Array', 'Greedy'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  },
  {
    id: 'intermediate-dynamic-programming',
    name: 'Dynamic Programming',
    icon: 'Zap',
    level: 'intermediate',
    patterns: [
      {
        id: 'intermediate-2d-dp',
        name: '2D Dynamic Programming',
        description: 'Two-dimensional DP problems',
        problems: [
          {
            id: 'unique-paths',
            title: 'Unique Paths',
            difficulty: 'Medium' as const,
            pattern: '2D Dynamic Programming',
            category: 'Dynamic Programming',
            leetcodeUrl: 'https://leetcode.com/problems/unique-paths/',
            estimatedTime: 25,
            tags: ['Math', 'Dynamic Programming', 'Combinatorics'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'coin-change',
            title: 'Coin Change',
            difficulty: 'Medium' as const,
            pattern: '2D Dynamic Programming',
            category: 'Dynamic Programming',
            leetcodeUrl: 'https://leetcode.com/problems/coin-change/',
            estimatedTime: 30,
            tags: ['Array', 'Dynamic Programming', 'Breadth-First Search'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  }
];

// Pro Level Categories (20+ LPA FAANG Interviews)
export const proCategories: Category[] = [
  {
    id: 'pro-arrays',
    name: 'Arrays & Strings',
    icon: 'Grid3X3',
    level: 'pro',
    patterns: [
      {
        id: 'pro-expert-arrays',
        name: 'Expert Array Techniques',
        description: 'Most challenging array problems',
        problems: [
          {
            id: 'median-two-sorted-arrays',
            title: 'Median of Two Sorted Arrays',
            difficulty: 'Hard' as const,
            pattern: 'Expert Array Techniques',
            category: 'Arrays & Strings',
            leetcodeUrl: 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
            estimatedTime: 45,
            tags: ['Array', 'Binary Search', 'Divide and Conquer'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'trapping-rain-water',
            title: 'Trapping Rain Water',
            difficulty: 'Hard' as const,
            pattern: 'Expert Array Techniques',
            category: 'Arrays & Strings',
            leetcodeUrl: 'https://leetcode.com/problems/trapping-rain-water/',
            estimatedTime: 40,
            tags: ['Array', 'Two Pointers', 'Dynamic Programming', 'Stack', 'Monotonic Stack'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'sliding-window-maximum',
            title: 'Sliding Window Maximum',
            difficulty: 'Hard' as const,
            pattern: 'Expert Array Techniques',
            category: 'Arrays & Strings',
            leetcodeUrl: 'https://leetcode.com/problems/sliding-window-maximum/',
            estimatedTime: 35,
            tags: ['Array', 'Queue', 'Sliding Window', 'Heap (Priority Queue)', 'Monotonic Queue'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 3,
        completedProblems: 0
      }
    ],
    totalProblems: 3,
    completedProblems: 0
  },
  {
    id: 'pro-linked-lists',
    name: 'Linked Lists',
    icon: 'Link',
    level: 'pro',
    patterns: [
      {
        id: 'pro-expert-linked-lists',
        name: 'Expert Linked List Operations',
        description: 'Most complex linked list problems',
        problems: [
          {
            id: 'merge-k-sorted-lists',
            title: 'Merge k Sorted Lists',
            difficulty: 'Hard' as const,
            pattern: 'Expert Linked List Operations',
            category: 'Linked Lists',
            leetcodeUrl: 'https://leetcode.com/problems/merge-k-sorted-lists/',
            estimatedTime: 40,
            tags: ['Linked List', 'Divide and Conquer', 'Heap (Priority Queue)', 'Merge Sort'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'reverse-nodes-k-group',
            title: 'Reverse Nodes in k-Group',
            difficulty: 'Hard' as const,
            pattern: 'Expert Linked List Operations',
            category: 'Linked Lists',
            leetcodeUrl: 'https://leetcode.com/problems/reverse-nodes-in-k-group/',
            estimatedTime: 45,
            tags: ['Linked List', 'Recursion'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  },
  {
    id: 'pro-stacks-queues',
    name: 'Stacks & Queues',
    icon: 'Layers',
    level: 'pro',
    patterns: [
      {
        id: 'pro-expert-stacks',
        name: 'Expert Stack Problems',
        description: 'Most challenging stack and queue problems',
        problems: [
          {
            id: 'largest-rectangle-histogram',
            title: 'Largest Rectangle in Histogram',
            difficulty: 'Hard' as const,
            pattern: 'Expert Stack Problems',
            category: 'Stacks & Queues',
            leetcodeUrl: 'https://leetcode.com/problems/largest-rectangle-in-histogram/',
            estimatedTime: 45,
            tags: ['Array', 'Stack', 'Monotonic Stack'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'basic-calculator-ii',
            title: 'Basic Calculator II',
            difficulty: 'Medium' as const,
            pattern: 'Expert Stack Problems',
            category: 'Stacks & Queues',
            leetcodeUrl: 'https://leetcode.com/problems/basic-calculator-ii/',
            estimatedTime: 35,
            tags: ['Math', 'String', 'Stack'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  },
  {
    id: 'pro-binary-trees',
    name: 'Binary Trees',
    icon: 'GitBranch',
    level: 'pro',
    patterns: [
      {
        id: 'pro-expert-trees',
        name: 'Expert Tree Problems',
        description: 'Most challenging tree problems',
        problems: [
          {
            id: 'serialize-deserialize-binary-tree',
            title: 'Serialize and Deserialize Binary Tree',
            difficulty: 'Hard' as const,
            pattern: 'Expert Tree Problems',
            category: 'Binary Trees',
            leetcodeUrl: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',
            estimatedTime: 45,
            tags: ['String', 'Tree', 'Depth-First Search', 'Breadth-First Search', 'Design', 'Binary Tree'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'binary-tree-maximum-path-sum',
            title: 'Binary Tree Maximum Path Sum',
            difficulty: 'Hard' as const,
            pattern: 'Expert Tree Problems',
            category: 'Binary Trees',
            leetcodeUrl: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
            estimatedTime: 40,
            tags: ['Dynamic Programming', 'Tree', 'Depth-First Search', 'Binary Tree'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  },
  {
    id: 'pro-hash-tables',
    name: 'Hash Tables',
    icon: 'Hash',
    level: 'pro',
    patterns: [
      {
        id: 'pro-expert-hashing',
        name: 'Expert Hashing Techniques',
        description: 'Most advanced hash table problems',
        problems: [
          {
            id: 'substring-with-concatenation',
            title: 'Substring with Concatenation of All Words',
            difficulty: 'Hard' as const,
            pattern: 'Expert Hashing Techniques',
            category: 'Hash Tables',
            leetcodeUrl: 'https://leetcode.com/problems/substring-with-concatenation-of-all-words/',
            estimatedTime: 50,
            tags: ['Hash Table', 'String', 'Sliding Window'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'lru-cache',
            title: 'LRU Cache',
            difficulty: 'Medium' as const,
            pattern: 'Expert Hashing Techniques',
            category: 'Hash Tables',
            leetcodeUrl: 'https://leetcode.com/problems/lru-cache/',
            estimatedTime: 35,
            tags: ['Hash Table', 'Linked List', 'Design', 'Doubly-Linked List'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  },
  {
    id: 'pro-sorting-searching',
    name: 'Sorting & Searching',
    icon: 'Search',
    level: 'pro',
    patterns: [
      {
        id: 'pro-expert-search',
        name: 'Expert Search Algorithms',
        description: 'Most complex search problems',
        problems: [
          {
            id: 'search-2d-matrix-ii',
            title: 'Search a 2D Matrix II',
            difficulty: 'Medium' as const,
            pattern: 'Expert Search Algorithms',
            category: 'Sorting & Searching',
            leetcodeUrl: 'https://leetcode.com/problems/search-a-2d-matrix-ii/',
            estimatedTime: 30,
            tags: ['Array', 'Binary Search', 'Divide and Conquer', 'Matrix'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'kth-largest-element-array',
            title: 'Kth Largest Element in an Array',
            difficulty: 'Medium' as const,
            pattern: 'Expert Search Algorithms',
            category: 'Sorting & Searching',
            leetcodeUrl: 'https://leetcode.com/problems/kth-largest-element-in-an-array/',
            estimatedTime: 25,
            tags: ['Array', 'Divide and Conquer', 'Sorting', 'Heap (Priority Queue)', 'Quickselect'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  },
  {
    id: 'pro-recursion',
    name: 'Recursion',
    icon: 'RotateCcw',
    level: 'pro',
    patterns: [
      {
        id: 'pro-expert-recursion',
        name: 'Expert Recursion',
        description: 'Most challenging recursive problems',
        problems: [
          {
            id: 'n-queens',
            title: 'N-Queens',
            difficulty: 'Hard' as const,
            pattern: 'Expert Recursion',
            category: 'Recursion',
            leetcodeUrl: 'https://leetcode.com/problems/n-queens/',
            estimatedTime: 50,
            tags: ['Array', 'Backtracking'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'word-search-ii',
            title: 'Word Search II',
            difficulty: 'Hard' as const,
            pattern: 'Expert Recursion',
            category: 'Recursion',
            leetcodeUrl: 'https://leetcode.com/problems/word-search-ii/',
            estimatedTime: 45,
            tags: ['Array', 'String', 'Backtracking', 'Trie', 'Matrix'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  },
  {
    id: 'pro-math-logic',
    name: 'Math & Logic',
    icon: 'Calculator',
    level: 'pro',
    patterns: [
      {
        id: 'pro-expert-math',
        name: 'Expert Mathematical Problems',
        description: 'Most complex mathematical problems',
        problems: [
          {
            id: 'basic-calculator',
            title: 'Basic Calculator',
            difficulty: 'Hard' as const,
            pattern: 'Expert Mathematical Problems',
            category: 'Math & Logic',
            leetcodeUrl: 'https://leetcode.com/problems/basic-calculator/',
            estimatedTime: 45,
            tags: ['Math', 'String', 'Stack', 'Recursion'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'integer-to-english-words',
            title: 'Integer to English Words',
            difficulty: 'Hard' as const,
            pattern: 'Expert Mathematical Problems',
            category: 'Math & Logic',
            leetcodeUrl: 'https://leetcode.com/problems/integer-to-english-words/',
            estimatedTime: 40,
            tags: ['Math', 'String', 'Recursion'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  },
  {
    id: 'pro-greedy',
    name: 'Greedy Algorithms',
    icon: 'TrendingUp',
    level: 'pro',
    patterns: [
      {
        id: 'pro-expert-greedy',
        name: 'Expert Greedy Algorithms',
        description: 'Most challenging greedy problems',
        problems: [
          {
            id: 'candy',
            title: 'Candy',
            difficulty: 'Hard' as const,
            pattern: 'Expert Greedy Algorithms',
            category: 'Greedy Algorithms',
            leetcodeUrl: 'https://leetcode.com/problems/candy/',
            estimatedTime: 40,
            tags: ['Array', 'Greedy'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'meeting-rooms-ii',
            title: 'Meeting Rooms II',
            difficulty: 'Medium' as const,
            pattern: 'Expert Greedy Algorithms',
            category: 'Greedy Algorithms',
            leetcodeUrl: 'https://leetcode.com/problems/meeting-rooms-ii/',
            estimatedTime: 30,
            tags: ['Array', 'Two Pointers', 'Greedy', 'Sorting', 'Heap (Priority Queue)'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  },
  {
    id: 'pro-dynamic-programming',
    name: 'Dynamic Programming',
    icon: 'Zap',
    level: 'pro',
    patterns: [
      {
        id: 'pro-expert-dp',
        name: 'Expert Dynamic Programming',
        description: 'Most challenging DP problems',
        problems: [
          {
            id: 'edit-distance',
            title: 'Edit Distance',
            difficulty: 'Hard' as const,
            pattern: 'Expert Dynamic Programming',
            category: 'Dynamic Programming',
            leetcodeUrl: 'https://leetcode.com/problems/edit-distance/',
            estimatedTime: 45,
            tags: ['String', 'Dynamic Programming'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          },
          {
            id: 'longest-increasing-subsequence',
            title: 'Longest Increasing Subsequence',
            difficulty: 'Medium' as const,
            pattern: 'Expert Dynamic Programming',
            category: 'Dynamic Programming',
            leetcodeUrl: 'https://leetcode.com/problems/longest-increasing-subsequence/',
            estimatedTime: 35,
            tags: ['Array', 'Binary Search', 'Dynamic Programming'],
            userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
          }
        ],
        totalProblems: 2,
        completedProblems: 0
      }
    ],
    totalProblems: 2,
    completedProblems: 0
  }
];

export const mockCategories: Category[] = [
  ...beginnerCategories,
  ...intermediateCategories,
  ...proCategories
];