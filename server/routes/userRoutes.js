const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, userController.getUserProfile);
router.put('/', authMiddleware, userController.updateUserProfile);

module.exports = router;
