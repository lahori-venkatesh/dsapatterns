import { Category } from '../../types';

export const stacksQueuesCategory: Category = {
  id: 'stacks-queues',
  name: 'Stacks & Queues',
  icon: 'Layers',
  level: 'intermediate',
  totalProblems: 12,
  completedProblems: 0,
  patterns: [
    {
      id: 'monotonic-stack',
      name: 'Monotonic Stack',
      description: 'Use monotonic stacks to solve problems involving next/previous greater/smaller elements',
      totalProblems: 6,
      completedProblems: 0,
      problems: [
        {
          id: 'valid-parentheses',
          title: 'Valid Parentheses',
          difficulty: 'Easy',
          pattern: 'monotonic-stack',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/valid-parentheses/',
          estimatedTime: 15,
          tags: ['string', 'stack'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'next-greater-element-i',
          title: 'Next Greater Element I',
          difficulty: 'Easy',
          pattern: 'monotonic-stack',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/next-greater-element-i/',
          estimatedTime: 25,
          tags: ['array', 'hash-table', 'stack', 'monotonic-stack'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'daily-temperatures',
          title: 'Daily Temperatures',
          difficulty: 'Medium',
          pattern: 'monotonic-stack',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/daily-temperatures/',
          estimatedTime: 30,
          tags: ['array', 'stack', 'monotonic-stack'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'largest-rectangle-histogram',
          title: 'Largest Rectangle in Histogram',
          difficulty: 'Hard',
          pattern: 'monotonic-stack',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/largest-rectangle-in-histogram/',
          estimatedTime: 45,
          tags: ['array', 'stack', 'monotonic-stack'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximal-rectangle',
          title: 'Maximal Rectangle',
          difficulty: 'Hard',
          pattern: 'monotonic-stack',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/maximal-rectangle/',
          estimatedTime: 50,
          tags: ['array', 'dynamic-programming', 'stack', 'matrix', 'monotonic-stack'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'remove-k-digits',
          title: 'Remove K Digits',
          difficulty: 'Medium',
          pattern: 'monotonic-stack',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/remove-k-digits/',
          estimatedTime: 35,
          tags: ['string', 'stack', 'greedy', 'monotonic-stack'],
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
      id: 'queue-operations',
      name: 'Queue Operations',
      description: 'Implement and use queues for BFS, level-order traversal, and sliding window problems',
      totalProblems: 6,
      completedProblems: 0,
      problems: [
        {
          id: 'implement-queue-using-stacks',
          title: 'Implement Queue using Stacks',
          difficulty: 'Easy',
          pattern: 'queue-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/implement-queue-using-stacks/',
          estimatedTime: 20,
          tags: ['stack', 'design', 'queue'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'implement-stack-using-queues',
          title: 'Implement Stack using Queues',
          difficulty: 'Easy',
          pattern: 'queue-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/implement-stack-using-queues/',
          estimatedTime: 20,
          tags: ['stack', 'design', 'queue'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'design-circular-queue',
          title: 'Design Circular Queue',
          difficulty: 'Medium',
          pattern: 'queue-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/design-circular-queue/',
          estimatedTime: 30,
          tags: ['array', 'linked-list', 'design', 'queue'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'moving-average-data-stream',
          title: 'Moving Average from Data Stream',
          difficulty: 'Easy',
          pattern: 'queue-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/moving-average-from-data-stream/',
          estimatedTime: 15,
          tags: ['array', 'design', 'queue', 'data-stream'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'number-recent-calls',
          title: 'Number of Recent Calls',
          difficulty: 'Easy',
          pattern: 'queue-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/number-of-recent-calls/',
          estimatedTime: 15,
          tags: ['design', 'queue', 'data-stream'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'task-scheduler',
          title: 'Task Scheduler',
          difficulty: 'Medium',
          pattern: 'queue-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/task-scheduler/',
          estimatedTime: 40,
          tags: ['array', 'hash-table', 'greedy', 'sorting', 'heap', 'counting'],
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