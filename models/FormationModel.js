const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  image: {
    type: String,
    required: [true, "Please add a name"],
  },
  title: {
    type: String,
    required: [true, "Please add a name"],
  },
  description: {
    type: String,
    required: [true, "Please add a Description"],
  },
  access: [
    {
      type: Schema.Types.ObjectId,
      ref: "Role",
    },
  ],
  videos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Category", CategorySchema);
