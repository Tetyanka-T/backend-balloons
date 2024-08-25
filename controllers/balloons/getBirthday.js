const { Balloon } = require("../../models");

const getBirthday = async (req, res) => {
  const result =
    (await Balloon.find({ category: "День народження" }).sort({
      updatedAt: -1,
    })) ||
    Balloon.find({ category: "День народження" }).sort({
      _id: -1,
    });
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = getBirthday;
