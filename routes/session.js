const express = require('express');
const { scheduleSession, getSession } = require('../controllers/sessionController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, scheduleSession);
router.get('/', authMiddleware, getSession);

module.exports = router;