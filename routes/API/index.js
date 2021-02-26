const router = require("express").Router();
const booksRoutes = require("./books");
const google = require("./google");

// Post routes
router.use("/books", booksRoutes)
router.use("/google", googleRoutes);

module.exports = router;
