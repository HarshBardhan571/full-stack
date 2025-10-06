const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
  color: String,
  size: String,
  stock: Number
}, { _id: false });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: Number,
  category: String,
  variants: [variantSchema]
});

module.exports = mongoose.model('Product', productSchema);