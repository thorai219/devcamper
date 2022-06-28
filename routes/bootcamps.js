const express = require('express');
const router = express.Router();
const bootcampController = require('../controllers/bootcamp');

router
  .route('/radius/:zipcode/:distance')
  .get(bootcampController.getBootcampsWithinRadius);

router
  .route('/')
  .get(bootcampController.getBootcamps)
  .post(bootcampController.createBootcamp);

router
  .route('/:id')
  .get(bootcampController.getBootcamp)
  .put(bootcampController.updateBootcamp)
  .delete(bootcampController.deleteBootcamp);

module.exports = router;
