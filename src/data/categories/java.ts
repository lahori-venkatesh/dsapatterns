import { LanguageMastery } from '../../types';

export const javaMastery: LanguageMastery = {
  id: 'java-mastery',
  language: 'Java',
  name: 'Java Programming',
  icon: 'Coffee',
  description: 'Master Java fundamentals, OOP, Collections, Streams, and Concurrency',
  color: 'from-orange-500 to-red-600',
  totalProblems: 65,
  completedProblems: 0,
  problems: [
    {
      id: 'java-hello-world',
      title: 'Hello World and Basic I/O',
      difficulty: 'Easy',
      description: 'Learn basic Java syntax, printing, and reading input',
      topics: ['Basics', 'I/O'],
      estimatedTime: 15,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-stdin-and-stdout-1' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/java-hello-world' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-data-types',
      title: 'Java Data Types',
      difficulty: 'Easy',
      description: 'Understand primitive data types and type casting',
      topics: ['Data Types', 'Type Casting'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-datatypes' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/data-type' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-operators',
      title: 'Operators and Expressions',
      difficulty: 'Easy',
      description: 'Master arithmetic, logical, and bitwise operators',
      topics: ['Operators', 'Expressions'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-operators' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/java-operators' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-strings',
      title: 'String Manipulation',
      difficulty: 'Easy',
      description: 'Master String class methods and operations',
      topics: ['Strings', 'Methods'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-strings-introduction' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/java-string-methods' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-substring-comparison',
      title: 'Substring Comparisons',
      difficulty: 'Easy',
      description: 'Learn substring operations and lexicographic ordering',
      topics: ['Strings', 'Comparison'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-string-compare' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/java-substring' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-anagrams',
      title: 'String Anagrams',
      difficulty: 'Easy',
      description: 'Check if two strings are anagrams',
      topics: ['Strings', 'Hash Table'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-anagrams' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/anagram' }
      ],
      companies: ['Amazon', 'Microsoft', 'Google'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-loops',
      title: 'Loops and Control Flow',
      difficulty: 'Easy',
      description: 'Master for, while, and do-while loops',
      topics: ['Loops', 'Control Flow'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-loops' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/java-loops' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-conditional-statements',
      title: 'Conditional Statements',
      difficulty: 'Easy',
      description: 'Learn if-else and switch statements',
      topics: ['Conditionals', 'Control Flow'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-if-else' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/java-switch-case-statement' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-arrays',
      title: 'Arrays and Array Operations',
      difficulty: 'Easy',
      description: 'Work with arrays, traversal, and basic operations',
      topics: ['Arrays', 'Iteration'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-1d-array-introduction' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/array-operations' }
      ],
      companies: ['Amazon', 'Microsoft', 'Google'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-2d-arrays',
      title: '2D Arrays',
      difficulty: 'Easy',
      description: 'Work with multidimensional arrays',
      topics: ['Arrays', '2D Arrays'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-2d-array' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/multidimensional-arrays' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-arraylist',
      title: 'ArrayList and Dynamic Arrays',
      difficulty: 'Medium',
      description: 'Master ArrayList class and dynamic resizing',
      topics: ['Collections', 'ArrayList'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-arraylist' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/arraylist-operations' }
      ],
      companies: ['Amazon', 'Microsoft', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-linkedlist',
      title: 'LinkedList',
      difficulty: 'Medium',
      description: 'Implement and use LinkedList',
      topics: ['Collections', 'LinkedList'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-list' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/linked-list-operations' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-hashmap',
      title: 'HashMap and Hash Tables',
      difficulty: 'Medium',
      description: 'Learn HashMap operations and key-value pairs',
      topics: ['Collections', 'HashMap', 'Hash Tables'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-map' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/java-hashmap' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-hashset',
      title: 'HashSet and Sets',
      difficulty: 'Medium',
      description: 'Work with HashSet for unique elements',
      topics: ['Collections', 'HashSet'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-hashset' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/java-hashset' }
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-treeset',
      title: 'TreeSet and Sorted Sets',
      difficulty: 'Medium',
      description: 'Use TreeSet for sorted unique elements',
      topics: ['Collections', 'TreeSet', 'Sorting'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-sort' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/treeset-operations' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-sorting',
      title: 'Sorting and Comparators',
      difficulty: 'Medium',
      description: 'Learn sorting algorithms and custom comparators',
      topics: ['Sorting', 'Comparator', 'Collections'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-sort' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/sorting' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-comparator',
      title: 'Comparator Interface',
      difficulty: 'Medium',
      description: 'Implement custom comparators for sorting',
      topics: ['Comparator', 'Sorting'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-comparator' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/comparator' }
      ],
      companies: ['Amazon', 'Microsoft', 'Google'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-stack-queue',
      title: 'Stack and Queue',
      difficulty: 'Medium',
      description: 'Implement and use Stack and Queue data structures',
      topics: ['Collections', 'Stack', 'Queue'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-stack' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/implement-stack-using-array' }
      ],
      companies: ['Amazon', 'Microsoft', 'Google'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-exception-handling',
      title: 'Exception Handling',
      difficulty: 'Medium',
      description: 'Master try-catch blocks and custom exceptions',
      topics: ['Exceptions', 'Error Handling'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-exception-handling' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/exception-handling' }
      ],
      companies: ['Amazon', 'Microsoft', 'Oracle'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-try-catch',
      title: 'Try-Catch Blocks',
      difficulty: 'Easy',
      description: 'Handle exceptions with try-catch',
      topics: ['Exceptions', 'Try-Catch'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-exception-handling-try-catch' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/try-catch' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-inheritance',
      title: 'Inheritance and Polymorphism',
      difficulty: 'Medium',
      description: 'Understand OOP concepts: inheritance, method overriding',
      topics: ['OOP', 'Inheritance', 'Polymorphism'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-inheritance-1' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/inheritance' },
      ],
      companies: ['Google', 'Amazon', 'Oracle'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-method-overriding',
      title: 'Method Overriding',
      difficulty: 'Medium',
      description: 'Override methods in subclasses',
      topics: ['OOP', 'Method Overriding'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-method-overriding' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/method-overriding' },
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-abstract-interface',
      title: 'Abstract Classes and Interfaces',
      difficulty: 'Medium',
      description: 'Learn abstract classes and interface implementation',
      topics: ['OOP', 'Abstract', 'Interface'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-abstract-class' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/abstract-classes-and-interfaces' },
      ],
      companies: ['Google', 'Microsoft', 'Oracle'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-interface',
      title: 'Interface Implementation',
      difficulty: 'Medium',
      description: 'Implement multiple interfaces',
      topics: ['OOP', 'Interface'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-interface' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/interfaces' },
      ],
      companies: ['Google', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-generics',
      title: 'Generics',
      difficulty: 'Medium',
      description: 'Work with generic classes and methods',
      topics: ['Generics', 'Type Safety'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-generics' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/java-generics' },
      ],
      companies: ['Google', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-lambda-expressions',
      title: 'Lambda Expressions',
      difficulty: 'Medium',
      description: 'Master lambda expressions and functional interfaces',
      topics: ['Lambda', 'Functional Programming'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-lambda-expressions' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/lambda-expressions' },
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-functional-interface',
      title: 'Functional Interfaces',
      difficulty: 'Medium',
      description: 'Use Predicate, Function, Consumer, Supplier',
      topics: ['Functional Interface', 'Functional Programming'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-8-functional-interfaces' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/functional-interfaces' },
      ],
      companies: ['Google', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-streams',
      title: 'Stream API',
      difficulty: 'Hard',
      description: 'Learn Stream operations: map, filter, reduce, collect',
      topics: ['Streams', 'Functional Programming'],
      estimatedTime: 50,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-8-stream-api' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/java-stream-api' },
      ],
      companies: ['Google', 'Amazon', 'Microsoft', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-stream-operations',
      title: 'Stream Operations',
      difficulty: 'Hard',
      description: 'Master intermediate and terminal operations',
      topics: ['Streams', 'Operations'],
      estimatedTime: 50,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-stream-operations' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/stream-operations' },
      ],
      companies: ['Google', 'Amazon', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-optional',
      title: 'Optional Class',
      difficulty: 'Medium',
      description: 'Handle null values elegantly with Optional',
      topics: ['Optional', 'Null Safety'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-optional' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/optional-class' },
      ],
      companies: ['Google', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-priority-queue',
      title: 'Priority Queue and Heap',
      difficulty: 'Hard',
      description: 'Implement PriorityQueue and solve heap problems',
      topics: ['Collections', 'Priority Queue', 'Heap'],
      estimatedTime: 45,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-priority-queue' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/implementation-of-priority-queue-using-binary-heap' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-deque',
      title: 'Deque and LinkedList',
      difficulty: 'Hard',
      description: 'Master Deque interface and LinkedList implementation',
      topics: ['Collections', 'Deque', 'LinkedList'],
      estimatedTime: 45,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-dequeue' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/deque-implementations' }
      ],
      companies: ['Amazon', 'Microsoft', 'Google'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-treemap-treeset',
      title: 'TreeMap and TreeSet',
      difficulty: 'Hard',
      description: 'Learn sorted collections with TreeMap and TreeSet',
      topics: ['Collections', 'TreeMap', 'TreeSet', 'Sorting'],
      estimatedTime: 45,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-sort' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/treemap-operations' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-file-io',
      title: 'File I/O Operations',
      difficulty: 'Medium',
      description: 'Read and write files using Java I/O classes',
      topics: ['File I/O', 'Streams'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-file-io' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/file-handling' },
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-bufferedreader',
      title: 'BufferedReader and Scanner',
      difficulty: 'Medium',
      description: 'Efficient reading with BufferedReader',
      topics: ['File I/O', 'BufferedReader'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-stdin-stdout' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/bufferedreader' },
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-regex',
      title: 'Regular Expressions',
      difficulty: 'Medium',
      description: 'Master pattern matching with regex',
      topics: ['Regex', 'Pattern Matching'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-regex' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/regex-pattern' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-pattern-matcher',
      title: 'Pattern and Matcher',
      difficulty: 'Medium',
      description: 'Use Pattern and Matcher classes',
      topics: ['Regex', 'Pattern', 'Matcher'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-regex-2-duplicate-words' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/pattern-matcher' },
      ],
      companies: ['Google', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-multithreading',
      title: 'Multithreading Basics',
      difficulty: 'Hard',
      description: 'Learn Thread creation, synchronization, and locks',
      topics: ['Concurrency', 'Threads', 'Synchronization'],
      estimatedTime: 60,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-multithreading' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/multithreading-in-java' },
      ],
      companies: ['Google', 'Amazon', 'Microsoft', 'Oracle'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-thread-creation',
      title: 'Thread Creation Methods',
      difficulty: 'Medium',
      description: 'Create threads using Thread class and Runnable',
      topics: ['Threads', 'Runnable'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-threads' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/thread-creation' },
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-synchronization',
      title: 'Synchronization',
      difficulty: 'Hard',
      description: 'Learn synchronized keyword and thread safety',
      topics: ['Synchronization', 'Thread Safety'],
      estimatedTime: 50,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-synchronization' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/synchronization' },
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-executor-service',
      title: 'ExecutorService and Thread Pool',
      difficulty: 'Hard',
      description: 'Master ExecutorService and thread pool management',
      topics: ['Concurrency', 'ExecutorService', 'Thread Pool'],
      estimatedTime: 55,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-executor-service' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/executor-service' },
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-concurrent-collections',
      title: 'Concurrent Collections',
      difficulty: 'Hard',
      description: 'Work with ConcurrentHashMap, CopyOnWriteArrayList',
      topics: ['Concurrency', 'Collections', 'Thread-Safety'],
      estimatedTime: 55,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-concurrent-collections' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/concurrent-collections' },
      ],
      companies: ['Google', 'Amazon', 'Microsoft', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-reflection',
      title: 'Reflection API',
      difficulty: 'Hard',
      description: 'Inspect and modify classes at runtime',
      topics: ['Reflection', 'Metadata'],
      estimatedTime: 50,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-reflection' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/reflection-api' },
      ],
      companies: ['Google', 'Oracle'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-annotations',
      title: 'Annotations',
      difficulty: 'Hard',
      description: 'Create and use custom annotations',
      topics: ['Annotations', 'Metadata'],
      estimatedTime: 45,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-annotations' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/annotations' },
      ],
      companies: ['Google', 'Oracle'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-singleton-pattern',
      title: 'Singleton Design Pattern',
      difficulty: 'Medium',
      description: 'Implement thread-safe singleton pattern',
      topics: ['Design Patterns', 'Singleton'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-singleton' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/singleton-pattern' },
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-factory-pattern',
      title: 'Factory Design Pattern',
      difficulty: 'Medium',
      description: 'Implement factory pattern for object creation',
      topics: ['Design Patterns', 'Factory'],
      estimatedTime: 45,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-factory-pattern' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/factory-pattern' },
      ],
      companies: ['Google', 'Amazon', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-observer-pattern',
      title: 'Observer Design Pattern',
      difficulty: 'Hard',
      description: 'Implement observer pattern for event handling',
      topics: ['Design Patterns', 'Observer'],
      estimatedTime: 50,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-observer-pattern' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/observer-pattern' },
      ],
      companies: ['Google', 'Meta', 'Apple'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-builder-pattern',
      title: 'Builder Design Pattern',
      difficulty: 'Medium',
      description: 'Create complex objects with builder pattern',
      topics: ['Design Patterns', 'Builder'],
      estimatedTime: 45,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-builder-pattern' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/builder-pattern' },
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-garbage-collection',
      title: 'Memory Management and GC',
      difficulty: 'Hard',
      description: 'Understand garbage collection and memory optimization',
      topics: ['Memory Management', 'Garbage Collection'],
      estimatedTime: 50,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/java-gc' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/garbage-collection' },
      ],
      companies: ['Google', 'Amazon', 'Oracle'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-optional',
      title: 'Optional Class',
      difficulty: 'Medium',
      description: 'Handle null values with Optional',
      topics: ['Optional', 'Java 8'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/java' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/java-8-optional-class/' },
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-completablefuture',
      title: 'CompletableFuture',
      difficulty: 'Hard',
      description: 'Asynchronous programming with CompletableFuture',
      topics: ['Concurrency', 'Async', 'Java 8'],
      estimatedTime: 50,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/java' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/completablefuture-in-java/' },
      ],
      companies: ['Google', 'Amazon', 'Microsoft', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-records',
      title: 'Records (Java 14+)',
      difficulty: 'Easy',
      description: 'Modern data carriers using records',
      topics: ['Records', 'Modern Java'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/java' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/what-are-java-records/' },
      ],
      companies: ['Google', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-sealed-classes',
      title: 'Sealed Classes (Java 17)',
      difficulty: 'Medium',
      description: 'Restrict inheritance with sealed classes',
      topics: ['Sealed Classes', 'Modern Java'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/java' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/sealed-classes-and-interfaces-in-java/' },
      ],
      companies: ['Google', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-text-blocks',
      title: 'Text Blocks',
      difficulty: 'Easy',
      description: 'Multi-line strings with text blocks',
      topics: ['Text Blocks', 'Modern Java'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/java' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/text-blocks-in-java-15/' },
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-junit',
      title: 'JUnit Testing',
      difficulty: 'Medium',
      description: 'Write unit tests with JUnit 5',
      topics: ['Testing', 'JUnit'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/java' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/junit-5-tutorial/' },
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-mockito',
      title: 'Mocking with Mockito',
      difficulty: 'Medium',
      description: 'Mock objects for testing with Mockito',
      topics: ['Testing', 'Mockito'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/java' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/mockito-tutorial/' },
      ],
      companies: ['Google', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-spring-ioc',
      title: 'Spring Framework - IoC Container',
      difficulty: 'Medium',
      description: 'Dependency injection with Spring',
      topics: ['Spring', 'IoC', 'DI'],
      estimatedTime: 45,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/java' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/spring-inversion-of-control-ioc-dependency-injection-di/' },
      ],
      companies: ['Amazon', 'Microsoft', 'Oracle'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-spring-boot',
      title: 'Spring Boot Basics',
      difficulty: 'Medium',
      description: 'Build REST APIs with Spring Boot',
      topics: ['Spring Boot', 'REST API'],
      estimatedTime: 50,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/java' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/spring-boot/' },
      ],
      companies: ['Amazon', 'Microsoft', 'Google'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-jpa-hibernate',
      title: 'JPA and Hibernate',
      difficulty: 'Hard',
      description: 'Object-relational mapping with JPA/Hibernate',
      topics: ['JPA', 'Hibernate', 'ORM'],
      estimatedTime: 55,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/java' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/introduction-to-hibernate-framework/' },
      ],
      companies: ['Amazon', 'Microsoft', 'Oracle'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-jdbc',
      title: 'JDBC Database Connectivity',
      difficulty: 'Medium',
      description: 'Connect to databases using JDBC',
      topics: ['JDBC', 'Database'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/java' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/introduction-to-jdbc/' },
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-jackson',
      title: 'JSON Processing with Jackson',
      difficulty: 'Medium',
      description: 'Serialize and deserialize JSON',
      topics: ['JSON', 'Jackson'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/java' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/introduction-to-jackson-objectmapper/' },
      ],
      companies: ['Amazon', 'Google'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-lombok',
      title: 'Lombok Annotations',
      difficulty: 'Easy',
      description: 'Reduce boilerplate code with Lombok',
      topics: ['Lombok', 'Annotations'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/java' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/introduction-to-project-lombok-in-java/' },
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-logging',
      title: 'Logging with SLF4J and Logback',
      difficulty: 'Medium',
      description: 'Application logging frameworks',
      topics: ['Logging', 'SLF4J', 'Logback'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/java' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/logging-in-java/' },
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'java-maven-gradle',
      title: 'Build Tools - Maven & Gradle',
      difficulty: 'Medium',
      description: 'Project build and dependency management',
      topics: ['Maven', 'Gradle', 'Build Tools'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/java' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/introduction-apache-maven-build-automation-tool-java-projects/' },
      ],
      companies: ['Amazon', 'Microsoft', 'Google'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    }
  ]
};