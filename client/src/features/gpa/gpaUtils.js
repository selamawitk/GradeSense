const gradePointMap = {
  "A+": 4.0,
  "A": 4.0,
  "A-": 3.7,
  "B+": 3.3,
  "B": 3.0,
  "B-": 2.7,
  "C+": 2.3,
  "C": 2.0,
  "C-": 1.7,
  "D": 1.0,
  "F": 0.0,
};

export function convertGradeToPoints(grade) {
  if (!grade || typeof grade !== "string" || !(grade in gradePointMap)) {
    throw new Error(`Invalid grade: "${grade}"`);
  }
  return gradePointMap[grade];
}

export function calculateGPA(courses) {
  let totalPoints = 0;
  let totalCredits = 0;

  courses.forEach(({ grade, credits }, index) => {
    if (typeof credits !== "number" || credits <= 0) {
      throw new Error(`Invalid credits at course ${index + 1}: "${credits}"`);
    }

    const points = convertGradeToPoints(grade);
    totalPoints += points * credits;
    totalCredits += credits;
  });

  return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
}

export function calculateRequiredGPA(currentGPA, completedCredits, targetGPA, remainingCredits) {
  if (
    [currentGPA, completedCredits, targetGPA, remainingCredits].some(
      (val) => typeof val !== "number" || val < 0
    )
  ) {
    throw new Error("All GPA and credit values must be non-negative numbers.");
  }

  const totalCredits = completedCredits + remainingCredits;
  const requiredTotalPoints = targetGPA * totalCredits;
  const currentTotalPoints = currentGPA * completedCredits;
  const neededPoints = requiredTotalPoints - currentTotalPoints;

  const requiredGPA = neededPoints / remainingCredits;
  return requiredGPA > 4.0 ? "Impossible" : requiredGPA.toFixed(2);
}
