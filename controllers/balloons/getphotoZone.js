const { Balloon } = require("../../models");

const getphotoZone = async (req, res) => {
  const result = await Balloon.find({ category: "Фотозони" });
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = getphotoZone;
