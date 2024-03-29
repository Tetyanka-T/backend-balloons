const { NotFound } = require("http-errors");
const { Order } = require("../../models");
const sendEmail = require("../../helpers/sendMail");
const sendOrderUserEmail = require("../../helpers/userEmail");

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
  const email = {
    to: result.userEmail,
    subject: `Нове замовлення №${order.numberOrder}`,
    html: sendOrderUserEmail(order),
  };
  await sendEmail(email);
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = updateStatus;
