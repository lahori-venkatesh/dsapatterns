import { Category } from '../types';
import { 
  arraysStringsCategory,
  arraysStringsIntermediateCategory,
  arraysStringsProCategory,
  linkedListsCategory,
  linkedListsIntermediateCategory,
  linkedListsProCategory,
  stacksQueuesCategory,
  binaryTreesCategory,
  hashTablesCategory,
  heapsCategory,
  graphsCategory,
  dynamicProgrammingCategory,
  greedyAlgorithmsCategory,
  backtrackingCategory
} from './categories';

// Main categories array - now much cleaner and organized
export const mockCategories: Category[] = [
  // Beginner Level
  arraysStringsCategory,
  linkedListsCategory,
  // Intermediate Level
  arraysStringsIntermediateCategory,
  linkedListsIntermediateCategory,
  stacksQueuesCategory,
  binaryTreesCategory,
  hashTablesCategory,
  heapsCategory,
  greedyAlgorithmsCategory,
  // Pro Level
  arraysStringsProCategory,
  linkedListsProCategory,
  graphsCategory,
  dynamicProgrammingCategory,
  backtrackingCategory
];

// Helper function to get category by ID
export const getCategoryById = (id: string): Category | undefined => {
  return mockCategories.find(category => category.id === id);
};

// Helper function to get all problems from all categories
export const getAllProblems = () => {
  return mockCategories.flatMap(category => 
    category.patterns.flatMap(pattern => pattern.problems)
  );
};

// Helper function to get problems by difficulty
export const getProblemsByDifficulty = (difficulty: 'Easy' | 'Medium' | 'Hard') => {
  return getAllProblems().filter(problem => problem.difficulty === difficulty);
};

// Helper function to get problems by pattern
export const getProblemsByPattern = (patternId: string) => {
  return getAllProblems().filter(problem => problem.pattern === patternId);
};

// Statistics
export const getStatistics = () => {
  const allProblems = getAllProblems();
  return {
    totalCategories: mockCategories.length,
    totalProblems: allProblems.length,
    totalPatterns: mockCategories.reduce((sum, cat) => sum + cat.patterns.length, 0),
    difficultyBreakdown: {
      Easy: getProblemsByDifficulty('Easy').length,
      Medium: getProblemsByDifficulty('Medium').length,
      Hard: getProblemsByDifficulty('Hard').length
    }
  };
};