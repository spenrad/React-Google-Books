const router = require("express").Router();
const booksController = require("../../controllers/booksController.js");


router
  .route("/")
  .get(booksController.findAll)
  .post(postsController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .delete(booksController.remove);
  

module.exports = router;