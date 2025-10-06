const express = require('express');
const mongoose = require('mongoose');
const productsRouter = require('./routes/products');

const app = express();

// Middleware
app.use(express.json());

// MongoDB Atlas connection string (replace <YOUR_CONNECTION_STRING> below)
const mongoURI = 'mongodb+srv://HarshBardhanSingh571:Eg9-ZWwXQX9P9@cluster0.t2ywdgf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });

// Routes
app.use('/api/products', productsRouter);

// Error handler (for unexpected errors)
app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Something went wrong', details: err.message });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});