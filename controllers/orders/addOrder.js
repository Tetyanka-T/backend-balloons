const { Order } = require("../../models");

const addOrder = async (req, res) => {
  const newOrder = req.body;
  const result = await Order.create(newOrder);
  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

module.exports = addOrder;
