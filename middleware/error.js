const ErrorResponse = require("../utils/errorResponse");
const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  // log to console for dev
  //console.log(err.stack.dev);

  //Mongoose bad ObjectId
  if (err.name === "CastError") {
    const message = `Ressource  not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }
  if (err.name === "MongoError") {
    const message = `Duplicated Field Entred`;
    error = new ErrorResponse(message, 404);
  }
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 404);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

module.exports = errorHandler;
