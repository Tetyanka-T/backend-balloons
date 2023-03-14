const { NotFound } = require("http-errors");
const { Order } = require("../../models");

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
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = updateStatus;
