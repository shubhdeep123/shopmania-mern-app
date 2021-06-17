const express = require("express");
const dotenv = require("dotenv");
const products = require("../backend/data/products");

dotenv.config();

const app = express();

app.get("/", (req, res, next) => {
  res.send("API is running here");
});

app.get("/api/products", (req, res, next) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res, next) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`);
});
