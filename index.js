// Import
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// Initialize Express server
const PORT = process.env.PORT || 3001;
const app = express();

// Add Express middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

// Connect to the Mongo database and start the Express server
db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server listening on port ${PORT}`);
    });
});