import { LanguageMastery } from '../../types';

export const pythonMastery: LanguageMastery = {
  id: 'python-mastery',
  language: 'Python',
  name: 'Python Programming',
  icon: 'Code2',
  description: 'Master Python fundamentals, Data Structures, OOP, and Advanced concepts',
  color: 'from-blue-500 to-cyan-600',
  totalProblems: 65,
  completedProblems: 0,
  problems: [
    {
      id: 'python-hello-world',
      title: 'Hello World and Basic I/O',
      difficulty: 'Easy',
      description: 'Learn basic Python syntax and print statements',
      topics: ['Basics', 'I/O'],
      estimatedTime: 10,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/py-hello-world' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/python-hello-world' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-data-types',
      title: 'Data Types and Variables',
      difficulty: 'Easy',
      description: 'Understand int, float, string, boolean types',
      topics: ['Data Types', 'Variables'],
      estimatedTime: 15,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/python-data-types' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/python-data-types' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-arithmetic-operators',
      title: 'Arithmetic Operators',
      difficulty: 'Easy',
      description: 'Work with +, -, *, /, //, %, ** operators',
      topics: ['Operators', 'Arithmetic'],
      estimatedTime: 15,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/python-arithmetic-operators' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/python-operators' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-division',
      title: 'Python Division',
      difficulty: 'Easy',
      description: 'Master integer and float division',
      topics: ['Division', 'Operators'],
      estimatedTime: 15,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/python-division' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/python-division' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-if-else',
      title: 'If-Else Statements',
      difficulty: 'Easy',
      description: 'Conditional logic with if, elif, else',
      topics: ['Conditionals', 'Control Flow'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/py-if-else' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/python-if-else' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-loops',
      title: 'Loops - For and While',
      difficulty: 'Easy',
      description: 'Iteration with for and while loops',
      topics: ['Loops', 'Iteration'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/python-loops' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/python-loops' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-strings',
      title: 'String Operations',
      difficulty: 'Easy',
      description: 'Master string slicing, formatting, and methods',
      topics: ['Strings', 'Methods'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/python-string-formatting' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/string-operations' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-string-split-join',
      title: 'String Split and Join',
      difficulty: 'Easy',
      description: 'Split strings into lists and join lists into strings',
      topics: ['Strings', 'Methods'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/python-string-split-and-join' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/string-split-join' }
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-mutations',
      title: 'String Mutations',
      difficulty: 'Easy',
      description: 'Modify strings using slicing and concatenation',
      topics: ['Strings', 'Slicing'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/python-mutations' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/string-mutations' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-find-substring',
      title: 'Find a Substring',
      difficulty: 'Easy',
      description: 'Search for substrings in strings',
      topics: ['Strings', 'Searching'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/find-a-string' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/find-substring' }
      ],
      companies: ['Google', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-lists',
      title: 'Lists and List Comprehension',
      difficulty: 'Easy',
      description: 'Work with lists, slicing, and list comprehensions',
      topics: ['Lists', 'Comprehension'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/list-comprehensions' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/python-lists' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-list-methods',
      title: 'List Methods',
      difficulty: 'Easy',
      description: 'Use append, insert, remove, pop, sort methods',
      topics: ['Lists', 'Methods'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/python-lists' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/list-methods' }
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-nested-lists',
      title: 'Nested Lists',
      difficulty: 'Medium',
      description: 'Work with 2D lists and nested structures',
      topics: ['Lists', 'Nested Structures'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/nested-list' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/nested-lists' }
      ],
      companies: ['Google', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-tuples',
      title: 'Tuples',
      difficulty: 'Easy',
      description: 'Learn immutable sequences with tuples',
      topics: ['Tuples', 'Immutability'],
      estimatedTime: 15,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/python-tuples' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/python-tuples' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-dictionaries',
      title: 'Dictionaries and Hash Tables',
      difficulty: 'Medium',
      description: 'Master key-value pairs with dictionaries',
      topics: ['Dictionaries', 'Hash Tables'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/py-collections-defaultdict' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/python-dictionaries' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-dict-methods',
      title: 'Dictionary Methods',
      difficulty: 'Medium',
      description: 'Use get, keys, values, items, update methods',
      topics: ['Dictionaries', 'Methods'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/py-dict-methods' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/dictionary-methods' }
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-sets',
      title: 'Sets and Set Operations',
      difficulty: 'Medium',
      description: 'Work with sets for unique elements',
      topics: ['Sets', 'Set Operations'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/py-set-operations' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/python-sets' }
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-set-methods',
      title: 'Set Methods',
      difficulty: 'Medium',
      description: 'Use add, update, union, intersection, difference',
      topics: ['Sets', 'Methods'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/py-set-add' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/set-methods' }
      ],
      companies: ['Google', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-functions',
      title: 'Functions and Lambda',
      difficulty: 'Easy',
      description: 'Define functions, lambda expressions, and arguments',
      topics: ['Functions', 'Lambda'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/python-functions' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/python-functions' }
      ],
      companies: ['Google', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-default-arguments',
      title: 'Default Arguments',
      difficulty: 'Easy',
      description: 'Use default and keyword arguments',
      topics: ['Functions', 'Arguments'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/default-arguments' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/default-arguments' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-args-kwargs',
      title: '*args and **kwargs',
      difficulty: 'Medium',
      description: 'Variable length arguments with *args and **kwargs',
      topics: ['Functions', 'Variable Arguments'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/python-args-kwargs' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/args-kwargs' }
      ],
      companies: ['Google', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-map-filter-reduce',
      title: 'Map, Filter, and Reduce',
      difficulty: 'Medium',
      description: 'Master functional programming tools',
      topics: ['Functional Programming', 'Map', 'Filter', 'Reduce'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/map-and-lambda-expression' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/map-filter-reduce' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-zip-function',
      title: 'Zip Function',
      difficulty: 'Easy',
      description: 'Combine iterables with zip',
      topics: ['Built-in Functions', 'Zip'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/python-zip' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/zip-function' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-itertools',
      title: 'Itertools Module',
      difficulty: 'Medium',
      description: 'Use itertools for efficient iteration',
      topics: ['Itertools', 'Iteration'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/itertools-combinations' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/itertools' }
      ],
      companies: ['Google', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-itertools-product',
      title: 'Itertools Product',
      difficulty: 'Medium',
      description: 'Cartesian product with itertools.product',
      topics: ['Itertools', 'Product'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/itertools-product' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/itertools-product' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-collections',
      title: 'Collections Module',
      difficulty: 'Medium',
      description: 'Learn Counter, defaultdict, OrderedDict, deque',
      topics: ['Collections', 'Data Structures'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/collections-counter' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/collections-module' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-counter',
      title: 'Counter Class',
      difficulty: 'Medium',
      description: 'Count elements with Counter',
      topics: ['Collections', 'Counter'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/counter-class' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/counter-class' }
      ],
      companies: ['Amazon', 'Google'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-defaultdict',
      title: 'DefaultDict',
      difficulty: 'Medium',
      description: 'Use defaultdict for default values',
      topics: ['Collections', 'DefaultDict'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/defaultdict-tutorial' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/defaultdict' }
      ],
      companies: ['Google', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-namedtuple',
      title: 'NamedTuple',
      difficulty: 'Medium',
      description: 'Create structured tuples with namedtuple',
      topics: ['Collections', 'NamedTuple'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/py-collections-namedtuple' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/namedtuple' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-classes-objects',
      title: 'Classes and Objects',
      difficulty: 'Medium',
      description: 'Master OOP basics with classes and objects',
      topics: ['OOP', 'Classes', 'Objects'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/python-classes-objects' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/python-classes' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-inheritance',
      title: 'Inheritance and Polymorphism',
      difficulty: 'Medium',
      description: 'Learn inheritance and method overriding',
      topics: ['OOP', 'Inheritance', 'Polymorphism'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/python-inheritance' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/python-inheritance' }
      ],
      companies: ['Google', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-method-overriding',
      title: 'Method Overriding',
      difficulty: 'Medium',
      description: 'Override parent class methods',
      topics: ['OOP', 'Method Overriding'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/method-overriding' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/method-overriding-python' }
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-decorators',
      title: 'Decorators',
      difficulty: 'Hard',
      description: 'Master function decorators and wrappers',
      topics: ['Decorators', 'Higher-Order Functions'],
      estimatedTime: 45,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/decorators-2-name-directory' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/decorators' }
      ],
      companies: ['Google', 'Meta', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-closures',
      title: 'Closures',
      difficulty: 'Medium',
      description: 'Understand closures and nested functions',
      topics: ['Closures', 'Functions'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/python-closures' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/closures' }
      ],
      companies: ['Google', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-generators',
      title: 'Generators and Yield',
      difficulty: 'Hard',
      description: 'Create memory-efficient iterators with generators',
      topics: ['Generators', 'Yield', 'Memory Efficiency'],
      estimatedTime: 45,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/python-generators' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/generators' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-exception-handling',
      title: 'Exception Handling',
      difficulty: 'Medium',
      description: 'Handle errors with try-except blocks',
      topics: ['Exceptions', 'Error Handling'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/exceptions' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/exception-handling' }
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-raise-exception',
      title: 'Raising Exceptions',
      difficulty: 'Medium',
      description: 'Raise custom exceptions',
      topics: ['Exceptions', 'Raise'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/raise-exception' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/raise-exception' }
      ],
      companies: ['Amazon', 'Google'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-file-io',
      title: 'File I/O Operations',
      difficulty: 'Medium',
      description: 'Read and write files in Python',
      topics: ['File I/O', 'Context Managers'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/python-file-io' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/file-handling-python' }
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-with-statement',
      title: 'With Statement',
      difficulty: 'Medium',
      description: 'Use context managers with with statement',
      topics: ['Context Managers', 'With'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/with-statement' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/with-statement' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-regex',
      title: 'Regular Expressions',
      difficulty: 'Medium',
      description: 'Pattern matching with re module',
      topics: ['Regex', 'Pattern Matching'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/introduction-to-regex' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/regex-python' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-regex-findall',
      title: 'Regex Findall',
      difficulty: 'Medium',
      description: 'Find all matches with re.findall',
      topics: ['Regex', 'Findall'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/re-findall-re-finditer' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/regex-findall' }
      ],
      companies: ['Google', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-list-sorting',
      title: 'Advanced Sorting',
      difficulty: 'Medium',
      description: 'Custom sorting with key functions and sorted()',
      topics: ['Sorting', 'Key Functions'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/python-sort-sort' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/sorting-python' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-any-all',
      title: 'Any and All Functions',
      difficulty: 'Easy',
      description: 'Use any() and all() for boolean checks',
      topics: ['Built-in Functions', 'Any', 'All'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/any-or-all' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/any-all' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-datetime',
      title: 'DateTime Operations',
      difficulty: 'Medium',
      description: 'Work with dates and times',
      topics: ['DateTime', 'Time'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/python-time-delta' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/datetime-python' }
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-calendar',
      title: 'Calendar Module',
      difficulty: 'Easy',
      description: 'Work with calendar operations',
      topics: ['Calendar', 'Date'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/calendar-module' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/calendar-module' }
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-magic-methods',
      title: 'Magic Methods (Dunder Methods)',
      difficulty: 'Hard',
      description: 'Implement __str__, __repr__, __len__, __getitem__',
      topics: ['Magic Methods', 'OOP'],
      estimatedTime: 50,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/magic-methods' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/magic-methods' }
      ],
      companies: ['Google', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-operator-overloading',
      title: 'Operator Overloading',
      difficulty: 'Hard',
      description: 'Overload operators for custom classes',
      topics: ['Operator Overloading', 'OOP'],
      estimatedTime: 45,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/operator-overloading' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/operator-overloading-python' }
      ],
      companies: ['Google', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-property-decorator',
      title: 'Property Decorator',
      difficulty: 'Medium',
      description: 'Use @property for getters and setters',
      topics: ['Property', 'Decorators'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/property-decorator' },
        { platform: 'GeeksforGeeks', url: 'https://practice.geeksforgeeks.org/problems/property-decorator' }
      ],
      companies: ['Google', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-list-comprehension-advanced',
      title: 'Advanced List Comprehension',
      difficulty: 'Medium',
      description: 'Nested list comprehensions and conditional logic',
      topics: ['List Comprehension', 'Advanced'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/python' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/python-list-comprehension/' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-context-managers',
      title: 'Custom Context Managers',
      difficulty: 'Hard',
      description: 'Create context managers using __enter__ and __exit__',
      topics: ['Context Managers', 'Magic Methods'],
      estimatedTime: 45,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/python' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/context-manager-in-python/' }
      ],
      companies: ['Google', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-metaclasses',
      title: 'Metaclasses',
      difficulty: 'Hard',
      description: 'Understand and create metaclasses',
      topics: ['Metaclasses', 'Advanced OOP'],
      estimatedTime: 50,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/python' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/metaprogramming-metaclasses-python/' }
      ],
      companies: ['Google', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-threading',
      title: 'Threading and Multiprocessing',
      difficulty: 'Hard',
      description: 'Concurrent execution with threads and processes',
      topics: ['Threading', 'Concurrency'],
      estimatedTime: 50,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/python' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/multithreading-python-set-1/' }
      ],
      companies: ['Google', 'Amazon', 'Microsoft', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-asyncio',
      title: 'Async/Await and Asyncio',
      difficulty: 'Hard',
      description: 'Asynchronous programming with asyncio',
      topics: ['Async', 'Asyncio', 'Concurrency'],
      estimatedTime: 50,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/python' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/asyncio-in-python/' }
      ],
      companies: ['Google', 'Meta', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-memory-management',
      title: 'Memory Management and Garbage Collection',
      difficulty: 'Hard',
      description: 'Understanding reference counting and GC',
      topics: ['Memory Management', 'Garbage Collection'],
      estimatedTime: 45,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/python' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/memory-management-in-python/' }
      ],
      companies: ['Google', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-gzip-json',
      title: 'Working with JSON and File Compression',
      difficulty: 'Medium',
      description: 'Parse JSON and use gzip for file compression',
      topics: ['JSON', 'File Handling', 'Compression'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/python' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/json-with-python/' }
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-pickle',
      title: 'Object Serialization with Pickle',
      difficulty: 'Medium',
      description: 'Serialize and deserialize Python objects',
      topics: ['Pickle', 'Serialization'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/python' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/understanding-python-pickling-example/' }
      ],
      companies: ['Amazon', 'Google'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-unittest',
      title: 'Unit Testing with unittest',
      difficulty: 'Medium',
      description: 'Write unit tests using unittest framework',
      topics: ['Testing', 'Unittest'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/python' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/unit-testing-python-unittest/' }
      ],
      companies: ['Google', 'Microsoft', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-pytest',
      title: 'Testing with Pytest',
      difficulty: 'Medium',
      description: 'Advanced testing with pytest framework',
      topics: ['Testing', 'Pytest'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/python' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/testing-in-python-using-pytest/' }
      ],
      companies: ['Google', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-logging',
      title: 'Logging Module',
      difficulty: 'Medium',
      description: 'Application logging with logging module',
      topics: ['Logging', 'Debugging'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/python' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/logging-in-python/' }
      ],
      companies: ['Amazon', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-dataclasses',
      title: 'Dataclasses',
      difficulty: 'Medium',
      description: 'Modern data containers using dataclasses',
      topics: ['Dataclasses', 'OOP'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/python' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/data-classes-in-python/' }
      ],
      companies: ['Google', 'Meta'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-type-hints',
      title: 'Type Hints and Annotations',
      difficulty: 'Medium',
      description: 'Static type checking with type hints',
      topics: ['Type Hints', 'Type Checking'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/python' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/type-hints-in-python/' }
      ],
      companies: ['Google', 'Meta', 'Microsoft'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-enum',
      title: 'Enumerations',
      difficulty: 'Easy',
      description: 'Create enumerations using Enum class',
      topics: ['Enum', 'Data Types'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/python' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/enum-in-python/' }
      ],
      companies: ['Amazon', 'Google'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'python-pathlib',
      title: 'Path Handling with Pathlib',
      difficulty: 'Medium',
      description: 'Modern file path operations using pathlib',
      topics: ['Pathlib', 'File Handling'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/domains/python' },
        { platform: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/pathlib-module-in-python/' }
      ],
      companies: ['Microsoft', 'Amazon'],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    }
  ],
  interviewQuestions: [
    {
      id: 'py-int-1',
      question: 'What is the difference between list and tuple in Python?',
      answer: `List:
- Mutable (can be modified)
- Syntax: [1, 2, 3]
- Slower than tuples
- More memory
- Methods: append(), remove(), etc.

Tuple:
- Immutable (cannot be modified)
- Syntax: (1, 2, 3)
- Faster than lists
- Less memory
- Limited methods

Use lists for changeable data, tuples for fixed data.`,
      difficulty: 'Easy',
      category: 'Data Structures',
      topics: ['List', 'Tuple']
    },
    {
      id: 'py-int-2',
      question: 'Explain Python decorators',
      answer: `Decorators modify or enhance functions without changing their code.

Syntax:
@decorator
def function():
    pass

Example:
def logger(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@logger
def greet(name):
    print(f"Hello {name}")

Common uses: logging, timing, authentication, caching`,
      difficulty: 'Medium',
      category: 'Functions',
      topics: ['Decorators', 'Functions']
    },
    {
      id: 'py-int-3',
      question: 'What is the Global Interpreter Lock (GIL)?',
      answer: `GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecode simultaneously.

Impact:
- Limits multi-threading for CPU-bound tasks
- Single thread executes at a time
- I/O-bound tasks still benefit from threading

Workarounds:
- multiprocessing module (separate processes)
- asyncio for I/O operations
- C extensions (release GIL)
- Alternative implementations (Jython, IronPython)`,
      difficulty: 'Hard',
      category: 'Concurrency',
      topics: ['GIL', 'Threading']
    },
    {
      id: 'py-int-4',
      question: 'Explain list comprehension vs generator expression',
      answer: `List Comprehension:
- Creates entire list in memory
- Syntax: [x*2 for x in range(10)]
- Faster for small data
- Returns list

Generator Expression:
- Creates iterator, lazy evaluation
- Syntax: (x*2 for x in range(10))
- Memory efficient for large data
- Returns generator object

Use generators for large datasets to save memory.`,
      difficulty: 'Medium',
      category: 'Iterables',
      topics: ['List Comprehension', 'Generators']
    },
    {
      id: 'py-int-5',
      question: 'What are *args and **kwargs?',
      answer: `*args: Variable number of positional arguments
**kwargs: Variable number of keyword arguments

Example:
def function(*args, **kwargs):
    print(args)    # tuple
    print(kwargs)  # dict

function(1, 2, 3, name='John', age=30)
# args: (1, 2, 3)
# kwargs: {'name': 'John', 'age': 30}

Order: regular args, *args, **kwargs`,
      difficulty: 'Easy',
      category: 'Functions',
      topics: ['Args', 'Kwargs']
    },
    {
      id: 'py-int-6',
      question: 'Explain shallow copy vs deep copy',
      answer: `Shallow Copy:
- Copies object, but not nested objects
- copy.copy() or list.copy()
- Changes to nested objects affect original

Deep Copy:
- Copies object and all nested objects
- copy.deepcopy()
- Independent from original

Example:
import copy
original = [[1, 2], [3, 4]]
shallow = copy.copy(original)
deep = copy.deepcopy(original)

shallow[0][0] = 99  # affects original
deep[0][0] = 99     # doesn't affect original`,
      difficulty: 'Medium',
      category: 'Memory',
      topics: ['Copy', 'Memory']
    },
    {
      id: 'py-int-7',
      question: 'What is the difference between __str__ and __repr__?',
      answer: `__str__:
- Human-readable string representation
- Called by str() and print()
- For end users

__repr__:
- Unambiguous string representation
- Called by repr()
- For developers/debugging
- Should ideally recreate object

Example:
class Point:
    def __str__(self):
        return f"Point at ({self.x}, {self.y})"

    def __repr__(self):
        return f"Point(x={self.x}, y={self.y})"

If __str__ not defined, Python uses __repr__`,
      difficulty: 'Medium',
      category: 'OOP',
      topics: ['Magic Methods', 'OOP']
    },
    {
      id: 'py-int-8',
      question: 'Explain Python memory management',
      answer: `Python uses automatic memory management:

1. Reference Counting:
   - Tracks number of references to object
   - Deallocates when count reaches zero

2. Garbage Collection:
   - Handles circular references
   - Generational GC (0, 1, 2)
   - Can be controlled with gc module

3. Memory Pools:
   - Small objects use pymalloc
   - Reduces fragmentation

Considerations:
- del removes reference, not object
- __del__ method for cleanup
- gc.collect() forces collection`,
      difficulty: 'Hard',
      category: 'Memory',
      topics: ['Memory Management', 'Garbage Collection']
    },
    {
      id: 'py-int-9',
      question: 'What are Python context managers?',
      answer: `Context managers handle resource setup and cleanup automatically using 'with' statement.

Usage:
with open('file.txt') as f:
    data = f.read()
# File automatically closed

Custom context manager:
class Manager:
    def __enter__(self):
        # Setup code
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        # Cleanup code
        return False

Or use @contextmanager decorator:
from contextlib import contextmanager

@contextmanager
def manager():
    # setup
    yield value
    # cleanup

Benefits: Exception-safe resource management`,
      difficulty: 'Medium',
      category: 'Context Managers',
      topics: ['Context Manager', 'With Statement']
    },
    {
      id: 'py-int-10',
      question: 'Explain the difference between staticmethod, classmethod, and instance method',
      answer: `Instance Method:
- Takes self as first parameter
- Access instance and class attributes
- Most common type

Class Method:
- @classmethod decorator
- Takes cls as first parameter
- Access only class attributes
- Alternative constructors

Static Method:
- @staticmethod decorator
- No self or cls parameter
- Utility functions in class namespace
- Cannot modify class or instance state

Example:
class MyClass:
    def instance_method(self):
        pass

    @classmethod
    def class_method(cls):
        pass

    @staticmethod
    def static_method():
        pass`,
      difficulty: 'Medium',
      category: 'OOP',
      topics: ['Methods', 'Decorators']
    }
  ]
};