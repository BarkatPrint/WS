import React, { useEffect, useState } from "react";

// 🔌 API call
import { fetchAllProducts } from "../admin/productAPI";

// 🔗 Admin Product Card
import ProductCard from "../admin/ProductCard";

export default function AllProductsAdmin() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchAllProducts();
        setProductData(data);
        console.log("📦 Products from API:", data);
      } catch (error) {
        console.error("❌ API error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">📦 All Uploaded Products (Admin)</h2>

      {loading ? (
        <div className="text-center text-lg font-semibold">Loading products...</div>
      ) : (
        <>
          <div className="flex flex-wrap justify-center gap-4">
            {productData.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-10 p-4 bg-gray-100 rounded">
            <h3 className="text-xl font-bold mb-2">📋 Raw Product Data</h3>
            <ul className="list-disc pl-6">
              {productData.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.name}</strong> - {item.category || "❌ No category"}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
