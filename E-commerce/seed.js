require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

async function seed() {
  await Product.deleteMany({});
  await Product.insertMany([
    {
      name: 'T-Shirt',
      price: 20,
      category: 'Clothing',
      variants: [
        { color: 'Red', size: 'M', stock: 10 },
        { color: 'Blue', size: 'L', stock: 5 }
      ]
    },
    {
      name: 'Sneakers',
      price: 50,
      category: 'Footwear',
      variants: [
        { color: 'Black', size: '42', stock: 8 },
        { color: 'White', size: '41', stock: 3 }
      ]
    },
    {
      name: 'Backpack',
      price: 35,
      category: 'Accessories',
      variants: [
        { color: 'Green', size: 'Standard', stock: 7 }
      ]
    }
  ]);
  console.log('Seeded sample products!');
  mongoose.disconnect();
}

seed();