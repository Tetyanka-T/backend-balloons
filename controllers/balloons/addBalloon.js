const { Balloon } = require("../../models");

const addBalloon = async (req, res) => {
  const newBalloon = req.body;
  const result = await Balloon.create(newBalloon);
  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

module.exports = addBalloon;
