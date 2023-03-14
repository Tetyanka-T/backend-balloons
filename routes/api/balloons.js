const express = require("express");
const { joiSchema } = require("../../models/balloon");
const { balloons: ctrl } = require("../../controllers");
const { controllerWrapper, validation } = require("../../middlewares");

const router = express.Router();

router.get("/", controllerWrapper(ctrl.getAll));

router.get("/:balloonId", controllerWrapper(ctrl.getBalloonById));

router.post("/", validation(joiSchema), controllerWrapper(ctrl.addBalloon));

router.put(
  "/:balloonId",
  validation(joiSchema),
  controllerWrapper(ctrl.updateById)
);

router.delete("/:balloonId", controllerWrapper(ctrl.deleteBalloon));

module.exports = router;
