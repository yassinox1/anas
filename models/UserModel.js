const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Please add Your First Name"],
  },
  lastName: {
    type: String,
    required: [true, "Please add Your Last Name"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false,
  },

  role: {
    type: Schema.Types.ObjectId,
    ref: "Role",
  },

  avatar: {
    type: String,
  },
  status: { type: Boolean, default: false },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Match User entred Password to HAched Password in Database
UserSchema.methods.matchPassword = async function (entredPassword) {
  return await bcrypt.compare(entredPassword, this.password);
};

//Sign Token

UserSchema.methods.getSignedJwtToken = function () {
  const payload = { id: this._id, user: this };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
  return token;
};

module.exports = mongoose.model("User", UserSchema);
