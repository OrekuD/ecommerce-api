const express = require("express");
const products = require("./api/products");

const app = express();

app.use("/products", products);

module.exports = app;
