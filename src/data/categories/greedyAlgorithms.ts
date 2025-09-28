import { Category } from '../../types';

export const greedyAlgorithmsCategory: Category = {
  id: 'greedy-algorithms',
  name: 'Greedy Algorithms',
  icon: 'TrendingUp',
  level: 'intermediate',
  totalProblems: 45,
  completedProblems: 0,
  patterns: [
    {
      id: 'basic-greedy-problems',
      name: 'Basic Greedy Problems',
      description: 'Learn fundamental greedy algorithm concepts and simple optimization problems',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'assign-cookies',
          title: 'Assign Cookies',
          difficulty: 'Easy',
          pattern: 'basic-greedy-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/assign-cookies/',
          estimatedTime: 20,
          tags: ['array', 'two-pointers', 'greedy', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'lemonade-change',
          title: 'Lemonade Change',
          difficulty: 'Easy',
          pattern: 'basic-greedy-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/lemonade-change/',
          estimatedTime: 15,
          tags: ['array', 'greedy'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'best-time-buy-sell-stock',
          title: 'Best Time to Buy and Sell Stock',
          difficulty: 'Easy',
          pattern: 'basic-greedy-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
          estimatedTime: 20,
          tags: ['array', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'best-time-buy-sell-stock-ii',
          title: 'Best Time to Buy and Sell Stock II',
          difficulty: 'Easy',
          pattern: 'basic-greedy-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/',
          estimatedTime: 20,
          tags: ['array', 'dynamic-programming', 'greedy'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximum-subarray',
          title: 'Maximum Subarray',
          difficulty: 'Easy',
          pattern: 'basic-greedy-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-subarray/',
          estimatedTime: 25,
          tags: ['array', 'divide-and-conquer', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'can-place-flowers',
          title: 'Can Place Flowers',
          difficulty: 'Easy',
          pattern: 'basic-greedy-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/can-place-flowers/',
          estimatedTime: 20,
          tags: ['array', 'greedy'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'minimum-cost-climbing-stairs',
          title: 'Min Cost Climbing Stairs',
          difficulty: 'Easy',
          pattern: 'basic-greedy-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/min-cost-climbing-stairs/',
          estimatedTime: 20,
          tags: ['array', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'monotonic-array',
          title: 'Monotonic Array',
          difficulty: 'Easy',
          pattern: 'basic-greedy-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/monotonic-array/',
          estimatedTime: 15,
          tags: ['array'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'largest-perimeter-triangle',
          title: 'Largest Perimeter Triangle',
          difficulty: 'Easy',
          pattern: 'basic-greedy-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/largest-perimeter-triangle/',
          estimatedTime: 20,
          tags: ['array', 'math', 'greedy', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'two-city-scheduling',
          title: 'Two City Scheduling',
          difficulty: 'Medium',
          pattern: 'basic-greedy-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/two-city-scheduling/',
          estimatedTime: 30,
          tags: ['array', 'greedy', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximum-units-truck',
          title: 'Maximum Units on a Truck',
          difficulty: 'Easy',
          pattern: 'basic-greedy-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-units-on-a-truck/',
          estimatedTime: 20,
          tags: ['array', 'greedy', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'minimum-number-game',
          title: 'Minimum Number Game',
          difficulty: 'Easy',
          pattern: 'basic-greedy-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-number-game/',
          estimatedTime: 15,
          tags: ['array', 'greedy', 'sorting', 'simulation'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximum-ice-cream-bars',
          title: 'Maximum Ice Cream Bars',
          difficulty: 'Medium',
          pattern: 'basic-greedy-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-ice-cream-bars/',
          estimatedTime: 25,
          tags: ['array', 'greedy', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'reduce-array-size-half',
          title: 'Reduce Array Size to The Half',
          difficulty: 'Medium',
          pattern: 'basic-greedy-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/reduce-array-size-to-the-half/',
          estimatedTime: 25,
          tags: ['array', 'hash-table', 'greedy', 'sorting', 'heap'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximum-69-number',
          title: 'Maximum 69 Number',
          difficulty: 'Easy',
          pattern: 'basic-greedy-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-69-number/',
          estimatedTime: 15,
          tags: ['math', 'greedy'],
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
      id: 'interval-scheduling',
      name: 'Interval Scheduling',
      description: 'Optimize interval selection and scheduling problems using greedy approach',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'jump-game',
          title: 'Jump Game',
          difficulty: 'Medium',
          pattern: 'interval-scheduling',
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
        },
        {
          id: 'minimum-platforms',
          title: 'Minimum Number of Platforms Required',
          difficulty: 'Medium',
          pattern: 'interval-scheduling',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-platforms-required/',
          estimatedTime: 30,
          tags: ['array', 'greedy', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'car-pooling',
          title: 'Car Pooling',
          difficulty: 'Medium',
          pattern: 'interval-scheduling',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/car-pooling/',
          estimatedTime: 25,
          tags: ['array', 'sorting', 'heap', 'simulation', 'prefix-sum'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'corporate-flight-bookings',
          title: 'Corporate Flight Bookings',
          difficulty: 'Medium',
          pattern: 'interval-scheduling',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/corporate-flight-bookings/',
          estimatedTime: 25,
          tags: ['array', 'prefix-sum'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximum-profit-job-scheduling',
          title: 'Maximum Profit in Job Scheduling',
          difficulty: 'Hard',
          pattern: 'interval-scheduling',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-profit-in-job-scheduling/',
          estimatedTime: 45,
          tags: ['array', 'binary-search', 'dynamic-programming', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'video-stitching',
          title: 'Video Stitching',
          difficulty: 'Medium',
          pattern: 'interval-scheduling',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/video-stitching/',
          estimatedTime: 35,
          tags: ['array', 'dynamic-programming', 'greedy'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'remove-covered-intervals',
          title: 'Remove Covered Intervals',
          difficulty: 'Medium',
          pattern: 'interval-scheduling',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/remove-covered-intervals/',
          estimatedTime: 25,
          tags: ['array', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'minimum-number-taps',
          title: 'Minimum Number of Taps to Open to Water a Garden',
          difficulty: 'Hard',
          pattern: 'interval-scheduling',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/',
          estimatedTime: 45,
          tags: ['array', 'dynamic-programming', 'greedy'],
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
      totalProblems: 15,
      completedProblems: 0,
      problems: [
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
        },
        {
          id: 'minimum-deletions-make-character-frequencies-unique',
          title: 'Minimum Deletions to Make Character Frequencies Unique',
          difficulty: 'Medium',
          pattern: 'optimization-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/',
          estimatedTime: 30,
          tags: ['hash-table', 'string', 'greedy', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'boats-save-people',
          title: 'Boats to Save People',
          difficulty: 'Medium',
          pattern: 'optimization-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/boats-to-save-people/',
          estimatedTime: 25,
          tags: ['array', 'two-pointers', 'greedy', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'minimum-rounds-complete-tasks',
          title: 'Minimum Rounds to Complete All Tasks',
          difficulty: 'Medium',
          pattern: 'optimization-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/',
          estimatedTime: 25,
          tags: ['array', 'hash-table', 'greedy', 'counting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximum-bags-full-capacity',
          title: 'Maximum Bags With Full Capacity of Rocks',
          difficulty: 'Medium',
          pattern: 'optimization-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/',
          estimatedTime: 25,
          tags: ['array', 'greedy', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'minimum-operations-make-array-equal',
          title: 'Minimum Operations to Make Array Equal',
          difficulty: 'Medium',
          pattern: 'optimization-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-operations-to-make-array-equal/',
          estimatedTime: 20,
          tags: ['math'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'wiggle-subsequence',
          title: 'Wiggle Subsequence',
          difficulty: 'Medium',
          pattern: 'optimization-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/wiggle-subsequence/',
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
          id: 'broken-calculator',
          title: 'Broken Calculator',
          difficulty: 'Medium',
          pattern: 'optimization-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/broken-calculator/',
          estimatedTime: 25,
          tags: ['math', 'greedy'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'minimum-add-make-parentheses-valid',
          title: 'Minimum Add to Make Parentheses Valid',
          difficulty: 'Medium',
          pattern: 'optimization-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/',
          estimatedTime: 20,
          tags: ['string', 'stack', 'greedy'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'score-after-flipping-matrix',
          title: 'Score After Flipping Matrix',
          difficulty: 'Medium',
          pattern: 'optimization-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/score-after-flipping-matrix/',
          estimatedTime: 30,
          tags: ['array', 'greedy', 'bit-manipulation', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'advantage-shuffle',
          title: 'Advantage Shuffle',
          difficulty: 'Medium',
          pattern: 'optimization-problems',
          category: 'greedy-algorithms',
          leetcodeUrl: 'https://leetcode.com/problems/advantage-shuffle/',
          estimatedTime: 35,
          tags: ['array', 'two-pointers', 'greedy', 'sorting'],
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
}