import { LanguageMastery } from '../../types';

export const sqlMastery: LanguageMastery = {
  id: 'sql-mastery',
  language: 'SQL',
  name: 'SQL Database Queries',
  icon: 'Database',
  description: 'Master SQL queries, joins, aggregations, and advanced database operations',
  color: 'from-blue-500 to-cyan-600',
  totalProblems: 40,
  completedProblems: 0,
  problems: [
    {
      id: 'sql-select-all',
      title: 'Revising the Select Query I',
      difficulty: 'Easy',
      description: 'Basic SELECT query to retrieve all columns from a table with WHERE clause',
      topics: ['SELECT', 'WHERE'],
      estimatedTime: 10,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/revising-the-select-query' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-select-all-2',
      title: 'Revising the Select Query II',
      difficulty: 'Easy',
      description: 'SELECT query with multiple conditions using WHERE clause',
      topics: ['SELECT', 'WHERE', 'AND'],
      estimatedTime: 10,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/revising-the-select-query-2' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-select-by-id',
      title: 'Select By ID',
      difficulty: 'Easy',
      description: 'Query a table by ID field',
      topics: ['SELECT', 'WHERE'],
      estimatedTime: 10,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/select-by-id' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-japanese-cities',
      title: 'Japanese Cities Attributes',
      difficulty: 'Easy',
      description: 'Query all attributes of cities in Japan',
      topics: ['SELECT', 'WHERE'],
      estimatedTime: 10,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/japanese-cities-attributes' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-weather-observation-1',
      title: 'Weather Observation Station 1',
      difficulty: 'Easy',
      description: 'Query city and state from weather station table',
      topics: ['SELECT'],
      estimatedTime: 10,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/weather-observation-station-1' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-distinct-cities',
      title: 'Weather Observation Station 3',
      difficulty: 'Easy',
      description: 'Query distinct cities with even IDs',
      topics: ['SELECT', 'DISTINCT', 'MOD'],
      estimatedTime: 15,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/weather-observation-station-3' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-count-function',
      title: 'Revising Aggregations - Count',
      difficulty: 'Easy',
      description: 'Use COUNT function to count records with conditions',
      topics: ['COUNT', 'WHERE'],
      estimatedTime: 15,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/revising-aggregations-the-count-function' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-sum-function',
      title: 'Revising Aggregations - Sum',
      difficulty: 'Easy',
      description: 'Use SUM function to calculate total',
      topics: ['SUM', 'WHERE'],
      estimatedTime: 15,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/revising-aggregations-sum' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-avg-function',
      title: 'Revising Aggregations - Average',
      difficulty: 'Easy',
      description: 'Use AVG function to find average values',
      topics: ['AVG', 'WHERE'],
      estimatedTime: 15,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/revising-aggregations-the-average-function' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-order-by',
      title: 'Japanese Cities Names',
      difficulty: 'Easy',
      description: 'Query and sort city names',
      topics: ['SELECT', 'ORDER BY'],
      estimatedTime: 15,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/japanese-cities-name' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-higher-than-75',
      title: 'Higher Than 75 Marks',
      difficulty: 'Easy',
      description: 'Query names of students scoring above 75, ordered by name',
      topics: ['SELECT', 'WHERE', 'ORDER BY', 'SUBSTRING'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/more-than-75-marks' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-employee-names',
      title: 'Employee Names',
      difficulty: 'Easy',
      description: 'Query employee names in alphabetical order',
      topics: ['SELECT', 'ORDER BY'],
      estimatedTime: 15,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/name-of-employees' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-employee-salaries',
      title: 'Employee Salaries',
      difficulty: 'Easy',
      description: 'Query names of employees earning more than $2000 per month',
      topics: ['SELECT', 'WHERE', 'ORDER BY'],
      estimatedTime: 15,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/salary-of-employees' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-type-of-triangle',
      title: 'Type of Triangle',
      difficulty: 'Easy',
      description: 'Classify triangles based on side lengths using CASE',
      topics: ['CASE', 'WHERE'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/what-type-of-triangle' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-average-population',
      title: 'Average Population',
      difficulty: 'Easy',
      description: 'Calculate average population of cities, rounded down',
      topics: ['AVG', 'FLOOR'],
      estimatedTime: 15,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/average-population' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-population-density',
      title: 'Population Density Difference',
      difficulty: 'Easy',
      description: 'Find difference between max and min city population',
      topics: ['MAX', 'MIN'],
      estimatedTime: 15,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/population-density-difference' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-top-earners',
      title: 'Top Earners',
      difficulty: 'Medium',
      description: 'Find maximum total earnings and count of employees with that earning',
      topics: ['MAX', 'COUNT', 'GROUP BY'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/earnings-of-employees' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-african-cities',
      title: 'African Cities',
      difficulty: 'Easy',
      description: 'Query cities in Africa using JOIN',
      topics: ['JOIN', 'WHERE'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/african-cities' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-asian-population',
      title: 'Asian Population',
      difficulty: 'Easy',
      description: 'Calculate total population of Asian countries using JOIN',
      topics: ['JOIN', 'SUM', 'WHERE'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/asian-population' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-average-population-continent',
      title: 'Average Population of Each Continent',
      difficulty: 'Easy',
      description: 'Calculate average city population per continent using JOIN',
      topics: ['JOIN', 'AVG', 'GROUP BY'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/average-population-of-each-continent' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-contest-leaderboard',
      title: 'Contest Leaderboard',
      difficulty: 'Medium',
      description: 'Calculate total scores using multiple JOINs and aggregations',
      topics: ['JOIN', 'SUM', 'GROUP BY', 'HAVING'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/contest-leaderboard' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-challenges',
      title: 'Challenges',
      difficulty: 'Medium',
      description: 'Complex query with multiple JOINs and HAVING clause',
      topics: ['JOIN', 'GROUP BY', 'HAVING', 'Subqueries'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/challenges' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-binary-tree-nodes',
      title: 'Binary Tree Nodes',
      difficulty: 'Medium',
      description: 'Classify binary tree nodes using CASE and self-JOIN',
      topics: ['CASE', 'Self-JOIN', 'DISTINCT'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/binary-search-tree-1' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-new-companies',
      title: 'New Companies',
      difficulty: 'Medium',
      description: 'Complex multi-table JOIN with counting',
      topics: ['Multiple JOINs', 'DISTINCT', 'COUNT'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/the-company' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-weather-observation-18',
      title: 'Weather Observation Station 18',
      difficulty: 'Medium',
      description: 'Calculate Manhattan distance using aggregation functions',
      topics: ['ABS', 'MAX', 'MIN', 'ROUND'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/weather-observation-station-18' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-weather-observation-19',
      title: 'Weather Observation Station 19',
      difficulty: 'Medium',
      description: 'Calculate Euclidean distance with SQRT and POWER',
      topics: ['SQRT', 'POWER', 'MAX', 'MIN', 'ROUND'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/weather-observation-station-19' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-the-report',
      title: 'The Report',
      difficulty: 'Medium',
      description: 'Generate student report with grades using JOIN and CASE',
      topics: ['JOIN', 'CASE', 'BETWEEN', 'ORDER BY'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/the-report' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-full-score',
      title: 'Top Competitors',
      difficulty: 'Medium',
      description: 'Find top competitors with multiple JOINs and HAVING',
      topics: ['Multiple JOINs', 'GROUP BY', 'HAVING', 'COUNT'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/full-score' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-ollivanders-inventory',
      title: 'Ollivander\'s Inventory',
      difficulty: 'Medium',
      description: 'Complex query with multiple JOINs and subqueries',
      topics: ['Subqueries', 'JOIN', 'MIN', 'GROUP BY'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/harry-potter-and-wands' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-placements',
      title: 'Placements',
      difficulty: 'Medium',
      description: 'Self-JOIN to compare friend salaries',
      topics: ['Self-JOIN', 'WHERE', 'ORDER BY'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/placements' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-symmetric-pairs',
      title: 'Symmetric Pairs',
      difficulty: 'Medium',
      description: 'Find symmetric pairs using self-JOIN',
      topics: ['Self-JOIN', 'WHERE', 'DISTINCT'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/symmetric-pairs' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-interviews',
      title: 'Interviews',
      difficulty: 'Hard',
      description: 'Very complex query with multiple LEFT JOINs and aggregations',
      topics: ['Multiple LEFT JOINs', 'SUM', 'GROUP BY', 'HAVING'],
      estimatedTime: 45,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/interviews' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-15-days',
      title: '15 Days of Learning SQL',
      difficulty: 'Hard',
      description: 'Advanced query with window functions and subqueries',
      topics: ['Window Functions', 'Subqueries', 'GROUP BY'],
      estimatedTime: 50,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/15-days-of-learning-sql' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-draw-triangle',
      title: 'Draw The Triangle 1',
      difficulty: 'Easy',
      description: 'Use loops/recursion to print patterns',
      topics: ['Variables', 'Loops', 'PRINT'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/draw-the-triangle-1' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-draw-triangle-2',
      title: 'Draw The Triangle 2',
      difficulty: 'Easy',
      description: 'Use loops/recursion to print reverse patterns',
      topics: ['Variables', 'Loops', 'PRINT'],
      estimatedTime: 20,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/draw-the-triangle-2' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-prime-numbers',
      title: 'Print Prime Numbers',
      difficulty: 'Medium',
      description: 'Generate prime numbers using SQL',
      topics: ['Variables', 'Loops', 'Math'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/print-prime-numbers' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-sql-project-planning',
      title: 'SQL Project Planning',
      difficulty: 'Medium',
      description: 'Find project start and end dates using advanced techniques',
      topics: ['Variables', 'Subqueries', 'Date Functions'],
      estimatedTime: 40,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/sql-projects' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-occupations',
      title: 'Occupations',
      difficulty: 'Medium',
      description: 'Pivot table using CASE statements and row numbers',
      topics: ['CASE', 'ROW_NUMBER', 'Pivot'],
      estimatedTime: 35,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/occupations' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-the-pads',
      title: 'The PADS',
      difficulty: 'Medium',
      description: 'String manipulation with CONCAT and parentheses',
      topics: ['CONCAT', 'ORDER BY', 'COUNT', 'GROUP BY'],
      estimatedTime: 25,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/the-pads' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    },
    {
      id: 'sql-median',
      title: 'Weather Observation Station 20',
      difficulty: 'Medium',
      description: 'Calculate median using window functions or variables',
      topics: ['Median', 'Window Functions', 'Variables'],
      estimatedTime: 30,
      platformLinks: [
        { platform: 'HackerRank', url: 'https://www.hackerrank.com/challenges/weather-observation-station-20' },
      ],
      userStatus: { completed: false, attempted: false, lastAttempted: null, timeSpent: 0 }
    }
  ]
};