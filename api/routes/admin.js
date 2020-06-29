const express = require("express");
const router = express.Router();
const AdminControllers = require("../controllers/adminControllers");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./product_images/");
  },
  filename: function (req, file, callback) {
    callback(
      null,
      new Date().toISOString().replace(/:/g, "-") + file.originalname
    );
  },
});

const fileFilter = (req, file, callback) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.get("/", AdminControllers.defaultRoute);

router.get("/products", AdminControllers.getAllProducts);

router.post(
  "/products",
  upload.single("productImage"),
  AdminControllers.addProducts
);

router.get("/products/:id", AdminControllers.getProductById);

router.patch("/products/:id", AdminControllers.modifyProductById);

router.delete("/products:id", AdminControllers.deleteProduct);

router.get("/orders", AdminControllers.getAllOrders);

router.post("/orders", AdminControllers.addNewOrder);

module.exports = router;
