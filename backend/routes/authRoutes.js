const express = require("express");
const router = express();
// const auth = require("../middleware/authMiddleware");
const { login, register } = require("../controllers/authController");

// desc     register route
// access   public
// route    POST /auth/register
router.post("/register", register);

// desc     login route
// access   public
// route    POST /auth/login
router.post("/login", login);

module.exports = router;
