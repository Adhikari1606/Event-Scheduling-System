const express = require('express');
const { registerUser, loginUser, getUserProfile, updateAvailability, updateSchedule } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authMiddleware, getUserProfile);

router.put('/availability', authMiddleware, updateAvailability);
router.put('/schedule', authMiddleware, updateSchedule);

module.exports = router;