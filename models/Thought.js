const { Schema, model, ObjectID } = require('mongoose');

// Schema for what makes up a thought
const thoughtSchema = new Schema(
    {
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280, },
    createdAt: { type: Date, default: Date.now, },
    username: { type: String, required: true, },
    reactions: [
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
    
// Creates a virtual property "reactionCount" that gets the amount of reactions per thought
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
})

function formatTimestamp(createdAt) {

}

// Initialize the Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;