import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import AllProducts from "./AllProducts";
import MobilePhones from "./MobilePhones";
import Battery from "./Battery";
import Headphone from "./Headphone";
import Charger from "./Charger";  // 👈 naya import

const categories = [
  { name: "All", path: "all" },
  { name: "Mobile Phones", path: "mobile-phones" },
  { name: "Battery", path: "battery" },
  { name: "Headphone", path: "headphone" },
  { name: "Charger", path: "charger" },  // 👈 naya category
];

export default function ProductsRoutes() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-2">Latest Products</h1>
      <div className="w-full h-1 bg-gray-300 mb-4"></div>

      <nav className="flex gap-6 mb-6 border-b border-gray-200">
        {categories.map(({ name, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-blue-600 pb-2 text-blue-600 font-semibold"
                : "pb-2 text-gray-600 hover:text-blue-600"
            }
          >
            {name}
          </NavLink>
        ))}
      </nav>

      <Routes>
        <Route index element={<Navigate to="all" replace />} />
        <Route path="all" element={<AllProducts />} />
        <Route path="mobile-phones" element={<MobilePhones />} />
        <Route path="battery" element={<Battery />} />
        <Route path="headphone" element={<Headphone />} />
        <Route path="charger" element={<Charger />} />  {/* 👈 naya route */}
      </Routes>
    </div>
  );
}
