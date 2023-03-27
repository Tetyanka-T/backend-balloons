const { Balloon } = require("../../models");

const paginatedResults = async (req, res) => {
  const { page, limit } = req.query;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  if (endIndex < Balloon.length) {
    result.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (startIndex > 0) {
    result.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  const result = Balloon.slice(startIndex, endIndex);

  res.json(result);
};
module.exports = paginatedResults;
