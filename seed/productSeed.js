const mongoose = require("mongoose");
const ProductMaster = require("../src/models/Product_master");

const seedProducts = async () => {
  const products = [
    { name: "Product A", rate: 100, unit: "kg" },
    { name: "Product B", rate: 200, unit: "liters" },
    { name: "Product C", rate: 150, unit: "pieces" },
  ];

  try {
    await ProductMaster.deleteMany(); // Clear existing products
    await ProductMaster.insertMany(products);
    console.log("Product seed data inserted successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding product data:", error);
    process.exit(1);
  }
};

// Connect to MongoDB and seed data
mongoose
  .connect("mongodb://localhost:27017/invoice-management-system", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    seedProducts();
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
