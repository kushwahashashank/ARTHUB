const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
require("../Config/connecton");
app.use(express.json());
app.use(require("./auth"));

app.listen(port, () => {
  console.log("Server is Runnung at port no", port);
});
