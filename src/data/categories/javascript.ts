import { LanguageMastery } from '../../types';

export const javascriptMastery: LanguageMastery = {
  id: 'javascript-mastery',
  language: 'JavaScript',
  name: 'JavaScript Programming',
  icon: 'Code2',
  description: 'Master JavaScript fundamentals, ES6+, DOM manipulation, and async programming',
  color: 'from-yellow-500 to-yellow-600',
  totalProblems: 65,
  completedProblems: 0,
  problems: [
    {
      id: 'js-hello-world',
      title: 'Hello World and Variables',
      difficulty: 'Easy',
      description: 'Learn basic JavaScript syntax, variables, and console output',
      topics: ['Basics', 'Variables'],
      estimatedTime: 15,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/hello-world/' },
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/js10-hello-world' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-data-types',
      title: 'JavaScript Data Types',
      difficulty: 'Easy',
      description: 'Understand primitive and reference data types',
      topics: ['Data Types', 'Type Coercion'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/check-if-object-instance-of-class/' },
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/js10-data-types' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-operators',
      title: 'Operators and Expressions',
      difficulty: 'Easy',
      description: 'Master arithmetic, logical, and comparison operators',
      topics: ['Operators', 'Expressions'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/apply-operations-to-an-array/' },
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/js10-arithmetic-operators' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-functions',
      title: 'Functions and Scope',
      difficulty: 'Easy',
      description: 'Learn function declaration, expressions, and arrow functions',
      topics: ['Functions', 'Scope'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/function-composition/' },
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/js10-function' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-arrays',
      title: 'Arrays and Array Methods',
      difficulty: 'Easy',
      description: 'Master array manipulation with map, filter, reduce',
      topics: ['Arrays', 'Higher-Order Functions'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/filter-elements-from-array/' },
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/js10-arrays' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-objects',
      title: 'Objects and Properties',
      difficulty: 'Easy',
      description: 'Understand object creation, properties, and methods',
      topics: ['Objects', 'Properties'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/group-by/' },
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/js10-objects' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-strings',
      title: 'String Manipulation',
      difficulty: 'Easy',
      description: 'Learn string methods and template literals',
      topics: ['Strings', 'Template Literals'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/reverse-string/' },
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/js10-template-literals' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-loops',
      title: 'Loops and Iteration',
      difficulty: 'Easy',
      description: 'Master for, while, and forEach loops',
      topics: ['Loops', 'Iteration'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/fizz-buzz/' },
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/js10-loops' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-conditionals',
      title: 'Conditional Statements',
      difficulty: 'Easy',
      description: 'Learn if-else, switch, and ternary operators',
      topics: ['Conditionals', 'Control Flow'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/sleep/' },
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/js10-if-else' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-arrow-functions',
      title: 'Arrow Functions',
      difficulty: 'Easy',
      description: 'Master ES6 arrow function syntax and this binding',
      topics: ['ES6', 'Arrow Functions'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/counter/' },
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/js10-arrow-functions' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-destructuring',
      title: 'Destructuring Assignment',
      difficulty: 'Medium',
      description: 'Learn object and array destructuring',
      topics: ['ES6', 'Destructuring'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/chunk-array/' },
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/js10-let-and-const' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-spread-rest',
      title: 'Spread and Rest Operators',
      difficulty: 'Medium',
      description: 'Master spread and rest operator usage',
      topics: ['ES6', 'Operators'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/array-prototype-last/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/spread-operator' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-classes',
      title: 'Classes and OOP',
      difficulty: 'Medium',
      description: 'Understand ES6 classes, constructors, and inheritance',
      topics: ['OOP', 'Classes'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/counter-ii/' },
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/js10-class' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-promises',
      title: 'Promises',
      difficulty: 'Medium',
      description: 'Learn promise creation, chaining, and error handling',
      topics: ['Async', 'Promises'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/promise-time-limit/' },
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/js10-promise' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-async-await',
      title: 'Async/Await',
      difficulty: 'Medium',
      description: 'Master async/await syntax for cleaner asynchronous code',
      topics: ['Async', 'Await'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/' },
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/js10-async-await' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-closures',
      title: 'Closures',
      difficulty: 'Medium',
      description: 'Understand closures and their practical applications',
      topics: ['Closures', 'Scope'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/create-hello-world-function/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/closures-in-javascript' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-this-keyword',
      title: 'The "this" Keyword',
      difficulty: 'Medium',
      description: 'Master the context of "this" in different scenarios',
      topics: ['This', 'Context'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/calculator-with-method-chaining/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/this-keyword' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-prototypes',
      title: 'Prototypes and Inheritance',
      difficulty: 'Medium',
      description: 'Learn prototype chain and prototypal inheritance',
      topics: ['Prototypes', 'Inheritance'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/array-wrapper/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/prototypal-inheritance' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-map-set',
      title: 'Map and Set',
      difficulty: 'Medium',
      description: 'Master ES6 Map and Set data structures',
      topics: ['Data Structures', 'ES6'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/two-sum/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/map-and-set' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-error-handling',
      title: 'Error Handling',
      difficulty: 'Medium',
      description: 'Learn try-catch, throw, and custom errors',
      topics: ['Error Handling', 'Debugging'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/json-deep-equal/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/error-handling' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-modules',
      title: 'Modules Import/Export',
      difficulty: 'Medium',
      description: 'Understand ES6 modules and code organization',
      topics: ['Modules', 'ES6'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/flatten-deeply-nested-array/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/modules-in-javascript' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-json',
      title: 'JSON Operations',
      difficulty: 'Easy',
      description: 'Learn JSON.parse, JSON.stringify, and data serialization',
      topics: ['JSON', 'Data Serialization'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/convert-object-to-json-string/' },
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/js10-regexp' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-regex',
      title: 'Regular Expressions',
      difficulty: 'Medium',
      description: 'Master regex patterns and string matching',
      topics: ['Regex', 'Pattern Matching'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/longest-common-prefix/' },
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/js10-regexp-1' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-dom-manipulation',
      title: 'DOM Manipulation',
      difficulty: 'Medium',
      description: 'Learn to select and modify DOM elements',
      topics: ['DOM', 'Web APIs'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/debounce/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/dom-manipulation' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-event-handling',
      title: 'Event Handling',
      difficulty: 'Medium',
      description: 'Master event listeners and event delegation',
      topics: ['Events', 'DOM'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/event-emitter/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/event-handling' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-fetch-api',
      title: 'Fetch API',
      difficulty: 'Medium',
      description: 'Learn to make HTTP requests with fetch',
      topics: ['API', 'HTTP'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/cache-with-time-limit/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/fetch-api' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-local-storage',
      title: 'Local Storage',
      difficulty: 'Easy',
      description: 'Learn browser storage APIs',
      topics: ['Storage', 'Web APIs'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/design-browser-history/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/local-storage' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-array-reduce',
      title: 'Array Reduce',
      difficulty: 'Medium',
      description: 'Master the reduce method for complex transformations',
      topics: ['Arrays', 'Reduce'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/array-reduce-transformation/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/array-reduce' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-hoisting',
      title: 'Hoisting',
      difficulty: 'Medium',
      description: 'Understand variable and function hoisting',
      topics: ['Hoisting', 'Scope'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/to-be-or-not-to-be/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/hoisting' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-callbacks',
      title: 'Callback Functions',
      difficulty: 'Medium',
      description: 'Learn callback patterns and higher-order functions',
      topics: ['Callbacks', 'Functions'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/interval-cancellation/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/callbacks' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-promise-all',
      title: 'Promise.all and Promise.race',
      difficulty: 'Hard',
      description: 'Master concurrent promise handling',
      topics: ['Promises', 'Async'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/promise-pool/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/promise-all' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-generators',
      title: 'Generators and Iterators',
      difficulty: 'Hard',
      description: 'Learn generator functions and custom iterators',
      topics: ['Generators', 'Iterators'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/generate-fibonacci-sequence/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/generators' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-symbols',
      title: 'Symbols',
      difficulty: 'Medium',
      description: 'Understand Symbol primitive type and its uses',
      topics: ['Symbols', 'ES6'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/array-of-objects-to-matrix/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/symbols' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-proxy-reflect',
      title: 'Proxy and Reflect',
      difficulty: 'Hard',
      description: 'Learn meta-programming with Proxy and Reflect',
      topics: ['Proxy', 'Reflect'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/memoize/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/proxy-reflect' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-weakmap-weakset',
      title: 'WeakMap and WeakSet',
      difficulty: 'Medium',
      description: 'Understand weak references and memory management',
      topics: ['WeakMap', 'WeakSet'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/design-cancellable-function/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/weakmap-weakset' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-curry',
      title: 'Currying',
      difficulty: 'Hard',
      description: 'Master function currying and partial application',
      topics: ['Currying', 'Functions'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/curry/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/currying' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-compose',
      title: 'Function Composition',
      difficulty: 'Hard',
      description: 'Learn to compose and pipe functions',
      topics: ['Composition', 'Functions'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/allow-one-function-call/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/function-composition' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-memoization',
      title: 'Memoization',
      difficulty: 'Hard',
      description: 'Implement memoization for performance optimization',
      topics: ['Memoization', 'Optimization'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/memoize-ii/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/memoization' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-throttle-debounce',
      title: 'Throttling and Debouncing',
      difficulty: 'Hard',
      description: 'Master rate limiting techniques',
      topics: ['Throttle', 'Debounce'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/throttle/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/throttle-debounce' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-worker-threads',
      title: 'Web Workers',
      difficulty: 'Hard',
      description: 'Learn multi-threading with Web Workers',
      topics: ['Web Workers', 'Concurrency'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/compact-object/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/web-workers' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-indexeddb',
      title: 'IndexedDB',
      difficulty: 'Hard',
      description: 'Master client-side database operations',
      topics: ['IndexedDB', 'Storage'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/design-underground-system/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/indexeddb' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-service-workers',
      title: 'Service Workers',
      difficulty: 'Hard',
      description: 'Learn PWA and offline functionality',
      topics: ['Service Workers', 'PWA'],
      estimatedTime: 45,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/design-a-stack-with-increment-operation/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/service-workers' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-websockets',
      title: 'WebSockets',
      difficulty: 'Hard',
      description: 'Master real-time bidirectional communication',
      topics: ['WebSockets', 'Real-time'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/design-hit-counter/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/websockets' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-testing',
      title: 'Unit Testing',
      difficulty: 'Medium',
      description: 'Learn testing frameworks and methodologies',
      topics: ['Testing', 'Jest'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/snail-traversal/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/unit-testing' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-performance',
      title: 'Performance Optimization',
      difficulty: 'Hard',
      description: 'Master JavaScript performance best practices',
      topics: ['Performance', 'Optimization'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/design-most-recently-used-queue/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/performance-optimization' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-design-patterns',
      title: 'Design Patterns',
      difficulty: 'Hard',
      description: 'Learn common JavaScript design patterns',
      topics: ['Design Patterns', 'Architecture'],
      estimatedTime: 45,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/design-parking-system/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/design-patterns' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'js-typescript-basics',
      title: 'TypeScript Basics',
      difficulty: 'Medium',
      description: 'Introduction to TypeScript type system',
      topics: ['TypeScript', 'Types'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'LeetCode', url: 'https://leetcode.com/problems/check-if-object-instance-of-class/' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/typescript-basics' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
  ]
};
