const { Schema, model } = require("mongoose");
const Joi = require("joi");

const balloonSchema = Schema(
  {
    name: {
      type: String,
      require: [true, "Назва композиції обов'язкова"],
    },
    category: {
      type: String,
      require: [true, "Назва категорії обов'язкова"],
    },
    // вказується підкатегорія
    grup: String,
    gender: {
      type: String,
      require: [true, "Вказати стать"],
    },
    description: {
      type: String,
      require: [true, "Опис композиції обов'язковий"],
    },
    price: {
      type: Number,
      require: [true, "Ціна обов'язкова"],
      min: 0.01,
    },
    code: {
      type: String,
      require: [true, "Артикул обов'язковий"],
    },
    // вказуються основні слова за, який здійснюється фільтр
    filter: String,
    // imgSrc: {
    //   type: String,
    //   require: [true, "Посилання на фото композиції обов'язкове"],
    // },
  },
  { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().required(),
  grup: Joi.string(),
  gender: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().min(0.01).required(),
  code: Joi.string().required(),
  filter: Joi.string(),
  // imgSrc: Joi.string().required(),
});

const Balloon = model("balloon", balloonSchema);

module.exports = {
  Balloon,
  joiSchema,
};
