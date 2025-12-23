const calculateGpa = (courses) => {
  let totalPoints = 0;
  let totalCredits = 0;

  courses.forEach(course => {
    totalPoints += course.gradePoint * course.credits;
    totalCredits += course.credits;
  });

  return totalCredits === 0 ? 0 : totalPoints / totalCredits;
};

module.exports = calculateGpa;
