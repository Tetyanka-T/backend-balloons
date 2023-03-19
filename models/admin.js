const { Schema, model } = require("mongoose");
const Joi = require("joi");

const adminSchema = Schema(
  {
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
      minlenghts: 6,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const Admin = model("admin", adminSchema);

module.exports = {
  Admin,
  joiSchema,
};
