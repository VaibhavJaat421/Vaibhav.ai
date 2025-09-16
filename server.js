const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// User Schema
const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  state: String,
  country: String,
  date: { type: Date, default: Date.now }
});

const feedbackSchema = new mongoose.Schema({
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const Feedback = mongoose.model('Feedback', feedbackSchema);

// Routes
app.post('/api/signup', async (req, res) => {
  try {
    const { fullName, email, phone, state, country } = req.body;
    const newUser = new User({ fullName, email, phone, state, country });
    await newUser.save();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

app.post('/api/feedback', async (req, res) => {
  try {
    const { email, message } = req.body;
    const newFeedback = new Feedback({ email, message });
    await newFeedback.save();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get('/api/feedback', async (req, res) => {
  const feedbacks = await Feedback.find();
  res.json(feedbacks);
});

// Serve frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));