const express = require('express');
const { addAvailability, getAvailability } = require('../controllers/availabilityController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, addAvailability);
router.get('/', protect, getAvailability);

module.exports = router;
