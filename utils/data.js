// Names picked randomly using https://www.behindthename.com/random/
const names = [
    "Sofie",
    "Hiraku",
    "Alma",
    "EbuBekir",
    "Amaro",
    "Djamila",
    "Petre",
    "Immanuel",
    "Nikifor",
    "Hafsat",
    "Banu",
    "Winfried",
    "Baldomero",
    "Ryu",
    "Airi",
    "Sadik",
    "Spyridoula",
    "Burhan",
    "Fatemeh",
    "Suriya"
];

const websites = [
    "electronmail.example",
    "slowmail.example",
    "woohoomail.example",
    "bpmmail.example",
    "coldmail.example"
]

const thoughtTexts = [
    "Nice weather today",
    "I love this movie",
    "Had lunch today",
    "Aren't roads awesome?",
    "CFGs are the best!",
    "Functional programming is where it's at!",
    "Web3 is for schmucks!",
    "Progressive web apps, am I right?",
    "How do you people have so many thoughts?",
    "And one more for good measure"
];

const reactionBodies = [
    "I agree",
    "I disagree",
    "I love you",
    "I hate you",
    "Yeah!",
    "No!",
    "Cats are the best!",
    "I love off-topic reactions!",
    "Nice thought!",
    "Your thought-machine needs a tune up..."
];

// Get a random item from an array
const getRandomFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Get a random username (format: name followed by 6 digits)
const getRandomUserName = () => {
    let name = getRandomFromArray(names);
    for (let i = 0; i < 6; i++) {
        name += Math.floor(Math.random() * 10);
    }
    return name;
}

// Make an array of random users
const getRandomUsers = (num) => {
    users = [];
    for (i = 0; i < num; i++) {
        // Random username
        let name = getRandomUserName();
        // Random email (format: username @ website)
        let email = name + "@" + getRandomFromArray(websites);
        // Add user object
        users.push({ username: name, email });
    }
    // Return users
    return users;
}

// Get random reactions
const getRandomReactions = (num) => {
    if (num === 1) {
        return getRandomFromArray(reactionBodies);
    }
    const reactions = [];
    for (let i = 0; i < num; i++) {
        let reaction = getRandomFromArray(reactionBodies);
        if (!reactions.includes(reaction)) {
            reactions.push({
                reactionBody: reaction,
                username: getRandomUserName()
            });
        }
    }
    return reactions;
}

// Get random thoughts
const getRandomThoughtFromName = (name) => {
    return { 
        thoughtText: getRandomFromArray(thoughtTexts),
        username: name,
        reactions: getRandomReactions(2)
    };
}

module.exports = { getRandomUsers, getRandomThoughtFromName };