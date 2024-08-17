const express = require('express');
const router = express.Router();

exports.getProducts = async (req, res) => {
  try {
    const products = await squareApi.getProducts();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};