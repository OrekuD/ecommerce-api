const express = require("express");
const Product = require("../models/product");

const router = express.Router();

router.post("/", (req, res, next) => {
  const searchTerm = req.body.searchTerm;
  res.status(200).json({
    message: "post request to orders",
  });

  // TODO: Regex matching of string
});

module.exports = router;
