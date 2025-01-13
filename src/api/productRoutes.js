const express = require("express");
const router = express.Router();
const ProductMaster = require("../models/Product_master");

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await ProductMaster.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
