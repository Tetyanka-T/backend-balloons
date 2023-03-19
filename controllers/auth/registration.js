const { Conflict } = require("http-errors");
const bcrypt = require("bcryptjs");

const { Admin } = require("../../models");

const registration = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (admin) {
    throw new Conflict("Already register");
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const newAdmin = { email, password: hashPassword };
  await Admin.create(newAdmin);
  res.status(201).json({
    status: "success",
    code: 201,
    message: "Success register",
  });
};

module.exports = registration;
