const Product = require("../models/Product");

// GET all products
const getProducts = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = "",
      sortBy = "createdAt",
      sortOrder = "desc",
    } = req.query;

    const pageNumber = Math.max(Number(page), 1);
    const limitNumber = Math.max(Number(limit), 1);

    // Search
    const filter = {};

    if (search) {
      filter.name = {
        $regex: search,
        $options: "i",
      };
    }

    // Sorting
    const allowedSortFields = ["createdAt", "price", "name"];

    const sortField = allowedSortFields.includes(sortBy)
      ? sortBy
      : "createdAt";

    const sortDirection = sortOrder === "asc" ? 1 : -1;

    const total = await Product.countDocuments(filter);

    const products = await Product.find(filter)
      .populate("categories")
      .sort({ [sortField]: sortDirection })
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber);

    // Convert MongoDB product to Admin format
    const items = products.map((product) => ({
      id: product._id.toString(),
      name: product.name,
      slug: product.name.toLowerCase().replace(/\s+/g, "-"),
      description: product.description || "",
      price: product.price,
      currency: "INR",
      sku: product._id.toString(),
      imageUrl: product.image || null,
      categoryId:
        product.categories && product.categories.length > 0
          ? product.categories[0]._id.toString()
          : null,
      isActive: product.stock > 0,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    }));

    res.status(200).json({
      items,
      total,
      page: pageNumber,
      limit: limitNumber,
      totalPages: Math.ceil(total / limitNumber),
    });
  } catch (error) {
    console.error("Get products error:", error);

    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

// GET single product
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "categories"
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const response = {
      id: product._id.toString(),
      name: product.name,
      slug: product.name.toLowerCase().replace(/\s+/g, "-"),
      description: product.description || "",
      price: product.price,
      currency: "INR",
      sku: product._id.toString(),
      imageUrl: product.image || null,
      categoryId:
        product.categories && product.categories.length > 0
          ? product.categories[0]._id.toString()
          : null,
      isActive: product.stock > 0,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch product",
      error: error.message,
    });
  }
};

// CREATE product
const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      imageUrl,
      categoryId,
    } = req.body;

    const product = await Product.create({
      name,
      description,
      price,
      image: imageUrl || "",
      categories: categoryId ? [categoryId] : [],
      stock: 1,
    });

    const response = {
      id: product._id.toString(),
      name: product.name,
      slug: product.name.toLowerCase().replace(/\s+/g, "-"),
      description: product.description || "",
      price: product.price,
      currency: "INR",
      sku: product._id.toString(),
      imageUrl: product.image || null,
      categoryId: categoryId || null,
      isActive: product.stock > 0,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };

    res.status(201).json(response);
  } catch (error) {
    console.error("Create product error:", error);

    res.status(500).json({
      message: "Failed to create product",
      error: error.message,
    });
  }
};

// UPDATE product
const updateProduct = async (req, res) => {
  try {
    const { name, description, price, imageUrl, categoryId } = req.body;

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    if (name !== undefined) product.name = name;
    if (description !== undefined) product.description = description;
    if (price !== undefined) product.price = price;
    if (imageUrl !== undefined) product.image = imageUrl;

    if (categoryId !== undefined) {
      product.categories = categoryId ? [categoryId] : [];
    }

    await product.save();

    const response = {
      id: product._id.toString(),
      name: product.name,
      slug: product.name.toLowerCase().replace(/\s+/g, "-"),
      description: product.description || "",
      price: product.price,
      currency: "INR",
      sku: product._id.toString(),
      imageUrl: product.image || null,
      categoryId: categoryId || null,
      isActive: product.stock > 0,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Update product error:", error);

    res.status(500).json({
      message: "Failed to update product",
      error: error.message,
    });
  }
};

// DELETE product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete product",
      error: error.message,
    });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};