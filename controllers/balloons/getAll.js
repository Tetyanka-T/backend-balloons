const { Balloon } = require("../../models");

const getAll = async (req, res) => {
  const result = await Balloon.find({});
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = getAll;
