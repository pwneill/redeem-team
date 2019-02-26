const router = require("express").Router();
const otherRoutes = require("./other");
const scrapeRoutes = require("./scrape")

router.use("/other", otherRoutes);
router.use("/scrape", scrapeRoutes);

module.exports = router;
