const { Balloon } = require("../../models");

const paginatedResults = async (res, req) => {
  const { page, limit } = req.query;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = {};

  if (endIndex < (await Balloon.countDocuments().exec()))
    results.next = {
      page: page + 1,
      limit: limit,
    };

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  results.results = await Balloon.find().limit(limit).skip(startIndex).exec();
  res.paginatedResults = results;
};

module.exports = paginatedResults;
