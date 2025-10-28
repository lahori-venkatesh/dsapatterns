import { Category } from '../../types';

export const dynamicProgrammingCategory: Category = {
  id: 'dynamic-programming',
  name: 'Dynamic Programming',
  icon: 'Zap',
  level: 'pro',
  totalProblems: 45,
  completedProblems: 0,
  patterns: [
    {
      id: 'basic-dp',
      name: 'Basic DP',
      description: 'Learn fundamental dynamic programming concepts with simple problems',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'climbing-stairs',
          title: 'Climbing Stairs',
          difficulty: 'Easy',
          pattern: 'basic-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/climbing-stairs/',
          estimatedTime: 20,
          tags: ['math', 'dynamic-programming', 'memoization'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'fibonacci-number',
          title: 'Fibonacci Number',
          difficulty: 'Easy',
          pattern: 'basic-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/fibonacci-number/',
          estimatedTime: 15,
          tags: ['math', 'dynamic-programming', 'recursion', 'memoization'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'n-th-tribonacci-number',
          title: 'N-th Tribonacci Number',
          difficulty: 'Easy',
          pattern: 'basic-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/n-th-tribonacci-number/',
          estimatedTime: 20,
          tags: ['math', 'dynamic-programming', 'memoization'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'min-cost-climbing-stairs',
          title: 'Min Cost Climbing Stairs',
          difficulty: 'Easy',
          pattern: 'basic-dp',
          category: 'dynamic-programming',
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
          id: 'is-subsequence',
          title: 'Is Subsequence',
          difficulty: 'Easy',
          pattern: 'basic-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/is-subsequence/',
          estimatedTime: 20,
          tags: ['two-pointers', 'string', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'divisor-game',
          title: 'Divisor Game',
          difficulty: 'Easy',
          pattern: 'basic-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/divisor-game/',
          estimatedTime: 15,
          tags: ['math', 'dynamic-programming', 'game-theory'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'get-maximum-generated-array',
          title: 'Get Maximum in Generated Array',
          difficulty: 'Easy',
          pattern: 'basic-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/get-maximum-in-generated-array/',
          estimatedTime: 20,
          tags: ['array', 'dynamic-programming', 'simulation'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'counting-bits',
          title: 'Counting Bits',
          difficulty: 'Easy',
          pattern: 'basic-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/counting-bits/',
          estimatedTime: 25,
          tags: ['dynamic-programming', 'bit-manipulation'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'range-sum-query-immutable',
          title: 'Range Sum Query - Immutable',
          difficulty: 'Easy',
          pattern: 'basic-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/range-sum-query-immutable/',
          estimatedTime: 20,
          tags: ['array', 'design', 'prefix-sum'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'house-robber',
          title: 'House Robber',
          difficulty: 'Medium',
          pattern: 'basic-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/house-robber/',
          estimatedTime: 25,
          tags: ['array', 'dynamic-programming'],
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
          pattern: 'basic-dp',
          category: 'dynamic-programming',
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
          id: 'best-time-buy-sell-stock',
          title: 'Best Time to Buy and Sell Stock',
          difficulty: 'Easy',
          pattern: 'basic-dp',
          category: 'dynamic-programming',
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
          id: 'pascal-triangle',
          title: 'Pascal\'s Triangle',
          difficulty: 'Easy',
          pattern: 'basic-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/pascals-triangle/',
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
          id: 'pascal-triangle-ii',
          title: 'Pascal\'s Triangle II',
          difficulty: 'Easy',
          pattern: 'basic-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/pascals-triangle-ii/',
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
          id: 'delete-and-earn',
          title: 'Delete and Earn',
          difficulty: 'Medium',
          pattern: 'basic-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/delete-and-earn/',
          estimatedTime: 30,
          tags: ['array', 'hash-table', 'dynamic-programming'],
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
      id: 'linear-dp',
      name: 'Linear DP',
      description: 'Solve 1D dynamic programming problems with optimal substructure',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'unique-paths',
          title: 'Unique Paths',
          difficulty: 'Medium',
          pattern: 'linear-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/unique-paths/',
          estimatedTime: 25,
          tags: ['math', 'dynamic-programming', 'combinatorics'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'house-robber-ii',
          title: 'House Robber II',
          difficulty: 'Medium',
          pattern: 'linear-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/house-robber-ii/',
          estimatedTime: 30,
          tags: ['array', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'decode-ways',
          title: 'Decode Ways',
          difficulty: 'Medium',
          pattern: 'linear-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/decode-ways/',
          estimatedTime: 35,
          tags: ['string', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'coin-change',
          title: 'Coin Change',
          difficulty: 'Medium',
          pattern: 'linear-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/coin-change/',
          estimatedTime: 30,
          tags: ['array', 'dynamic-programming', 'breadth-first-search'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximum-product-subarray',
          title: 'Maximum Product Subarray',
          difficulty: 'Medium',
          pattern: 'linear-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-product-subarray/',
          estimatedTime: 35,
          tags: ['array', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'word-break',
          title: 'Word Break',
          difficulty: 'Medium',
          pattern: 'linear-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/word-break/',
          estimatedTime: 35,
          tags: ['hash-table', 'string', 'dynamic-programming', 'trie', 'memoization'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'longest-increasing-subsequence',
          title: 'Longest Increasing Subsequence',
          difficulty: 'Medium',
          pattern: 'linear-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/longest-increasing-subsequence/',
          estimatedTime: 40,
          tags: ['array', 'binary-search', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'coin-change-2',
          title: 'Coin Change 2',
          difficulty: 'Medium',
          pattern: 'linear-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/coin-change-2/',
          estimatedTime: 30,
          tags: ['array', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'combination-sum-iv',
          title: 'Combination Sum IV',
          difficulty: 'Medium',
          pattern: 'linear-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/combination-sum-iv/',
          estimatedTime: 30,
          tags: ['array', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'house-robber-iii',
          title: 'House Robber III',
          difficulty: 'Medium',
          pattern: 'linear-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/house-robber-iii/',
          estimatedTime: 35,
          tags: ['dynamic-programming', 'tree', 'depth-first-search', 'binary-tree'],
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
          pattern: 'linear-dp',
          category: 'dynamic-programming',
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
          id: 'best-time-buy-sell-stock-cooldown',
          title: 'Best Time to Buy and Sell Stock with Cooldown',
          difficulty: 'Medium',
          pattern: 'linear-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/',
          estimatedTime: 35,
          tags: ['array', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'perfect-squares',
          title: 'Perfect Squares',
          difficulty: 'Medium',
          pattern: 'linear-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/perfect-squares/',
          estimatedTime: 30,
          tags: ['math', 'dynamic-programming', 'breadth-first-search'],
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
          pattern: 'linear-dp',
          category: 'dynamic-programming',
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
          id: 'integer-break',
          title: 'Integer Break',
          difficulty: 'Medium',
          pattern: 'linear-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/integer-break/',
          estimatedTime: 25,
          tags: ['math', 'dynamic-programming'],
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
      id: 'grid-dp',
      name: 'Grid DP',
      description: 'Solve 2D grid-based dynamic programming problems',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'longest-common-subsequence',
          title: 'Longest Common Subsequence',
          difficulty: 'Medium',
          pattern: 'grid-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/longest-common-subsequence/',
          estimatedTime: 35,
          tags: ['string', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'unique-paths-ii',
          title: 'Unique Paths II',
          difficulty: 'Medium',
          pattern: 'grid-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/unique-paths-ii/',
          estimatedTime: 30,
          tags: ['array', 'dynamic-programming', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'minimum-path-sum',
          title: 'Minimum Path Sum',
          difficulty: 'Medium',
          pattern: 'grid-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-path-sum/',
          estimatedTime: 30,
          tags: ['array', 'dynamic-programming', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximal-square',
          title: 'Maximal Square',
          difficulty: 'Medium',
          pattern: 'grid-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/maximal-square/',
          estimatedTime: 35,
          tags: ['array', 'dynamic-programming', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'triangle',
          title: 'Triangle',
          difficulty: 'Medium',
          pattern: 'grid-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/triangle/',
          estimatedTime: 30,
          tags: ['array', 'dynamic-programming'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'minimum-falling-path-sum',
          title: 'Minimum Falling Path Sum',
          difficulty: 'Medium',
          pattern: 'grid-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-falling-path-sum/',
          estimatedTime: 30,
          tags: ['array', 'dynamic-programming', 'matrix'],
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
          pattern: 'grid-dp',
          category: 'dynamic-programming',
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
          id: 'dungeon-game',
          title: 'Dungeon Game',
          difficulty: 'Hard',
          pattern: 'grid-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/dungeon-game/',
          estimatedTime: 45,
          tags: ['array', 'dynamic-programming', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'cherry-pickup',
          title: 'Cherry Pickup',
          difficulty: 'Hard',
          pattern: 'grid-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/cherry-pickup/',
          estimatedTime: 50,
          tags: ['array', 'dynamic-programming', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'count-square-submatrices',
          title: 'Count Square Submatrices with All Ones',
          difficulty: 'Medium',
          pattern: 'grid-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/count-square-submatrices-with-all-ones/',
          estimatedTime: 30,
          tags: ['array', 'dynamic-programming', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'largest-1-bordered-square',
          title: 'Largest 1-Bordered Square',
          difficulty: 'Medium',
          pattern: 'grid-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/largest-1-bordered-square/',
          estimatedTime: 40,
          tags: ['array', 'dynamic-programming', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximum-side-length-square',
          title: 'Maximum Side Length of a Square with Sum Less than or Equal to Threshold',
          difficulty: 'Medium',
          pattern: 'grid-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/',
          estimatedTime: 35,
          tags: ['array', 'binary-search', 'matrix', 'prefix-sum'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'count-submatrices-sum-target',
          title: 'Number of Submatrices That Sum to Target',
          difficulty: 'Hard',
          pattern: 'grid-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/',
          estimatedTime: 45,
          tags: ['array', 'hash-table', 'matrix', 'prefix-sum'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'cherry-pickup-ii',
          title: 'Cherry Pickup II',
          difficulty: 'Hard',
          pattern: 'grid-dp',
          category: 'dynamic-programming',
          leetcodeUrl: 'https://leetcode.com/problems/cherry-pickup-ii/',
          estimatedTime: 50,
          tags: ['array', 'dynamic-programming', 'matrix'],
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