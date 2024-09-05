const express = require('express');
const { scheduleSession, getSessions } = require('../controllers/sessionController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, admin, scheduleSession); 
router.get('/', protect, getSessions);

module.exports = router;
