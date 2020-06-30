const Product = require("../models/product");

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
      res.status(500).json({
        message: error,
      });
    });
};

exports.getAllProducts = (req, res, next) => {
  Product.find()
    .exec()
    .then((docs) => {
      res.status(200).json({
        products: docs,
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};
