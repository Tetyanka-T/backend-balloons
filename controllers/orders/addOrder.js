const { Order } = require("../../models");
const sendEmail = require("../../helpers/sendMail");

const addOrder = async (req, res) => {
  const newOrder = req.body;
  const result = await Order.create(newOrder);
  const email = {
    to: result.userEmail,
    subject: `Нове замовлення №${result.numberOrder}`,
    html: `<h1>Добрий день ${result.userName} ми отримали ваше замовлення №${result.numberOrder}</h1>`,
  };
  await sendEmail(email);
  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

module.exports = addOrder;
