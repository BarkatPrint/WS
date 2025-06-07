const express = require('express');
const router = express.Router();

// Sample static product data
const products = [
  { id: 1, name: "Charger Type-C", price: 150 },
  { id: 2, name: "Vivo Battery", price: 200 },
  { id: 3, name: "iPhone Cover", price: 100 }
];

// GET /api/products
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
