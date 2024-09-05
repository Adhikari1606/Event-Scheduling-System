const express = require('express');
const { addAvailability, getAvailability } = require('../controllers/availabilityController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, addAvailability);
router.get('/', authMiddleware, getAvailability);

module.exports = router;