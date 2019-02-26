const router = require("express").Router();
const eventRoutes = require("./events");

// Events routes
router.use("/events", eventRoutes);

module.exports = router;
