const Semester = require('../models/Semester');
const Course = require('../models/Course');

exports.createSemester = async (req, res) => {
  try {
    const { name, userId } = req.body;

    const newSemester = await Semester.create({ name, user: userId });
    res.status(201).json({ message: 'Semester created', semester: newSemester });
  } catch (err) {
    res.status(500).json({ message: 'Semester creation failed', error: err.message });
  }
};

exports.getSemestersByUser = async (req, res) => {
  try {
    const semesters = await Semester.find({ user: req.params.userId });
    res.status(200).json({ semesters });
  } catch (err) {
    res.status(500).json({ message: 'Fetching semesters failed', error: err.message });
  }
};

exports.calculateSemesterGPA = async (req, res) => {
  try {
    const { semesterId } = req.params;

    const courses = await Course.find({ semester: semesterId });
    if (!courses.length) return res.status(404).json({ message: 'No courses found for this semester' });

    let totalCredits = 0;
    let weightedGradePoints = 0;

    for (const course of courses) {
      totalCredits += course.credits;
      weightedGradePoints += course.grade * course.credits;
    }

    const gpa = weightedGradePoints / totalCredits;
    res.status(200).json({ gpa: gpa.toFixed(2) });
  } catch (err) {
    res.status(500).json({ message: 'GPA calculation failed', error: err.message });
  }
};
