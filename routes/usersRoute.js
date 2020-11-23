const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  createUser,
  getFormations,
} = require("../controlers/users");
const { protect, authorize } = require("../middleware/auth");

router.route("/formations").get(protect, getFormations);
router.route("/").post(protect, authorize("admin"), createUser);
router.route("/").get(protect, authorize("admin"), getUsers);
router.route("/:id").get(protect, authorize("admin"), getUser);
router.route("/:id").put(protect, authorize("admin"), updateUser);
router.route("/:id").delete(protect, authorize("admin"), deleteUser);

module.exports = router;
