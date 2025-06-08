require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Uncomment if using Cloudinary
// const cloudinary = require("cloudinary").v2;
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

const app = express();

// CORS middleware — अपने React या frontend का URL डालें
app.use(cors({
  origin: 'http://localhost:3000'   // अगर frontend अलग पोर्ट या डोमेन पर हो तो यहाँ बदलें
}));

app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Product Schema and Model
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    discount: { type: Number, min: 0, default: 0 },
    discountAmount: { type: Number, min: 0, default: 0 },
    description: { type: String, trim: true, default: "" },
    imageUrl: { type: String, required: true },
    // cloudinaryPublicId: { type: String },
  },
  { timestamps: true } // createdAt, updatedAt automatically managed
);

const Product = mongoose.model("Product", productSchema);

// Routes

// GET all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    console.error("GET /api/products error:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

// GET product by ID
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    console.error("GET /api/products/:id error:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

// POST create new product
app.post("/api/products", async (req, res) => {
  try {
    const { name, price, discount, discountAmount, description, imageUrl } =
      req.body;

    if (!name || !price || !imageUrl) {
      return res
        .status(400)
        .json({ message: "Name, Price and Image URL are required." });
    }

    const product = new Product({
      name,
      price,
      discount: discount || 0,
      discountAmount: discountAmount || 0,
      description: description || "",
      imageUrl,
    });

    await product.save();
    res.status(201).json({ message: "✅ Product saved successfully!", product });
  } catch (err) {
    console.error("POST /api/products error:", err);
    res.status(500).json({ message: "❌ Error saving product" });
  }
});

// PUT update existing product by ID
app.put("/api/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const updateData = req.body;

    const product = await Product.findById(productId);
    if (!product)
      return res.status(404).json({ message: "Product not found" });

    // Update only provided fields
    Object.keys(updateData).forEach((key) => {
      product[key] = updateData[key];
    });

    await product.save();
    res.json({ message: "Product updated successfully", product });
  } catch (error) {
    console.error("PUT /api/products/:id error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE product by ID
app.delete("/api/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    // Uncomment if you want to delete from Cloudinary as well
    // if (product.cloudinaryPublicId) {
    //   await cloudinary.uploader.destroy(product.cloudinaryPublicId);
    // }

    await Product.findByIdAndDelete(productId);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("DELETE /api/products/:id error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Health check route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
