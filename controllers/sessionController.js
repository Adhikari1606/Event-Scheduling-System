const Session = require('../models/Session');
const Availability = require('../models/Availability');

// Schedule a session
const scheduleSession = async (req, res) => {
  const { users, date, startTime, endTime } = req.body;

  try {
    // Check if all users are available at the given time
    const availabilities = await Availability.find({
      user: { $in: users },
      day: { $in: [date.getDay()] }, // assuming date is a JavaScript Date object
      startTime: { $lte: startTime },
      endTime: { $gte: endTime },
    });

    if (availabilities.length < users.length) {
      return res.status(400).json({ message: 'Not all users are available at the specified time' });
    }

    // Create and save the session
    const session = new Session({ users, date, startTime, endTime });
    await session.save();

    // Send session details to users (pseudo-code, implement email/SMS notifications as needed)
    // sendNotifications(users, session);

    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get sessions
const getSessions = async (req, res) => {
  try {
    const sessions = await Session.find({ users: req.user._id });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { scheduleSession, getSessions };
