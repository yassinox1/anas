const Role = require("../models/RoleModel");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

exports.getRoles = asyncHandler(async (req, res, next) => {
  const roles = await Role.find();

  if (!roles) {
    next(new ErrorResponse("roles not exist", 404));
  }
  res.json(roles);
});

exports.getRolesByName = asyncHandler(async (req, res, next) => {
  const role = await Role.findOne({ role: req.params.roleName });

  if (!role) {
    next(new ErrorResponse("roles not exist", 404));
  }
  res.json(role);
});
exports.addRole = asyncHandler(async (req, res, next) => {
  const role = await Role.create(req.body);
  res.json(role);
});

exports.deleteRole = asyncHandler(async (req, res, next) => {
  const deletedRole = await Role.findByIdAndDelete(req.params.id);
  res.json(deletedRole);
});
