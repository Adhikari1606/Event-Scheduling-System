const Availability = require('../models/Availability');

// Add availability
const addAvailability = async (req, res) => {
  const { day, startTime, endTime, recurring } = req.body;

  try {
    const availability = new Availability({
      user: req.user._id,
      day,
      startTime,
      endTime,
      recurring,
    });
    await availability.save();
    res.status(201).json(availability);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get availability
const getAvailability = async (req, res) => {
  try {
    const availability = await Availability.find({ user: req.user._id });
    res.json(availability);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { addAvailability, getAvailability };
