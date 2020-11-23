const express = require("express");

const router = express.Router();
const {
  getRoles,
  addRole,
  deleteRole,
  getRolesByName,
} = require("../controlers/Role");

const { protect, authorize } = require("../middleware/auth");

router.route("/").get(protect, authorize("admin"), getRoles);
router.route("/:roleName").get(protect, authorize("admin"), getRolesByName);
router.route("/").post(protect, authorize("admin"), addRole);
router.route("/:id").delete(protect, authorize("admin"), deleteRole);
module.exports = router;
