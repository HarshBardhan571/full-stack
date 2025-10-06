const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters"]
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: [0, "Price must be non-negative"]
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    trim: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);