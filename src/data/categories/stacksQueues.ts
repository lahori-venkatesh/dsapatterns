import { Category } from '../../types';

export const stacksQueuesCategory: Category = {
  id: 'stacks-queues',
  name: 'Stacks & Queues',
  icon: 'Layers',
  level: 'intermediate',
  totalProblems: 45,
  completedProblems: 0,
  patterns: [
    {
      id: 'basic-stack-operations',
      name: 'Basic Stack Operations',
      description: 'Learn fundamental stack operations: push, pop, peek, and basic applications',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'valid-parentheses',
          title: 'Valid Parentheses',
          difficulty: 'Easy',
          pattern: 'basic-stack-operations',
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
          id: 'implement-stack-using-arrays',
          title: 'Implement Stack using Arrays',
          difficulty: 'Easy',
          pattern: 'basic-stack-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/implement-stack-using-arrays/',
          estimatedTime: 25,
          tags: ['array', 'stack', 'design'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'min-stack',
          title: 'Min Stack',
          difficulty: 'Easy',
          pattern: 'basic-stack-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/min-stack/',
          estimatedTime: 20,
          tags: ['stack', 'design'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'baseball-game',
          title: 'Baseball Game',
          difficulty: 'Easy',
          pattern: 'basic-stack-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/baseball-game/',
          estimatedTime: 15,
          tags: ['array', 'stack'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'backspace-string-compare',
          title: 'Backspace String Compare',
          difficulty: 'Easy',
          pattern: 'basic-stack-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/backspace-string-compare/',
          estimatedTime: 20,
          tags: ['two-pointers', 'string', 'stack'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'remove-all-adjacent-duplicates',
          title: 'Remove All Adjacent Duplicates In String',
          difficulty: 'Easy',
          pattern: 'basic-stack-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/',
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
          id: 'next-greater-element-i-basic',
          title: 'Next Greater Element I',
          difficulty: 'Easy',
          pattern: 'basic-stack-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/next-greater-element-i/',
          estimatedTime: 25,
          tags: ['array', 'hash-table', 'stack'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'build-array-with-stack-operations',
          title: 'Build an Array With Stack Operations',
          difficulty: 'Easy',
          pattern: 'basic-stack-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/build-an-array-with-stack-operations/',
          estimatedTime: 20,
          tags: ['array', 'stack', 'simulation'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'crawler-log-folder',
          title: 'Crawler Log Folder',
          difficulty: 'Easy',
          pattern: 'basic-stack-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/crawler-log-folder/',
          estimatedTime: 15,
          tags: ['array', 'string', 'stack'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'make-string-great',
          title: 'Make The String Great',
          difficulty: 'Easy',
          pattern: 'basic-stack-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/make-the-string-great/',
          estimatedTime: 20,
          tags: ['string', 'stack'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'final-prices-with-discount',
          title: 'Final Prices With a Special Discount in a Shop',
          difficulty: 'Easy',
          pattern: 'basic-stack-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/',
          estimatedTime: 20,
          tags: ['array', 'stack', 'monotonic-stack'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'remove-outermost-parentheses',
          title: 'Remove Outermost Parentheses',
          difficulty: 'Easy',
          pattern: 'basic-stack-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/remove-outermost-parentheses/',
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
          id: 'maximum-nesting-depth-parentheses',
          title: 'Maximum Nesting Depth of the Parentheses',
          difficulty: 'Easy',
          pattern: 'basic-stack-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/',
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
          id: 'score-of-parentheses',
          title: 'Score of Parentheses',
          difficulty: 'Medium',
          pattern: 'basic-stack-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/score-of-parentheses/',
          estimatedTime: 30,
          tags: ['string', 'stack'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'evaluate-reverse-polish-notation',
          title: 'Evaluate Reverse Polish Notation',
          difficulty: 'Medium',
          pattern: 'basic-stack-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/',
          estimatedTime: 25,
          tags: ['array', 'math', 'stack'],
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
      id: 'basic-queue-operations',
      name: 'Basic Queue Operations',
      description: 'Learn fundamental queue operations: enqueue, dequeue, and basic applications',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'implement-queue-using-stacks',
          title: 'Implement Queue using Stacks',
          difficulty: 'Easy',
          pattern: 'basic-queue-operations',
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
          pattern: 'basic-queue-operations',
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
          id: 'number-recent-calls',
          title: 'Number of Recent Calls',
          difficulty: 'Easy',
          pattern: 'basic-queue-operations',
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
          id: 'moving-average-data-stream',
          title: 'Moving Average from Data Stream',
          difficulty: 'Easy',
          pattern: 'basic-queue-operations',
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
          id: 'first-unique-character-stream',
          title: 'First Unique Character in a String',
          difficulty: 'Easy',
          pattern: 'basic-queue-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/first-unique-character-in-a-string/',
          estimatedTime: 15,
          tags: ['hash-table', 'string', 'queue', 'counting'],
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
          difficulty: 'Easy',
          pattern: 'basic-queue-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/design-circular-queue/',
          estimatedTime: 25,
          tags: ['array', 'linked-list', 'design', 'queue'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'reveal-cards-increasing-order',
          title: 'Reveal Cards In Increasing Order',
          difficulty: 'Medium',
          pattern: 'basic-queue-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/reveal-cards-in-increasing-order/',
          estimatedTime: 30,
          tags: ['array', 'queue', 'sorting', 'simulation'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'dota2-senate',
          title: 'Dota2 Senate',
          difficulty: 'Medium',
          pattern: 'basic-queue-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/dota2-senate/',
          estimatedTime: 25,
          tags: ['string', 'queue', 'greedy'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'time-needed-buy-tickets',
          title: 'Time Needed to Buy Tickets',
          difficulty: 'Easy',
          pattern: 'basic-queue-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/time-needed-to-buy-tickets/',
          estimatedTime: 15,
          tags: ['array', 'queue', 'simulation'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'number-students-unable-eat-lunch',
          title: 'Number of Students Unable to Eat Lunch',
          difficulty: 'Easy',
          pattern: 'basic-queue-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/',
          estimatedTime: 20,
          tags: ['array', 'queue', 'simulation'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'design-front-middle-back-queue',
          title: 'Design Front Middle Back Queue',
          difficulty: 'Medium',
          pattern: 'basic-queue-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/design-front-middle-back-queue/',
          estimatedTime: 35,
          tags: ['array', 'linked-list', 'design', 'queue', 'data-stream'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'implement-queue-using-arrays',
          title: 'Implement Queue using Arrays',
          difficulty: 'Easy',
          pattern: 'basic-queue-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/implement-queue-using-arrays/',
          estimatedTime: 20,
          tags: ['array', 'design', 'queue'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'circular-deque',
          title: 'Design Circular Deque',
          difficulty: 'Medium',
          pattern: 'basic-queue-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/design-circular-deque/',
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
          id: 'shortest-subarray-sum-k',
          title: 'Shortest Subarray with Sum at Least K',
          difficulty: 'Hard',
          pattern: 'basic-queue-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/',
          estimatedTime: 45,
          tags: ['array', 'binary-search', 'queue', 'sliding-window', 'heap', 'prefix-sum', 'monotonic-queue'],
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
      id: 'deque-operations',
      name: 'Deque Operations',
      description: 'Learn double-ended queue operations and applications',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'sliding-window-maximum-basic',
          title: 'Sliding Window Maximum',
          difficulty: 'Hard',
          pattern: 'deque-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/sliding-window-maximum/',
          estimatedTime: 45,
          tags: ['array', 'queue', 'sliding-window', 'heap', 'monotonic-queue'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'constrained-subsequence-sum',
          title: 'Constrained Subsequence Sum',
          difficulty: 'Hard',
          pattern: 'deque-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/constrained-subsequence-sum/',
          estimatedTime: 50,
          tags: ['array', 'dynamic-programming', 'queue', 'sliding-window', 'heap', 'monotonic-queue'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'jump-game-vi',
          title: 'Jump Game VI',
          difficulty: 'Medium',
          pattern: 'deque-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/jump-game-vi/',
          estimatedTime: 35,
          tags: ['array', 'dynamic-programming', 'queue', 'sliding-window', 'heap', 'monotonic-queue'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximum-sum-circular-subarray',
          title: 'Maximum Sum Circular Subarray',
          difficulty: 'Medium',
          pattern: 'deque-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-sum-circular-subarray/',
          estimatedTime: 40,
          tags: ['array', 'divide-and-conquer', 'dynamic-programming', 'queue', 'monotonic-queue'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'longest-continuous-subarray',
          title: 'Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit',
          difficulty: 'Medium',
          pattern: 'deque-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/',
          estimatedTime: 35,
          tags: ['array', 'queue', 'sliding-window', 'heap', 'ordered-set', 'monotonic-queue'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'find-most-competitive-subsequence',
          title: 'Find the Most Competitive Subsequence',
          difficulty: 'Medium',
          pattern: 'deque-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/find-the-most-competitive-subsequence/',
          estimatedTime: 30,
          tags: ['array', 'stack', 'greedy', 'monotonic-stack'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximum-number-robots-within-budget',
          title: 'Maximum Number of Robots Within Budget',
          difficulty: 'Hard',
          pattern: 'deque-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-number-of-robots-within-budget/',
          estimatedTime: 45,
          tags: ['array', 'binary-search', 'queue', 'sliding-window', 'heap', 'prefix-sum', 'monotonic-queue'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'sum-subarray-minimums',
          title: 'Sum of Subarray Minimums',
          difficulty: 'Medium',
          pattern: 'deque-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/sum-of-subarray-minimums/',
          estimatedTime: 40,
          tags: ['array', 'dynamic-programming', 'stack', 'monotonic-stack'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'sum-subarray-ranges',
          title: 'Sum of Subarray Ranges',
          difficulty: 'Medium',
          pattern: 'deque-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/sum-of-subarray-ranges/',
          estimatedTime: 35,
          tags: ['array', 'stack', 'monotonic-stack'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximum-subarray-min-product',
          title: 'Maximum Subarray Min-Product',
          difficulty: 'Medium',
          pattern: 'deque-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-subarray-min-product/',
          estimatedTime: 40,
          tags: ['array', 'stack', 'monotonic-stack', 'prefix-sum'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'next-greater-element-iv',
          title: 'Next Greater Element IV',
          difficulty: 'Hard',
          pattern: 'deque-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/next-greater-element-iv/',
          estimatedTime: 50,
          tags: ['array', 'binary-search', 'stack', 'sorting', 'monotonic-stack'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'count-subarrays-fixed-bounds',
          title: 'Count Subarrays With Fixed Bounds',
          difficulty: 'Hard',
          pattern: 'deque-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/count-subarrays-with-fixed-bounds/',
          estimatedTime: 45,
          tags: ['array', 'queue', 'sliding-window', 'monotonic-queue'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'minimum-window-subsequence',
          title: 'Minimum Window Subsequence',
          difficulty: 'Hard',
          pattern: 'deque-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-window-subsequence/',
          estimatedTime: 50,
          tags: ['string', 'dynamic-programming', 'sliding-window'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'shortest-subarray-or-k',
          title: 'Shortest Subarray With OR at Least K II',
          difficulty: 'Medium',
          pattern: 'deque-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/',
          estimatedTime: 35,
          tags: ['array', 'bit-manipulation', 'sliding-window'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximum-score-good-subarray',
          title: 'Maximum Score of a Good Subarray',
          difficulty: 'Hard',
          pattern: 'deque-operations',
          category: 'stacks-queues',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-score-of-a-good-subarray/',
          estimatedTime: 45,
          tags: ['array', 'two-pointers', 'binary-search', 'stack', 'monotonic-stack'],
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