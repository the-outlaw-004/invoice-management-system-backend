const mongoose = require("mongoose");

const ProductInvoiceSchemaObject = {
  invoiceDetail_id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  customer: {
    type: String,
    required: true,
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "ProductMaster",
  },
  rate: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  disc_percentage: {
    type: Number,
    default: 0,
  },
  netAmount: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
};

module.exports = ProductInvoiceSchemaObject;
