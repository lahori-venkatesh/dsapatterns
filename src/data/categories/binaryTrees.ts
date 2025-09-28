import { Category } from '../../types';

export const binaryTreesCategory: Category = {
  id: 'binary-trees',
  name: 'Binary Trees',
  icon: 'GitBranch',
  level: 'intermediate',
  totalProblems: 18,
  completedProblems: 0,
  patterns: [
    {
      id: 'tree-traversal',
      name: 'Tree Traversal',
      description: 'Master different ways to traverse binary trees: inorder, preorder, postorder, level-order',
      totalProblems: 8,
      completedProblems: 0,
      problems: [
        {
          id: 'binary-tree-inorder-traversal',
          title: 'Binary Tree Inorder Traversal',
          difficulty: 'Easy',
          pattern: 'tree-traversal',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/binary-tree-inorder-traversal/',
          estimatedTime: 20,
          tags: ['stack', 'tree', 'depth-first-search', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'binary-tree-preorder-traversal',
          title: 'Binary Tree Preorder Traversal',
          difficulty: 'Easy',
          pattern: 'tree-traversal',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/binary-tree-preorder-traversal/',
          estimatedTime: 20,
          tags: ['stack', 'tree', 'depth-first-search', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'binary-tree-postorder-traversal',
          title: 'Binary Tree Postorder Traversal',
          difficulty: 'Easy',
          pattern: 'tree-traversal',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/binary-tree-postorder-traversal/',
          estimatedTime: 25,
          tags: ['stack', 'tree', 'depth-first-search', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'binary-tree-level-order-traversal',
          title: 'Binary Tree Level Order Traversal',
          difficulty: 'Medium',
          pattern: 'tree-traversal',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
          estimatedTime: 25,
          tags: ['tree', 'breadth-first-search', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'binary-tree-zigzag-level-order',
          title: 'Binary Tree Zigzag Level Order Traversal',
          difficulty: 'Medium',
          pattern: 'tree-traversal',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/',
          estimatedTime: 30,
          tags: ['tree', 'breadth-first-search', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'binary-tree-right-side-view',
          title: 'Binary Tree Right Side View',
          difficulty: 'Medium',
          pattern: 'tree-traversal',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/binary-tree-right-side-view/',
          estimatedTime: 25,
          tags: ['tree', 'depth-first-search', 'breadth-first-search', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'average-levels-binary-tree',
          title: 'Average of Levels in Binary Tree',
          difficulty: 'Easy',
          pattern: 'tree-traversal',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/average-of-levels-in-binary-tree/',
          estimatedTime: 20,
          tags: ['tree', 'depth-first-search', 'breadth-first-search', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'vertical-order-traversal',
          title: 'Vertical Order Traversal of a Binary Tree',
          difficulty: 'Hard',
          pattern: 'tree-traversal',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/',
          estimatedTime: 45,
          tags: ['hash-table', 'tree', 'depth-first-search', 'breadth-first-search', 'sorting', 'binary-tree'],
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
      id: 'tree-properties',
      name: 'Tree Properties',
      description: 'Solve problems related to tree properties like height, diameter, paths, and validation',
      totalProblems: 10,
      completedProblems: 0,
      problems: [
        {
          id: 'maximum-depth-binary-tree',
          title: 'Maximum Depth of Binary Tree',
          difficulty: 'Easy',
          pattern: 'tree-properties',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
          estimatedTime: 15,
          tags: ['tree', 'depth-first-search', 'breadth-first-search', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'minimum-depth-binary-tree',
          title: 'Minimum Depth of Binary Tree',
          difficulty: 'Easy',
          pattern: 'tree-properties',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-depth-of-binary-tree/',
          estimatedTime: 20,
          tags: ['tree', 'depth-first-search', 'breadth-first-search', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'diameter-binary-tree',
          title: 'Diameter of Binary Tree',
          difficulty: 'Easy',
          pattern: 'tree-properties',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/diameter-of-binary-tree/',
          estimatedTime: 25,
          tags: ['tree', 'depth-first-search', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'balanced-binary-tree',
          title: 'Balanced Binary Tree',
          difficulty: 'Easy',
          pattern: 'tree-properties',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/balanced-binary-tree/',
          estimatedTime: 25,
          tags: ['tree', 'depth-first-search', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'same-tree',
          title: 'Same Tree',
          difficulty: 'Easy',
          pattern: 'tree-properties',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/same-tree/',
          estimatedTime: 15,
          tags: ['tree', 'depth-first-search', 'breadth-first-search', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'symmetric-tree',
          title: 'Symmetric Tree',
          difficulty: 'Easy',
          pattern: 'tree-properties',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/symmetric-tree/',
          estimatedTime: 20,
          tags: ['tree', 'depth-first-search', 'breadth-first-search', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'validate-binary-search-tree',
          title: 'Validate Binary Search Tree',
          difficulty: 'Medium',
          pattern: 'tree-properties',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/validate-binary-search-tree/',
          estimatedTime: 30,
          tags: ['tree', 'depth-first-search', 'binary-search-tree', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'binary-tree-maximum-path-sum',
          title: 'Binary Tree Maximum Path Sum',
          difficulty: 'Hard',
          pattern: 'tree-properties',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
          estimatedTime: 40,
          tags: ['dynamic-programming', 'tree', 'depth-first-search', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'path-sum',
          title: 'Path Sum',
          difficulty: 'Easy',
          pattern: 'tree-properties',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/path-sum/',
          estimatedTime: 20,
          tags: ['tree', 'depth-first-search', 'breadth-first-search', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'path-sum-ii',
          title: 'Path Sum II',
          difficulty: 'Medium',
          pattern: 'tree-properties',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/path-sum-ii/',
          estimatedTime: 30,
          tags: ['backtracking', 'tree', 'depth-first-search', 'binary-tree'],
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