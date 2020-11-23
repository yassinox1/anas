const User = require("../models/UserModel");
const Role = require("../models/RoleModel");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

// @desc   Register New User && Returning JWT Token
// @route  POST /api/v1/auth/register
// access  Public
exports.register = asyncHandler(async (req, res, next) => {
  const newRole = await Role.findOne({ role: req.body.role });

  const user = await User.findOne({ email: req.body.email });

  if (user) {
    next(new ErrorResponse("User Aleardy Exist"), 400);
  }

  /*const avatar = gravatar.url(email, {
    s: '200', // Size
    r: 'pg', // rating
    d: 'mm', // default
  });*/
  const newR = { ...req.body, role: newRole };

  // Create New User
  const newUser = await User.create(newR);
  //Create Token
  sendTokenResponse(newUser, 201, res);
});

// @desc   Login User && Returning JWT Token
// @route  POST /api/v1/auth/login
// access  Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validation email & password
  if (!email || !password) {
    return next(new ErrorResponse("Please Provide an email and password", 400));
  }

  const user = await await User.findOne({ email })
    //  .select("+password")
    .populate({
      path: "role",
      select: "role",
    });

  if (!user) {
    return next(new ErrorResponse("Invalid Cridental", 401));
  }

  //Check if Password Matched
  const isMatchPassword = user.matchPassword(password);
  if (!isMatchPassword) {
    //return next(new ErrorResponse("Invalid Cridental", 401));
    return res.status(401).json({ error: "Invalid cridental" });
  }

  sendTokenResponse(user, 200, res);
});

// @desc   Logout  User / clear cookie
// @route  GET /api/v1/auth/logout
// access  Private

exports.logout = asyncHandler(async (req, res, next) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc   Get Current USer
// @route  GET /api/v1/auth/me
// access  Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    success: true,
    user,
  });
});

// Get Token From Model and create Cookie and send response
const sendTokenResponse = async (user, statusCode, res) => {
  const token = user.getSignedJwtToken();

  /* const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }*/

  res.status(statusCode).json({
    success: true,
    token,
    user,
  });
};
