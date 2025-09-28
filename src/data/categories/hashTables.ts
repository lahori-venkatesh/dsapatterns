import { Category } from '../../types';

export const hashTablesCategory: Category = {
  id: 'hash-tables',
  name: 'Hash Tables',
  icon: 'Hash',
  level: 'beginner',
  totalProblems: 12,
  completedProblems: 0,
  patterns: [
    {
      id: 'hash-map-operations',
      name: 'Hash Map Operations',
      description: 'Master basic hash map operations and frequency counting',
      totalProblems: 6,
      completedProblems: 0,
      problems: [
        {
          id: 'contains-duplicate',
          title: 'Contains Duplicate',
          difficulty: 'Easy',
          pattern: 'hash-map-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/contains-duplicate/',
          estimatedTime: 15,
          tags: ['array', 'hash-table', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'valid-anagram',
          title: 'Valid Anagram',
          difficulty: 'Easy',
          pattern: 'hash-map-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/valid-anagram/',
          estimatedTime: 20,
          tags: ['hash-table', 'string', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'group-anagrams',
          title: 'Group Anagrams',
          difficulty: 'Medium',
          pattern: 'hash-map-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/group-anagrams/',
          estimatedTime: 30,
          tags: ['array', 'hash-table', 'string', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'top-k-frequent-elements',
          title: 'Top K Frequent Elements',
          difficulty: 'Medium',
          pattern: 'hash-map-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/top-k-frequent-elements/',
          estimatedTime: 35,
          tags: ['array', 'hash-table', 'divide-and-conquer', 'sorting', 'heap', 'bucket-sort', 'counting', 'quickselect'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'first-unique-character',
          title: 'First Unique Character in a String',
          difficulty: 'Easy',
          pattern: 'hash-map-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/first-unique-character-in-a-string/',
          estimatedTime: 20,
          tags: ['hash-table', 'string', 'queue', 'counting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'longest-consecutive-sequence',
          title: 'Longest Consecutive Sequence',
          difficulty: 'Medium',
          pattern: 'hash-map-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/longest-consecutive-sequence/',
          estimatedTime: 35,
          tags: ['array', 'hash-table', 'union-find'],
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
      id: 'hash-set-operations',
      name: 'Hash Set Operations',
      description: 'Use hash sets for fast lookups and set operations',
      totalProblems: 6,
      completedProblems: 0,
      problems: [
        {
          id: 'intersection-two-arrays',
          title: 'Intersection of Two Arrays',
          difficulty: 'Easy',
          pattern: 'hash-set-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/intersection-of-two-arrays/',
          estimatedTime: 20,
          tags: ['array', 'hash-table', 'two-pointers', 'binary-search', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'intersection-two-arrays-ii',
          title: 'Intersection of Two Arrays II',
          difficulty: 'Easy',
          pattern: 'hash-set-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/intersection-of-two-arrays-ii/',
          estimatedTime: 25,
          tags: ['array', 'hash-table', 'two-pointers', 'binary-search', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'happy-number-hash',
          title: 'Happy Number',
          difficulty: 'Easy',
          pattern: 'hash-set-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/happy-number/',
          estimatedTime: 20,
          tags: ['hash-table', 'math', 'two-pointers'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'jewels-and-stones',
          title: 'Jewels and Stones',
          difficulty: 'Easy',
          pattern: 'hash-set-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/jewels-and-stones/',
          estimatedTime: 15,
          tags: ['hash-table', 'string'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'unique-morse-code-words',
          title: 'Unique Morse Code Words',
          difficulty: 'Easy',
          pattern: 'hash-set-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/unique-morse-code-words/',
          estimatedTime: 20,
          tags: ['array', 'hash-table', 'string'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'word-pattern',
          title: 'Word Pattern',
          difficulty: 'Easy',
          pattern: 'hash-set-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/word-pattern/',
          estimatedTime: 25,
          tags: ['hash-table', 'string'],
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