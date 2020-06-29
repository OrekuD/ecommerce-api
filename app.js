const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const products = require("./api/routes/products");
const orders = require("./api/routes/orders");
const search = require("./api/routes/search");
const wishlist = require("./api/routes/wishlist");
const admin = require("./api/routes/admin");

mongoose.connect(
  "mongodb://OrekuD:" +
    process.env.MONGO_PWD +
    "@node-ecommerce-api-shard-00-00-9jaqz.mongodb.net:27017,node-ecommerce-api-shard-00-01-9jaqz.mongodb.net:27017,node-ecommerce-api-shard-00-02-9jaqz.mongodb.net:27017/<dbname>?ssl=true&replicaSet=node-ecommerce-api-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/product_images", express.static("product_images"));

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
