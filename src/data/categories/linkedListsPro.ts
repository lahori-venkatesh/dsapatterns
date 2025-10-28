import { Category } from '../../types';

// Pro Level Linked Lists - REFINED WITH COMPANY TAGS
export const linkedListsProCategory: Category = {
  id: 'linked-lists-pro',
  name: 'Linked Lists',
  icon: 'Link',
  level: 'pro',
  totalProblems: 15,
  completedProblems: 0,
  patterns: [
    {
      id: 'hard-algorithms-pro',
      name: 'Hard Algorithms',
      description: 'Master the hardest linked list problems for FAANG interviews',
      totalProblems: 8,
      completedProblems: 0,
      problems: [
        {
          id: 'merge-k-sorted-lists-pro',
          title: 'Merge k Sorted Lists',
          difficulty: 'Hard',
          pattern: 'hard-algorithms-pro',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/merge-k-sorted-lists/',
          estimatedTime: 45,
          tags: ['linked-list', 'divide-and-conquer', 'heap', 'merge-sort'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'LinkedIn', 'Adobe', 'Bloomberg', 'Uber'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'reverse-nodes-k-group-pro',
          title: 'Reverse Nodes in k-Group',
          difficulty: 'Hard',
          pattern: 'hard-algorithms-pro',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/reverse-nodes-in-k-group/',
          estimatedTime: 50,
          tags: ['linked-list', 'recursion'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Adobe', 'Bloomberg'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'lfu-cache-pro',
          title: 'LFU Cache',
          difficulty: 'Hard',
          pattern: 'hard-algorithms-pro',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/lfu-cache/',
          estimatedTime: 60,
          tags: ['hash-table', 'linked-list', 'design', 'doubly-linked-list'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Bloomberg'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'all-oone-data-structure-pro',
          title: 'All O`one Data Structure',
          difficulty: 'Hard',
          pattern: 'hard-algorithms-pro',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/all-oone-data-structure/',
          estimatedTime: 60,
          tags: ['hash-table', 'linked-list', 'design', 'doubly-linked-list'],
          companies: ['Google', 'Amazon', 'Meta', 'Apple'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-skiplist-pro',
          title: 'Design Skiplist',
          difficulty: 'Hard',
          pattern: 'hard-algorithms-pro',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-skiplist/',
          estimatedTime: 70,
          tags: ['linked-list', 'design'],
          companies: ['Google', 'Meta', 'Amazon'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'sort-list-pro',
          title: 'Sort List',
          difficulty: 'Medium',
          pattern: 'hard-algorithms-pro',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/sort-list/',
          estimatedTime: 40,
          tags: ['linked-list', 'two-pointers', 'divide-and-conquer', 'sorting', 'merge-sort'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'LinkedIn', 'Adobe'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'linked-list-cycle-ii-pro',
          title: 'Linked List Cycle II',
          difficulty: 'Medium',
          pattern: 'hard-algorithms-pro',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/linked-list-cycle-ii/',
          estimatedTime: 35,
          tags: ['linked-list', 'two-pointers'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Adobe', 'Bloomberg', 'Uber'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'convert-sorted-list-bst-pro',
          title: 'Convert Sorted List to Binary Search Tree',
          difficulty: 'Medium',
          pattern: 'hard-algorithms-pro',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/',
          estimatedTime: 40,
          tags: ['linked-list', 'divide-and-conquer', 'tree', 'binary-search-tree', 'binary-tree'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Bloomberg'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    },
    {
      id: 'system-design-pro',
      name: 'Advanced System Design',
      description: 'Master complex data structure design problems for senior engineer interviews',
      totalProblems: 7,
      completedProblems: 0,
      problems: [
        {
          id: 'lru-cache-pro',
          title: 'LRU Cache',
          difficulty: 'Medium',
          pattern: 'system-design-pro',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/lru-cache/',
          estimatedTime: 45,
          tags: ['hash-table', 'linked-list', 'design', 'doubly-linked-list'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'LinkedIn', 'Adobe', 'Bloomberg', 'Uber', 'Airbnb'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-twitter-pro',
          title: 'Design Twitter',
          difficulty: 'Medium',
          pattern: 'system-design-pro',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-twitter/',
          estimatedTime: 45,
          tags: ['hash-table', 'linked-list', 'design', 'heap'],
          companies: ['Meta', 'Twitter', 'Amazon', 'Microsoft', 'Google'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'flatten-binary-tree-pro',
          title: 'Flatten Binary Tree to Linked List',
          difficulty: 'Medium',
          pattern: 'system-design-pro',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/flatten-binary-tree-to-linked-list/',
          estimatedTime: 35,
          tags: ['linked-list', 'stack', 'tree', 'depth-first-search', 'binary-tree'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Adobe'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'copy-list-random-pointer-pro',
          title: 'Copy List with Random Pointer',
          difficulty: 'Medium',
          pattern: 'system-design-pro',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/copy-list-with-random-pointer/',
          estimatedTime: 40,
          tags: ['hash-table', 'linked-list'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Bloomberg', 'Adobe'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-browser-history-pro',
          title: 'Design Browser History',
          difficulty: 'Medium',
          pattern: 'system-design-pro',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-browser-history/',
          estimatedTime: 35,
          tags: ['array', 'linked-list', 'stack', 'design', 'doubly-linked-list', 'data-stream'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'flatten-multilevel-doubly-linked-list-pro',
          title: 'Flatten a Multilevel Doubly Linked List',
          difficulty: 'Medium',
          pattern: 'system-design-pro',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/',
          estimatedTime: 40,
          tags: ['linked-list', 'depth-first-search', 'doubly-linked-list'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Bloomberg'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'add-two-numbers-ii-pro',
          title: 'Add Two Numbers II',
          difficulty: 'Medium',
          pattern: 'system-design-pro',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/add-two-numbers-ii/',
          estimatedTime: 35,
          tags: ['linked-list', 'math', 'stack'],
          companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Adobe'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    }
  ]
};