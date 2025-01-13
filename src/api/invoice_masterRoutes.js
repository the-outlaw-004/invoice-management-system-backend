const express = require("express");
const router = express.Router();
const InvoiceMaster = require("../models/Invoice_master");

// Create a new invoice
router.post("/invoices", async (req, res) => {
  try {
    const invoice = new InvoiceMaster(req.body);
    await invoice.save();
    res.status(201).json(invoice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all invoices
router.get("/invoices", async (req, res) => {
  try {
    const invoices = await InvoiceMaster.find();
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single invoice by ID
router.get("/invoices/:id", async (req, res) => {
  try {
    const invoice = await InvoiceMaster.findById(req.params.id);
    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an invoice by ID
router.put("/invoices/:id", async (req, res) => {
  try {
    const invoice = await InvoiceMaster.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }
    res.status(200).json(invoice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an invoice by ID
router.delete("/invoices/:id", async (req, res) => {
  try {
    const invoice = await InvoiceMaster.findByIdAndDelete(req.params.id);
    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }
    res.status(200).json({ message: "Invoice deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
