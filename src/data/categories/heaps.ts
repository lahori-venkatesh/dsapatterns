import { Category } from '../../types';

export const heapsCategory: Category = {
  id: 'heaps',
  name: 'Heaps & Priority Queues',
  icon: 'Triangle',
  level: 'intermediate',
  totalProblems: 45,
  completedProblems: 0,
  patterns: [
    {
      id: 'basic-heap-operations',
      name: 'Basic Heap Operations',
      description: 'Learn fundamental heap operations and priority queue concepts',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'last-stone-weight',
          title: 'Last Stone Weight',
          difficulty: 'Easy',
          pattern: 'basic-heap-operations',
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
          id: 'kth-largest-element-stream',
          title: 'Kth Largest Element in a Stream',
          difficulty: 'Easy',
          pattern: 'basic-heap-operations',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/',
          estimatedTime: 20,
          tags: ['tree', 'design', 'binary-search-tree', 'heap', 'binary-tree', 'data-stream'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'relative-ranks',
          title: 'Relative Ranks',
          difficulty: 'Easy',
          pattern: 'basic-heap-operations',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/relative-ranks/',
          estimatedTime: 20,
          tags: ['array', 'sorting', 'heap'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'minimum-cost-connect-sticks',
          title: 'Minimum Cost to Connect Sticks',
          difficulty: 'Medium',
          pattern: 'basic-heap-operations',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-cost-to-connect-sticks/',
          estimatedTime: 25,
          tags: ['array', 'greedy', 'heap'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'k-weakest-rows-matrix',
          title: 'The K Weakest Rows in a Matrix',
          difficulty: 'Easy',
          pattern: 'basic-heap-operations',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/',
          estimatedTime: 25,
          tags: ['array', 'binary-search', 'sorting', 'heap', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximum-product-two-elements',
          title: 'Maximum Product of Two Elements in an Array',
          difficulty: 'Easy',
          pattern: 'basic-heap-operations',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/',
          estimatedTime: 15,
          tags: ['array', 'sorting', 'heap'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'kth-largest-element-array',
          title: 'Kth Largest Element in an Array',
          difficulty: 'Medium',
          pattern: 'basic-heap-operations',
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
          id: 'k-closest-points-origin',
          title: 'K Closest Points to Origin',
          difficulty: 'Medium',
          pattern: 'basic-heap-operations',
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
          id: 'sort-array-by-increasing-frequency',
          title: 'Sort Array by Increasing Frequency',
          difficulty: 'Easy',
          pattern: 'basic-heap-operations',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/sort-array-by-increasing-frequency/',
          estimatedTime: 25,
          tags: ['array', 'hash-table', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'furthest-building-you-can-reach',
          title: 'Furthest Building You Can Reach',
          difficulty: 'Medium',
          pattern: 'basic-heap-operations',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/furthest-building-you-can-reach/',
          estimatedTime: 35,
          tags: ['array', 'greedy', 'heap'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximum-score-removal-stones',
          title: 'Maximum Score From Removing Stones',
          difficulty: 'Medium',
          pattern: 'basic-heap-operations',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-score-from-removing-stones/',
          estimatedTime: 25,
          tags: ['math', 'greedy', 'heap'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'seat-reservation-manager',
          title: 'Seat Reservation Manager',
          difficulty: 'Medium',
          pattern: 'basic-heap-operations',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/seat-reservation-manager/',
          estimatedTime: 20,
          tags: ['design', 'heap'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'take-gifts-richest-pile',
          title: 'Take Gifts From the Richest Pile',
          difficulty: 'Easy',
          pattern: 'basic-heap-operations',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/take-gifts-from-the-richest-pile/',
          estimatedTime: 20,
          tags: ['array', 'simulation', 'heap'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximum-subsequence-score',
          title: 'Maximum Subsequence Score',
          difficulty: 'Medium',
          pattern: 'basic-heap-operations',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-subsequence-score/',
          estimatedTime: 35,
          tags: ['array', 'greedy', 'sorting', 'heap'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'smallest-number-infinite-set',
          title: 'Smallest Number in Infinite Set',
          difficulty: 'Medium',
          pattern: 'basic-heap-operations',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/smallest-number-in-infinite-set/',
          estimatedTime: 25,
          tags: ['hash-table', 'design', 'heap'],
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
      id: 'priority-queue-applications',
      name: 'Priority Queue Applications',
      description: 'Apply priority queues to solve scheduling and optimization problems',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'merge-k-sorted-lists-heap',
          title: 'Merge k Sorted Lists',
          difficulty: 'Hard',
          pattern: 'priority-queue-applications',
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
          id: 'task-scheduler',
          title: 'Task Scheduler',
          difficulty: 'Medium',
          pattern: 'priority-queue-applications',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/task-scheduler/',
          estimatedTime: 35,
          tags: ['array', 'hash-table', 'greedy', 'sorting', 'heap', 'counting'],
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
          pattern: 'priority-queue-applications',
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
          id: 'reorganize-string',
          title: 'Reorganize String',
          difficulty: 'Medium',
          pattern: 'priority-queue-applications',
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
          id: 'ugly-number-ii',
          title: 'Ugly Number II',
          difficulty: 'Medium',
          pattern: 'priority-queue-applications',
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
          id: 'find-median-data-stream',
          title: 'Find Median from Data Stream',
          difficulty: 'Hard',
          pattern: 'priority-queue-applications',
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
        },
        {
          id: 'sliding-window-median',
          title: 'Sliding Window Median',
          difficulty: 'Hard',
          pattern: 'priority-queue-applications',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/sliding-window-median/',
          estimatedTime: 50,
          tags: ['array', 'two-pointers', 'sliding-window', 'heap'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'ipo',
          title: 'IPO',
          difficulty: 'Hard',
          pattern: 'priority-queue-applications',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/ipo/',
          estimatedTime: 40,
          tags: ['array', 'greedy', 'sorting', 'heap'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'find-k-pairs-smallest-sums',
          title: 'Find K Pairs with Smallest Sums',
          difficulty: 'Medium',
          pattern: 'priority-queue-applications',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/find-k-pairs-with-smallest-sums/',
          estimatedTime: 35,
          tags: ['array', 'heap'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'super-ugly-number',
          title: 'Super Ugly Number',
          difficulty: 'Medium',
          pattern: 'priority-queue-applications',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/super-ugly-number/',
          estimatedTime: 40,
          tags: ['array', 'math', 'dynamic-programming', 'heap'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'kth-smallest-element-sorted-matrix',
          title: 'Kth Smallest Element in a Sorted Matrix',
          difficulty: 'Medium',
          pattern: 'priority-queue-applications',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/',
          estimatedTime: 35,
          tags: ['array', 'binary-search', 'sorting', 'heap', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'design-twitter',
          title: 'Design Twitter',
          difficulty: 'Medium',
          pattern: 'priority-queue-applications',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/design-twitter/',
          estimatedTime: 40,
          tags: ['hash-table', 'linked-list', 'design', 'heap'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'rearrange-string-k-distance',
          title: 'Rearrange String k Distance Apart',
          difficulty: 'Hard',
          pattern: 'priority-queue-applications',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/rearrange-string-k-distance-apart/',
          estimatedTime: 45,
          tags: ['hash-table', 'string', 'greedy', 'sorting', 'heap', 'counting'],
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
          pattern: 'priority-queue-applications',
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
        },
        {
          id: 'maximum-performance-team',
          title: 'Maximum Performance of a Team',
          difficulty: 'Hard',
          pattern: 'priority-queue-applications',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-performance-of-a-team/',
          estimatedTime: 50,
          tags: ['array', 'greedy', 'sorting', 'heap'],
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
      id: 'heap-design-problems',
      name: 'Heap Design Problems',
      description: 'Design custom heap-based data structures and systems',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'kth-largest-element-stream-design',
          title: 'Kth Largest Element in a Stream',
          difficulty: 'Easy',
          pattern: 'heap-design-problems',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/',
          estimatedTime: 25,
          tags: ['tree', 'design', 'binary-search-tree', 'heap', 'binary-tree', 'data-stream'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'design-hit-counter',
          title: 'Design Hit Counter',
          difficulty: 'Medium',
          pattern: 'heap-design-problems',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/design-hit-counter/',
          estimatedTime: 30,
          tags: ['hash-table', 'binary-search', 'design', 'queue'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'stock-price-fluctuation',
          title: 'Stock Price Fluctuation',
          difficulty: 'Medium',
          pattern: 'heap-design-problems',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/stock-price-fluctuation/',
          estimatedTime: 35,
          tags: ['hash-table', 'design', 'heap', 'data-stream', 'ordered-set'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'find-servers-handled-most-requests',
          title: 'Find Servers That Handled Most Number of Requests',
          difficulty: 'Medium',
          pattern: 'heap-design-problems',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/',
          estimatedTime: 40,
          tags: ['array', 'greedy', 'heap', 'ordered-set'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximum-frequency-stack',
          title: 'Maximum Frequency Stack',
          difficulty: 'Hard',
          pattern: 'heap-design-problems',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-frequency-stack/',
          estimatedTime: 45,
          tags: ['hash-table', 'stack', 'design', 'ordered-set'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'exam-room',
          title: 'Exam Room',
          difficulty: 'Medium',
          pattern: 'heap-design-problems',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/exam-room/',
          estimatedTime: 40,
          tags: ['design', 'heap', 'ordered-set'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'online-election',
          title: 'Online Election',
          difficulty: 'Medium',
          pattern: 'heap-design-problems',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/online-election/',
          estimatedTime: 35,
          tags: ['array', 'hash-table', 'binary-search', 'design'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'top-k-frequent-words',
          title: 'Top K Frequent Words',
          difficulty: 'Medium',
          pattern: 'heap-design-problems',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/top-k-frequent-words/',
          estimatedTime: 30,
          tags: ['hash-table', 'string', 'trie', 'sorting', 'heap', 'bucket-sort', 'counting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'employee-free-time',
          title: 'Employee Free Time',
          difficulty: 'Hard',
          pattern: 'heap-design-problems',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/employee-free-time/',
          estimatedTime: 45,
          tags: ['array', 'sorting', 'heap'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'smallest-range-covering-k-lists',
          title: 'Smallest Range Covering Elements from K Lists',
          difficulty: 'Hard',
          pattern: 'heap-design-problems',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/',
          estimatedTime: 50,
          tags: ['array', 'hash-table', 'greedy', 'sliding-window', 'sorting', 'heap'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'merge-k-sorted-arrays',
          title: 'Merge k Sorted Arrays',
          difficulty: 'Medium',
          pattern: 'heap-design-problems',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/merge-k-sorted-arrays/',
          estimatedTime: 35,
          tags: ['array', 'divide-and-conquer', 'heap', 'merge-sort'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'process-tasks-using-servers',
          title: 'Process Tasks Using Servers',
          difficulty: 'Medium',
          pattern: 'heap-design-problems',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/process-tasks-using-servers/',
          estimatedTime: 40,
          tags: ['array', 'heap'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'single-threaded-cpu',
          title: 'Single-Threaded CPU',
          difficulty: 'Medium',
          pattern: 'heap-design-problems',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/single-threaded-cpu/',
          estimatedTime: 35,
          tags: ['array', 'sorting', 'heap'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximum-running-time-n-computers',
          title: 'Maximum Running Time of N Computers',
          difficulty: 'Hard',
          pattern: 'heap-design-problems',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-running-time-of-n-computers/',
          estimatedTime: 50,
          tags: ['array', 'binary-search', 'greedy', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'minimum-interval-include-each-query',
          title: 'Minimum Interval to Include Each Query',
          difficulty: 'Hard',
          pattern: 'heap-design-problems',
          category: 'heaps',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-interval-to-include-each-query/',
          estimatedTime: 50,
          tags: ['array', 'binary-search', 'line-sweep', 'sorting', 'heap'],
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