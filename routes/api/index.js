const router = require("express").Router();
const eventRoutes = require("./events");
const scrapeRoutes = require("./scrape");
const registerRoutes = require("./register");
const userRoutes = require("./user")

// Events routes
router.use("/events", eventRoutes);
router.use("/scrape", scrapeRoutes);
router.use("/register", registerRoutes);
router.use("/user", userRoutes)

module.exports = router;
