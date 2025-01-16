const { default: mongoose } = require("mongoose");
const ProductInvoiceSchemaObject = require("./common/Product_invoiceSchema");

ProductInvoiceSchemaObject.Invoice_Id = {
  type: mongoose.Schema.Types.ObjectId,
  required: true,
  ref: "InvoiceMaster",
};

const ProductInvoiceSchema = new mongoose.Schema(ProductInvoiceSchemaObject);

// ProductInvoiceSchema.add({
// });

module.exports = mongoose.model("Invoice_Detail", ProductInvoiceSchema);
