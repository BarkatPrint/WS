import React, { useEffect, useState } from "react";

// Page Components for different product categories
import MobilePartsAccessories from "./Page/MobilePartsAccessories";
import Battery from "./Page/Battery";
import Chargers from "./Page/Charger";
import Headphone from "./Page/Headphone";
// import AllMobile from "./Mobile/AllMobile";
import KeypadMobile from "./KeypadMobile/KeypadMobile";
import ChargingCable from "./Page/ChargingCable";
import MobileCovers from "./Page/MobileCovers";
import TemperedGlass from "./Page/TemperedGlass";
import Display from "./Page/Display";
import Touch from "./Page/Touch";
import ScreenCombo from "./Page/ScreenCombo";
import MobileBody from "./Page/MobileBody";
import CameraPage from "./Page/CameraPage"; // ✅ Import CameraPage

// 🔗 Import ProductCard for backend product listing
import ProductCard from "../admin/ProductCard";

export default function AllProducts() {
  const [productData, setProductData] = useState([]);

  // ⬇️ Fetch all products from backend API
  useEffect(() => {
    fetch("https://ws-backend-r3in.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data); // Store fetched products in state
        console.log("📦 Fetched data from backend:", data);
      })
      .catch((err) => {
        console.error("❌ Error fetching data from backend:", err);
      });
  }, []);

  return (
    <>
      {/* Static Section - Optional Hero Banner or Intro */}
      <MobilePartsAccessories />

      {/* Product Sections by Category */}
      <ChargingCable
        products={productData.filter((item) => item.category === "chargingcable")}
      />

      <Headphone
        products={productData.filter((item) => item.category === "headphone")}
      />

      <Chargers
        products={productData.filter((item) => item.category === "charger")}
      />

      <KeypadMobile />

      <Battery
        products={productData.filter((item) => item.category === "battery")}
      />

      <TemperedGlass
        products={productData.filter((item) => item.category === "temperedglass")}
      />

      <MobileBody
        products={productData.filter((item) => item.category === "mobilebody")}
      />

      <ScreenCombo
        products={productData.filter((item) => item.category === "screencombo")}
      />

      <MobileCovers
        products={productData.filter((item) => item.category === "mobilecover")}
      />

      <Display
        products={productData.filter((item) => item.category === "display")}
      />

      <Touch
        products={productData.filter((item) => item.category === "touch")}
      />

      {/* ✅ NEW Camera Page Section */}
      <CameraPage
        products={productData.filter((item) => item.category === "camerapage")}
      />

      {/* ✅ All Products Grid */}
      <div className="p-5">
        <h2 className="text-2xl font-bold text-center mb-4">
          📦 All Uploaded Products
        </h2>
        <div className="flex flex-wrap justify-center">
          {productData.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>

      {/* 🛠 Debug Output */}
      <div className="max-w-4xl mx-auto my-10 p-4 bg-gray-100 rounded">
        <h3 className="text-xl font-bold mb-2">📋 Fetched Backend Data (Demo)</h3>
        <ul className="list-disc pl-6">
          {productData.map((item, idx) => (
            <li key={idx}>
              <strong>{item.name}</strong> - {item.category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
