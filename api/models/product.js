const mongoose = require("mongoose");

const Product = mongoose.Schema({
  _id: mongoose.Schema.Types.String,
  name: { type: String, required: true },
  price: { type: Number, required: true },
  specifications: Array,
  productImage: { type: String, required: true },
});

module.exports = mongoose.model("Product", Product);
