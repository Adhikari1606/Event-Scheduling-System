const mongoose = require('mongoose');
const SessionSchema = new mongoose.Schema({
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true }
});
module.exports = mongoose.model('Session', SessionSchema);
