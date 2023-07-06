const { Balloon } = require("../../models");

const getThematic = async (req, res) => {
  const result = await Balloon.find({ category: "Тематичні свята" });
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = getThematic;
