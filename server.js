const Availability = require('./models/Availability');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user');
const availabilityRoutes = require('./routes/availability');
const sessionRoutes = require('./routes/session');


dotenv.config();
connectDB();

const addAvailability = async () => {
    try {
      const newAvailability = new Availability({
        user: '60d0fe4f5311236168a109ca', // Replace with a valid ObjectId from your User collection
        day: 'Monday',
        startTime: '09:00',
        endTime: '17:00',
        recurring: true
      });
  
      const savedAvailability = await newAvailability.save();
      console.log('Availability added:', savedAvailability);
    } catch (error) {
      console.error('Error adding availability:', error);
    }
  };
  
  addAvailability(); 

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/availability', availabilityRoutes);
app.use('/api/sessions', sessionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
