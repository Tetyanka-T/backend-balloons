const express = require("express");
const { joiSchema, Balloon } = require("../../models/balloon");
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
// router.get("/paginate", controllerWrapper(ctrl.paginatedResults));

// router.get("/paginate", (res, req) => {
//   const page = req.query.page;
//   const limit = req.query.limit;
//   const startIndex = (page - 1) * limit;
//   const endIndex = page * limit;
//   const results = {};
//   results.results = Balloon.slice(startIndex, endIndex);
//   res.json(results);
// });
module.exports = router;
