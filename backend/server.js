const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is started on PORT ${PORT}`);
});
