const { Order } = require("../../models");
const sendEmail = require("../../helpers/sendMail");
const sendOrderEmail = require("../../helpers/email");

const addOrder = async (req, res) => {
  const newOrder = req.body;
  const result = await Order.create(newOrder);
  console.log(result);
  const email = {
    to: result.userEmail,
    subject: `Нове замовлення №${result.numberOrder}`,
    html: sendOrderEmail(result),
  };
  await sendEmail(email);
  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

module.exports = addOrder;
