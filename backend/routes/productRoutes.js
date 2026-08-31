const express = require("express");

const {
  getProducts,
  createProduct,
} = require("../controllers/productController");

const router = express.Router();

// GET all products
router.get("/", getProducts);

// POST new product
router.post("/", createProduct);

module.exports = router;