const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Products GET request",
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Products POST request",
  });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Products GET request for ${id}`,
  });
});

module.exports = router;
