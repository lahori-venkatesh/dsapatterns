import { Category } from '../../types';

export const binaryTreesCategory: Category = {
  id: 'binary-trees',
  name: 'Binary Trees',
  icon: 'GitBranch',
  level: 'intermediate',
  totalProblems: 45,
  completedProblems: 0,
  patterns: [
    {
      id: 'basic-tree-operations',
      name: 'Basic Tree Operations',
      description: 'Learn fundamental binary tree operations and basic traversals',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'binary-tree-inorder-traversal',
          title: 'Binary Tree Inorder Traversal',
          difficulty: 'Easy',
          pattern: 'basic-tree-operations',
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
          pattern: 'basic-tree-operations',
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
          pattern: 'basic-tree-operations',
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
          id: 'maximum-depth-binary-tree',
          title: 'Maximum Depth of Binary Tree',
          difficulty: 'Easy',
          pattern: 'basic-tree-operations',
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
          id: 'same-tree',
          title: 'Same Tree',
          difficulty: 'Easy',
          pattern: 'basic-tree-operations',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/same-tree/',
          estimatedTime: 15,
          tags: ['tree', 'breadth-first-search', 'binary-tree'],
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
          pattern: 'basic-tree-operations',
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
          id: 'invert-binary-tree',
          title: 'Invert Binary Tree',
          difficulty: 'Easy',
          pattern: 'basic-tree-operations',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/invert-binary-tree/',
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
          id: 'minimum-depth-binary-tree',
          title: 'Minimum Depth of Binary Tree',
          difficulty: 'Easy',
          pattern: 'basic-tree-operations',
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
          id: 'balanced-binary-tree',
          title: 'Balanced Binary Tree',
          difficulty: 'Easy',
          pattern: 'basic-tree-operations',
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
          id: 'path-sum',
          title: 'Path Sum',
          difficulty: 'Easy',
          pattern: 'basic-tree-operations',
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
          id: 'diameter-binary-tree',
          title: 'Diameter of Binary Tree',
          difficulty: 'Easy',
          pattern: 'basic-tree-operations',
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
          id: 'merge-two-binary-trees',
          title: 'Merge Two Binary Trees',
          difficulty: 'Easy',
          pattern: 'basic-tree-operations',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/merge-two-binary-trees/',
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
          id: 'subtree-of-another-tree',
          title: 'Subtree of Another Tree',
          difficulty: 'Easy',
          pattern: 'basic-tree-operations',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/subtree-of-another-tree/',
          estimatedTime: 25,
          tags: ['tree', 'depth-first-search', 'string-matching', 'binary-tree', 'hash-function'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'sum-left-leaves',
          title: 'Sum of Left Leaves',
          difficulty: 'Easy',
          pattern: 'basic-tree-operations',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/sum-of-left-leaves/',
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
          id: 'find-mode-binary-search-tree',
          title: 'Find Mode in Binary Search Tree',
          difficulty: 'Easy',
          pattern: 'basic-tree-operations',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/find-mode-in-binary-search-tree/',
          estimatedTime: 25,
          tags: ['tree', 'depth-first-search', 'binary-search-tree', 'binary-tree'],
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
      id: 'binary-search-tree-basics',
      name: 'Binary Search Tree Basics',
      description: 'Learn fundamental BST operations and properties',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'maximum-depth-binary-tree',
          title: 'Maximum Depth of Binary Tree',
          difficulty: 'Easy',
          pattern: 'binary-search-tree-basics',
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
          id: 'validate-binary-search-tree',
          title: 'Validate Binary Search Tree',
          difficulty: 'Easy',
          pattern: 'binary-search-tree-basics',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/validate-binary-search-tree/',
          estimatedTime: 20,
          tags: ['tree', 'depth-first-search', 'binary-search-tree', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'search-binary-search-tree',
          title: 'Search in a Binary Search Tree',
          difficulty: 'Easy',
          pattern: 'binary-search-tree-basics',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/search-in-a-binary-search-tree/',
          estimatedTime: 15,
          tags: ['tree', 'binary-search-tree', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'insert-binary-search-tree',
          title: 'Insert into a Binary Search Tree',
          difficulty: 'Easy',
          pattern: 'binary-search-tree-basics',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/insert-into-a-binary-search-tree/',
          estimatedTime: 20,
          tags: ['tree', 'binary-search-tree', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'delete-node-bst',
          title: 'Delete Node in a BST',
          difficulty: 'Medium',
          pattern: 'binary-search-tree-basics',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/delete-node-in-a-bst/',
          estimatedTime: 30,
          tags: ['tree', 'binary-search-tree', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'minimum-absolute-difference-bst',
          title: 'Minimum Absolute Difference in BST',
          difficulty: 'Easy',
          pattern: 'binary-search-tree-basics',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/minimum-absolute-difference-in-bst/',
          estimatedTime: 20,
          tags: ['tree', 'depth-first-search', 'breadth-first-search', 'binary-search-tree', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'two-sum-iv-input-bst',
          title: 'Two Sum IV - Input is a BST',
          difficulty: 'Easy',
          pattern: 'binary-search-tree-basics',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/two-sum-iv-input-is-a-bst/',
          estimatedTime: 25,
          tags: ['hash-table', 'two-pointers', 'tree', 'depth-first-search', 'breadth-first-search', 'binary-search-tree', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'lowest-common-ancestor-bst',
          title: 'Lowest Common Ancestor of a Binary Search Tree',
          difficulty: 'Easy',
          pattern: 'binary-search-tree-basics',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',
          estimatedTime: 20,
          tags: ['tree', 'depth-first-search', 'binary-search-tree', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'convert-sorted-array-bst',
          title: 'Convert Sorted Array to Binary Search Tree',
          difficulty: 'Easy',
          pattern: 'binary-search-tree-basics',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/',
          estimatedTime: 20,
          tags: ['array', 'divide-and-conquer', 'tree', 'binary-search-tree', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'range-sum-bst',
          title: 'Range Sum of BST',
          difficulty: 'Easy',
          pattern: 'binary-search-tree-basics',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/range-sum-of-bst/',
          estimatedTime: 15,
          tags: ['tree', 'depth-first-search', 'binary-search-tree', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'trim-binary-search-tree',
          title: 'Trim a Binary Search Tree',
          difficulty: 'Medium',
          pattern: 'binary-search-tree-basics',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/trim-a-binary-search-tree/',
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
          id: 'increasing-order-search-tree',
          title: 'Increasing Order Search Tree',
          difficulty: 'Easy',
          pattern: 'binary-search-tree-basics',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/increasing-order-search-tree/',
          estimatedTime: 20,
          tags: ['stack', 'tree', 'depth-first-search', 'binary-search-tree', 'binary-tree'],
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
          pattern: 'binary-search-tree-basics',
          category: 'binary-trees',
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
          id: 'recover-binary-search-tree',
          title: 'Recover Binary Search Tree',
          difficulty: 'Medium',
          pattern: 'binary-search-tree-basics',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/recover-binary-search-tree/',
          estimatedTime: 35,
          tags: ['tree', 'depth-first-search', 'binary-search-tree', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'construct-bst-preorder',
          title: 'Construct Binary Search Tree from Preorder Traversal',
          difficulty: 'Medium',
          pattern: 'binary-search-tree-basics',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/',
          estimatedTime: 30,
          tags: ['array', 'stack', 'tree', 'binary-search-tree', 'monotonic-stack', 'binary-tree'],
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
      id: 'tree-level-order',
      name: 'Tree Level Order Traversal',
      description: 'Master level-order traversal and BFS techniques for trees',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'binary-tree-level-order-traversal',
          title: 'Binary Tree Level Order Traversal',
          difficulty: 'Medium',
          pattern: 'tree-level-order',
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
          id: 'binary-tree-level-order-traversal-ii',
          title: 'Binary Tree Level Order Traversal II',
          difficulty: 'Medium',
          pattern: 'tree-level-order',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/binary-tree-level-order-traversal-ii/',
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
          pattern: 'tree-level-order',
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
          id: 'average-levels-binary-tree',
          title: 'Average of Levels in Binary Tree',
          difficulty: 'Easy',
          pattern: 'tree-level-order',
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
          id: 'find-largest-value-tree-row',
          title: 'Find Largest Value in Each Tree Row',
          difficulty: 'Medium',
          pattern: 'tree-level-order',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/find-largest-value-in-each-tree-row/',
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
          id: 'binary-tree-right-side-view',
          title: 'Binary Tree Right Side View',
          difficulty: 'Medium',
          pattern: 'tree-level-order',
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
          id: 'populating-next-right-pointers',
          title: 'Populating Next Right Pointers in Each Node',
          difficulty: 'Medium',
          pattern: 'tree-level-order',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/populating-next-right-pointers-in-each-node/',
          estimatedTime: 30,
          tags: ['linked-list', 'tree', 'depth-first-search', 'breadth-first-search', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'populating-next-right-pointers-ii',
          title: 'Populating Next Right Pointers in Each Node II',
          difficulty: 'Medium',
          pattern: 'tree-level-order',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/',
          estimatedTime: 35,
          tags: ['linked-list', 'tree', 'depth-first-search', 'breadth-first-search', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'minimum-depth-binary-tree-bfs',
          title: 'Minimum Depth of Binary Tree (BFS)',
          difficulty: 'Easy',
          pattern: 'tree-level-order',
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
          id: 'maximum-width-binary-tree',
          title: 'Maximum Width of Binary Tree',
          difficulty: 'Medium',
          pattern: 'tree-level-order',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/maximum-width-of-binary-tree/',
          estimatedTime: 35,
          tags: ['tree', 'depth-first-search', 'breadth-first-search', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'add-one-row-tree',
          title: 'Add One Row to Tree',
          difficulty: 'Medium',
          pattern: 'tree-level-order',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/add-one-row-to-tree/',
          estimatedTime: 30,
          tags: ['tree', 'depth-first-search', 'breadth-first-search', 'binary-tree'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'find-bottom-left-tree-value',
          title: 'Find Bottom Left Tree Value',
          difficulty: 'Medium',
          pattern: 'tree-level-order',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/find-bottom-left-tree-value/',
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
          id: 'deepest-leaves-sum',
          title: 'Deepest Leaves Sum',
          difficulty: 'Medium',
          pattern: 'tree-level-order',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/deepest-leaves-sum/',
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
          id: 'even-odd-tree',
          title: 'Even Odd Tree',
          difficulty: 'Medium',
          pattern: 'tree-level-order',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/even-odd-tree/',
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
          id: 'reverse-odd-levels-binary-tree',
          title: 'Reverse Odd Levels of Binary Tree',
          difficulty: 'Medium',
          pattern: 'tree-level-order',
          category: 'binary-trees',
          leetcodeUrl: 'https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/',
          estimatedTime: 35,
          tags: ['tree', 'depth-first-search', 'breadth-first-search', 'binary-tree'],
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