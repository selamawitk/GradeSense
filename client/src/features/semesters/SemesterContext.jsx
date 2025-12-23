import React, { createContext, useState } from 'react';

const SemesterContext = createContext();

export const SemesterProvider = ({ children }) => {
  const [semesters, setSemesters] = useState([]);
  const [currentSemester, setCurrentSemester] = useState(null);

  const addSemester = (newSemester) => {
    if (!newSemester.name || semesters.find(s => s.name === newSemester.name)) {
      alert('Semester must have a unique name');
      return;
    }
    setSemesters(prev => [...prev, newSemester]);
  };

  const removeSemester = (id) => {
    setSemesters(prev => prev.filter(s => s.id !== id));
    if (currentSemester?.id === id) {
      setCurrentSemester(null);
    }
  };

  const selectSemester = (id) => {
    const found = semesters.find(s => s.id === id);
    if (found) {
      setCurrentSemester(found);
    }
  };

  return (
    <SemesterContext.Provider
      value={{
        semesters,
        currentSemester,
        addSemester,
        removeSemester,
        selectSemester,
      }}
    >
      {children}
    </SemesterContext.Provider>
  );
};


