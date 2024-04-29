// Import
const { Thought, User } = require("../models");

// Implement controller functions and export
module.exports = {
    async getUsers(req, res) {
        try {
            // Find and respond with all users
            const users = await User.find();
            return res.json(users);
        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    async getSingleUser(req, res) {
        try {
            // Find specified user
            const user = await User.findOne({ _id: req.params.userId }).populate("thoughts");
            // If the specified user doesn't exist, respond with an error
            if (!user) {
                return res.status(404).json({ message: "No user with that ID" });
            }
            // Respond with the user
            return res.json(user);
        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {
            // Create a new user and respond
            const user = await User.create(req.body);
            return res.json(user);
        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    async updateUser(req, res) {
        try {
            // Update the user
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            // If the specified user doesn't exist, respond with an error
            if (!user) {
                return res.status(404).json({ message: "No user with that ID" });
            }
            // Respond with the user
            return res.json(user);
        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            // Delete the user
            const user = await User.findOneAndDelete({ _id: req.params.userId });
            // If the specified user doesn't exist, respond with an error
            if (!user) {
                return res.status(404).json({ message: "No user with that ID" });
            }
            // Remove all thoughts associated with this user
            await Thought.deleteMany({ _id: {$in: user.thoughts } });
            // Respond with the user
            return res.json(user);
        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    async addFriend(req, res) {
        try {
            // Add a friend to the specified user
            const friend = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { runValidators: true, new: true }
            );
            // If the specified user doesn't exist, respond with an error
            if (!friend) {
                return res.status(404).json({ message: "No user with that ID" });
            }
            // Respond with the user
            return res.json(friend);
        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    async removeFriend(req, res) {
        try {
            // Remove a friend from the specified user
            const friend = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { runValidators: true, new: true }
            );
            // If the specified user doesn't exist, respond with an error
            if (!friend) {
                return res.status(404).json({ message: "No user with that ID" });
            }
            // Respond with the user
            return res.json(friend);
        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    }
}