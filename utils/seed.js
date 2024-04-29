// Import
const connection = require("../config/connection");
const { Thought, User } = require("../models");
const { getRandomUsers, getRandomThoughtFromName } = require("./data");

// Listen for errors
connection.on("error", (err) => err);

// Connect to the database and seed
connection.once("open", async () => {
    console.log("Connected");

    // Delete collections if they exist
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }
    
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    }

    // Generate random data
    const users = getRandomUsers(4);
    const thoughts = [];

    users.forEach((user) => {
        thoughts.push(getRandomThoughtFromName(user.username));
        thoughts.push(getRandomThoughtFromName(user.username));
    });

    // Seed database
    const thoughtData = await Thought.collection.insertMany(thoughts);

    const thoughtIds = Object.entries(thoughtData.insertedIds).map(id => id[1]);

    users.map((user, userIndex) => {
        user.thoughts = [thoughtIds[userIndex * 2], thoughtIds[userIndex * 2 + 1]];
    });
    
    await User.collection.insertMany(users);

    // Print results and exit
    console.table(users);
    console.table(thoughts);
    console.info("Seeding complete!");
    process.exit(0);
});