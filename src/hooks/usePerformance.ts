import { useCallback, useMemo } from 'react';
import { useAppStore } from '../store';

export const usePerformance = () => {
  const store = useAppStore();

  // Memoized problem toggle for better performance
  const toggleProblemComplete = useCallback((problemId: string) => {
    store.toggleProblemComplete(problemId);
  }, [store]);

  // Memoized category toggle for better performance
  const toggleCategory = useCallback((categoryId: string) => {
    store.toggleCategory(categoryId);
  }, [store]);

  // Memoized pattern selection for better performance
  const setSelectedPattern = useCallback((patternId: string | null) => {
    store.setSelectedPattern(patternId);
  }, [store]);

  // Memoized search functionality
  const handleSearch = useCallback((query: string) => {
    store.setSearchQuery(query);
  }, [store]);

  // Memoized note operations
  const noteOperations = useMemo(() => ({
    create: store.createNote,
    update: store.updateNote,
    delete: store.deleteNote,
    getForProblem: store.getNotesForProblem
  }), [store.createNote, store.updateNote, store.deleteNote, store.getNotesForProblem]);

  return {
    toggleProblemComplete,
    toggleCategory,
    setSelectedPattern,
    handleSearch,
    noteOperations
  };
};