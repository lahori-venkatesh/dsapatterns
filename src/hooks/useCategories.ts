import { useMemo } from 'react';
import { useAppStore } from '../store';
import { Category, Level } from '../types';

export const useCategories = () => {
  const { categories, selectedLevel } = useAppStore();

  // Memoized filtered categories for better performance
  const filteredCategories = useMemo(() => {
    if (!selectedLevel || categories.length === 0) return [];
    
    return categories.filter(category => category.level === selectedLevel);
  }, [categories, selectedLevel]);

  // Memoized statistics for better performance
  const levelStats = useMemo(() => {
    const stats = {
      totalCategories: filteredCategories.length,
      totalProblems: 0,
      completedProblems: 0,
      completionPercentage: 0
    };

    filteredCategories.forEach(category => {
      stats.totalProblems += category.totalProblems;
      stats.completedProblems += category.completedProblems;
    });

    stats.completionPercentage = stats.totalProblems > 0 
      ? Math.round((stats.completedProblems / stats.totalProblems) * 100) 
      : 0;

    return stats;
  }, [filteredCategories]);

  // Memoized category groups for better organization
  const categoryGroups = useMemo(() => {
    const groups = {
      dataStructures: [] as Category[],
      algorithms: [] as Category[],
      advanced: [] as Category[]
    };

    filteredCategories.forEach(category => {
      if (['Arrays & Strings', 'Linked Lists', 'Stacks & Queues', 'Binary Trees', 'Hash Tables'].includes(category.name)) {
        groups.dataStructures.push(category);
      } else if (['Sorting & Searching', 'Recursion', 'Greedy Algorithms', 'Dynamic Programming'].includes(category.name)) {
        groups.algorithms.push(category);
      } else {
        groups.advanced.push(category);
      }
    });

    return groups;
  }, [filteredCategories]);

  return {
    filteredCategories,
    levelStats,
    categoryGroups,
    hasCategories: filteredCategories.length > 0
  };
};