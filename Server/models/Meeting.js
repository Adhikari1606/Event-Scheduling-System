const mongoose = require('mongoose');

const MeetingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Meeting', MeetingSchema);