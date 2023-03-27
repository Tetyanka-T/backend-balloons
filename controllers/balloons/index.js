const getAll = require("./getAll");
const getBalloonById = require("./getBalloonById");
const addBalloon = require("./addBalloon");
const deleteBalloon = require("./deleteBalloon");
const updateById = require("./updateById");
const updatePriceAll = require("./updatePriceAll");
const paginatedResults = require("./paginatedResults");

module.exports = {
  getAll,
  getBalloonById,
  addBalloon,
  deleteBalloon,
  updateById,
  updatePriceAll,
  paginatedResults,
};
