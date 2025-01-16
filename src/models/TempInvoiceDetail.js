const mongoose = require("mongoose");

const ProductInvoiceSchemaObject = require("./common/Product_invoiceSchema");

const TempSchema = new mongoose.Schema(ProductInvoiceSchemaObject);

module.exports = mongoose.model("TempInvoiceDetail", TempSchema);
