import { Category } from '../../types';

export const hashTablesCategory: Category = {
  id: 'hash-tables',
  name: 'Hash Tables',
  icon: 'Hash',
  level: 'intermediate',
  totalProblems: 45,
  completedProblems: 0,
  patterns: [
    {
      id: 'hash-map-operations',
      name: 'Hash Map Operations',
      description: 'Master basic hash map operations and frequency counting',
      totalProblems: 15,
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
          id: 'roman-to-integer',
          title: 'Roman to Integer',
          difficulty: 'Easy',
          pattern: 'hash-map-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/roman-to-integer/',
          estimatedTime: 20,
          tags: ['hash-table', 'math', 'string'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'majority-element',
          title: 'Majority Element',
          difficulty: 'Easy',
          pattern: 'hash-map-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/majority-element/',
          estimatedTime: 15,
          tags: ['array', 'hash-table', 'divide-and-conquer', 'sorting', 'counting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'single-number',
          title: 'Single Number',
          difficulty: 'Easy',
          pattern: 'hash-map-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/single-number/',
          estimatedTime: 15,
          tags: ['array', 'bit-manipulation'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'isomorphic-strings',
          title: 'Isomorphic Strings',
          difficulty: 'Easy',
          pattern: 'hash-map-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/isomorphic-strings/',
          estimatedTime: 25,
          tags: ['hash-table', 'string'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'ransom-note',
          title: 'Ransom Note',
          difficulty: 'Easy',
          pattern: 'hash-map-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/ransom-note/',
          estimatedTime: 15,
          tags: ['hash-table', 'string', 'counting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'find-difference',
          title: 'Find the Difference',
          difficulty: 'Easy',
          pattern: 'hash-map-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/find-the-difference/',
          estimatedTime: 15,
          tags: ['hash-table', 'string', 'bit-manipulation', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'find-all-anagrams',
          title: 'Find All Anagrams in a String',
          difficulty: 'Medium',
          pattern: 'hash-map-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/',
          estimatedTime: 30,
          tags: ['hash-table', 'string', 'sliding-window'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'sort-characters-by-frequency',
          title: 'Sort Characters By Frequency',
          difficulty: 'Medium',
          pattern: 'hash-map-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/sort-characters-by-frequency/',
          estimatedTime: 25,
          tags: ['hash-table', 'string', 'sorting', 'heap', 'bucket-sort', 'counting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'subarray-sum-equals-k',
          title: 'Subarray Sum Equals K',
          difficulty: 'Medium',
          pattern: 'hash-map-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/subarray-sum-equals-k/',
          estimatedTime: 30,
          tags: ['array', 'hash-table', 'prefix-sum'],
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
      totalProblems: 15,
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
          id: 'missing-number',
          title: 'Missing Number',
          difficulty: 'Easy',
          pattern: 'hash-set-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/missing-number/',
          estimatedTime: 15,
          tags: ['array', 'hash-table', 'math', 'bit-manipulation', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'find-disappeared-numbers',
          title: 'Find All Numbers Disappeared in an Array',
          difficulty: 'Easy',
          pattern: 'hash-set-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/',
          estimatedTime: 20,
          tags: ['array', 'hash-table'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'distribute-candies',
          title: 'Distribute Candies',
          difficulty: 'Easy',
          pattern: 'hash-set-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/distribute-candies/',
          estimatedTime: 15,
          tags: ['array', 'hash-table'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'set-mismatch',
          title: 'Set Mismatch',
          difficulty: 'Easy',
          pattern: 'hash-set-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/set-mismatch/',
          estimatedTime: 20,
          tags: ['array', 'hash-table', 'bit-manipulation', 'sorting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'uncommon-words-sentences',
          title: 'Uncommon Words from Two Sentences',
          difficulty: 'Easy',
          pattern: 'hash-set-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/uncommon-words-from-two-sentences/',
          estimatedTime: 20,
          tags: ['hash-table', 'string', 'counting'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'fair-candy-swap',
          title: 'Fair Candy Swap',
          difficulty: 'Easy',
          pattern: 'hash-set-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/fair-candy-swap/',
          estimatedTime: 20,
          tags: ['array', 'hash-table', 'binary-search'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'buddy-strings',
          title: 'Buddy Strings',
          difficulty: 'Easy',
          pattern: 'hash-set-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/buddy-strings/',
          estimatedTime: 25,
          tags: ['hash-table', 'string'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'unique-email-addresses',
          title: 'Unique Email Addresses',
          difficulty: 'Easy',
          pattern: 'hash-set-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/unique-email-addresses/',
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
          id: 'groups-special-equivalent-strings',
          title: 'Groups of Special-Equivalent Strings',
          difficulty: 'Easy',
          pattern: 'hash-set-operations',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/groups-of-special-equivalent-strings/',
          estimatedTime: 25,
          tags: ['array', 'hash-table', 'string'],
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
      id: 'basic-hashing',
      name: 'Basic Hashing',
      description: 'Learn fundamental hashing concepts and applications',
      totalProblems: 15,
      completedProblems: 0,
      problems: [
        {
          id: 'design-hashmap',
          title: 'Design HashMap',
          difficulty: 'Easy',
          pattern: 'basic-hashing',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/design-hashmap/',
          estimatedTime: 25,
          tags: ['array', 'hash-table', 'linked-list', 'design', 'hash-function'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'design-hashset',
          title: 'Design HashSet',
          difficulty: 'Easy',
          pattern: 'basic-hashing',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/design-hashset/',
          estimatedTime: 20,
          tags: ['array', 'hash-table', 'linked-list', 'design', 'hash-function'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'contains-duplicate-ii',
          title: 'Contains Duplicate II',
          difficulty: 'Easy',
          pattern: 'basic-hashing',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/contains-duplicate-ii/',
          estimatedTime: 20,
          tags: ['array', 'hash-table', 'sliding-window'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'contains-duplicate-iii',
          title: 'Contains Duplicate III',
          difficulty: 'Medium',
          pattern: 'basic-hashing',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/contains-duplicate-iii/',
          estimatedTime: 35,
          tags: ['array', 'bucket-sort', 'ordered-set', 'sorting', 'sliding-window'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'logger-rate-limiter',
          title: 'Logger Rate Limiter',
          difficulty: 'Easy',
          pattern: 'basic-hashing',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/logger-rate-limiter/',
          estimatedTime: 15,
          tags: ['hash-table', 'design'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'valid-sudoku',
          title: 'Valid Sudoku',
          difficulty: 'Medium',
          pattern: 'basic-hashing',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/valid-sudoku/',
          estimatedTime: 30,
          tags: ['array', 'hash-table', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'group-shifted-strings',
          title: 'Group Shifted Strings',
          difficulty: 'Medium',
          pattern: 'basic-hashing',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/group-shifted-strings/',
          estimatedTime: 30,
          tags: ['array', 'hash-table', 'string'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'strobogrammatic-number',
          title: 'Strobogrammatic Number',
          difficulty: 'Easy',
          pattern: 'basic-hashing',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/strobogrammatic-number/',
          estimatedTime: 20,
          tags: ['hash-table', 'two-pointers', 'string'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'palindrome-permutation',
          title: 'Palindrome Permutation',
          difficulty: 'Easy',
          pattern: 'basic-hashing',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/palindrome-permutation/',
          estimatedTime: 15,
          tags: ['hash-table', 'string', 'bit-manipulation'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'shortest-word-distance',
          title: 'Shortest Word Distance',
          difficulty: 'Easy',
          pattern: 'basic-hashing',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/shortest-word-distance/',
          estimatedTime: 20,
          tags: ['array', 'string'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'shortest-word-distance-ii',
          title: 'Shortest Word Distance II',
          difficulty: 'Medium',
          pattern: 'basic-hashing',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/shortest-word-distance-ii/',
          estimatedTime: 25,
          tags: ['array', 'hash-table', 'two-pointers', 'string', 'design'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'shortest-word-distance-iii',
          title: 'Shortest Word Distance III',
          difficulty: 'Medium',
          pattern: 'basic-hashing',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/shortest-word-distance-iii/',
          estimatedTime: 25,
          tags: ['array', 'string'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'sparse-matrix-multiplication',
          title: 'Sparse Matrix Multiplication',
          difficulty: 'Medium',
          pattern: 'basic-hashing',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/sparse-matrix-multiplication/',
          estimatedTime: 30,
          tags: ['array', 'hash-table', 'matrix'],
          userStatus: {
            completed: false,
            attempted: false,
            lastAttempted: null,
            timeSpent: 0
          }
        },
        {
          id: 'encode-decode-strings',
          title: 'Encode and Decode Strings',
          difficulty: 'Medium',
          pattern: 'basic-hashing',
          category: 'hash-tables',
          leetcodeUrl: 'https://leetcode.com/problems/encode-and-decode-strings/',
          estimatedTime: 25,
          tags: ['array', 'string', 'design'],
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
          pattern: 'basic-hashing',
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
}