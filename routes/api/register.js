const router = require("express").Router();
const registerController = require("../../controllers/registerController");

// Matches with "/api/register"
router.route("/")
  .post(registerController.create)
  // .get(registerController.findAll);

// Matches with "/api/register/:id"
router.route("/:id")
  .get(registerController.findById)
  .put(registerController.update)
  .delete(registerController.remove);

router 
  .route("/")
  .get(registerController.findAll);

router
.route("/create_event")
.post(registerController.create)

module.exports = router;