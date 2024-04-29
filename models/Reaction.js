// Import
const { Schema, Types } = require("mongoose");
const { formatDate } = require("../utils/helpers");

// Define the reaction schema
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate
        }
    },
    {
        // Include the getter method
        toJSON: {getters: true},
        // Don't add ids
        id: false
    }
);

// Export
module.exports = reactionSchema;