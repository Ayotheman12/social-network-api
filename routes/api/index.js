// Import
const router = require("express").Router();
const thoughtRoutes = require("./thoughtRoutes");
const userRoutes = require("./userRoutes");

// Build routes
router.use("/thoughts", thoughtRoutes);
router.use("/users", userRoutes);

// Export
module.exports = router;