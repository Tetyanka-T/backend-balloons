const { Balloon } = require("../../models");

const getphotoZone = async (req, res) => {
  const result =
    (await Balloon.find({ category: "Фотозони" }).sort({ updatedAt: -1 })) ||
    Balloon.find({ category: "Фотозони" }).sort({ _id: -1 });
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = getphotoZone;
