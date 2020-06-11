const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const products = require("./api/routes/products");
const orders = require("./api/routes/orders");
const search = require("./api/routes/search");
const wishlist = require("./api/routes/wishlist");
const admin = require("./api/routes/admin");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/products", products);
app.use("/orders", orders);
app.use("/search", search);
app.use("/wishlist", wishlist);
app.use("/admin", admin);

//Error handling
app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      code: error.status || 500,
    },
  });
});

module.exports = app;
