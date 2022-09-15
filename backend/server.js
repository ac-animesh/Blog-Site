require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");

connectDB();
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is started on PORT ${PORT}`);
});
