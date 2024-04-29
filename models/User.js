// Import
const { Schema, model } = require("mongoose");

// Define the user schema
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: {
                validator: function (email) {
                    // Checks whether the email is valid.
                    // Adapted from the regexes found on this site: https://www.regular-expressions.info/email.html
                    return /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
                },
                message: props => `${props.value} is not a valid email address!`
            }
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "thought"
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "user"
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// friendCount virtual
userSchema
    .virtual("friendCount")
    .get(function () {
        return this.friends.length;
    });

// Create the user model from the user schema
const User = model("user", userSchema);

// Export
module.exports = User;