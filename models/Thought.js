const mongoose = require('mongoose');

// Schema for what makes up a comment
const thoughtSchema = new mongoose.Schema(
    {
        thoughtText: { type: String, required: true, minLength: 1, maxLength: 280, },
        createdAt: { type: Date, default: Date.now, },
        username: { type: String, required: true, },
        reactions: [],
    },
    {
    toJSON: {
        virtuals: true,
    }
    }
);
    
// Creates a virtual property "reactionCount" that gets the amount of reactions per thought
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reaction.length
})

function formatTimestamp(createdAt) {

}

// Initialize the User model
const Thought = mongoose.model('thought', thoughtSchema);

module.exports = Thought;