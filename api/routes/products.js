const express = require("express");
const ProductControllers = require("../controllers/productControllers");
const GlobalControllers = require("../controllers/globalControllers");

const router = express.Router();

router.get("/", GlobalControllers.getAllProducts);

router.get("/:id", GlobalControllers.getProductById);

module.exports = router;
