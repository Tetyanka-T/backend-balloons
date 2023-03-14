const { NotFound } = require("http-errors");
const { Balloon } = require("../../models");

const updateById = async (req, res) => {
  const { balloonId } = req.params;
  const result = await Balloon.findByIdAndUpdate(balloonId, req.body, {
    new: true,
  });
  if (!result) {
    throw new NotFound(`Composition ${balloonId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = updateById;
