const express = require("express");
const router = express.Router();
const TempInvoiceDetail = require("../models/TempInvoiceDetail");

// Create a new TempInvoiceDetail
router.post("/", async (req, res) => {
  try {
    const tempInvoiceDetail = new TempInvoiceDetail(req.body);
    await tempInvoiceDetail.save();
    res.status(201).json(tempInvoiceDetail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all TempInvoiceDetails
router.get("/", async (req, res) => {
  try {
    const tempInvoiceDetails = await TempInvoiceDetail.find();
    res.status(200).json(tempInvoiceDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a TempInvoiceDetail by ID
router.delete("//:id", async (req, res) => {
  try {
    const tempInvoiceDetail = await TempInvoiceDetail.findByIdAndDelete(
      req.params.id
    );
    if (!tempInvoiceDetail) {
      return res.status(404).json({ message: "TempInvoiceDetail not found" });
    }
    res.status(200).json({ message: "TempInvoiceDetail deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
