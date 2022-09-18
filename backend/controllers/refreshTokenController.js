const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

// desc     refresh token
// access   private
// route    POST /api/auth/refresh
const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.status(401).json({ message: "not found" });

  const refreshToken = cookies.jwt;

  const user = await User.find({ refreshToken });
  if (!user) return res.status(403).json({ message: "Forbiden" });

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || user.name !== decoded.name) return res.status(403);

    let accessToken = jwt.sign(
      { id: user._id, username: user.name },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "20s",
      }
    );

    res.status(200).json({ accessToken: accessToken });
  });
};

module.exports = {
  handleRefreshToken,
};
