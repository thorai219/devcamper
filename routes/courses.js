const express = require('express');
const coursesController = require('../controllers/courses');
const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(coursesController.getCourses)
  .post(coursesController.addCourse);

router
  .route('/:id')
  .get(coursesController.getCourse)
  .put(coursesController.updateCourse)
  .delete(coursesController.deleteCourse);

module.exports = router;
