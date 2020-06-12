const mongoose = require("mongoose");

const Orders = mongoose.Schema({
  _id: mongoose.Schema.Types.String,
  products: { type: mongoose.Schema.Types.Array, ref: "Product" },
});

module.exports = mongoose.model("Orders", Orders);
