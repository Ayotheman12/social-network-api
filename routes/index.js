// Import
const router = require("express").Router();
const apiRoutes = require("./api");

// Build modular routes
router.use("/api", apiRoutes);

// Response for incorrect routes
router.use((req, res) => res.send("Incorrect route"));

// Export
module.exports = router;