require("dotenv").config(); // .env से env variables पढ़ने के लिए
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB कनेक्शन (deprecated options हटाए गए हैं)
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// 📦 Product Schema और Model
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number },
  discountAmount: { type: Number },
  description: { type: String },
  imageUrl: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

// 📥 GET - सभी Products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// 📤 POST - नया Product जोड़ना
app.post("/api/products", async (req, res) => {
  const { name, price, discount, discountAmount, description, imageUrl } = req.body;

  if (!name || !price || !imageUrl) {
    return res.status(400).json({ message: "Name, Price and Image URL are required." });
  }

  try {
    const product = new Product({
      name,
      price,
      discount,
      discountAmount,
      description,
      imageUrl,
    });

    await product.save();
    res.status(201).json({ message: "✅ Product saved successfully!" });
  } catch (err) {
    res.status(500).json({ message: "❌ Error saving product" });
  }
});

// 🟢 Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
