const router = require("express").Router();
const eventRoutes = require("./events");
const scrapeRoutes = require("./scrape");
const registerRoutes = require("./register")

// Events routes
router.use("/events", eventRoutes);
router.use("/scrape", scrapeRoutes);
router.use("/register", registerRoutes);

module.exports = router;
