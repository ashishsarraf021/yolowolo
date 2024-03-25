const mongoose = require('mongoose');
require("dotenv").config();
const uri = process.env.DB_CONNECT;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Event listeners for MongoDB connection
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Optionally, you can also listen for the disconnected event
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

module.exports = mongoose;