const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const balloonsRouter = require("./routes/api/balloons");
const ordersRouter = require("./routes/api/orders");
const authRouter = require("./routes/api/auth");
const searchRouter = require("./routes/api/search");
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/balloons", balloonsRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/auth", authRouter);
app.use("/api/search", searchRouter);

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Not found",
  });
});

app.use((req, res) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});


const mongoose = require("mongoose");
require("dotenv").config();

const app = require("../app");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

module.exports = app;
