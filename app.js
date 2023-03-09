const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

app.use(cors());
dotenv.config();
const { DB_HOST } = process.env;
mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.get("/", (request, response) => {
  response.json();
});
app.listen(3003);
