import { Category } from '../../types';

export const linkedListsCategory: Category = {
  id: 'linked-lists',
  name: 'Linked Lists',
  icon: 'Link',
  level: 'beginner',
  totalProblems: 15,
  completedProblems: 0,
  patterns: [
    {
      id: 'fast-slow-pointers',
      name: 'Fast & Slow Pointers',
      description: 'Use two pointers moving at different speeds to detect cycles and find middle elements',
      totalProblems: 6,
      completedProblems: 0,
      problems: [
        {
          id: 'linked-list-cycle',
          title: 'Linked List Cycle',
          difficulty: 'Easy',
          pattern: 'fast-slow-pointers',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/linked-list-cycle/',
          estimatedTime: 20,
          tags: ['linked-list', 'two-pointers'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'linked-list-cycle-ii',
          title: 'Linked List Cycle II',
          difficulty: 'Medium',
          pattern: 'fast-slow-pointers',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/linked-list-cycle-ii/',
          estimatedTime: 30,
          tags: ['linked-list', 'two-pointers'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'middle-of-linked-list',
          title: 'Middle of the Linked List',
          difficulty: 'Easy',
          pattern: 'fast-slow-pointers',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/middle-of-the-linked-list/',
          estimatedTime: 15,
          tags: ['linked-list', 'two-pointers'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'palindrome-linked-list',
          title: 'Palindrome Linked List',
          difficulty: 'Easy',
          pattern: 'fast-slow-pointers',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/palindrome-linked-list/',
          estimatedTime: 25,
          tags: ['linked-list', 'two-pointers', 'stack', 'recursion'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'happy-number',
          title: 'Happy Number',
          difficulty: 'Easy',
          pattern: 'fast-slow-pointers',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/happy-number/',
          estimatedTime: 20,
          tags: ['hash-table', 'math', 'two-pointers'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'find-duplicate-number',
          title: 'Find the Duplicate Number',
          difficulty: 'Medium',
          pattern: 'fast-slow-pointers',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/find-the-duplicate-number/',
          estimatedTime: 35,
          tags: ['array', 'two-pointers', 'binary-search', 'bit-manipulation'],
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
      id: 'in-place-reversal',
      name: 'In-place Reversal',
      description: 'Reverse linked lists or parts of linked lists without using extra space',
      totalProblems: 5,
      completedProblems: 0,
      problems: [
        {
          id: 'reverse-linked-list',
          title: 'Reverse Linked List',
          difficulty: 'Easy',
          pattern: 'in-place-reversal',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/reverse-linked-list/',
          estimatedTime: 20,
          tags: ['linked-list', 'recursion'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'reverse-linked-list-ii',
          title: 'Reverse Linked List II',
          difficulty: 'Medium',
          pattern: 'in-place-reversal',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/reverse-linked-list-ii/',
          estimatedTime: 30,
          tags: ['linked-list'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'reverse-nodes-k-group',
          title: 'Reverse Nodes in k-Group',
          difficulty: 'Hard',
          pattern: 'in-place-reversal',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/reverse-nodes-in-k-group/',
          estimatedTime: 45,
          tags: ['linked-list', 'recursion'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'swap-nodes-pairs',
          title: 'Swap Nodes in Pairs',
          difficulty: 'Medium',
          pattern: 'in-place-reversal',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/swap-nodes-in-pairs/',
          estimatedTime: 25,
          tags: ['linked-list', 'recursion'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'rotate-list',
          title: 'Rotate List',
          difficulty: 'Medium',
          pattern: 'in-place-reversal',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/rotate-list/',
          estimatedTime: 30,
          tags: ['linked-list', 'two-pointers'],
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
      id: 'merge-intervals',
      name: 'Merge & Split',
      description: 'Merge multiple linked lists or split them efficiently',
      totalProblems: 4,
      completedProblems: 0,
      problems: [
        {
          id: 'merge-two-sorted-lists',
          title: 'Merge Two Sorted Lists',
          difficulty: 'Easy',
          pattern: 'merge-intervals',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/merge-two-sorted-lists/',
          estimatedTime: 20,
          tags: ['linked-list', 'recursion'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'merge-k-sorted-lists',
          title: 'Merge k Sorted Lists',
          difficulty: 'Hard',
          pattern: 'merge-intervals',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/merge-k-sorted-lists/',
          estimatedTime: 40,
          tags: ['linked-list', 'divide-and-conquer', 'heap', 'merge-sort'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'remove-nth-node-from-end',
          title: 'Remove Nth Node From End of List',
          difficulty: 'Medium',
          pattern: 'merge-intervals',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
          estimatedTime: 25,
          tags: ['linked-list', 'two-pointers'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'partition-list',
          title: 'Partition List',
          difficulty: 'Medium',
          pattern: 'merge-intervals',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/partition-list/',
          estimatedTime: 30,
          tags: ['linked-list', 'two-pointers'],
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