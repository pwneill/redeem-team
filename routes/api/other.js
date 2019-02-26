const router = require("express").Router();
const otherController = require("../../controllers/otherController");

// Matches with "/api/books"
router.route("/")
  .post(otherController.create)
  .get(otherController.findAll);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(otherController.findById)
  .put(otherController.update)
  .delete(otherController.remove);

module.exports = router;