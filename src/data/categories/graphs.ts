import { Category } from '../../types';

export const graphsCategory: Category = {
  id: 'graphs',
  name: 'Graphs',
  icon: 'Network',
  level: 'pro',
  totalProblems: 16,
  completedProblems: 0,
  patterns: [
    {
      id: 'graph-traversal',
      name: 'Graph Traversal',
      description: 'Master DFS and BFS traversal techniques for graphs',
      totalProblems: 8,
      completedProblems: 0,
      problems: [
        {
          id: 'number-of-islands',
          title: 'Number of Islands',
          difficulty: 'Medium',
          pattern: 'graph-traversal',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/number-of-islands/',
          estimatedTime: 30,
          tags: ['array', 'depth-first-search', 'breadth-first-search', 'union-find', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'clone-graph',
          title: 'Clone Graph',
          difficulty: 'Medium',
          pattern: 'graph-traversal',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/clone-graph/',
          estimatedTime: 35,
          tags: ['hash-table', 'depth-first-search', 'breadth-first-search', 'graph'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'pacific-atlantic-water-flow',
          title: 'Pacific Atlantic Water Flow',
          difficulty: 'Medium',
          pattern: 'graph-traversal',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/pacific-atlantic-water-flow/',
          estimatedTime: 40,
          tags: ['array', 'depth-first-search', 'breadth-first-search', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'surrounded-regions',
          title: 'Surrounded Regions',
          difficulty: 'Medium',
          pattern: 'graph-traversal',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/surrounded-regions/',
          estimatedTime: 35,
          tags: ['array', 'depth-first-search', 'breadth-first-search', 'union-find', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'rotting-oranges',
          title: 'Rotting Oranges',
          difficulty: 'Medium',
          pattern: 'graph-traversal',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/rotting-oranges/',
          estimatedTime: 30,
          tags: ['array', 'breadth-first-search', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'course-schedule',
          title: 'Course Schedule',
          difficulty: 'Medium',
          pattern: 'graph-traversal',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/course-schedule/',
          estimatedTime: 35,
          tags: ['depth-first-search', 'breadth-first-search', 'graph', 'topological-sort'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'course-schedule-ii',
          title: 'Course Schedule II',
          difficulty: 'Medium',
          pattern: 'graph-traversal',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/course-schedule-ii/',
          estimatedTime: 40,
          tags: ['depth-first-search', 'breadth-first-search', 'graph', 'topological-sort'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'word-ladder',
          title: 'Word Ladder',
          difficulty: 'Hard',
          pattern: 'graph-traversal',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/word-ladder/',
          estimatedTime: 45,
          tags: ['hash-table', 'string', 'breadth-first-search'],
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
      id: 'shortest-path',
      name: 'Shortest Path',
      description: 'Find shortest paths using Dijkstra, Floyd-Warshall, and other algorithms',
      totalProblems: 8,
      completedProblems: 0,
      problems: [
        {
          id: 'network-delay-time',
          title: 'Network Delay Time',
          difficulty: 'Medium',
          pattern: 'shortest-path',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/network-delay-time/',
          estimatedTime: 40,
          tags: ['depth-first-search', 'breadth-first-search', 'graph', 'heap', 'shortest-path'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'cheapest-flights-k-stops',
          title: 'Cheapest Flights Within K Stops',
          difficulty: 'Medium',
          pattern: 'shortest-path',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/',
          estimatedTime: 45,
          tags: ['dynamic-programming', 'depth-first-search', 'breadth-first-search', 'graph', 'heap', 'shortest-path'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'path-minimum-effort',
          title: 'Path With Minimum Effort',
          difficulty: 'Medium',
          pattern: 'shortest-path',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/path-with-minimum-effort/',
          estimatedTime: 40,
          tags: ['array', 'binary-search', 'depth-first-search', 'breadth-first-search', 'union-find', 'heap', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'swim-rising-water',
          title: 'Swim in Rising Water',
          difficulty: 'Hard',
          pattern: 'shortest-path',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/swim-in-rising-water/',
          estimatedTime: 45,
          tags: ['array', 'binary-search', 'depth-first-search', 'breadth-first-search', 'union-find', 'heap', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'shortest-path-binary-matrix',
          title: 'Shortest Path in Binary Matrix',
          difficulty: 'Medium',
          pattern: 'shortest-path',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/shortest-path-in-binary-matrix/',
          estimatedTime: 35,
          tags: ['array', 'breadth-first-search', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'minimum-cost-connect-points',
          title: 'Min Cost to Connect All Points',
          difficulty: 'Medium',
          pattern: 'shortest-path',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/min-cost-to-connect-all-points/',
          estimatedTime: 40,
          tags: ['array', 'union-find', 'minimum-spanning-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'find-city-smallest-neighbors',
          title: 'Find the City With the Smallest Number of Neighbors at a Threshold Distance',
          difficulty: 'Medium',
          pattern: 'shortest-path',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/',
          estimatedTime: 45,
          tags: ['dynamic-programming', 'graph', 'shortest-path'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'shortest-path-visiting-all-nodes',
          title: 'Shortest Path Visiting All Nodes',
          difficulty: 'Hard',
          pattern: 'shortest-path',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/shortest-path-visiting-all-nodes/',
          estimatedTime: 50,
          tags: ['dynamic-programming', 'bit-manipulation', 'breadth-first-search', 'graph', 'bitmask'],
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