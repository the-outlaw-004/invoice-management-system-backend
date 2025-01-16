const express = require("express");
const router = express.Router();
const InvoiceMaster = require("../models/Invoice_master");
const TempInvoiceDetail = require("../models/TempInvoiceDetail");
const ProductInvoices = require("../models/ProductInvoices");

const generateInvoiceNumber = () => {
  const now = new Date();
  return `INV${now.getFullYear()}${(now.getMonth() + 1)
    .toString()
    .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}-${Math.floor(
    Math.random() * 10000
  )}`;
};

// Create a new invoice
router.post("/", async (req, res) => {
  const productInvoices = req.body;
  if (!productInvoices || productInvoices.length === 0) {
    return res.status(400).json({ error: "Product invoices cannot be empty." });
  }
  const CustomerName = productInvoices[0]?.customer;
  if (!CustomerName) {
    return res
      .status(400)
      .json({ error: "Customer name is missing in product invoices." });
  }

  try {
    const CustomerName = productInvoices[0]?.customer;
    if (!CustomerName) {
      return res
        .status(400)
        .json({ error: "Customer name is missing in product invoices." });
    }

    // Calculate total amount
    const TotalAmount = productInvoices.reduce(
      (acc, item) => acc + parseInt(item.totalAmount),
      0
    );

    // Auto-generate Invoice_no and Invoice_Date
    const Invoice_no = generateInvoiceNumber();
    const Invoice_Date = new Date();

    // Create and save InvoiceMaster
    const invoiceMaster = new InvoiceMaster({
      Invoice_no,
      Invoice_Date,
      CustomerName,
      TotalAmount,
    });
    const savedInvoiceMaster = await invoiceMaster.save();

    // Save product invoices linked to the created invoice
    const productInvoicesWithInvoiceId = productInvoices.map((item) => {
      let obj = item;
      obj.Invoice_Id = savedInvoiceMaster._id;
      delete obj._id;
      // ...item,
      return obj;
    });

    await ProductInvoices.insertMany(productInvoicesWithInvoiceId);
    await TempInvoiceDetail.deleteMany();

    res.status(201).json({
      message: "Invoice and product details saved successfully",
      invoice: savedInvoiceMaster,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all invoices
router.get("/", async (req, res) => {
  try {
    const invoices = await InvoiceMaster.find();
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single invoice by ID
router.get("/:id", async (req, res) => {
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
module.exports = router;
