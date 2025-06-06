// server.js या app.js (Node.js backend)
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // frontend से आने वाले requests को allow करता है
app.use(express.json());

app.get("/api/products", (req, res) => {
  // dummy data भेज रहे हैं
  res.json([
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
