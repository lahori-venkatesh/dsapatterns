import { Category, Problem, Pattern } from '../types';

// Optimized search function with debouncing
export const searchProblems = (
  categories: Category[],
  query: string,
  limit: number = 50
): Array<{
  type: 'problem' | 'pattern' | 'category';
  item: Problem | Pattern | Category;
  category?: string;
  pattern?: string;
}> => {
  if (!query.trim()) return [];
  
  const results: Array<{
    type: 'problem' | 'pattern' | 'category';
    item: any;
    category?: string;
    pattern?: string;
  }> = [];
  
  const lowerQuery = query.toLowerCase();
  
  for (const category of categories) {
    // Search category names
    if (category.name.toLowerCase().includes(lowerQuery)) {
      results.push({
        type: 'category',
        item: category
      });
    }
    
    for (const pattern of category.patterns) {
      // Search pattern names
      if (pattern.name.toLowerCase().includes(lowerQuery)) {
        results.push({
          type: 'pattern',
          item: pattern,
          category: category.name
        });
      }
      
      // Search problems
      for (const problem of pattern.problems) {
        if (
          problem.title.toLowerCase().includes(lowerQuery) ||
          problem.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
        ) {
          results.push({
            type: 'problem',
            item: problem,
            category: category.name,
            pattern: pattern.name
          });
        }
        
        // Limit results for performance
        if (results.length >= limit) {
          return results;
        }
      }
    }
  }
  
  return results;
};

// Optimized progress calculation
export const calculateProgress = (categories: Category[]) => {
  let totalProblems = 0;
  let completedProblems = 0;
  
  for (const category of categories) {
    for (const pattern of category.patterns) {
      for (const problem of pattern.problems) {
        totalProblems++;
        if (problem.userStatus.completed) {
          completedProblems++;
        }
      }
    }
  }
  
  return {
    totalProblems,
    completedProblems,
    percentage: totalProblems > 0 ? Math.round((completedProblems / totalProblems) * 100) : 0
  };
};

// Debounce function for search optimization
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Virtual scrolling helper for large lists
export const getVisibleItems = <T>(
  items: T[],
  startIndex: number,
  endIndex: number
): T[] => {
  return items.slice(startIndex, Math.min(endIndex, items.length));
};