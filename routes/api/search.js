const express = require("express");
const { joiSchema, Balloon } = require("../../models/balloon");

const router = express.Router();

router.get("/:key", async (req, res) => {
  try {
    const balloons = await Balloon.find({
      $or: [
        { name: { $regex: req.params.key } },
        {
          description: { $regex: req.params.key },
        },
      ],
    });
    res.json(balloons);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
