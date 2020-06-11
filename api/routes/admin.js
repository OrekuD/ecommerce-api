const express = require("express");
const router = express.Router();
const AdminControllers = require("../controllers/adminControllers");

router.get("/", AdminControllers.defaultRoute);

router.get("/products", AdminControllers.getAllProducts);

router.post("/products", AdminControllers.addProducts);

router.get("/products/:id", AdminControllers.getProductById);

router.patch("/products/:id", AdminControllers.modifyProductById);

router.delete("/products:id", AdminControllers.deleteProduct);

router.get("/orders", AdminControllers.getAllOrders);

router.post("/orders", AdminControllers.addNewOrder);

module.exports = router;
