require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// ✅ CORS Configuration - allow localhost and GitHub Pages
app.use(cors({
  origin: ["http://localhost:3000", "https://barkatprint.github.io"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: false,
}));

app.use(express.json());

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Product Schema and Model
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    discount: { type: Number, min: 0, default: 0 },
    discountAmount: { type: Number, min: 0, default: 0 },
    description: { type: String, trim: true, default: "" },
    imageUrl: { type: String, required: true },
    category: { type: String, trim: true }, // ✅ Add category field for filtering
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

// ✅ Routes

// Get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    console.error("GET /api/products error:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

// Get product by ID
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    console.error("GET /api/products/:id error:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

// Create new product
app.post("/api/products", async (req, res) => {
  try {
    const {
      name,
      price,
      discount,
      discountAmount,
      description,
      imageUrl,
      category,
    } = req.body;

    if (!name || !price || !imageUrl) {
      return res.status(400).json({ message: "Name, Price, and Image URL are required." });
    }

    const product = new Product({
      name,
      price,
      discount: discount || 0,
      discountAmount: discountAmount || 0,
      description: description || "",
      imageUrl,
      category: category || "", // ✅ add category if provided
    });

    await product.save();
    res.status(201).json({ message: "✅ Product saved successfully!", product });
  } catch (err) {
    console.error("POST /api/products error:", err);
    res.status(500).json({ message: "❌ Error saving product" });
  }
});

// Update existing product
app.put("/api/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const updateData = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    Object.keys(updateData).forEach((key) => {
      product[key] = updateData[key];
    });

    await product.save();
    res.json({ message: "✅ Product updated successfully", product });
  } catch (err) {
    console.error("PUT /api/products/:id error:", err);
    res.status(500).json({ message: "❌ Server error" });
  }
});

// Delete product
app.delete("/api/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    await Product.findByIdAndDelete(productId);
    res.json({ message: "✅ Product deleted successfully" });
  } catch (err) {
    console.error("DELETE /api/products/:id error:", err);
    res.status(500).json({ message: "❌ Server error" });
  }
});

// Health check route
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
