const router = require("express").Router();
<<<<<<< HEAD
const eventRoutes = require("./events");

// Events routes
router.use("/events", eventRoutes);
=======
const otherRoutes = require("./other");
const scrapeRoutes = require("./scrape")

router.use("/other", otherRoutes);
router.use("/scrape", scrapeRoutes);
>>>>>>> alan

module.exports = router;
