const express = require("express");
const router = express();
// const auth = require("../middleware/authMiddleware");
const { createCategory } = require("../controllers/categoryController");

// desc     Get Categories
// access   private
// route    Post /api/categories
router.post("/", createCategory);

module.exports = router;
