const Session = require('../Server/models/Session');

// Schedule a session
const scheduleSession = async (req, res) => {
  const { userId, sessionDetails } = req.body;

  try {
    const session = new Session({ userId, sessionDetails });
    await session.save();
    res.status(201).json({ message: 'Session scheduled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get session
const getSession = async (req, res) => {
  try {
    const sessions = await Session.find({ userId: req.user._id });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { scheduleSession, getSession };