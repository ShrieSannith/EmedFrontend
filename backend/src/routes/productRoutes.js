const express = require("express");
const Product = require("../models/product");

const router = express.Router();

// POST route to add a new product
router.post("/add", async (req, res) => {
  try {
    const { id, name, description, imageSrc } = req.body;

    // Validation
    if (!id || !name || !description || !imageSrc) {
      return res
        .status(400)
        .json({ error: "All fields (id, name, description, imageSrc) are required" });
    }

    // Check for duplicate ID
    const existingProduct = await Product.findOne({ id });
    if (existingProduct) {
      return res.status(400).json({ error: "A product with this ID already exists" });
    }

    // Create and save the product
    const product = new Product({ id, name, description, imageSrc });
    await product.save();

    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET route to fetch product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
