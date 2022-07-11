const { Schema, model, ObjectID } = require('mongoose');
// const  ObjectID = require('mongodb').ObjectId;

// Schema for what makes up a comment
const userSchema = new Schema(
  {
  username: { type: String, unique: true, required: true, trimmed: true },
  email: { type: String, required: true, unique: true, },
  thoughts: [
    { 
      type: Schema.Types.ObjectID, 
      ref: 'thought' }
    ],
  friends: [
    { 
      type: Schema.Types.ObjectID, 
      ref: 'user' }
    ],
  },
  {
    toJSON: {
      virtuals: true,
    }
  }
);

// Creates a virtual property "friendCount" that gets the amount of friends per user
userSchema.virtual('friendCount').get(function () {
  return this.friends.length
})

// Initialize the User model
const User = model('user', userSchema);

module.exports = User;
