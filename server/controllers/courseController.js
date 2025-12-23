const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
  try {
    const { title, description, instructor } = req.body;

    const newCourse = await Course.create({ title, description, instructor });
    res.status(201).json({ message: 'Course created successfully', course: newCourse });
  } catch (err) {
    res.status(500).json({ message: 'Course creation failed', error: err.message });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({ courses });
  } catch (err) {
    res.status(500).json({ message: 'Fetching courses failed', error: err.message });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });

    res.status(200).json({ course });
  } catch (err) {
    res.status(500).json({ message: 'Fetching course failed', error: err.message });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const { title, description, instructor } = req.body;

    const course = await Course.findByIdAndUpdate(
      req.params.id,
      { title, description, instructor },
      { new: true }
    );

    if (!course) return res.status(404).json({ message: 'Course not found' });

    res.status(200).json({ message: 'Course updated successfully', course });
  } catch (err) {
    res.status(500).json({ message: 'Updating course failed', error: err.message });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });

    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Deleting course failed', error: err.message });
  }
};
