const { Schema, model } = require("mongoose");
const Joi = require("joi");

const orderSchema = Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "admin",
    },
    basket: [
      {
        balloon: {
          type: Schema.Types.ObjectId,
          ref: "balloon",
          require: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    userName: {
      type: String,
      require: [true, "Ім'я обов'язкове"],
      minlength: 2,
    },
    userPhone: {
      type: Number,
      require: [true, "Телефон обов'язковий"],
    },
    userEmail: {
      type: String,
      require: [true, "Email обов'язковий"],
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
      default: "ні",
    },
    userAddress: String,
    // deliveryStreet: {
    //   type: String,
    //   require: [true, "Вкажіть Вашу вулицю"],
    // },
    // deliveryHause: {
    //   type: String,
    //   require: [true, "Вкажіть Ваш будинок"],
    // },
    // deliveryAppartment: Number,
    comment: String,
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
  userAddress: Joi.string(),
  // deliveryStreet: Joi.string(),
  // deliveryHause: Joi.string(),
  // deliveryAppartment: Joi.number(),
  callBack: Joi.string(),
  comment: Joi.string(),
  basket: [
    {
      balloon: Joi.string().required(),
      quantity: Joi.number().required(),
    },
  ],
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
