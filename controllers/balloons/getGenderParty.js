const { Balloon } = require("../../models");

const getGenderParty = async (req, res) => {
  const result = await Balloon.find({ category: "Gender party" }).sort({
    _id: -1,
  });
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = getGenderParty;
