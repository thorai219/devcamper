const Bootcamp = require('../models/Bootcamp');
const asyncHandler = require('../middlwares/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');

module.exports = {
  getAllBootcamps: asyncHandler(async (req, res, next) => {
    const allBootcamps = await Bootcamp.find();

    res.status(200).json({
      success: true,
      count: allBootcamps.length,
      data: allBootcamps,
    });
  }),

  getBootcamp: asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findById({ _id: req.params.id });

    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: bootcamp });
  }),

  createBootcamp: asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  }),

  updateBootcamp: asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: bootcamp });
  }),

  deleteBootcamp: asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: {} });
  }),
};
