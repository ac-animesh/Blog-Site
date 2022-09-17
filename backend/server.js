require("dotenv").config();
const express = require("express");
const app = express();
const multer = require("multer");
const connectDB = require("./config/db");

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 8000;

// upload image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "backend/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("myFile"), (req, res) => {
  res.status(200).json({ message: "File has been Uploaded" });
});

app.use("/api/auth/", require("./routes/authRoutes"));
app.use("/api/user/", require("./routes/usersRoutes"));
app.use("/api/post/", require("./routes/postsRoutes"));
app.use("/api/categories/", require("./routes/categoriesRoutes"));

app.listen(PORT, () => {
  console.log(`Server is started on PORT ${PORT}`);
});
connectDB();
