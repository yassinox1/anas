var mongoose = require("mongoose");

var VideoSchema = new mongoose.Schema(
  {
    filePath: {
      type: String,
      required: [true, "Please add a name"],
    },
  },
  {
    timestamps: true,
  }
);

//Image is a model which has a schema imageSchema

module.exports = new mongoose.model("Video", VideoSchema);
