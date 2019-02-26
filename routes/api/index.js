const router = require("express").Router();
const eventRoutes = require("./events");
const scrapeRoutes = require("./scrape")

// Events routes
router.use("/events", eventRoutes);
router.use("/scrape", scrapeRoutes);

module.exports = router;
