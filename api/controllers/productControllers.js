exports.getAllProducts = (req, res, next) => {
  res.status(200).json({
    message: "Products GET request",
  });
};

exports.getProductById = (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Products GET request for ${id}`,
  });
};
