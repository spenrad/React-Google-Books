const router = require("express").Router();
const booksController = require("../../controllers/booksController.js");

console.log("you're in the book api file, guy");

router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .delete(booksController.remove);
  

module.exports = router;