const express = require("express");
const router = express.Router();
const bootcampController = require("../controllers/bootcamp");

router
  .route("/")
  .get(bootcampController.getAllBootcamps)
  .post(bootcampController.createBootcamp);

router
  .route("/:id")
  .get(bootcampController.getBootcamp)
  .put(bootcampController.updateBootcamp)
  .delete(bootcampController.deleteBootcamp);

module.exports = router;
