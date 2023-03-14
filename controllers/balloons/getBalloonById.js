const { NotFound } = require("http-errors");
const { Balloon } = require("../../models");

const getBalloonById = async (req, res) => {
  const { balloonId } = req.params;
  const result = await Balloon.findById(balloonId);
  if (!result) {
    throw new NotFound(`Composition ${balloonId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = getBalloonById;
