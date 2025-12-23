import { useContext } from 'react';
import { SemesterContext } from './SemesterContext';

export function useSemester() {
  const context = useContext(SemesterContext);

  if (!context) {
    throw new Error('useSemester must be used within a SemesterProvider');
  }

  return context;
}
