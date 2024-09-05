const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const userRoutes = require('../routes/user');
const availabilityRoutes = require('../routes/availability');
const sessionRoutes = require('../routes/session');

dotenv.config();
connectDB();

const app = express(); 
app.use(express.json());
app.use(cors()); 

app.use('/api/users', userRoutes);
app.use('/api/availability', availabilityRoutes);
app.use('/api/sessions', sessionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));