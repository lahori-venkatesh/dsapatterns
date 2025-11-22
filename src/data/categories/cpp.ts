import { LanguageMastery } from '../../types';

export const cppMastery: LanguageMastery = {
  id: 'cpp-mastery',
  language: 'C++',
  name: 'C++ Programming',
  icon: 'Terminal',
  description: 'Master C++ fundamentals, STL, Memory Management, and Advanced concepts',
  color: 'from-purple-500 to-pink-600',
  totalProblems: 65,
  completedProblems: 0,
  problems: [
    {
      id: 'cpp-hello-world',
      title: 'Hello World and Basic I/O',
      difficulty: 'Easy',
      description: 'Learn basic C++ syntax and cout/cin',
      topics: ['Basics', 'I/O'],
      estimatedTime: 15,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/cpp-hello-world' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/cpp-hello-world' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-data-types',
      title: 'Data Types and Variables',
      difficulty: 'Easy',
      description: 'Understand int, float, double, char, bool',
      topics: ['Data Types', 'Variables'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/cpp-input-and-output' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/data-type' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-basic-data-types',
      title: 'Basic Data Types',
      difficulty: 'Easy',
      description: 'Work with different primitive data types',
      topics: ['Data Types', 'Primitives'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/c-tutorial-basic-data-types' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/basic-data-types' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-conditional-statements',
      title: 'Conditional Statements',
      difficulty: 'Easy',
      description: 'Use if, else if, else, and switch',
      topics: ['Conditionals', 'Control Flow'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/c-tutorial-conditional-if-else' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/conditional-statements' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-for-loop',
      title: 'For Loop',
      difficulty: 'Easy',
      description: 'Master for loop syntax and usage',
      topics: ['Loops', 'For Loop'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/c-tutorial-for-loop' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/for-loop' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-while-loop',
      title: 'While Loop',
      difficulty: 'Easy',
      description: 'Learn while and do-while loops',
      topics: ['Loops', 'While Loop'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/while-loop' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/while-loop' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-arrays',
      title: 'Arrays and Array Operations',
      difficulty: 'Easy',
      description: 'Work with static and dynamic arrays',
      topics: ['Arrays', 'Iteration'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/arrays-introduction' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/array-operations' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-array-reversal',
      title: 'Array Reversal',
      difficulty: 'Easy',
      description: 'Reverse an array in place',
      topics: ['Arrays', 'Reversal'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/arrays-introduction' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/reverse-array' }
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-strings',
      title: 'Strings and String Operations',
      difficulty: 'Easy',
      description: 'Master string class and string manipulation',
      topics: ['Strings', 'Methods'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/c-tutorial-strings' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/string-operations' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-stringstream',
      title: 'StringStream',
      difficulty: 'Easy',
      description: 'Parse strings with stringstream',
      topics: ['Strings', 'StringStream'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/c-tutorial-stringstream' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/stringstream' }
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-functions',
      title: 'Functions and Function Overloading',
      difficulty: 'Easy',
      description: 'Define functions, pass by reference, function overloading',
      topics: ['Functions', 'Overloading'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/functions' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/function-overloading' }
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-pointers',
      title: 'Pointers and References',
      difficulty: 'Medium',
      description: 'Master pointers, references, and pointer arithmetic',
      topics: ['Pointers', 'References', 'Memory'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/c-tutorial-pointer' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/pointers-basics' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft', 'Apple'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-pointer-arithmetic',
      title: 'Pointer Arithmetic',
      difficulty: 'Medium',
      description: 'Work with pointer arithmetic and arrays',
      topics: ['Pointers', 'Arithmetic'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/pointer-arithmetic' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/pointer-arithmetic' }
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-classes-objects',
      title: 'Classes and Objects',
      difficulty: 'Medium',
      description: 'Learn OOP basics with classes and objects',
      topics: ['OOP', 'Classes', 'Objects'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/classes-objects' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/cpp-classes' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-constructors-destructors',
      title: 'Constructors and Destructors',
      difficulty: 'Medium',
      description: 'Master initialization and cleanup with constructors/destructors',
      topics: ['Constructors', 'Destructors', 'RAII'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/cpp-class' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/constructors-destructors' }
      ],
      companies: ['Google', 'Microsoft', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-copy-constructor',
      title: 'Copy Constructor',
      difficulty: 'Medium',
      description: 'Implement copy constructor for deep copying',
      topics: ['Constructors', 'Copy Constructor'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/copy-constructor' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/copy-constructor' }
      ],
      companies: ['Google', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-inheritance',
      title: 'Inheritance and Polymorphism',
      difficulty: 'Medium',
      description: 'Learn inheritance, virtual functions, and polymorphism',
      topics: ['OOP', 'Inheritance', 'Polymorphism', 'Virtual Functions'],
      estimatedTime: 45,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/cpp-inheritance' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/inheritance' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-virtual-functions',
      title: 'Virtual Functions',
      difficulty: 'Medium',
      description: 'Use virtual functions for runtime polymorphism',
      topics: ['Virtual Functions', 'Polymorphism'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/virtual-functions' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/virtual-functions' }
      ],
      companies: ['Google', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-operator-overloading',
      title: 'Operator Overloading',
      difficulty: 'Medium',
      description: 'Overload operators for custom classes',
      topics: ['Operator Overloading', 'OOP'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/cpp-operator-overloading' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/operator-overloading' }
      ],
      companies: ['Google', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-vector',
      title: 'STL Vector',
      difficulty: 'Easy',
      description: 'Master dynamic arrays with vector',
      topics: ['STL', 'Vector', 'Dynamic Arrays'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/cpp-vectors' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/stl-vector' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-vector-sort',
      title: 'Vector Sort',
      difficulty: 'Easy',
      description: 'Sort vectors using STL sort',
      topics: ['STL', 'Vector', 'Sorting'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/vector-sort' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/vector-sort' }
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-vector-erase',
      title: 'Vector Erase',
      difficulty: 'Easy',
      description: 'Remove elements from vectors',
      topics: ['STL', 'Vector', 'Erase'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/vector-erase' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/vector-erase' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-map',
      title: 'STL Map and Unordered Map',
      difficulty: 'Medium',
      description: 'Work with key-value pairs using map',
      topics: ['STL', 'Map', 'Hash Tables'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/cpp-maps' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/stl-map' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-set',
      title: 'STL Set and Unordered Set',
      difficulty: 'Medium',
      description: 'Use sets for unique elements',
      topics: ['STL', 'Set', 'Ordering'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/cpp-sets' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/stl-set' }
      ],
      companies: ['Amazon', 'Microsoft', 'Google'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-lower-bound',
      title: 'Lower Bound and Upper Bound',
      difficulty: 'Medium',
      description: 'Binary search with lower_bound and upper_bound',
      topics: ['STL', 'Binary Search', 'Bounds'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/cpp-lower-bound' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/lower-bound' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-stack-queue',
      title: 'STL Stack and Queue',
      difficulty: 'Medium',
      description: 'Implement Stack and Queue using STL',
      topics: ['STL', 'Stack', 'Queue'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/cpp-stacks' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/implement-stack-using-array' }
      ],
      companies: ['Amazon', 'Microsoft', 'Google'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-priority-queue',
      title: 'STL Priority Queue',
      difficulty: 'Hard',
      description: 'Master heap data structure with priority_queue',
      topics: ['STL', 'Priority Queue', 'Heap'],
      estimatedTime: 45,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/cpp-priority-queue' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/implementation-of-priority-queue-using-binary-heap' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-deque',
      title: 'STL Deque',
      difficulty: 'Medium',
      description: 'Double-ended queue operations',
      topics: ['STL', 'Deque'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/cpp-deque' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/deque' }
      ],
      companies: ['Amazon', 'Microsoft', 'Google'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-algorithms',
      title: 'STL Algorithms',
      difficulty: 'Medium',
      description: 'Master sort, binary_search, find, count, etc.',
      topics: ['STL', 'Algorithms', 'Sorting'],
      estimatedTime: 45,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/cpp-algorithms' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/stl-algorithms' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-iterators',
      title: 'Iterators',
      difficulty: 'Medium',
      description: 'Learn iterator types and usage',
      topics: ['Iterators', 'STL'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/cpp-iterators' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/iterators' }
      ],
      companies: ['Google', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-templates',
      title: 'Templates',
      difficulty: 'Hard',
      description: 'Create generic functions and classes with templates',
      topics: ['Templates', 'Generic Programming'],
      estimatedTime: 50,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/cpp-templates' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/templates' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-function-templates',
      title: 'Function Templates',
      difficulty: 'Medium',
      description: 'Create generic functions with templates',
      topics: ['Templates', 'Functions'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/function-templates' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/function-templates' }
      ],
      companies: ['Google', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-class-templates',
      title: 'Class Templates',
      difficulty: 'Hard',
      description: 'Create generic classes with templates',
      topics: ['Templates', 'Classes'],
      estimatedTime: 50,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/class-templates' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/class-templates' }
      ],
      companies: ['Google', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-exception-handling',
      title: 'Exception Handling',
      difficulty: 'Medium',
      description: 'Handle errors with try-catch blocks',
      topics: ['Exceptions', 'Error Handling'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/cpp-exception-handling' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/exception-handling' }
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-smart-pointers',
      title: 'Smart Pointers',
      difficulty: 'Hard',
      description: 'Master unique_ptr, shared_ptr, weak_ptr',
      topics: ['Smart Pointers', 'Memory Management', 'RAII'],
      estimatedTime: 50,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/smart-pointers' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/smart-pointers' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-unique-ptr',
      title: 'Unique Pointer',
      difficulty: 'Hard',
      description: 'Exclusive ownership with unique_ptr',
      topics: ['Smart Pointers', 'Unique Ptr'],
      estimatedTime: 45,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/unique-ptr' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/unique-ptr' }
      ],
      companies: ['Google', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-shared-ptr',
      title: 'Shared Pointer',
      difficulty: 'Hard',
      description: 'Shared ownership with shared_ptr',
      topics: ['Smart Pointers', 'Shared Ptr'],
      estimatedTime: 45,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/shared-ptr' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/shared-ptr' }
      ],
      companies: ['Google', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-move-semantics',
      title: 'Move Semantics and Rvalue References',
      difficulty: 'Hard',
      description: 'Understand move constructors and std::move',
      topics: ['Move Semantics', 'Rvalue References', 'Performance'],
      estimatedTime: 55,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/cpp' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/move-semantics-in-c-with-examples/' }
      ],
      companies: ['Google', 'Meta', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-lambda-expressions',
      title: 'Lambda Expressions',
      difficulty: 'Medium',
      description: 'Write inline anonymous functions with lambdas',
      topics: ['Lambda', 'Functional Programming'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/cpp-lambda' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/lambda-expressions' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-file-io',
      title: 'File I/O Operations',
      difficulty: 'Medium',
      description: 'Read and write files with fstream',
      topics: ['File I/O', 'Streams'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/cpp-file-io' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/file-handling-cpp' }
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-namespaces',
      title: 'Namespaces',
      difficulty: 'Medium',
      description: 'Organize code with namespaces',
      topics: ['Namespaces', 'Code Organization'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/cpp-namespaces' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/namespaces' }
      ],
      companies: ['Google', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-const-correctness',
      title: 'Const Correctness',
      difficulty: 'Medium',
      description: 'Learn proper use of const keyword',
      topics: ['Const', 'Best Practices'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/const-correctness' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/const-correctness' }
      ],
      companies: ['Google', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-static-keyword',
      title: 'Static Keyword',
      difficulty: 'Medium',
      description: 'Use static variables and functions',
      topics: ['Static', 'Storage Class'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/static-keyword' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/static-keyword' }
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-friend-function',
      title: 'Friend Functions',
      difficulty: 'Medium',
      description: 'Access private members with friend functions',
      topics: ['Friend', 'Access Control'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/friend-functions' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/friend-functions' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-bitwise-operators',
      title: 'Bitwise Operators',
      difficulty: 'Medium',
      description: 'Master bitwise AND, OR, XOR, NOT, shifts',
      topics: ['Bitwise', 'Operators'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/bitwise-operators' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/bitwise-operators' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-memory-management',
      title: 'Dynamic Memory Management',
      difficulty: 'Hard',
      description: 'Master new, delete, memory leaks prevention',
      topics: ['Memory Management', 'Dynamic Allocation'],
      estimatedTime: 50,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/memory-management' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/dynamic-memory-allocation' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft', 'Apple'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-struct-class',
      title: 'Struct vs Class',
      difficulty: 'Easy',
      description: 'Understand differences between struct and class',
      topics: ['Struct', 'Class', 'OOP'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/struct-class' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/struct-vs-class' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-move-semantics',
      title: 'Move Semantics (C++11)',
      difficulty: 'Hard',
      description: 'Rvalue references and move constructors',
      topics: ['Move Semantics', 'Modern C++'],
      estimatedTime: 50,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/cpp' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/move-semantics-in-c-with-examples/' }
      ],
      companies: ['Google', 'Microsoft', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-perfect-forwarding',
      title: 'Perfect Forwarding',
      difficulty: 'Hard',
      description: 'Universal references and std::forward',
      topics: ['Perfect Forwarding', 'Modern C++'],
      estimatedTime: 50,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/cpp' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/perfect-forwarding-in-c/' }
      ],
      companies: ['Google', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-constexpr',
      title: 'Constexpr and Compile-time Computation',
      difficulty: 'Medium',
      description: 'Compile-time evaluation with constexpr',
      topics: ['Constexpr', 'Modern C++'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/cpp' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/understanding-constexpr-specifier-in-c/' }
      ],
      companies: ['Google', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-concepts',
      title: 'Concepts (C++20)',
      difficulty: 'Hard',
      description: 'Template constraints with concepts',
      topics: ['Concepts', 'C++20'],
      estimatedTime: 50,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/cpp' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/cpp-20-concepts/' }
      ],
      companies: ['Google', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-ranges',
      title: 'Ranges Library (C++20)',
      difficulty: 'Medium',
      description: 'Modern range-based algorithms',
      topics: ['Ranges', 'C++20'],
      estimatedTime: 45,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/cpp' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/ranges-in-c20/' }
      ],
      companies: ['Google', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-coroutines',
      title: 'Coroutines (C++20)',
      difficulty: 'Hard',
      description: 'Asynchronous programming with coroutines',
      topics: ['Coroutines', 'C++20', 'Async'],
      estimatedTime: 55,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/cpp' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/cpp-20-coroutines/' }
      ],
      companies: ['Google', 'Meta', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-modules',
      title: 'Modules (C++20)',
      difficulty: 'Medium',
      description: 'Modern code organization with modules',
      topics: ['Modules', 'C++20'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/cpp' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/modules-in-cpp-20/' }
      ],
      companies: ['Microsoft', 'Google'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-sfinae',
      title: 'SFINAE and Type Traits',
      difficulty: 'Hard',
      description: 'Substitution Failure Is Not An Error',
      topics: ['SFINAE', 'Template Metaprogramming'],
      estimatedTime: 55,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/cpp' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/sfinae-substitution-failure-is-not-an-error/' }
      ],
      companies: ['Google', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-chrono',
      title: 'Chrono Library',
      difficulty: 'Medium',
      description: 'Time and duration manipulation',
      topics: ['Chrono', 'Time'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/cpp' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/chrono-in-c/' }
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-filesystem',
      title: 'Filesystem Library (C++17)',
      difficulty: 'Medium',
      description: 'File and directory operations',
      topics: ['Filesystem', 'C++17'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/cpp' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/file-handling-c-classes/' }
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-regex',
      title: 'Regular Expressions',
      difficulty: 'Medium',
      description: 'Pattern matching with regex library',
      topics: ['Regex', 'Pattern Matching'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/cpp' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/regex-regular-expression-in-c/' }
      ],
      companies: ['Google', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-random',
      title: 'Random Number Generation',
      difficulty: 'Medium',
      description: 'Modern random number generators',
      topics: ['Random', 'C++11'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/cpp' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/random-number-generator-in-cpp/' }
      ],
      companies: ['Amazon', 'Google'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-atomic',
      title: 'Atomic Operations',
      difficulty: 'Hard',
      description: 'Lock-free programming with atomics',
      topics: ['Atomic', 'Concurrency'],
      estimatedTime: 50,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/cpp' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/stdatomic-in-cpp/' }
      ],
      companies: ['Google', 'Meta', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-catch2',
      title: 'Unit Testing with Catch2',
      difficulty: 'Medium',
      description: 'Modern C++ testing framework',
      topics: ['Testing', 'Catch2'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/cpp' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/unit-testing-in-cpp/' }
      ],
      companies: ['Google', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'cpp-cmake',
      title: 'CMake Build System',
      difficulty: 'Medium',
      description: 'Project configuration and building',
      topics: ['CMake', 'Build Systems'],
      estimatedTime: 45,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/cpp' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/introduction-to-cmake/' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    }
  ],
  interviewQuestions: [
    {
      id: 'cpp-int-1',
      question: 'What is the difference between pointers and references in C++?',
      answer: `Pointers:
- Can be null
- Can be reassigned
- Use * and -> operators
- Syntax: int* ptr = &var;
- Requires dereferencing

References:
- Cannot be null
- Cannot be reassigned
- Use . operator
- Syntax: int& ref = var;
- Automatic dereferencing

References are safer and cleaner, pointers offer more flexibility.`,
      difficulty: 'Medium',
      category: 'Pointers',
      topics: ['Pointers', 'References']
    },
    {
      id: 'cpp-int-2',
      question: 'Explain virtual functions and polymorphism',
      answer: `Virtual functions enable runtime polymorphism through dynamic binding.

Syntax:
class Base {
    virtual void func() { }
};

class Derived : public Base {
    void func() override { }
};

Key points:
- vtable (virtual table) stores function pointers
- Virtual destructor needed for proper cleanup
- Pure virtual (= 0) makes class abstract
- override keyword ensures correct overriding

Benefits: Flexible, extensible code through interfaces`,
      difficulty: 'Hard',
      category: 'OOP',
      topics: ['Virtual Functions', 'Polymorphism']
    },
    {
      id: 'cpp-int-3',
      question: 'What are smart pointers and why use them?',
      answer: `Smart pointers manage memory automatically, preventing leaks.

Types:
1. unique_ptr: Exclusive ownership, cannot be copied
   std::unique_ptr<int> ptr = std::make_unique<int>(10);

2. shared_ptr: Shared ownership, reference counting
   std::shared_ptr<int> ptr = std::make_shared<int>(10);

3. weak_ptr: Non-owning reference, breaks circular references

Benefits:
- Automatic cleanup (RAII)
- No memory leaks
- Exception safe

Prefer unique_ptr unless sharing needed`,
      difficulty: 'Hard',
      category: 'Memory',
      topics: ['Smart Pointers', 'Memory Management']
    },
    {
      id: 'cpp-int-4',
      question: 'Explain the Rule of Three/Five',
      answer: `Rule of Three: If you define one, define all three:
1. Destructor
2. Copy constructor
3. Copy assignment operator

Rule of Five (C++11): Add move semantics:
4. Move constructor
5. Move assignment operator

Example:
class MyClass {
    ~MyClass();                           // 1
    MyClass(const MyClass&);              // 2
    MyClass& operator=(const MyClass&);   // 3
    MyClass(MyClass&&);                   // 4
    MyClass& operator=(MyClass&&);        // 5
};

Or use = default / = delete`,
      difficulty: 'Hard',
      category: 'OOP',
      topics: ['Rule of Three', 'Move Semantics']
    },
    {
      id: 'cpp-int-5',
      question: 'What is RAII (Resource Acquisition Is Initialization)?',
      answer: `RAII ties resource lifetime to object lifetime.

Principle:
- Acquire resource in constructor
- Release resource in destructor
- Guaranteed cleanup via stack unwinding

Example:
class FileHandler {
    FILE* file;
public:
    FileHandler(const char* name) {
        file = fopen(name, "r");
    }
    ~FileHandler() {
        if(file) fclose(file);
    }
};

Benefits:
- No manual cleanup
- Exception safe
- Prevents resource leaks

Used in: smart pointers, locks, file handles`,
      difficulty: 'Medium',
      category: 'Memory',
      topics: ['RAII', 'Memory Management']
    },
    {
      id: 'cpp-int-6',
      question: 'Explain const correctness in C++',
      answer: `const correctness ensures objects aren't modified when they shouldn't be.

Types:
1. const variable: const int x = 10;
2. const pointer: int* const ptr (pointer is const)
3. Pointer to const: const int* ptr (value is const)
4. const member function: void func() const;

const member functions:
- Cannot modify member variables
- Can only call other const functions
- Can be called on const objects

Benefits:
- Compiler checks
- Self-documenting code
- Enable optimizations`,
      difficulty: 'Medium',
      category: 'Const',
      topics: ['Const', 'Best Practices']
    },
    {
      id: 'cpp-int-7',
      question: 'What are move semantics and rvalue references?',
      answer: `Move semantics transfer ownership instead of copying.

Rvalue reference: T&&
- Binds to temporary objects
- Enables move operations

Example:
class String {
    char* data;
public:
    // Move constructor
    String(String&& other) noexcept {
        data = other.data;
        other.data = nullptr;
    }

    // Move assignment
    String& operator=(String&& other) noexcept {
        if(this != &other) {
            delete[] data;
            data = other.data;
            other.data = nullptr;
        }
        return *this;
    }
};

Benefits:
- Avoid unnecessary copies
- Better performance
- Enable perfect forwarding`,
      difficulty: 'Hard',
      category: 'Move Semantics',
      topics: ['Move', 'Rvalue References']
    },
    {
      id: 'cpp-int-8',
      question: 'Explain the difference between struct and class',
      answer: `Only difference: default access specifier

struct:
- Members public by default
- Inheritance public by default

class:
- Members private by default
- Inheritance private by default

Example:
struct S { int x; };  // x is public
class C { int x; };   // x is private

Convention:
- Use struct for POD (Plain Old Data)
- Use class for objects with behavior

Functionally equivalent otherwise`,
      difficulty: 'Easy',
      category: 'OOP',
      topics: ['Struct', 'Class']
    },
    {
      id: 'cpp-int-9',
      question: 'What is template metaprogramming?',
      answer: `Templates execute code at compile-time instead of runtime.

Examples:

1. Function template:
template<typename T>
T max(T a, T b) { return a > b ? a : b; }

2. Class template:
template<typename T>
class Vector { T* data; };

3. Compile-time computation:
template<int N>
struct Factorial {
    static const int value = N * Factorial<N-1>::value;
};

Benefits:
- Type safety
- Code reuse
- Zero runtime cost
- Generic programming

Drawbacks: Complex error messages, longer compile time`,
      difficulty: 'Hard',
      category: 'Templates',
      topics: ['Templates', 'Metaprogramming']
    },
    {
      id: 'cpp-int-10',
      question: 'Explain the difference between new/delete and malloc/free',
      answer: `new/delete (C++):
- Calls constructor/destructor
- Type-safe
- Can be overloaded
- Throws exception on failure
- Returns typed pointer

malloc/free (C):
- No constructor/destructor
- Not type-safe
- Requires casting
- Returns NULL on failure
- Returns void*

Example:
// C++
MyClass* obj = new MyClass();  // Constructor called
delete obj;                     // Destructor called

// C
MyClass* obj = (MyClass*)malloc(sizeof(MyClass));
free(obj);  // No destructor

Never mix: don't free() what you new, or delete what you malloc()`,
      difficulty: 'Medium',
      category: 'Memory',
      topics: ['New', 'Delete', 'Memory']
    }
  ]
};