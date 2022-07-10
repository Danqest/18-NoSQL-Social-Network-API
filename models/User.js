const mongoose = require('mongoose');

// Schema for what makes up a comment
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, trimmed: true },
  email: { type: String, required: true, unique: true, },
  thoughts: [],
  friends: [],
});

// Initialize the User model
const User = mongoose.model('user', userSchema);

module.exports = User;
