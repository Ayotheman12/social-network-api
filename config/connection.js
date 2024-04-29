// Import
const { connect, connection } = require('mongoose');

// Connect to database
const connectionString = 'mongodb://127.0.0.1:27017/socialDB';
connect(connectionString);

// Export
module.exports = connection;