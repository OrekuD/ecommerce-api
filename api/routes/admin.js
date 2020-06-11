const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Post request through",
  });
});

router.post("/products", (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  };

  res.status(200).json({ status: 200, product });
});

router.get("/products/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Products GET request for ${id}`,
  });
});

router.patch("/products/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Admin Products PATCH request for ${id}`,
  });
});

router.delete("/products:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Admin Products DELETE request for ${id}`,
  });
});

router.get("/orders", (req, res, next) => {
  res.status(200).json({
    message: "Get request to admin orders",
  });
});

router.post("/orders", (req, res, next) => {
  res.status(200).json({
    message: "post request to admin orders",
  });
});

module.exports = router;
