// Import
const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const { formatDate } = require("../utils/helpers");

// Define the thought schema
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        // Include the getter method
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);

// reactionCount virtual
thoughtSchema
    .virtual("reactionCount")
    .get(function () {
        return this.reactions.length;
    });

// Create the thought model from the thought schema
const Thought = model("thought", thoughtSchema);

// Export
module.exports = Thought;