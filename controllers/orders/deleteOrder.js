const { NotFound } = require("http-errors");
const { Order } = require("../../models");

const deleteOrder = async (req, res) => {
  const { orderId } = req.params;
  const result = await Order.findByIdAndDelete(orderId);
  if (!result) {
    throw new NotFound(`Order ${orderId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    message: "Success delete",
  });
};

module.exports = deleteOrder;
