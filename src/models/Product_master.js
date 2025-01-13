const mongoose = require("mongoose");

const ProductMasterSchema = new mongoose.Schema({
  // product_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   auto: true,
  // },
  name: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ProductMaster", ProductMasterSchema);
