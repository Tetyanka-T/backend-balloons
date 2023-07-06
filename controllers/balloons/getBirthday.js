const { Balloon } = require("../../models");

const getBirthday = async (req, res) => {
  const result = await Balloon.find({ category: "День народження" });
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = getBirthday;
