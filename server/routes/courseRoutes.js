const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, courseController.addCourse);
router.put('/:id', authMiddleware, courseController.editCourse);
router.delete('/:id', authMiddleware, courseController.deleteCourse);
router.get('/', authMiddleware, courseController.getCourses);

module.exports = router;
