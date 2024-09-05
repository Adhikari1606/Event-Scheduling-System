const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
  availability: { type: Boolean, default: false },
  schedule: { type: [String], default: [] } // Array of strings representing scheduled times
});

const User = mongoose.model('User', userSchema);

module.exports = User;