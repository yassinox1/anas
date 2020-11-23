const Category = require("../models/FormationModel");
const Role = require("../models/RoleModel");
const Video = require("../models/VideoModel");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const path = require("path");
const fs = require("fs");

exports.getAllFormations = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.totalPage, 10) || 3;
  const endIndex = page * limit;
  const startIndex = (page - 1) * limit;
  const total = await Category.countDocuments();

  const allFormations = await Category.find();
  const formations = await Category.find().skip(startIndex).limit(limit);

  const pagination = {};

  if (endIndex < total) {
    pagination.next = { page: page + 1, limit };
  }
  if (startIndex > 0) {
    pagination.prev = { page: page - 1, limit };
  }

  res.status(200).json({
    totalResult: Math.ceil(allFormations.length / limit),
    pagination,
    total,
    success: true,
    formations,
  });
});

// @desc   Get Current USer
// @route  GET /api/v1/auth/me
// access  Private
exports.deleteFormation = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id).populate("videos");

  category.videos.map((item) => {
    fs.unlink(
      `${process.cwd()}` +
        process.env.VIDEO_FILE_UPLAOD_PATH +
        `/${item.filePath}`,
      async function (err) {
        if (err) {
          throw err;
        } else {
          await Video.findByIdAndDelete(item._id);
          console.log("deletedfile", item);
        }
      }
    );
  });
  category.remove();

  res.json(category);
});

exports.addFormation = asyncHandler(async (req, res, next) => {
  const roles = await Role.find();

  const f = roles.filter((value) => req.body.access.includes(value.role));

  const newcategory = await Category.create({
    title: req.body.title,
    access: f,
    description: req.body.description,
    image: "photo_5fa55c3ec2c38f2210514c84.png",
  });

  res.json(newcategory);
});

// @desc   Get Current USer
// @route  GET /api/v1/auth/me
// access  Private
exports.formationPhotoUpload = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return next(
      new ErrorResponse(`Category not Found With Id of  ${req.params.id}`, 404)
    );
  }

  if (!req.files) {
    return next(new ErrorResponse(`Please Upload a Fil  `, 400));
  }

  const file = req.files.file;

  // Make sure That the image is a aphoto
  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Please add a valid imafg `, 400));
  }

  // check files size
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an image las then ${process.env.MAX_FILE_UPLOAD} `,
        400
      )
    );
  }

  // Create Custom File Name
  file.name = `photo_${category._id}${path.parse(file.name).ext}`;

  file.mv(
    `${path.join(`${process.cwd()}`, process.env.IMAGES_FILE_UPLAOD_PATH)}/${
      file.name
    }`,
    async (err) => {
      if (err) {
        console.error(err);
        return next(new ErrorResponse(`Problem With File Upload`, 500));
      }

      await Category.findByIdAndUpdate(req.params.id, { image: file.name });

      res.status(200).json({
        success: true,
        data: file.name,
      });
    }
  );
});

exports.updateFormation = asyncHandler(async (req, res, next) => {
  const roles = await Role.find();

  const f = roles.filter((value) => req.body.access.includes(value.role));

  const newFormation = {
    title: req.body.title,
    access: f,
  };
  const newCategory = await Category.findByIdAndUpdate(
    req.params.id,
    newFormation,
    {
      new: true,
      runValidators: true,
    }
  );

  res.json(newCategory);
});

exports.getAllVideo = asyncHandler(async (req, res, next) => {
  const videos = await Video.find();

  res.json(videos);
});

exports.addVideo = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return res.status(400).json({ msg: "No Category Found" });
  }

  if (!req.files) {
    return next(new ErrorResponse(`Please Upload a Fil  `, 400));
  }

  const file = req.files.file;

  // Make sure That the Files is a Video
  if (!file.mimetype.startsWith("video")) {
    return next(new ErrorResponse(`Please add a valid Video `, 400));
  }

  file.mv(
    `${process.cwd()}` + process.env.VIDEO_FILE_UPLAOD_PATH + `/${file.name}`,
    async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      // const category = await Category.find({ title: "Deep Learning" });

      const video = await Video.create({
        formation: category,
        filePath: file.name,
      });

      category.videos.push(video._id);
      category.save();
      res.json({ fileName: file.name, title: req.params.title });
    }
  );
});
