import gradingSystem from '../utils/gradingSystem.js';

export function calculateGpa(courses) {
  let totalQualityPoints = 0;  
  let totalCredits = 0;        

  for (const course of courses) {
    const { grade, credits } = course;

    const points = gradingSystem[grade];

    if (points === undefined || credits <= 0) continue;

    totalQualityPoints += points * credits;
    totalCredits += credits;
  }

  if (totalCredits === 0) return 0;

  return totalQualityPoints / totalCredits;
}
