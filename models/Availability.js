const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  availableTimes: {
    type: [String], 
    required: true,
  },
});

const Availability = mongoose.model('Availability', availabilitySchema);

module.exports = Availability;