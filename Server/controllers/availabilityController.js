const Availability = require('../Server/models/Availability');

// Add availability
const addAvailability = async (req, res) => {
  const { userId, availableTimes } = req.body;

  try {
    const availability = new Availability({ userId, availableTimes });
    await availability.save();
    res.status(201).json({ message: 'Availability added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get availability
const getAvailability = async (req, res) => {
  try {
    const availability = await Availability.find({ userId: req.user._id });
    res.json(availability);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { addAvailability, getAvailability };