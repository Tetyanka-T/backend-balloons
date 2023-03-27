const { Admin } = require("../../models");

const current = async (req, res) => {
  const { _id } = req.user;

  const user = await Admin.findById(_id, "_id email");

  res.json({
    status: "success",
    code: 200,
    user,
  });
};

module.exports = current;
