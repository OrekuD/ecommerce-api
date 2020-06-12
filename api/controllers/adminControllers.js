const mongoose = require("mongoose");
const Product = require("../models/product");

exports.defaultRoute = (req, res, next) => {
  res.status(200).json({
    message: "Post request through",
  });
};

exports.addProducts = (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });

  product
    .save()
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

  res.status(200).json({
    message: `Admin Products Post request succesfull`,
    product: product,
  });
};

exports.getAllProducts = (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  };

  res.status(200).json({ status: 200, product });
};

exports.getProductById = (req, res, next) => {
  const id = req.params.id;
  Product.findById(id)
    .exec()
    .then((doc) => {
      res.status(200).json({
        product: doc,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({});
    });
};

exports.modifyProductById = (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Admin Products PATCH request for ${id}`,
  });
};

exports.deleteProduct = (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Admin Products DELETE request for ${id}`,
  });
};

exports.getAllOrders = (req, res, next) => {
  res.status(200).json({
    message: "Get request to admin orders",
  });
};

exports.addNewOrder = (req, res, next) => {
  res.status(200).json({
    message: "post request to admin orders",
  });
};
