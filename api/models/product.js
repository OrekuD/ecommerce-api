const mongoose = require("mongoose");

const Product = mongoose.Schema({
  _id: mongoose.Schema.Types.String,
  name: String,
  price: Number,
});

module.exports = mongoose.model("Product", Product);