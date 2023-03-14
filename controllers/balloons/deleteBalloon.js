const { NotFound } = require("http-errors");
const { Balloon } = require("../../models");

const deleteBalloon = async (req, res) => {
  const { balloonId } = req.params;
  const result = await Balloon.findByIdAndDelete(balloonId);
  if (!result) {
    throw new NotFound(`Composition ${balloonId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    message: "Success delete",
  });
};

module.exports = deleteBalloon;
