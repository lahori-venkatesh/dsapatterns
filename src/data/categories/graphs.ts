import { Category } from '../../types';

export const graphsCategory: Category = {
  id: 'graphs',
  name: 'Graphs',
  icon: 'Network',
  level: 'pro',
  totalProblems: 45,
  completedProblems: 0,
  patterns: [
    {
      id: 'basic-graph-traversal',
      name: 'Basic Graph Traversal',
      description: 'Learn fundamental DFS and BFS traversal techniques',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'find-center-star-graph',
          title: 'Find Center of Star Graph',
          difficulty: 'Easy',
          pattern: 'basic-graph-traversal',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/find-center-of-star-graph/',
          estimatedTime: 15,
          tags: ['graph'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'find-if-path-exists',
          title: 'Find if Path Exists in Graph',
          difficulty: 'Easy',
          pattern: 'basic-graph-traversal',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/find-if-path-exists-in-graph/',
          estimatedTime: 25,
          tags: ['depth-first-search', 'breadth-first-search', 'union-find', 'graph'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'all-paths-source-target',
          title: 'All Paths From Source to Target',
          difficulty: 'Easy',
          pattern: 'basic-graph-traversal',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/all-paths-from-source-to-target/',
          estimatedTime: 30,
          tags: ['backtracking', 'depth-first-search', 'breadth-first-search', 'graph'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'keys-and-rooms',
          title: 'Keys and Rooms',
          difficulty: 'Easy',
          pattern: 'basic-graph-traversal',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/keys-and-rooms/',
          estimatedTime: 25,
          tags: ['depth-first-search', 'breadth-first-search', 'graph'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'flood-fill',
          title: 'Flood Fill',
          difficulty: 'Easy',
          pattern: 'basic-graph-traversal',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/flood-fill/',
          estimatedTime: 20,
          tags: ['array', 'depth-first-search', 'breadth-first-search', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'max-area-of-island',
          title: 'Max Area of Island',
          difficulty: 'Medium',
          pattern: 'basic-graph-traversal',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/max-area-of-island/',
          estimatedTime: 25,
          tags: ['array', 'depth-first-search', 'breadth-first-search', 'union-find', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'number-of-islands',
          title: 'Number of Islands',
          difficulty: 'Medium',
          pattern: 'basic-graph-traversal',
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
          id: 'island-perimeter',
          title: 'Island Perimeter',
          difficulty: 'Easy',
          pattern: 'basic-graph-traversal',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/island-perimeter/',
          estimatedTime: 20,
          tags: ['array', 'depth-first-search', 'breadth-first-search', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'number-closed-islands',
          title: 'Number of Closed Islands',
          difficulty: 'Medium',
          pattern: 'basic-graph-traversal',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/number-of-closed-islands/',
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
          id: 'rotting-oranges',
          title: 'Rotting Oranges',
          difficulty: 'Medium',
          pattern: 'basic-graph-traversal',
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
          id: 'as-far-land-possible',
          title: 'As Far from Land as Possible',
          difficulty: 'Medium',
          pattern: 'basic-graph-traversal',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/as-far-from-land-as-possible/',
          estimatedTime: 35,
          tags: ['array', 'dynamic-programming', 'breadth-first-search', 'matrix'],
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
          pattern: 'basic-graph-traversal',
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
          id: 'clone-graph',
          title: 'Clone Graph',
          difficulty: 'Medium',
          pattern: 'basic-graph-traversal',
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
          id: 'evaluate-division',
          title: 'Evaluate Division',
          difficulty: 'Medium',
          pattern: 'basic-graph-traversal',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/evaluate-division/',
          estimatedTime: 40,
          tags: ['array', 'depth-first-search', 'breadth-first-search', 'union-find', 'graph', 'shortest-path'],
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
          pattern: 'basic-graph-traversal',
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
        }
      ]
    },
    {
      id: 'topological-sort',
      name: 'Topological Sort',
      description: 'Learn topological sorting and dependency resolution',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'network-delay-time',
          title: 'Network Delay Time',
          difficulty: 'Medium',
          pattern: 'topological-sort',
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
          id: 'course-schedule',
          title: 'Course Schedule',
          difficulty: 'Medium',
          pattern: 'topological-sort',
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
          pattern: 'topological-sort',
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
          id: 'find-eventual-safe-states',
          title: 'Find Eventual Safe States',
          difficulty: 'Medium',
          pattern: 'topological-sort',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/find-eventual-safe-states/',
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
          id: 'minimum-height-trees',
          title: 'Minimum Height Trees',
          difficulty: 'Medium',
          pattern: 'topological-sort',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-height-trees/',
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
          id: 'alien-dictionary',
          title: 'Alien Dictionary',
          difficulty: 'Hard',
          pattern: 'topological-sort',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/alien-dictionary/',
          estimatedTime: 45,
          tags: ['array', 'string', 'depth-first-search', 'breadth-first-search', 'graph', 'topological-sort'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'sequence-reconstruction',
          title: 'Sequence Reconstruction',
          difficulty: 'Medium',
          pattern: 'topological-sort',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/sequence-reconstruction/',
          estimatedTime: 35,
          tags: ['array', 'graph', 'topological-sort'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'parallel-courses',
          title: 'Parallel Courses',
          difficulty: 'Medium',
          pattern: 'topological-sort',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/parallel-courses/',
          estimatedTime: 30,
          tags: ['depth-first-search', 'breadth-first-search', 'graph', 'topological-sort'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'sort-items-groups-respecting-dependencies',
          title: 'Sort Items by Groups Respecting Dependencies',
          difficulty: 'Hard',
          pattern: 'topological-sort',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/',
          estimatedTime: 50,
          tags: ['array', 'depth-first-search', 'breadth-first-search', 'graph', 'topological-sort'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'build-matrix-conditions',
          title: 'Build a Matrix With Conditions',
          difficulty: 'Hard',
          pattern: 'topological-sort',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/build-a-matrix-with-conditions/',
          estimatedTime: 50,
          tags: ['array', 'graph', 'topological-sort', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'maximum-students-taking-exam',
          title: 'Maximum Students Taking Exam',
          difficulty: 'Hard',
          pattern: 'topological-sort',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-students-taking-exam/',
          estimatedTime: 50,
          tags: ['array', 'dynamic-programming', 'bit-manipulation', 'matrix', 'bitmask'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'loud-and-rich',
          title: 'Loud and Rich',
          difficulty: 'Medium',
          pattern: 'topological-sort',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/loud-and-rich/',
          estimatedTime: 35,
          tags: ['array', 'depth-first-search', 'graph', 'topological-sort'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'course-schedule-iv',
          title: 'Course Schedule IV',
          difficulty: 'Medium',
          pattern: 'topological-sort',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/course-schedule-iv/',
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
          id: 'maximum-candies-you-can-get',
          title: 'Maximum Candies You Can Get from Boxes',
          difficulty: 'Hard',
          pattern: 'topological-sort',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/',
          estimatedTime: 45,
          tags: ['array', 'breadth-first-search'],
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
      id: 'union-find',
      name: 'Union Find',
      description: 'Learn disjoint set union (DSU) data structure and applications',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'number-provinces',
          title: 'Number of Provinces',
          difficulty: 'Medium',
          pattern: 'union-find',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/number-of-provinces/',
          estimatedTime: 30,
          tags: ['depth-first-search', 'breadth-first-search', 'union-find', 'graph'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'redundant-connection',
          title: 'Redundant Connection',
          difficulty: 'Medium',
          pattern: 'union-find',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/redundant-connection/',
          estimatedTime: 30,
          tags: ['depth-first-search', 'breadth-first-search', 'union-find', 'graph'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'accounts-merge',
          title: 'Accounts Merge',
          difficulty: 'Medium',
          pattern: 'union-find',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/accounts-merge/',
          estimatedTime: 40,
          tags: ['array', 'string', 'depth-first-search', 'breadth-first-search', 'union-find'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'most-stones-removed',
          title: 'Most Stones Removed with Same Row or Column',
          difficulty: 'Medium',
          pattern: 'union-find',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/',
          estimatedTime: 35,
          tags: ['depth-first-search', 'union-find', 'graph'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'satisfiability-equality-equations',
          title: 'Satisfiability of Equality Equations',
          difficulty: 'Medium',
          pattern: 'union-find',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/satisfiability-of-equality-equations/',
          estimatedTime: 30,
          tags: ['array', 'string', 'union-find', 'graph'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'regions-cut-slashes',
          title: 'Regions Cut By Slashes',
          difficulty: 'Medium',
          pattern: 'union-find',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/regions-cut-by-slashes/',
          estimatedTime: 40,
          tags: ['array', 'hash-table', 'depth-first-search', 'breadth-first-search', 'union-find', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'smallest-string-swaps',
          title: 'Smallest String With Swaps',
          difficulty: 'Medium',
          pattern: 'union-find',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/smallest-string-with-swaps/',
          estimatedTime: 35,
          tags: ['hash-table', 'string', 'depth-first-search', 'breadth-first-search', 'union-find'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'number-operations-make-network-connected',
          title: 'Number of Operations to Make Network Connected',
          difficulty: 'Medium',
          pattern: 'union-find',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/number-of-operations-to-make-network-connected/',
          estimatedTime: 30,
          tags: ['depth-first-search', 'breadth-first-search', 'union-find', 'graph'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'minimize-malware-spread',
          title: 'Minimize Malware Spread',
          difficulty: 'Hard',
          pattern: 'union-find',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/minimize-malware-spread/',
          estimatedTime: 45,
          tags: ['array', 'depth-first-search', 'breadth-first-search', 'union-find', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'similar-string-groups',
          title: 'Similar String Groups',
          difficulty: 'Hard',
          pattern: 'union-find',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/similar-string-groups/',
          estimatedTime: 40,
          tags: ['array', 'string', 'depth-first-search', 'breadth-first-search', 'union-find'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'lexicographically-smallest-equivalent-string',
          title: 'Lexicographically Smallest Equivalent String',
          difficulty: 'Medium',
          pattern: 'union-find',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/lexicographically-smallest-equivalent-string/',
          estimatedTime: 30,
          tags: ['string', 'union-find'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'connecting-cities-minimum-cost',
          title: 'Connecting Cities With Minimum Cost',
          difficulty: 'Medium',
          pattern: 'union-find',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/connecting-cities-with-minimum-cost/',
          estimatedTime: 35,
          tags: ['union-find', 'graph', 'minimum-spanning-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'remove-max-number-edges',
          title: 'Remove Max Number of Edges to Keep Graph Fully Traversable',
          difficulty: 'Hard',
          pattern: 'union-find',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/',
          estimatedTime: 50,
          tags: ['union-find', 'graph'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'checking-existence-edge-length-limited-paths',
          title: 'Checking Existence of Edge Length Limited Paths',
          difficulty: 'Hard',
          pattern: 'union-find',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/',
          estimatedTime: 45,
          tags: ['array', 'two-pointers', 'union-find', 'graph', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'graph-connectivity-queries',
          title: 'Graph Connectivity With Threshold',
          difficulty: 'Hard',
          pattern: 'union-find',
          category: 'graphs',
          leetcodeUrl: 'https://leetcode.com/problems/graph-connectivity-with-threshold/',
          estimatedTime: 50,
          tags: ['array', 'math', 'union-find'],
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