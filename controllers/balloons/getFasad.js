const { Balloon } = require("../../models");

const getFasad = async (req, res) => {
  const result = await Balloon.find({ category: "Оформлення фасадів" });
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = getFasad;
