const express = require("express");
const router = express.Router();

const {
  addFormation,
  formationPhotoUpload,
  updateFormation,
  getAllFormations,
  deleteFormation,

  getAllVideo,
  addVideo,
} = require("../controlers/formation");
const { protect, authorize } = require("../middleware/auth");

router.route("/").get(protect, authorize("admin"), getAllFormations);
router.route("/").post(protect, authorize("admin"), addFormation);
router.route("/:id").put(protect, authorize("admin"), updateFormation);
router.route("/:id").delete(protect, authorize("admin"), deleteFormation);
router
  .route("/:id/photo")
  .put(protect, authorize("admin"), formationPhotoUpload);

// Videos
router.route("/videos").get(getAllVideo);
router.route("/:id/videos").post(addVideo);
module.exports = router;
