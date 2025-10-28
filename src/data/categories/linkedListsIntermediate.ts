import { Category } from '../../types';

// Intermediate Level Linked Lists - REFINED FOR QUALITY
export const linkedListsIntermediateCategory: Category = {
  id: 'linked-lists-intermediate',
  name: 'Linked Lists',
  icon: 'Link',
  level: 'intermediate',
  totalProblems: 20,
  completedProblems: 0,
  patterns: [
    {
      id: 'fast-slow-pointers-intermediate',
      name: 'Fast & Slow Pointers',
      description: 'Master cycle detection and advanced two pointer techniques for top company interviews',
      totalProblems: 8,
      completedProblems: 0,
      problems: [
        {
          id: 'linked-list-cycle-ii',
          title: 'Linked List Cycle II',
          difficulty: 'Medium',
          pattern: 'fast-slow-pointers-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/linked-list-cycle-ii/',
          estimatedTime: 30,
          tags: ['linked-list', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'remove-duplicates-sorted-list-ii',
          title: 'Remove Duplicates from Sorted List II',
          difficulty: 'Medium',
          pattern: 'fast-slow-pointers-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/',
          estimatedTime: 30,
          tags: ['linked-list', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'reverse-linked-list-ii',
          title: 'Reverse Linked List II',
          difficulty: 'Medium',
          pattern: 'fast-slow-pointers-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/reverse-linked-list-ii/',
          estimatedTime: 30,
          tags: ['linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'swapping-nodes-linked-list',
          title: 'Swapping Nodes in a Linked List',
          difficulty: 'Medium',
          pattern: 'fast-slow-pointers-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/swapping-nodes-in-a-linked-list/',
          estimatedTime: 30,
          tags: ['linked-list', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'add-two-numbers-ii',
          title: 'Add Two Numbers II',
          difficulty: 'Medium',
          pattern: 'fast-slow-pointers-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/add-two-numbers-ii/',
          estimatedTime: 35,
          tags: ['linked-list', 'math', 'stack'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'delete-middle-node-linked-list',
          title: 'Delete the Middle Node of a Linked List',
          difficulty: 'Medium',
          pattern: 'fast-slow-pointers-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/',
          estimatedTime: 25,
          tags: ['linked-list', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'maximum-twin-sum-linked-list',
          title: 'Maximum Twin Sum of a Linked List',
          difficulty: 'Medium',
          pattern: 'fast-slow-pointers-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/',
          estimatedTime: 30,
          tags: ['linked-list', 'two-pointers', 'stack'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'remove-zero-sum-consecutive-nodes',
          title: 'Remove Zero Sum Consecutive Nodes from Linked List',
          difficulty: 'Medium',
          pattern: 'fast-slow-pointers-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/',
          estimatedTime: 35,
          tags: ['hash-table', 'linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    },
    {
      id: 'design-problems-intermediate',
      name: 'Design & Complex Problems',
      description: 'Master essential design problems with linked lists for FAANG interviews',
      totalProblems: 12,
      completedProblems: 0,
      problems: [
        {
          id: 'merge-k-sorted-lists',
          title: 'Merge k Sorted Lists',
          difficulty: 'Hard',
          pattern: 'design-problems-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/merge-k-sorted-lists/',
          estimatedTime: 40,
          tags: ['linked-list', 'divide-and-conquer', 'heap', 'merge-sort'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'lru-cache',
          title: 'LRU Cache',
          difficulty: 'Medium',
          pattern: 'design-problems-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/lru-cache/',
          estimatedTime: 40,
          tags: ['hash-table', 'linked-list', 'design', 'doubly-linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'reverse-nodes-k-group',
          title: 'Reverse Nodes in k-Group',
          difficulty: 'Hard',
          pattern: 'design-problems-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/reverse-nodes-in-k-group/',
          estimatedTime: 45,
          tags: ['linked-list', 'recursion'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'copy-list-random-pointer',
          title: 'Copy List with Random Pointer',
          difficulty: 'Medium',
          pattern: 'design-problems-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/copy-list-with-random-pointer/',
          estimatedTime: 35,
          tags: ['hash-table', 'linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'flatten-multilevel-doubly-linked-list',
          title: 'Flatten a Multilevel Doubly Linked List',
          difficulty: 'Medium',
          pattern: 'design-problems-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/',
          estimatedTime: 35,
          tags: ['linked-list', 'depth-first-search', 'doubly-linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'sort-list',
          title: 'Sort List',
          difficulty: 'Medium',
          pattern: 'design-problems-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/sort-list/',
          estimatedTime: 35,
          tags: ['linked-list', 'two-pointers', 'divide-and-conquer', 'sorting', 'merge-sort'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-browser-history',
          title: 'Design Browser History',
          difficulty: 'Medium',
          pattern: 'design-problems-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/design-browser-history/',
          estimatedTime: 30,
          tags: ['array', 'linked-list', 'stack', 'design', 'doubly-linked-list', 'data-stream'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'flatten-binary-tree-linked-list',
          title: 'Flatten Binary Tree to Linked List',
          difficulty: 'Medium',
          pattern: 'design-problems-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/flatten-binary-tree-to-linked-list/',
          estimatedTime: 30,
          tags: ['linked-list', 'stack', 'tree', 'depth-first-search', 'binary-tree'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'rotate-list',
          title: 'Rotate List',
          difficulty: 'Medium',
          pattern: 'design-problems-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/rotate-list/',
          estimatedTime: 30,
          tags: ['linked-list', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'reorder-list',
          title: 'Reorder List',
          difficulty: 'Medium',
          pattern: 'design-problems-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/reorder-list/',
          estimatedTime: 30,
          tags: ['linked-list', 'two-pointers', 'stack', 'recursion'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'partition-list',
          title: 'Partition List',
          difficulty: 'Medium',
          pattern: 'design-problems-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/partition-list/',
          estimatedTime: 30,
          tags: ['linked-list', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'insertion-sort-list',
          title: 'Insertion Sort List',
          difficulty: 'Medium',
          pattern: 'design-problems-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/insertion-sort-list/',
          estimatedTime: 35,
          tags: ['linked-list', 'sorting'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    }
  ]
};