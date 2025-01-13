const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const tempInvoiceDetail = require("./src/api/tempInvoiceRoutes");
const productRoutes = require("./src/api/productRoutes");

dotenv.config();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("connected to mongoDB");
});

// Routes
app.use("/api/tempInvoiceDetails", tempInvoiceDetail);
app.use("/api/products", productRoutes);
// app.use("/api", invoiceRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});
// app.use("/product_details_temp");
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
