const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const tempInvoiceDetail = require("./src/api/tempInvoiceRoutes");
const productRoutes = require("./src/api/productRoutes");
const invoice_masterRoutes = require("./src/api/invoice_masterRoutes");
const productInvoiceRoutes = require("./src/api/productInvoiceRoutes");

dotenv.config();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("connected to mongoDB");
});

// Routes
app.use("/api/tempInvoiceDetails", tempInvoiceDetail);
app.use("/api/invoice", invoice_masterRoutes);
app.use("/api/products", productRoutes);
app.use("/api/productInvoice", productInvoiceRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});
// app.use("/product_details_temp");
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
