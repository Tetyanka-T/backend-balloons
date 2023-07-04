const { NotFound } = require("http-errors");
const { Order } = require("../../models");
const sendEmail = require("../../helpers/sendMail");
const sendOrderEmail = require("../../helpers/email");

const updateStatus = async (req, res) => {
  const { orderId } = req.params;
  const { statusOrder } = req.body;
  const result = await Order.findByIdAndUpdate(
    orderId,
    { statusOrder },
    {
      new: true,
    }
  );
  if (!result) {
    throw new NotFound(`Order ${orderId} not found`);
  }
  const order = await Order.findById(orderId);
  console.log(order);
  const email = {
    to: order.userEmail,
    subject: `Нове замовлення №${order.numberOrder}`,
    html: sendOrderEmail(order),
  };
  await sendEmail(email);
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = updateStatus;
