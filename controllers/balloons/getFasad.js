const { Balloon } = require("../../models");

const getFasad = async (req, res) => {
  const result = await Balloon.find({ category: "Фасади" });
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = getFasad;