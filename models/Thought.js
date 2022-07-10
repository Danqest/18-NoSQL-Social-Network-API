const mongoose = require('mongoose');

// Schema for what makes up a comment
const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true, minLength: 1, maxLength: 280, },
  createdAt: { type: Date, },
  username: { type: String, required: true, },
  reactions: [],
});

// Initialize the User model
const Thought = mongoose.model('user', thoughtSchema);

module.exports = Thought;