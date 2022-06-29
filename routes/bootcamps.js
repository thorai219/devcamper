const express = require('express');
const router = express.Router();
const bootcampController = require('../controllers/bootcamp');
const Bootcamp = require('../models/Bootcamp');
const advancedResults = require('../middlwares/advancedResults');

// include other resources
const courseRouter = require('./courses');

// re-route into other resources
router.use('/:bootcampId/courses', courseRouter);

router
  .route('/radius/:zipcode/:distance')
  .get(bootcampController.getBootcampsWithinRadius);

router
  .route('/')
  .get(advancedResults(Bootcamp, 'courses'), bootcampController.getBootcamps)
  .post(bootcampController.createBootcamp);

router
  .route('/:id')
  .get(bootcampController.getBootcamp)
  .put(bootcampController.updateBootcamp)
  .delete(bootcampController.deleteBootcamp);

router.route('/:id/photo').put(bootcampController.bootcampPhotoUpload);

module.exports = router;
