const { Unauthorized } = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { Admin } = require("../../models");

const { JWT_SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email }, "_id, email, password");
  if (!admin || !bcrypt.compareSync(password, admin.password)) {
    throw new Unauthorized("Email or password is wrong");
  }
  const { _id } = admin;
  const payload = { _id };
  const token = jwt.sign(payload, JWT_SECRET_KEY);
  await Admin.findByIdAndUpdate({ _id }, { token });
  res.json({
    status: "success",
    code: 200,
    token,
  });
};

module.exports = login;
