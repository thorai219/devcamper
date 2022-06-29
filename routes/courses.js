const express = require('express');
const coursesController = require('../controllers/courses');
const Course = require('../models/Course');
const advancedResults = require('../middlwares/advancedResults');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(
    advancedResults(Course, {
      path: 'bootcamp',
      select: 'name description',
    }),
    coursesController.getCourses
  )
  .post(coursesController.addCourse);

router
  .route('/:id')
  .get(coursesController.getCourse)
  .put(coursesController.updateCourse)
  .delete(coursesController.deleteCourse);

module.exports = router;
