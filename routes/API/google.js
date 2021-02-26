const router = require("express").Router();
const booksController = require("../../controllers/booksController.js");

router
  .route("/")
  .get(booksController.findBook);
  
module.exports = router;