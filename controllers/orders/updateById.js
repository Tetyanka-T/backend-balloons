const { NotFound } = require("http-errors");
const { Order } = require("../../models");

const updateById = async (req, res) => {
  const { orderId } = req.params;
  const result = await Order.findByIdAndUpdate(orderId, req.body, {
    new: true,
  });
  if (!result) {
    throw new NotFound(`Composition ${orderId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = updateById;
