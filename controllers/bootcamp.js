module.exports = {
  getAllBootcamps: async (req, res, next) => {
    res.status(200).json({ success: true, msg: "show all bootcamps" });
  },
  getBootcamp: async (req, res, next) => {
    res
      .status(200)
      .json({ success: true, msg: `get bootcamp ${req.params.id}` });
  },
  createBootcamp: async (req, res, next) => {
    res.status(200).json({ success: true, msg: "create new bootcamps" });
  },
  updateBootcamp: async (req, res, next) => {
    res
      .status(200)
      .json({ success: true, msg: `update bootcamp ${req.params.id}` });
  },
  deleteBootcamp: async (req, res, next) => {
    res
      .status(200)
      .json({ success: true, msg: `delete bootcamp ${req.params.id}` });
  },
};
