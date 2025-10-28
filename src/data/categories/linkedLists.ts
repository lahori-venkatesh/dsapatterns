import { Category } from '../../types';

// Beginner Level Linked Lists
export const linkedListsCategory: Category = {
  id: 'linked-lists',
  name: 'Linked Lists',
  icon: 'Link',
  level: 'beginner',
  totalProblems: 44,
  completedProblems: 0,
  patterns: [
    {
      id: 'basic-operations-beginner',
      name: 'Basic Operations',
      description: 'Master fundamental linked list operations and traversal',
      totalProblems: 14,
      completedProblems: 0,
      problems: [
        {
          id: 'reverse-linked-list',
          title: 'Reverse Linked List',
          difficulty: 'Easy',
          pattern: 'basic-operations-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/reverse-linked-list/',
          estimatedTime: 20,
          tags: ['linked-list', 'recursion'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'merge-two-sorted-lists',
          title: 'Merge Two Sorted Lists',
          difficulty: 'Easy',
          pattern: 'basic-operations-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/merge-two-sorted-lists/',
          estimatedTime: 20,
          tags: ['linked-list', 'recursion'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'remove-linked-list-elements',
          title: 'Remove Linked List Elements',
          difficulty: 'Easy',
          pattern: 'basic-operations-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/remove-linked-list-elements/',
          estimatedTime: 20,
          tags: ['linked-list', 'recursion'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'delete-node-linked-list',
          title: 'Delete Node in a Linked List',
          difficulty: 'Medium',
          pattern: 'basic-operations-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/delete-node-in-a-linked-list/',
          estimatedTime: 15,
          tags: ['linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'remove-duplicates-sorted-list',
          title: 'Remove Duplicates from Sorted List',
          difficulty: 'Easy',
          pattern: 'basic-operations-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/remove-duplicates-from-sorted-list/',
          estimatedTime: 20,
          tags: ['linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'convert-binary-number-linked-list',
          title: 'Convert Binary Number in a Linked List to Integer',
          difficulty: 'Easy',
          pattern: 'basic-operations-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/',
          estimatedTime: 15,
          tags: ['linked-list', 'math'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-linked-list',
          title: 'Design Linked List',
          difficulty: 'Medium',
          pattern: 'basic-operations-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/design-linked-list/',
          estimatedTime: 30,
          tags: ['linked-list', 'design'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'add-two-numbers',
          title: 'Add Two Numbers',
          difficulty: 'Medium',
          pattern: 'basic-operations-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/add-two-numbers/',
          estimatedTime: 25,
          tags: ['linked-list', 'math', 'recursion'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'intersection-two-linked-lists',
          title: 'Intersection of Two Linked Lists',
          difficulty: 'Easy',
          pattern: 'basic-operations-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/intersection-of-two-linked-lists/',
          estimatedTime: 25,
          tags: ['hash-table', 'linked-list', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-hashset',
          title: 'Design HashSet',
          difficulty: 'Easy',
          pattern: 'basic-operations-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/design-hashset/',
          estimatedTime: 25,
          tags: ['array', 'hash-table', 'linked-list', 'design', 'hash-function'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-hashmap',
          title: 'Design HashMap',
          difficulty: 'Easy',
          pattern: 'basic-operations-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/design-hashmap/',
          estimatedTime: 25,
          tags: ['array', 'hash-table', 'linked-list', 'design', 'hash-function'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'split-linked-list-parts',
          title: 'Split Linked List in Parts',
          difficulty: 'Medium',
          pattern: 'basic-operations-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/split-linked-list-in-parts/',
          estimatedTime: 30,
          tags: ['linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'odd-even-linked-list',
          title: 'Odd Even Linked List',
          difficulty: 'Medium',
          pattern: 'basic-operations-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/odd-even-linked-list/',
          estimatedTime: 25,
          tags: ['linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'next-greater-node-linked-list',
          title: 'Next Greater Node In Linked List',
          difficulty: 'Medium',
          pattern: 'basic-operations-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/next-greater-node-in-linked-list/',
          estimatedTime: 30,
          tags: ['array', 'linked-list', 'stack', 'monotonic-stack'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    },
    {
      id: 'two-pointers-beginner',
      name: 'Two Pointers (Beginner)',
      description: 'Learn two pointer technique with simple linked list problems',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'linked-list-cycle',
          title: 'Linked List Cycle',
          difficulty: 'Easy',
          pattern: 'two-pointers-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/linked-list-cycle/',
          estimatedTime: 20,
          tags: ['linked-list', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'middle-of-linked-list',
          title: 'Middle of the Linked List',
          difficulty: 'Easy',
          pattern: 'two-pointers-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/middle-of-the-linked-list/',
          estimatedTime: 15,
          tags: ['linked-list', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'palindrome-linked-list',
          title: 'Palindrome Linked List',
          difficulty: 'Easy',
          pattern: 'two-pointers-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/palindrome-linked-list/',
          estimatedTime: 25,
          tags: ['linked-list', 'two-pointers', 'stack', 'recursion'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'remove-nth-node-from-end',
          title: 'Remove Nth Node From End of List',
          difficulty: 'Medium',
          pattern: 'two-pointers-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
          estimatedTime: 25,
          tags: ['linked-list', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'happy-number',
          title: 'Happy Number',
          difficulty: 'Easy',
          pattern: 'two-pointers-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/happy-number/',
          estimatedTime: 20,
          tags: ['hash-table', 'math', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'find-duplicate-number',
          title: 'Find the Duplicate Number',
          difficulty: 'Medium',
          pattern: 'two-pointers-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/find-the-duplicate-number/',
          estimatedTime: 35,
          tags: ['array', 'two-pointers', 'binary-search', 'bit-manipulation'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'sort-list',
          title: 'Sort List',
          difficulty: 'Medium',
          pattern: 'two-pointers-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/sort-list/',
          estimatedTime: 35,
          tags: ['linked-list', 'two-pointers', 'divide-and-conquer', 'sorting', 'merge-sort'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'reorder-list',
          title: 'Reorder List',
          difficulty: 'Medium',
          pattern: 'two-pointers-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/reorder-list/',
          estimatedTime: 30,
          tags: ['linked-list', 'two-pointers', 'stack', 'recursion'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'swap-nodes-pairs',
          title: 'Swap Nodes in Pairs',
          difficulty: 'Medium',
          pattern: 'two-pointers-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/swap-nodes-in-pairs/',
          estimatedTime: 25,
          tags: ['linked-list', 'recursion'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'rotate-list',
          title: 'Rotate List',
          difficulty: 'Medium',
          pattern: 'two-pointers-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/rotate-list/',
          estimatedTime: 30,
          tags: ['linked-list', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'partition-list',
          title: 'Partition List',
          difficulty: 'Medium',
          pattern: 'two-pointers-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/partition-list/',
          estimatedTime: 30,
          tags: ['linked-list', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'insertion-sort-list',
          title: 'Insertion Sort List',
          difficulty: 'Medium',
          pattern: 'two-pointers-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/insertion-sort-list/',
          estimatedTime: 35,
          tags: ['linked-list', 'sorting'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'copy-list-random-pointer',
          title: 'Copy List with Random Pointer',
          difficulty: 'Medium',
          pattern: 'two-pointers-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/copy-list-with-random-pointer/',
          estimatedTime: 35,
          tags: ['hash-table', 'linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'flatten-multilevel-doubly-linked-list',
          title: 'Flatten a Multilevel Doubly Linked List',
          difficulty: 'Medium',
          pattern: 'two-pointers-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/',
          estimatedTime: 35,
          tags: ['linked-list', 'depth-first-search', 'doubly-linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'plus-one-linked-list',
          title: 'Plus One Linked List',
          difficulty: 'Medium',
          pattern: 'two-pointers-beginner',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/plus-one-linked-list/',
          estimatedTime: 25,
          tags: ['linked-list', 'math'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    },
    {
      id: 'stack-simulation',
      name: 'Stack Simulation',
      description: 'Use linked lists to simulate stack operations and solve related problems',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'min-stack',
          title: 'Min Stack',
          difficulty: 'Medium',
          pattern: 'stack-simulation',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/min-stack/',
          estimatedTime: 25,
          tags: ['stack', 'design'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'implement-stack-using-queues',
          title: 'Implement Stack using Queues',
          difficulty: 'Easy',
          pattern: 'stack-simulation',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/implement-stack-using-queues/',
          estimatedTime: 20,
          tags: ['stack', 'design', 'queue'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'implement-queue-using-stacks',
          title: 'Implement Queue using Stacks',
          difficulty: 'Easy',
          pattern: 'stack-simulation',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/implement-queue-using-stacks/',
          estimatedTime: 20,
          tags: ['stack', 'design', 'queue'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'valid-parentheses',
          title: 'Valid Parentheses',
          difficulty: 'Easy',
          pattern: 'stack-simulation',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/valid-parentheses/',
          estimatedTime: 15,
          tags: ['string', 'stack'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'evaluate-reverse-polish-notation',
          title: 'Evaluate Reverse Polish Notation',
          difficulty: 'Medium',
          pattern: 'stack-simulation',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/',
          estimatedTime: 25,
          tags: ['array', 'math', 'stack'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'simplify-path',
          title: 'Simplify Path',
          difficulty: 'Medium',
          pattern: 'stack-simulation',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/simplify-path/',
          estimatedTime: 25,
          tags: ['string', 'stack'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'decode-string',
          title: 'Decode String',
          difficulty: 'Medium',
          pattern: 'stack-simulation',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/decode-string/',
          estimatedTime: 30,
          tags: ['string', 'stack', 'recursion'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'remove-duplicate-letters',
          title: 'Remove Duplicate Letters',
          difficulty: 'Medium',
          pattern: 'stack-simulation',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/remove-duplicate-letters/',
          estimatedTime: 35,
          tags: ['string', 'stack', 'greedy', 'monotonic-stack'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'asteroid-collision',
          title: 'Asteroid Collision',
          difficulty: 'Medium',
          pattern: 'stack-simulation',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/asteroid-collision/',
          estimatedTime: 30,
          tags: ['array', 'stack', 'simulation'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'daily-temperatures',
          title: 'Daily Temperatures',
          difficulty: 'Medium',
          pattern: 'stack-simulation',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/daily-temperatures/',
          estimatedTime: 30,
          tags: ['array', 'stack', 'monotonic-stack'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'next-greater-element-i',
          title: 'Next Greater Element I',
          difficulty: 'Easy',
          pattern: 'stack-simulation',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/next-greater-element-i/',
          estimatedTime: 25,
          tags: ['array', 'hash-table', 'stack', 'monotonic-stack'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'next-greater-element-ii',
          title: 'Next Greater Element II',
          difficulty: 'Medium',
          pattern: 'stack-simulation',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/next-greater-element-ii/',
          estimatedTime: 30,
          tags: ['array', 'stack', 'monotonic-stack'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'backspace-string-compare',
          title: 'Backspace String Compare',
          difficulty: 'Easy',
          pattern: 'stack-simulation',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/backspace-string-compare/',
          estimatedTime: 20,
          tags: ['two-pointers', 'string', 'stack', 'simulation'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'score-parentheses',
          title: 'Score of Parentheses',
          difficulty: 'Medium',
          pattern: 'stack-simulation',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/score-of-parentheses/',
          estimatedTime: 30,
          tags: ['string', 'stack'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'baseball-game',
          title: 'Baseball Game',
          difficulty: 'Easy',
          pattern: 'stack-simulation',
          category: 'linked-lists',
          leetcodeUrl: 'https://leetcode.com/problems/baseball-game/',
          estimatedTime: 15,
          tags: ['array', 'stack', 'simulation'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    }
  ]
};

// Import intermediate category from separate file
export { linkedListsIntermediateCategory } from './linkedListsIntermediate';

// OLD Intermediate Level - REPLACED WITH REFINED VERSION ABOVE
/*
export const linkedListsIntermediateCategory: Category = {
  id: 'linked-lists-intermediate',
  name: 'Linked Lists',
  icon: 'Link',
  level: 'intermediate',
  totalProblems: 45,
  completedProblems: 0,
  patterns: [
    {
      id: 'fast-slow-pointers-intermediate',
      name: 'Advanced Fast & Slow Pointers',
      description: 'Master complex cycle detection and advanced two pointer techniques',
      totalProblems: 15,
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
          id: 'find-duplicate-number-advanced',
          title: 'Find the Duplicate Number (Advanced)',
          difficulty: 'Medium',
          pattern: 'fast-slow-pointers-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/find-the-duplicate-number/',
          estimatedTime: 35,
          tags: ['array', 'two-pointers', 'binary-search', 'bit-manipulation'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'circular-array-loop',
          title: 'Circular Array Loop',
          difficulty: 'Medium',
          pattern: 'fast-slow-pointers-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/circular-array-loop/',
          estimatedTime: 40,
          tags: ['array', 'hash-table', 'two-pointers'],
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
          id: 'remove-zero-sum-consecutive-nodes',
          title: 'Remove Zero Sum Consecutive Nodes from Linked List',
          difficulty: 'Medium',
          pattern: 'fast-slow-pointers-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/',
          estimatedTime: 35,
          tags: ['hash-table', 'linked-list'],
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
          id: 'reverse-nodes-even-length-groups',
          title: 'Reverse Nodes in Even Length Groups',
          difficulty: 'Medium',
          pattern: 'fast-slow-pointers-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/reverse-nodes-in-even-length-groups/',
          estimatedTime: 40,
          tags: ['linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'merge-nodes-between-zeros',
          title: 'Merge Nodes in Between Zeros',
          difficulty: 'Medium',
          pattern: 'fast-slow-pointers-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/merge-nodes-in-between-zeros/',
          estimatedTime: 25,
          tags: ['linked-list', 'simulation'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'spiral-matrix-iv',
          title: 'Spiral Matrix IV',
          difficulty: 'Medium',
          pattern: 'fast-slow-pointers-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/spiral-matrix-iv/',
          estimatedTime: 35,
          tags: ['array', 'linked-list', 'matrix', 'simulation'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'double-number-represented-linked-list',
          title: 'Double a Number Represented as a Linked List',
          difficulty: 'Medium',
          pattern: 'fast-slow-pointers-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/',
          estimatedTime: 30,
          tags: ['linked-list', 'math', 'stack'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'find-minimum-maximum-nodes-between-critical-points',
          title: 'Find the Minimum and Maximum Number of Nodes Between Critical Points',
          difficulty: 'Medium',
          pattern: 'fast-slow-pointers-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/',
          estimatedTime: 30,
          tags: ['linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    },
    {
      id: 'merge-sort-intermediate',
      name: 'Advanced Merge Operations',
      description: 'Master complex merging and sorting operations on linked lists',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'merge-k-sorted-lists',
          title: 'Merge k Sorted Lists',
          difficulty: 'Hard',
          pattern: 'merge-sort-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/merge-k-sorted-lists/',
          estimatedTime: 40,
          tags: ['linked-list', 'divide-and-conquer', 'heap', 'merge-sort'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'merge-in-between-linked-lists',
          title: 'Merge In Between Linked Lists',
          difficulty: 'Medium',
          pattern: 'merge-sort-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/merge-in-between-linked-lists/',
          estimatedTime: 25,
          tags: ['linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'sort-list-advanced',
          title: 'Sort List (Advanced)',
          difficulty: 'Medium',
          pattern: 'merge-sort-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/sort-list/',
          estimatedTime: 35,
          tags: ['linked-list', 'two-pointers', 'divide-and-conquer', 'sorting', 'merge-sort'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'insertion-sort-list-advanced',
          title: 'Insertion Sort List (Advanced)',
          difficulty: 'Medium',
          pattern: 'merge-sort-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/insertion-sort-list/',
          estimatedTime: 35,
          tags: ['linked-list', 'sorting'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'convert-sorted-list-binary-search-tree',
          title: 'Convert Sorted List to Binary Search Tree',
          difficulty: 'Medium',
          pattern: 'merge-sort-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/',
          estimatedTime: 35,
          tags: ['linked-list', 'divide-and-conquer', 'tree', 'binary-search-tree', 'binary-tree'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'flatten-binary-tree-linked-list',
          title: 'Flatten Binary Tree to Linked List',
          difficulty: 'Medium',
          pattern: 'merge-sort-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/flatten-binary-tree-to-linked-list/',
          estimatedTime: 30,
          tags: ['linked-list', 'stack', 'tree', 'depth-first-search', 'binary-tree'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'lru-cache',
          title: 'LRU Cache',
          difficulty: 'Medium',
          pattern: 'merge-sort-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/lru-cache/',
          estimatedTime: 40,
          tags: ['hash-table', 'linked-list', 'design', 'doubly-linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'lfu-cache',
          title: 'LFU Cache',
          difficulty: 'Hard',
          pattern: 'merge-sort-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/lfu-cache/',
          estimatedTime: 50,
          tags: ['hash-table', 'linked-list', 'design', 'doubly-linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'all-oone-data-structure',
          title: 'All O`one Data Structure',
          difficulty: 'Hard',
          pattern: 'merge-sort-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/all-oone-data-structure/',
          estimatedTime: 50,
          tags: ['hash-table', 'linked-list', 'design', 'doubly-linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-browser-history',
          title: 'Design Browser History',
          difficulty: 'Medium',
          pattern: 'merge-sort-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/design-browser-history/',
          estimatedTime: 30,
          tags: ['array', 'linked-list', 'stack', 'design', 'doubly-linked-list', 'data-stream'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-skiplist',
          title: 'Design Skiplist',
          difficulty: 'Hard',
          pattern: 'merge-sort-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/design-skiplist/',
          estimatedTime: 60,
          tags: ['linked-list', 'design'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-front-middle-back-queue',
          title: 'Design Front Middle Back Queue',
          difficulty: 'Medium',
          pattern: 'merge-sort-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/design-front-middle-back-queue/',
          estimatedTime: 35,
          tags: ['array', 'linked-list', 'design', 'queue', 'doubly-linked-list', 'data-stream'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-circular-deque',
          title: 'Design Circular Deque',
          difficulty: 'Medium',
          pattern: 'merge-sort-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/design-circular-deque/',
          estimatedTime: 35,
          tags: ['array', 'linked-list', 'design', 'queue'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-twitter',
          title: 'Design Twitter',
          difficulty: 'Medium',
          pattern: 'merge-sort-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/design-twitter/',
          estimatedTime: 40,
          tags: ['hash-table', 'linked-list', 'design', 'heap'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'flatten-multilevel-doubly-linked-list-advanced',
          title: 'Flatten a Multilevel Doubly Linked List (Advanced)',
          difficulty: 'Medium',
          pattern: 'merge-sort-intermediate',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/',
          estimatedTime: 35,
          tags: ['linked-list', 'depth-first-search', 'doubly-linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    },
    {
      id: 'advanced-manipulation',
      name: 'Advanced List Manipulation',
      description: 'Master complex linked list manipulation and transformation techniques',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'reverse-nodes-k-group',
          title: 'Reverse Nodes in k-Group',
          difficulty: 'Hard',
          pattern: 'advanced-manipulation',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/reverse-nodes-in-k-group/',
          estimatedTime: 45,
          tags: ['linked-list', 'recursion'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'copy-list-random-pointer-advanced',
          title: 'Copy List with Random Pointer (Advanced)',
          difficulty: 'Medium',
          pattern: 'advanced-manipulation',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/copy-list-with-random-pointer/',
          estimatedTime: 35,
          tags: ['hash-table', 'linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'clone-graph',
          title: 'Clone Graph',
          difficulty: 'Medium',
          pattern: 'advanced-manipulation',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/clone-graph/',
          estimatedTime: 35,
          tags: ['hash-table', 'depth-first-search', 'breadth-first-search', 'graph'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'rotate-list-advanced',
          title: 'Rotate List (Advanced)',
          difficulty: 'Medium',
          pattern: 'advanced-manipulation',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/rotate-list/',
          estimatedTime: 30,
          tags: ['linked-list', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'reorder-list-advanced',
          title: 'Reorder List (Advanced)',
          difficulty: 'Medium',
          pattern: 'advanced-manipulation',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/reorder-list/',
          estimatedTime: 30,
          tags: ['linked-list', 'two-pointers', 'stack', 'recursion'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'partition-list-advanced',
          title: 'Partition List (Advanced)',
          difficulty: 'Medium',
          pattern: 'advanced-manipulation',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/partition-list/',
          estimatedTime: 30,
          tags: ['linked-list', 'two-pointers'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'split-linked-list-parts-advanced',
          title: 'Split Linked List in Parts (Advanced)',
          difficulty: 'Medium',
          pattern: 'advanced-manipulation',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/split-linked-list-in-parts/',
          estimatedTime: 30,
          tags: ['linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'odd-even-linked-list-advanced',
          title: 'Odd Even Linked List (Advanced)',
          difficulty: 'Medium',
          pattern: 'advanced-manipulation',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/odd-even-linked-list/',
          estimatedTime: 25,
          tags: ['linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-linked-list-advanced',
          title: 'Design Linked List (Advanced)',
          difficulty: 'Medium',
          pattern: 'advanced-manipulation',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/design-linked-list/',
          estimatedTime: 30,
          tags: ['linked-list', 'design'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-doubly-linked-list',
          title: 'Design Doubly Linked List',
          difficulty: 'Medium',
          pattern: 'advanced-manipulation',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/design-linked-list/',
          estimatedTime: 35,
          tags: ['linked-list', 'design', 'doubly-linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-circular-linked-list',
          title: 'Design Circular Linked List',
          difficulty: 'Medium',
          pattern: 'advanced-manipulation',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/design-linked-list/',
          estimatedTime: 35,
          tags: ['linked-list', 'design'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'linked-list-random-node',
          title: 'Linked List Random Node',
          difficulty: 'Medium',
          pattern: 'advanced-manipulation',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/linked-list-random-node/',
          estimatedTime: 25,
          tags: ['linked-list', 'math', 'reservoir-sampling', 'randomized'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-most-recently-used-queue',
          title: 'Design Most Recently Used Queue',
          difficulty: 'Medium',
          pattern: 'advanced-manipulation',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/design-most-recently-used-queue/',
          estimatedTime: 40,
          tags: ['array', 'hash-table', 'linked-list', 'design', 'queue'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-authentication-manager',
          title: 'Design Authentication Manager',
          difficulty: 'Medium',
          pattern: 'advanced-manipulation',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/design-authentication-manager/',
          estimatedTime: 30,
          tags: ['hash-table', 'linked-list', 'design'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-underground-system',
          title: 'Design Underground System',
          difficulty: 'Medium',
          pattern: 'advanced-manipulation',
          category: 'linked-lists-intermediate',
          leetcodeUrl: 'https://leetcode.com/problems/design-underground-system/',
          estimatedTime: 35,
          tags: ['hash-table', 'string', 'design'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    }
  ]
};
*/

// Import pro category from separate file
export { linkedListsProCategory } from './linkedListsPro';

// OLD Pro Level - REPLACED WITH REFINED VERSION ABOVE
/*
export const linkedListsProCategory: Category = {
  id: 'linked-lists-pro',
  name: 'Linked Lists',
  icon: 'Link',
  level: 'pro',
  totalProblems: 45,
  completedProblems: 0,
  patterns: [
    {
      id: 'expert-algorithms',
      name: 'Expert Algorithms',
      description: 'Master the most challenging linked list algorithms for FAANG interviews',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'merge-k-sorted-lists-expert',
          title: 'Merge k Sorted Lists (Expert)',
          difficulty: 'Hard',
          pattern: 'expert-algorithms',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/merge-k-sorted-lists/',
          estimatedTime: 40,
          tags: ['linked-list', 'divide-and-conquer', 'heap', 'merge-sort'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'reverse-nodes-k-group-expert',
          title: 'Reverse Nodes in k-Group (Expert)',
          difficulty: 'Hard',
          pattern: 'expert-algorithms',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/reverse-nodes-in-k-group/',
          estimatedTime: 45,
          tags: ['linked-list', 'recursion'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'lfu-cache-expert',
          title: 'LFU Cache (Expert)',
          difficulty: 'Hard',
          pattern: 'expert-algorithms',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/lfu-cache/',
          estimatedTime: 50,
          tags: ['hash-table', 'linked-list', 'design', 'doubly-linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'all-oone-data-structure-expert',
          title: 'All O`one Data Structure (Expert)',
          difficulty: 'Hard',
          pattern: 'expert-algorithms',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/all-oone-data-structure/',
          estimatedTime: 50,
          tags: ['hash-table', 'linked-list', 'design', 'doubly-linked-list'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-skiplist-expert',
          title: 'Design Skiplist (Expert)',
          difficulty: 'Hard',
          pattern: 'expert-algorithms',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-skiplist/',
          estimatedTime: 60,
          tags: ['linked-list', 'design'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'serialize-deserialize-binary-tree',
          title: 'Serialize and Deserialize Binary Tree',
          difficulty: 'Hard',
          pattern: 'expert-algorithms',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',
          estimatedTime: 45,
          tags: ['string', 'tree', 'depth-first-search', 'breadth-first-search', 'design', 'binary-tree'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'serialize-deserialize-bst',
          title: 'Serialize and Deserialize BST',
          difficulty: 'Medium',
          pattern: 'expert-algorithms',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/serialize-and-deserialize-bst/',
          estimatedTime: 40,
          tags: ['string', 'tree', 'depth-first-search', 'breadth-first-search', 'design', 'binary-search-tree', 'binary-tree'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-add-search-words-data-structure',
          title: 'Design Add and Search Words Data Structure',
          difficulty: 'Medium',
          pattern: 'expert-algorithms',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/',
          estimatedTime: 35,
          tags: ['string', 'depth-first-search', 'design', 'trie'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'implement-trie-prefix-tree',
          title: 'Implement Trie (Prefix Tree)',
          difficulty: 'Medium',
          pattern: 'expert-algorithms',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/implement-trie-prefix-tree/',
          estimatedTime: 35,
          tags: ['hash-table', 'string', 'design', 'trie'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'word-search-ii-expert',
          title: 'Word Search II (Expert)',
          difficulty: 'Hard',
          pattern: 'expert-algorithms',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/word-search-ii/',
          estimatedTime: 50,
          tags: ['array', 'string', 'backtracking', 'trie', 'matrix'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-in-memory-file-system',
          title: 'Design In-Memory File System',
          difficulty: 'Hard',
          pattern: 'expert-algorithms',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-in-memory-file-system/',
          estimatedTime: 50,
          tags: ['hash-table', 'string', 'design', 'trie'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-search-autocomplete-system',
          title: 'Design Search Autocomplete System',
          difficulty: 'Hard',
          pattern: 'expert-algorithms',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-search-autocomplete-system/',
          estimatedTime: 50,
          tags: ['hash-table', 'string', 'design', 'trie', 'data-stream'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'maximum-xor-two-numbers-array',
          title: 'Maximum XOR of Two Numbers in an Array',
          difficulty: 'Medium',
          pattern: 'expert-algorithms',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/',
          estimatedTime: 40,
          tags: ['array', 'hash-table', 'bit-manipulation', 'trie'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'concatenated-words',
          title: 'Concatenated Words',
          difficulty: 'Hard',
          pattern: 'expert-algorithms',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/concatenated-words/',
          estimatedTime: 45,
          tags: ['array', 'string', 'dynamic-programming', 'depth-first-search', 'trie'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'palindrome-pairs',
          title: 'Palindrome Pairs',
          difficulty: 'Hard',
          pattern: 'expert-algorithms',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/palindrome-pairs/',
          estimatedTime: 50,
          tags: ['array', 'hash-table', 'string', 'trie'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    },
    {
      id: 'system-design-patterns',
      name: 'System Design Patterns',
      description: 'Master complex data structures and system design using linked lists',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'design-circular-queue-expert',
          title: 'Design Circular Queue (Expert)',
          difficulty: 'Medium',
          pattern: 'system-design-patterns',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-circular-queue/',
          estimatedTime: 30,
          tags: ['array', 'linked-list', 'design', 'queue'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-circular-deque-expert',
          title: 'Design Circular Deque (Expert)',
          difficulty: 'Medium',
          pattern: 'system-design-patterns',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-circular-deque/',
          estimatedTime: 35,
          tags: ['array', 'linked-list', 'design', 'queue'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-front-middle-back-queue-expert',
          title: 'Design Front Middle Back Queue (Expert)',
          difficulty: 'Medium',
          pattern: 'system-design-patterns',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-front-middle-back-queue/',
          estimatedTime: 35,
          tags: ['array', 'linked-list', 'design', 'queue', 'doubly-linked-list', 'data-stream'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-browser-history-expert',
          title: 'Design Browser History (Expert)',
          difficulty: 'Medium',
          pattern: 'system-design-patterns',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-browser-history/',
          estimatedTime: 30,
          tags: ['array', 'linked-list', 'stack', 'design', 'doubly-linked-list', 'data-stream'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-twitter-expert',
          title: 'Design Twitter (Expert)',
          difficulty: 'Medium',
          pattern: 'system-design-patterns',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-twitter/',
          estimatedTime: 40,
          tags: ['hash-table', 'linked-list', 'design', 'heap'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-hit-counter',
          title: 'Design Hit Counter',
          difficulty: 'Medium',
          pattern: 'system-design-patterns',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-hit-counter/',
          estimatedTime: 30,
          tags: ['hash-table', 'binary-search', 'design', 'queue', 'data-stream'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-log-storage-system',
          title: 'Design Log Storage System',
          difficulty: 'Medium',
          pattern: 'system-design-patterns',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-log-storage-system/',
          estimatedTime: 35,
          tags: ['hash-table', 'string', 'design'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-phone-directory',
          title: 'Design Phone Directory',
          difficulty: 'Medium',
          pattern: 'system-design-patterns',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-phone-directory/',
          estimatedTime: 30,
          tags: ['array', 'hash-table', 'linked-list', 'design', 'queue'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-tic-tac-toe',
          title: 'Design Tic-Tac-Toe',
          difficulty: 'Medium',
          pattern: 'system-design-patterns',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-tic-tac-toe/',
          estimatedTime: 30,
          tags: ['array', 'hash-table', 'design', 'matrix'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-snake-game',
          title: 'Design Snake Game',
          difficulty: 'Medium',
          pattern: 'system-design-patterns',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-snake-game/',
          estimatedTime: 40,
          tags: ['array', 'hash-table', 'design', 'queue', 'simulation'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-excel-sum-formula',
          title: 'Design Excel Sum Formula',
          difficulty: 'Hard',
          pattern: 'system-design-patterns',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-excel-sum-formula/',
          estimatedTime: 50,
          tags: ['array', 'hash-table', 'string', 'design', 'graph', 'topological-sort'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-compressed-string-iterator',
          title: 'Design Compressed String Iterator',
          difficulty: 'Easy',
          pattern: 'system-design-patterns',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-compressed-string-iterator/',
          estimatedTime: 25,
          tags: ['array', 'hash-table', 'string', 'design', 'iterator'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-bounded-blocking-queue',
          title: 'Design Bounded Blocking Queue',
          difficulty: 'Medium',
          pattern: 'system-design-patterns',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-bounded-blocking-queue/',
          estimatedTime: 35,
          tags: ['concurrency'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'web-crawler-multithreaded',
          title: 'Web Crawler Multithreaded',
          difficulty: 'Medium',
          pattern: 'system-design-patterns',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/web-crawler-multithreaded/',
          estimatedTime: 45,
          tags: ['concurrency'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'fizz-buzz-multithreaded',
          title: 'Fizz Buzz Multithreaded',
          difficulty: 'Medium',
          pattern: 'system-design-patterns',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/fizz-buzz-multithreaded/',
          estimatedTime: 35,
          tags: ['concurrency'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    },
    {
      id: 'advanced-data-structures',
      name: 'Advanced Data Structures',
      description: 'Implement complex data structures using linked list concepts',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'implement-rand10-using-rand7',
          title: 'Implement Rand10() Using Rand7()',
          difficulty: 'Medium',
          pattern: 'advanced-data-structures',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/implement-rand10-using-rand7/',
          estimatedTime: 30,
          tags: ['math', 'randomized', 'probability-and-statistics', 'rejection-sampling'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'random-pick-with-weight',
          title: 'Random Pick with Weight',
          difficulty: 'Medium',
          pattern: 'advanced-data-structures',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/random-pick-with-weight/',
          estimatedTime: 30,
          tags: ['math', 'binary-search', 'prefix-sum', 'randomized'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'random-pick-index',
          title: 'Random Pick Index',
          difficulty: 'Medium',
          pattern: 'advanced-data-structures',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/random-pick-index/',
          estimatedTime: 25,
          tags: ['hash-table', 'math', 'reservoir-sampling', 'randomized'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'shuffle-array',
          title: 'Shuffle an Array',
          difficulty: 'Medium',
          pattern: 'advanced-data-structures',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/shuffle-an-array/',
          estimatedTime: 25,
          tags: ['array', 'math', 'randomized'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'insert-delete-getrandom-o1',
          title: 'Insert Delete GetRandom O(1)',
          difficulty: 'Medium',
          pattern: 'advanced-data-structures',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/insert-delete-getrandom-o1/',
          estimatedTime: 35,
          tags: ['array', 'hash-table', 'math', 'design', 'randomized'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'insert-delete-getrandom-o1-duplicates-allowed',
          title: 'Insert Delete GetRandom O(1) - Duplicates allowed',
          difficulty: 'Hard',
          pattern: 'advanced-data-structures',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/',
          estimatedTime: 45,
          tags: ['array', 'hash-table', 'math', 'design', 'randomized'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'encode-decode-tinyurl',
          title: 'Encode and Decode TinyURL',
          difficulty: 'Medium',
          pattern: 'advanced-data-structures',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/encode-and-decode-tinyurl/',
          estimatedTime: 30,
          tags: ['hash-table', 'string', 'design', 'hash-function'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'encode-decode-strings',
          title: 'Encode and Decode Strings',
          difficulty: 'Medium',
          pattern: 'advanced-data-structures',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/encode-and-decode-strings/',
          estimatedTime: 30,
          tags: ['array', 'string', 'design'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-bitset',
          title: 'Design Bitset',
          difficulty: 'Medium',
          pattern: 'advanced-data-structures',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-bitset/',
          estimatedTime: 35,
          tags: ['array', 'hash-table', 'string', 'design'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-parking-system',
          title: 'Design Parking System',
          difficulty: 'Easy',
          pattern: 'advanced-data-structures',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-parking-system/',
          estimatedTime: 15,
          tags: ['design', 'simulation', 'counting'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-number-container-system',
          title: 'Design a Number Container System',
          difficulty: 'Medium',
          pattern: 'advanced-data-structures',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-a-number-container-system/',
          estimatedTime: 35,
          tags: ['hash-table', 'design', 'heap'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-text-editor',
          title: 'Design a Text Editor',
          difficulty: 'Hard',
          pattern: 'advanced-data-structures',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-a-text-editor/',
          estimatedTime: 45,
          tags: ['linked-list', 'string', 'stack', 'design', 'doubly-linked-list', 'simulation'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-food-rating-system',
          title: 'Design a Food Rating System',
          difficulty: 'Medium',
          pattern: 'advanced-data-structures',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-a-food-rating-system/',
          estimatedTime: 35,
          tags: ['hash-table', 'design', 'heap', 'ordered-set'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'design-movie-rental-system',
          title: 'Design Movie Rental System',
          difficulty: 'Hard',
          pattern: 'advanced-data-structures',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/design-movie-rental-system/',
          estimatedTime: 50,
          tags: ['array', 'hash-table', 'design', 'heap', 'ordered-set'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        },
        {
          id: 'stock-price-fluctuation',
          title: 'Stock Price Fluctuation',
          difficulty: 'Medium',
          pattern: 'advanced-data-structures',
          category: 'linked-lists-pro',
          leetcodeUrl: 'https://leetcode.com/problems/stock-price-fluctuation/',
          estimatedTime: 35,
          tags: ['hash-table', 'design', 'heap', 'data-stream', 'ordered-set'],
          userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
        }
      ]
    }
  ]
};*/
