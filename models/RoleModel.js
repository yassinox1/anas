var mongoose = require("mongoose");

var RoleSchema = new mongoose.Schema(
  {
    role: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = new mongoose.model("Role", RoleSchema);
