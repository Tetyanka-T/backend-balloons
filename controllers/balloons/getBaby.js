const { Balloon } = require("../../models");

const getBaby = async (req, res) => {
  const result = await Balloon.find({
    category: "Виписка з пологового будинку",
  }).sort({ _id: -1 });
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = getBaby;
