import { Category } from '../../types';

export const greedyAlgorithmsCategory: Category = {
  id: 'greedy-algorithms',
  name: 'Greedy Algorithms',
  icon: 'TrendingUp',
  level: 'intermediate',
  totalProblems: 12,
  completedProblems: 0,
  patterns: [
    {
      id: 'interval-scheduling',
      name: 'Interval Scheduling',
      description: 'Optimize interval selection and scheduling problems using greedy approach',
      totalProblems: 6,
      completedProblems: 0,
      problems: [
        {
          id: 'merge-intervals',
          title: 'Merge Intervals',
          difficulty: 'Medium',
          pattern: 'interval-scheduling',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/merge-intervals/',
          estimatedTime: 30,
          tags: ['array', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'insert-interval',
          title: 'Insert Interval',
          difficulty: 'Medium',
          pattern: 'interval-scheduling',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/insert-interval/',
          estimatedTime: 30,
          tags: ['array'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'non-overlapping-intervals',
          title: 'Non-overlapping Intervals',
          difficulty: 'Medium',
          pattern: 'interval-scheduling',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/non-overlapping-intervals/',
          estimatedTime: 35,
          tags: ['array', 'dynamic-programming', 'greedy', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'meeting-rooms',
          title: 'Meeting Rooms',
          difficulty: 'Easy',
          pattern: 'interval-scheduling',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/meeting-rooms/',
          estimatedTime: 20,
          tags: ['array', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'minimum-number-arrows-burst-balloons',
          title: 'Minimum Number of Arrows to Burst Balloons',
          difficulty: 'Medium',
          pattern: 'interval-scheduling',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/',
          estimatedTime: 35,
          tags: ['array', 'greedy', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'interval-list-intersections',
          title: 'Interval List Intersections',
          difficulty: 'Medium',
          pattern: 'interval-scheduling',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/interval-list-intersections/',
          estimatedTime: 30,
          tags: ['array', 'two-pointers'],
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
      id: 'optimization-problems',
      name: 'Optimization Problems',
      description: 'Solve optimization problems using greedy choice property',
      totalProblems: 6,
      completedProblems: 0,
      problems: [
        {
          id: 'jump-game',
          title: 'Jump Game',
          difficulty: 'Medium',
          pattern: 'optimization-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/jump-game/',
          estimatedTime: 25,
          tags: ['array', 'dynamic-programming', 'greedy'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'jump-game-ii',
          title: 'Jump Game II',
          difficulty: 'Medium',
          pattern: 'optimization-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/jump-game-ii/',
          estimatedTime: 30,
          tags: ['array', 'dynamic-programming', 'greedy'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'gas-station',
          title: 'Gas Station',
          difficulty: 'Medium',
          pattern: 'optimization-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/gas-station/',
          estimatedTime: 35,
          tags: ['array', 'greedy'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'candy',
          title: 'Candy',
          difficulty: 'Hard',
          pattern: 'optimization-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/candy/',
          estimatedTime: 45,
          tags: ['array', 'greedy'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'partition-labels',
          title: 'Partition Labels',
          difficulty: 'Medium',
          pattern: 'optimization-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/partition-labels/',
          estimatedTime: 30,
          tags: ['hash-table', 'string', 'greedy', 'two-pointers'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'queue-reconstruction-by-height',
          title: 'Queue Reconstruction by Height',
          difficulty: 'Medium',
          pattern: 'optimization-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/queue-reconstruction-by-height/',
          estimatedTime: 35,
          tags: ['array', 'greedy', 'sorting'],
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