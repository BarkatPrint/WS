import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AllProducts from "../Products/AllProducts";

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-full overflow-hidden">
            <img
        src={`${process.env.PUBLIC_URL}/Home.jpg`}
        alt="Home banner"
        className="w-full h-full"
        style={{
          objectFit: isMobile ? "contain" : "cover",
        }}
      />


      {/* Content */}
      <div className="mt-6 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to Our Store</h2>
        <p className="text-gray-700 mb-4">
          We offer the best mobile accessories at the most affordable prices.
        </p>

        <Link
          to="/products"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          View Full Products Page
        </Link>
      </div>

      {/* Show some products preview below the button */}
      <div className="mt-10 px-4">
        <h3 className="text-2xl font-semibold mb-4 text-center">Featured Products</h3>
        <AllProducts />
      </div>
    </div>
  );
}
