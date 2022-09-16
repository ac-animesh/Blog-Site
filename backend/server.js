require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 8000;

app.use("/api/auth/", require("./routes/authRoutes"));
app.use("/api/auth/", require("./routes/usersRoutes"));

app.listen(PORT, () => {
  console.log(`Server is started on PORT ${PORT}`);
});
connectDB();
