const express = require("express");
const router = express();
// const auth = require("../middleware/authMiddleware");
const {
  createPost,
  getPosts,
  getSinglePosts,
  deletePost,
  updatePost,
} = require("../controllers/postContoller");

// desc     create a post
// access   private
// route    POST /api/auth/post
router.post("/", createPost);

// desc     get all posts
// access   private
// route    GET /api/auth/posts
router.get("/", getPosts);

// desc     get a post
// access   private
// route    GET /api/auth/post/:id
router.get("/:id", getSinglePosts);

// desc     delete a post
// access   private
// route    DELETE /api/auth/post/:id
router.delete("/:id", deletePost);

// desc     update a post
// access   private
// route    UPDATE /api/auth/post/:id
router.put("/:id", updatePost);

module.exports = router;
