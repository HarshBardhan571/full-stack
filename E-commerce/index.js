require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB connection error:', err));

// GET all products
app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// GET products by category
app.get('/products/category/:category', async (req, res) => {
  const products = await Product.find({ category: req.params.category });
  res.json(products);
});

// GET all variants for a product (project only variant details)
app.get('/products/:id/variants', async (req, res) => {
  const product = await Product.findById(req.params.id).select('variants');
  res.json(product ? product.variants : []);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));