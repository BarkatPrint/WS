import React, { useEffect, useState } from "react";

export default function ProductCard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Change this URL if your backend server runs on a different host/port
  const API_URL = "http://localhost:5000/api/products";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {products.map((product) => (
        <div
          key={product._id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            width: "220px",
          }}
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{ width: "100%", height: "auto", borderRadius: "4px" }}
          />
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          {product.discountAmount && <p>Discounted: ₹{product.discountAmount}</p>}
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}
