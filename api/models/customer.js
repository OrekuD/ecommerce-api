const mongoose = require("mongoose");

const Customer = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: String,
  lastName: String,
  email: String,
  wishlist: Array,
});

module.exports = mongoose.model("Customer", Customer);
