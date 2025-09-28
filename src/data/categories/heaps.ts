import { Category } from '../../types';

export const heapsCategory: Category = {
  id: 'heaps',
  name: 'Heaps & Priority Queues',
  icon: 'Triangle',
  level: 'intermediate',
  totalProblems: 10,
  completedProblems: 0,
  patterns: [
    {
      id: 'min-max-heap',
      name: 'Min/Max Heap',
      description: 'Use heaps to efficiently find minimum/maximum elements',
      totalProblems: 5,
      completedProblems: 0,
      problems: [
        {
          id: 'kth-largest-element-array',
          title: 'Kth Largest Element in an Array',
          difficulty: 'Medium',
          pattern: 'min-max-heap',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/kth-largest-element-in-an-array/',
          estimatedTime: 30,
          tags: ['array', 'divide-and-conquer', 'sorting', 'heap', 'quickselect'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'last-stone-weight',
          title: 'Last Stone Weight',
          difficulty: 'Easy',
          pattern: 'min-max-heap',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/last-stone-weight/',
          estimatedTime: 20,
          tags: ['array', 'heap'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'k-closest-points-origin',
          title: 'K Closest Points to Origin',
          difficulty: 'Medium',
          pattern: 'min-max-heap',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/k-closest-points-to-origin/',
          estimatedTime: 30,
          tags: ['array', 'math', 'divide-and-conquer', 'geometry', 'sorting', 'heap', 'quickselect'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'kth-smallest-element-bst',
          title: 'Kth Smallest Element in a BST',
          difficulty: 'Medium',
          pattern: 'min-max-heap',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',
          estimatedTime: 25,
          tags: ['tree', 'depth-first-search', 'binary-search-tree', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'find-median-data-stream',
          title: 'Find Median from Data Stream',
          difficulty: 'Hard',
          pattern: 'min-max-heap',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/find-median-from-data-stream/',
          estimatedTime: 45,
          tags: ['two-pointers', 'design', 'sorting', 'heap', 'data-stream'],
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
      id: 'priority-queue',
      name: 'Priority Queue',
      description: 'Solve problems using priority queues for optimal scheduling and processing',
      totalProblems: 5,
      completedProblems: 0,
      problems: [
        {
          id: 'merge-k-sorted-lists-heap',
          title: 'Merge k Sorted Lists',
          difficulty: 'Hard',
          pattern: 'priority-queue',
          category: 'heaps',
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
          id: 'ugly-number-ii',
          title: 'Ugly Number II',
          difficulty: 'Medium',
          pattern: 'priority-queue',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/ugly-number-ii/',
          estimatedTime: 35,
          tags: ['hash-table', 'math', 'dynamic-programming', 'heap'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'reorganize-string',
          title: 'Reorganize String',
          difficulty: 'Medium',
          pattern: 'priority-queue',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/reorganize-string/',
          estimatedTime: 35,
          tags: ['hash-table', 'string', 'greedy', 'sorting', 'heap', 'counting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'meeting-rooms-ii',
          title: 'Meeting Rooms II',
          difficulty: 'Medium',
          pattern: 'priority-queue',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/meeting-rooms-ii/',
          estimatedTime: 30,
          tags: ['array', 'two-pointers', 'greedy', 'sorting', 'heap'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'course-schedule-iii',
          title: 'Course Schedule III',
          difficulty: 'Hard',
          pattern: 'priority-queue',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/course-schedule-iii/',
          estimatedTime: 45,
          tags: ['array', 'greedy', 'sorting', 'heap'],
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