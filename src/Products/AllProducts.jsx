import React, { useEffect, useState } from "react";

// Page Components for different product categories
import MobilePartsAccessories from "./Page/MobilePartsAccessories";
import Battery from "./Page/Battery";
import Chargers from "./Page/Charger";
import Headphone from "./Page/Headphone";
import KeypadMobile from "./KeypadMobile/KeypadMobile";
import ChargingCable from "./Page/ChargingCable";
import MobileCovers from "./Page/MobileCovers";
import TemperedGlass from "./Page/TemperedGlass";
import Display from "./Page/Display";
import Touch from "./Page/Touch";
import ScreenCombo from "./Page/ScreenCombo";
import MobileBody from "./Page/MobileBody";
import CameraPage from "./Page/CameraPage";

// 🔗 ProductCard for Admin View or Debug Section
import ProductCard from "../admin/ProductCard";

export default function AllProducts() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch all products from backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://ws-backend-r3in.onrender.com/api/products");
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        setProductData(data);
        console.log("📦 Fetched data from backend:", data);
      } catch (err) {
        console.error("❌ Error fetching data from backend:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ✅ Utility to filter products by category
  const filterByCategory = (category) =>
    productData.filter((item) =>
      item.category?.toLowerCase() === category.toLowerCase()
    );

  return (
    <>
      {/* Hero Section */}
      <MobilePartsAccessories />

      {/* Conditional Loading Message */}
      {loading ? (
        <div className="text-center py-10 text-lg font-semibold">Loading products...</div>
      ) : (
        <>
          {/* Product Sections by Category */}
          <ChargingCable products={filterByCategory("chargingcable")} />
          <Headphone products={filterByCategory("headphone")} />
          <Chargers products={filterByCategory("charger")} />
          <KeypadMobile />
          <Battery products={filterByCategory("battery")} />
          <TemperedGlass products={filterByCategory("temperedglass")} />
          <MobileBody products={filterByCategory("mobilebody")} />
          <ScreenCombo products={filterByCategory("screencombo")} />
          <MobileCovers products={filterByCategory("mobilecover")} />
          <Display products={filterByCategory("display")} />
          <Touch products={filterByCategory("touch")} />
          <CameraPage products={filterByCategory("camerapage")} />

          {/* ✅ Admin Debug: All Products */}
          <div className="p-5">
            <h2 className="text-2xl font-bold text-center mb-4">
              📦 All Uploaded Products
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {productData.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>

          {/* 🛠 Raw Product Data Summary */}
          <div className="max-w-4xl mx-auto my-10 p-4 bg-gray-100 rounded">
            <h3 className="text-xl font-bold mb-2">📋 Fetched Backend Data (Demo)</h3>
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
    </>
  );
}
