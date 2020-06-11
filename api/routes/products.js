const express = require("express");
const ProductControllers = require("../controllers/productControllers");

const router = express.Router();

router.get("/", ProductControllers.getAllProducts);

router.get("/:id", ProductControllers.getProductById);

module.exports = router;
