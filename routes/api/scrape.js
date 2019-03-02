const router = require("express").Router();
const scrapeController = require("../../controllers/scrapeController");

// Matches with "/api/books"
router.route("/")
  .post(scrapeController.create)
  .get(scrapeController.findAll);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(scrapeController.findById)
  .put(scrapeController.update)
  .delete(scrapeController.remove);

module.exports = router;