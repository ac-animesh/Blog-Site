const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// desc     register route
// access   public
// route    POST /api/auth/register
const register = async (req, res) => {
  const { username, email, isAdmin, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({ message: "User is already exists" });
    }

    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      username,
      email,
      isAdmin,
      password: hashedPassword,
    });

    await user.save();
    res.status(200).json({ message: "User is Registered" });
  } catch (error) {
    console.log(error);
  }
};

// desc     login route
// access   public
// route    POST /api/auth/login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something went wrong" });
  }
};

// get user
const getUser = async (req, res) => {
  const user = {
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    isAdmin: req.user.isAdmin,
  };
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(401).json({ message: "Invalid User" });
  }
};

// token generator
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

module.exports = {
  login,
  register,
  getUser,
};
