const express = require("express");
const { joiSchema, updateStatusJoiSchema } = require("../../models/order");
const { orders: ctrl } = require("../../controllers");
const {
  controllerWrapper,
  validation,
  verifyToken,
} = require("../../middlewares");

const router = express.Router();

router.get("/", verifyToken, controllerWrapper(ctrl.getAll));

// router.get("/:orderId", controllerWrapper(ctrl.getOrderById));

// router.post("/", validation(joiSchema), controllerWrapper(ctrl.addOrder));
router.post("/", controllerWrapper(ctrl.addOrder));

router.delete("/:orderId", controllerWrapper(ctrl.deleteOrder));

router.patch(
  "/:orderId/statusOrder",
  verifyToken,
  validation(updateStatusJoiSchema),
  controllerWrapper(ctrl.updateStatus)
);

module.exports = router;
