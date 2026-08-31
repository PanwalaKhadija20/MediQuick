const Product = require("../models/Product");

// GET all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category");

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

// POST a new product
const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      image,
      category,
      stock,
      manufacturer,
    } = req.body;

    const product = await Product.create({
      name,
      description,
      price,
      image,
      category,
      stock,
      manufacturer,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create product",
      error: error.message,
    });
  }
};

module.exports = {
  getProducts,
  createProduct,
};