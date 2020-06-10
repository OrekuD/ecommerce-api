const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Get request to orders",
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "post request to orders",
  });
});

module.exports = router;
