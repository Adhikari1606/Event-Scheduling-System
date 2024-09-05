const mongoose = require('mongoose');
const AvailabilitySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  day: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  recurring: { type: Boolean, default: false }
});
module.exports = mongoose.model('Availability', AvailabilitySchema);
