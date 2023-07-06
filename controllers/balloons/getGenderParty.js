const { Balloon } = require("../../models");

const getGenderParty = async (req, res) => {
  const result = await Balloon.find({ category: "Gender party" });
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = getGenderParty;
