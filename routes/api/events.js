const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/books"
// router.route("/")
//   .post(booksController.create)
//   .get(booksController.findAll);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

router 
  .route("/")
  .get(eventsController.findAll);

router
.route("/create_event")
.post(eventsController.create)

module.exports = router;