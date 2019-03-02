const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/events"
router.route("/")
  .post(eventsController.create)
  // .get(eventsController.findAll);

// Matches with "/api/events/:id"
router.route("/:id")
  .get(eventsController.findById)
  .put(eventsController.update)
  .delete(eventsController.remove);

router 
  .route("/")
  .get(eventsController.findAll);

router
.route("/create_event")
.post(eventsController.create)

module.exports = router;