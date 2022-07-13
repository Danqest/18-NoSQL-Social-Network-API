const { Schema, model } = require('mongoose');

// Schema for what makes up a user
const userSchema = new Schema(
  {
  username: { type: String, unique: true, required: true, trimmed: true },
  email: { type: String, required: true, unique: true, },
  thoughts: [
    { 
      type: Schema.Types.ObjectId, 
      ref: 'Thought' }
    ],
  friends: [
    { 
      type: Schema.Types.ObjectId, 
      ref: 'User' }
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Creates a virtual property "friendCount" that gets the amount of friends per user
userSchema.virtual('friendCount').get(function () {
  return this.friends.length
})

// Initialize the User model
const User = model('user', userSchema);

module.exports = User;
