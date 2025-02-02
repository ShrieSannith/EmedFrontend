const mongoose = require("mongoose");

// Define the Product schema
const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageSrc: { type: String, required: true }, // URL or file path
});

module.exports = mongoose.model("Product", productSchema);
