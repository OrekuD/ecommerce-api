exports.defaultRoute = (req, res, next) => {
  res.status(200).json({
    message: "Post request through",
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
  res.status(200).json({
    message: `Products GET request for ${id}`,
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

exports.addProducts = (req, res, next) => {
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
