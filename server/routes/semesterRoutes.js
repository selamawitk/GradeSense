const express = require('express');
const router = express.Router();
const semesterController = require('../controllers/semesterController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, semesterController.createSemester);
router.get('/', authMiddleware, semesterController.getSemesters);
router.get('/:id', authMiddleware, semesterController.getSemesterById);
router.put('/:id', authMiddleware, semesterController.updateSemester);
router.delete('/:id', authMiddleware, semesterController.deleteSemester);

module.exports = router;
