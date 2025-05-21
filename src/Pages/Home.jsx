import React from "react";
import { Link } from "react-router-dom";
import AllProducts from "../Products/AllProducts";

export default function Home() {
  return (
    <div className="w-full">
      {/* Banner Image */}
      <div className="w-full bg-gray-100">
        <img
          src="/image/Contact.jpg"
          alt="Contact"
          className="w-full h-auto max-h-[400px] object-contain"
        />
      </div>

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
