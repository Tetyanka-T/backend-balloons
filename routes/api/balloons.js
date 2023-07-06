const express = require("express");
const { joiSchema, Balloon } = require("../../models/balloon");
const { balloons: ctrl } = require("../../controllers");
const { controllerWrapper, validation } = require("../../middlewares");

const router = express.Router();

router.get("/", controllerWrapper(ctrl.getAll));
router.get("/gender-party", controllerWrapper(ctrl.getGenderParty));
router.get("/birthday", controllerWrapper(ctrl.getBirthday));
router.get("/baby", controllerWrapper(ctrl.getBaby));
router.get("/photo-zone", controllerWrapper(ctrl.getphotoZone));
router.get("/fasad", controllerWrapper(ctrl.getFasad));
router.get("/thematic", controllerWrapper(ctrl.getThematic));

router.get("/paginate", async (req, res) => {
  const { page, limit } = req.query;

  try {
    const balloons = await Balloon.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Balloon.count();

    res.json({
      balloons,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/:balloonId", controllerWrapper(ctrl.getBalloonById));

router.post("/", validation(joiSchema), controllerWrapper(ctrl.addBalloon));

router.put(
  "/:balloonId",
  validation(joiSchema),
  controllerWrapper(ctrl.updateById)
);

router.delete("/:balloonId", controllerWrapper(ctrl.deleteBalloon));

module.exports = router;
