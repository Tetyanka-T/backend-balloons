const { Balloon } = require("../../models");

const getAll = async (req, res) => {
  const result =
    (await Balloon.find({}).sort({ updatedAt: -1 })) ||
    Balloon.find({}).sort({ _id: -1 });
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = getAll;
