import React from "react";
import ProductCard from "../../admin/ProductCard";

export default function CameraPage({ products }) {
  console.log("📸 All Products in CameraPage:", products); // Debug sab products dikhane ke liye

  // Filter karte hain jo category "camera" ho ya name me "camera" likha ho
  const cameraProducts = (products || []).filter((p) => {
    const cat = p.category ? p.category.toLowerCase() : "";
    console.log(`Product: ${p.name}, category: ${cat}`);
    return cat === "camera" || (p.name && p.name.toLowerCase().includes("camera"));
  });

  console.log("📸 Filtered Camera Products:", cameraProducts); // filter hone ke baad products

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-6">📸 Camera Products</h1>

      {cameraProducts.length === 0 ? (
        <p>No camera products uploaded yet.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          {cameraProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
