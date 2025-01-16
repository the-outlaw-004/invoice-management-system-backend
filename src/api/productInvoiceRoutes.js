const express = require("express");
const router = express.Router();
const ProductInvoice = require("../models/ProductInvoices");

// Create a new ProductInvoice
router.post("/", async (req, res) => {
  try {
    const productInvoiceDetail = new ProductInvoice(req.body);
    await productInvoiceDetail.save();
    res.status(201).json(productInvoiceDetail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const productInvoiceDetails = await ProductInvoice.find();
    res.status(200).json(productInvoiceDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single ProductInvoice by ID
router.get("//:id", async (req, res) => {
  try {
    const productInvoiceDetail = await ProductInvoice.findById(
      req.params.id
    ).populate("Product_Id");
    if (!productInvoiceDetail) {
      return res.status(404).json({ message: "ProductInvoice not found" });
    }
    res.status(200).json(productInvoiceDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a ProductInvoice by ID
router.delete("//:id", async (req, res) => {
  try {
    const productInvoiceDetail = await ProductInvoice.findByIdAndDelete(
      req.params.id
    );
    if (!productInvoiceDetail) {
      return res.status(404).json({ message: "ProductInvoice not found" });
    }
    res.status(200).json({ message: "ProductInvoice deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
