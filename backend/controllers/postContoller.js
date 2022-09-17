const User = require("../models/userSchema");
const Post = require("../models/postSchema");

// desc     create a post
// access   private
// route    POST /api/auth/post
const createPost = async (req, res) => {
  try {
    const { title, desc, photo, name, categories } = req.body;

    const user = await User.findOne({ name });
    if (!user) {
      return res.status(401).json({ message: "Invalid User" });
    }

    let post = new Post({
      title,
      desc,
      photo,
      name,
      categories,
    });

    await post.save();

    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something went wrong" });
  }
};

// desc     get all posts
// access   private
// route    GET /api/auth/posts
const getPosts = async (req, res) => {
  try {
    const { title, desc, photo, name, categories } = req.body;

    const user = await User.findOne({ name });
    if (!user) {
      return res.status(401).json({ message: "Invalid User" });
    }
    const posts = await Post.find(req.id);
    if (!posts) {
      return res.status(401).json({ message: "Post not found" });
    }

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something went wrong" });
  }
};

// desc     get a post
// access   private
// route    GET /api/auth/post/:id
const getSinglePosts = async (req, res) => {
  try {
    const posts = await Post.findById(req.params.id);
    if (!posts) {
      return res.status(401).json({ message: "Post not found" });
    }

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something went wrong" });
  }
};

// desc     delete a post
// access   private
// route    DELETE /api/auth/post/:id
const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(401).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post is Deleted" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something went wrong" });
  }
};

// desc     update a post
// access   private
// route    UPDATE /api/auth/post/:id
const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!post) {
      return res.status(401).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something went wrong" });
  }
};

module.exports = {
  createPost,
  getPosts,
  getSinglePosts,
  deletePost,
  updatePost,
};
