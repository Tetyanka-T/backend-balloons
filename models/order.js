const { Schema, model } = require("mongoose");
const Joi = require("joi");

const controlPhoneNumber =
  "((+38)?(?d{3})?[s.-]?(d{7}|d{3}[s.-]d{2}[s.-]d{2}|d{3}-d{4}))";
const controlEmail = "";

const orderSchema = Schema(
  {
    userName: {
      type: String,
      require: [true, "Ім'я обов'язкове"],
      minlength: 2,
    },
    userPhone: {
      type: Number,
      require: [true, "Телефон обов'язковий"],
      // match: { controlPhoneNumber },
    },
    userEmail: {
      type: String,
      require: [true, "Email обов'язковий"],
      // match: { controlEmail },
    },
    deliveryDate: {
      type: String,
      require: [true, "Дата доставки обов'язкова"],
    },
    deliveryMethod: {
      type: String,
      require: [true, "Спосіб доставки обов'язковий"],
    },
    deliveryTime: {
      type: String,
      require: [true, "Час доставки обов'язковий"],
    },
    callBack: {
      type: Boolean,
      default: false,
    },
    deliveryStreet: {
      type: String,
      require: [true, "Вкажіть Вашу вулицю"],
    },
    deliveryHause: {
      type: String,
      require: [true, "Вкажіть Ваш будинок"],
    },
    deliveryAppartment: Number,
    basket: {
      idBalloon: {
        type: String,
        require: [true, "Id композиції обов'язкове"],
      },
      priceBalloon: {
        type: Number,
        require: [true, "Ціна обов'язкова"],
        min: 0.01,
      },
      // photoBalloon: {
      //   type: String,
      //   require: [true, "Посилання на фото композиції обов'язкове"],
      // },
      codeBalloon: {
        type: String,
        require: [true, "Артикул обов'язковий"],
      },
    },

    statusOrder: {
      type: String,
      default: "новий",
    },
  },
  { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  userName: Joi.string().min(2).required(),
  userPhone: Joi.number().required(),
  userEmail: Joi.string().required(),
  deliveryDate: Joi.string().required(),
  deliveryMethod: Joi.string().required(),
  deliveryTime: Joi.string().required(),
  deliveryStreet: Joi.string(),
  deliveryHause: Joi.string(),
  deliveryAppartment: Joi.number(),
  callBack: Joi.boolean(),
  basket: {
    idBalloon: Joi.string().required(),
    priceBalloon: Joi.number().min(0.01).required(),
    // photoBalloon: Joi.string().required(),
    codeBalloon: Joi.string().required(),
  },
  statusOrder: Joi.string(),
});

const updateStatusJoiSchema = Joi.object({
  statusOrder: Joi.string().required(),
});

const Order = model("order", orderSchema);

module.exports = {
  Order,
  joiSchema,
  updateStatusJoiSchema,
};
