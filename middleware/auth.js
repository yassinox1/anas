const jwt = require("jsonwebtoken");
const asyncHandler = require("./async");
const errorResponse = require("../utils/errorResponse");
const User = require("../models/UserModel");
const speakeasy = require("speakeasy");
const qrcode = require("qrcode");
const { populate } = require("../models/UserModel");
//sjsh
// Protect Route
exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization // &&req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization; //.split(" ")[1];
  }

  // Make Sure token Exists
  if (!token) {
    next(new errorResponse("Not Authorize to access this Route", 401));
  }

  try {
    // Verify Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).populate({
      path: "role",
      select: "role",
    });

    if (!req.user.status) {
      next(new errorResponse("Not Validate Yet", 401));
    }

    next();
  } catch (err) {
    next(new errorResponse("Not Authorize to access this Route", 401));
  }
});

// Grant access to specefic Route
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role.role)) {
      return next(
        new errorResponse(
          `the User with Role ${req.user.role.role} not authorize to acesse to this Route`,
          403
        )
      );
    }
    next();
  };
};

// 2 factors Securite
exports.urlencoded = () => {
  var user = {
    two_factor_temp_secret: null,
    two_factor_secret: null,
    two_factor_enabled: false,
  };

  router.get("/2fa", function (req, res) {
    //generate secret for a user
    var secret = speakeasy.generateSecret();

    user.two_factor_temp_secret = secret.base32;
    qrcode.toDataURL(secret.otpauth_url, function (err, data_url) {
      res.send('<img src="' + data_url + '">');
    });
  });
};
