const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Models
const Donate = require('./models/Donate');
const Receive = require('./models/Receive');
const User = require('./models/User'); // ✅ Make sure this exists

// MongoDB connection
const uri = 'mongodb+srv://admin:parth13@cluster0.y7wjb8p.mongodb.net/BloodBank?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri)
  .then(() => console.log("✅ MongoDB connected successfully!"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

// Routes
app.get('/', (req, res) => {
  res.send('🚑 Blood Bank API is live');
});

// ✅ Donate route
app.post('/donate', async (req, res) => {
  try {
    const donation = new Donate(req.body);
    await donation.save();
    res.status(201).send('✅ Donation saved');
  } catch (err) {
    console.error('❌ Save failed:', err);
    res.status(500).send('❌ Could not save donation');
  }
});

// ✅ Receive route
app.post('/receive', async (req, res) => {
  try {
    const request = new Receive(req.body);
    await request.save();
    res.status(201).send('✅ Receive request saved');
  } catch (err) {
    console.error('❌ Receive save failed:', err);
    res.status(500).send('❌ Could not save receive data');
  }
});

// ✅ Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = new User({ email, password });
    await user.save(); // ✅ Save to MongoDB
    res.status(200).send("✅ Login successful");
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).send("❌ Server error");
  }
});



// View data routes (optional)
app.get('/donations', async (req, res) => {
  try {
    const data = await Donate.find();
    res.json(data);
  } catch (err) {
    res.status(500).send('❌ Could not fetch donations');
  }
});

app.get('/receives', async (req, res) => {
  try {
    const data = await Receive.find();
    res.json(data);
  } catch (err) {
    res.status(500).send('❌ Could not fetch receive requests');
  }
});

// Server start
app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
