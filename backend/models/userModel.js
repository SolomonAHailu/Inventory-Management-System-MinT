const mongoose = require("mongoose");

// User schema
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please add first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please add second name"],
  },
  emailAddress: {
    type: String,
    required: [true, "Please add email"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid email",
    ],
  },
  phoneNumber: {
    type: Number,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Please add password"],
    minLength: [6, "Must be at least 6 characters"],
    maxLength: [23, "Must be at most 23 characters"],
  },
  role: {
    type: String,
    enum: ["admin", "user", "manager", "head", "keeper"],
    required: [true, "Please add a role"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isManager: {
    type: Boolean,
    default: false,
  },
  isStoreHead: {
    type: Boolean,
    default: false,
  },
  isStoreKeeper: {
    type: Boolean,
    default: false,
  },
  history: [],
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
