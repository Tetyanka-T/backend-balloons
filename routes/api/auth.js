const express = require("express");
const { joiSchema } = require("../../models/admin");
const { auth: ctrl } = require("../../controllers");
const {
  controllerWrapper,
  validation,
  verifyToken,
} = require("../../middlewares");

const router = express.Router();

router.post(
  "/registration",
  validation(joiSchema),
  controllerWrapper(ctrl.registration)
);

router.post("/login", validation(joiSchema), controllerWrapper(ctrl.login));

router.get("/logout", verifyToken, controllerWrapper(ctrl.logout));
router.get("/current", verifyToken, controllerWrapper(ctrl.current));

module.exports = router;
