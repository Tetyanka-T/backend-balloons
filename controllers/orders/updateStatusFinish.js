const { NotFound } = require("http-errors");
const { Order } = require("../../models");
const updateStatus = require("./updateStatus");

const updateStatusFinish = async (req, res) => {
  const { orderId } = req.params;
  const { statusFinish } = req.body;
  const result = await Order.findByIdAndUpdate(
    orderId,
    { statusFinish },
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

module.exports = updateStatusFinish;
