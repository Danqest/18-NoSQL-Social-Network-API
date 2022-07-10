const mongoose = require('mongoose');

// Schema for what makes up a comment
const reactionSchema = new mongoose.Schema({
  reactionId: { type: ObjectId, },
  reactionBody: { type: String, required: true, maxLength: 280, },
  username: { type: String, required: true, },
  createdAt: { type: Date, default: Date.now, },
});