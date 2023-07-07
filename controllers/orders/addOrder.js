const { Order } = require("../../models");
const sendEmail = require("../../helpers/sendMail");
const sendOrderAdminEmail = require("../../helpers/adminEmail");

const addOrder = async (req, res) => {
  const newOrder = req.body;
  const result = await Order.create(newOrder);
  const email = {
    to: "vutivaku@gmail.com",
    subject: `Нове замовлення №${result.numberOrder}`,
    html: sendOrderAdminEmail(result),
  };
  await sendEmail(email);
  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

module.exports = addOrder;
