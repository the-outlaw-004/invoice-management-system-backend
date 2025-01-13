const mongoose = require("mongoose");

const InvoiceMasterSchema = new mongoose.Schema({
  Invoice_Id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true, // Automatically generate a unique ID
  },
  Invoice_no: {
    type: String,
    required: true,
    unique: true, // Ensure invoice numbers are unique
  },
  Invoice_Date: {
    type: Date,
    required: true,
  },
  CustomerName: {
    type: String,
    required: true,
  },
  TotalAmount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("InvoiceMaster", InvoiceMasterSchema);
