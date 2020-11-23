const User = require("../models/UserModel");
const Category = require("../models/FormationModel");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Role = require("../models/RoleModel");
exports.getUsers = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.totalPage, 10) || 4;
  const skip = (page - 1) * limit;

  const allUsers = await User.find();
  const users = await User.find().skip(skip).limit(limit);

  res.status(200).json({
    totalResult: Math.ceil(allUsers.length / limit),
    success: true,
    users,
  });
});

exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json(user);
});

exports.createUser = asyncHandler(async (req, res, next) => {
  console.log("req.bidy", req.body);
  const newRole = await Role.findOne({ role: req.body.role });

  const newR = { ...req.body, role: newRole };

  // Create New User
  const newUser = await User.create(newR);
  // const user = await User.create(newUser);
  console.log("new user", newUser);
  res.status(201).json(newUser);
});

exports.updateUser = asyncHandler(async (req, res, next) => {
  let newR;
  if (req.body.role !== null) {
    const newRole = await Role.findById(req.body.role);

    newR = { ...req.body, role: newRole };
  } else {
    console.log("dd");
    newR = { ...req.body };
  }

  const user = await User.findByIdAndUpdate(req.params.id, newR, {
    new: true,
    runValidators: true,
  });
  res.json({ status: 200, user });
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);

  res.status(200).json({ user });
});

// @desc   Get   Categorys for specefic user
// @route  GET /api/v1/category
// access  Private
exports.getFormations = asyncHandler(async (req, res, next) => {
  //const page = parseInt(req.query.page, 10) || 1;
  //const limit = parseInt(req.query.totalPage, 10) || 6;
  //const skip = (page - 1) * limit;

  const role = req.user.role.role;
  const AllFormations = await Category.find();

  if (role !== "admin") {
    const Formations = AllFormations.filter((item) =>
      item.access.includes(req.user.role._id)
    );

    res.status(200).json({
      totalResult: Formations.length,
      success: true,
      Formations,
    });
  } else {
    const Formations = await Category.find().populate("videos");
    console.log("rara", Formations);
    res.status(200).json({
      totalResult: Formations.length,
      success: true,
      Formations,
    });
  }
});
