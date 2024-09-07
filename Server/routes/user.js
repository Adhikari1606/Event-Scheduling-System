const express = require('express');
const { registerUser, loginUser, updateAvailability, updateSchedule } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);


router.put('/availability', authMiddleware, updateAvailability);
router.put('/schedule', authMiddleware, updateSchedule);

module.exports = router;