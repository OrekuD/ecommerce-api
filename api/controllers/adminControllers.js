const mongoose = require("mongoose");
const Product = require("../models/product");
const Orders = require("../models/orders");

exports.defaultRoute = (req, res, next) => {
  res.status(200).json({
    message: "Default get route",
  });
};

exports.addProducts = (req, res, next) => {
  // console.log(req.file);
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    productImage: req.file.path,
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

exports.modifyProductById = (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Admin Products PATCH request for ${id}`,
  });
};

exports.deleteProduct = (req, res, next) => {
  const id = req.params.id;
  Product.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Deletion succesfull",
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};

exports.deleteAllProducts = (req, res, next) => {
  Product.remove({})
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "All products deleted succesfully",
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};

exports.getAllOrders = (req, res, next) => {
  Orders.find()
    .exec()
    .then((docs) => {
      res.status(200).json({
        orders: docs,
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};

exports.addNewOrder = (req, res, next) => {
  res.status(200).json({
    message: "post request to admin orders",
  });
};
