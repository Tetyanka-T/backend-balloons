const { Balloon } = require("../../models");

const getFasad = async (req, res) => {
  const result =
    (await Balloon.find({ category: "Оформлення фасадів" }).sort({
      updatedAt: -1,
    })) |
    Balloon.find({ category: "Оформлення фасадів" }).sort({
      _id: -1,
    });
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = getFasad;
