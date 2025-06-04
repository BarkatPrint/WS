import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import AllProducts from "./AllProducts";
import KeypadMobile from "./KeypadMobile/KeypadMobile";

// import MobilePhones from "./Mobile/MobilePhones";
// import VivoPhones from "./Mobile/VivoPhones";
import Battery from "./Page/Battery";
import Headphone from "./Page/Headphone";
import Charger from "./Page/Charger";

import ChargingCable from "./Page/ChargingCable";
import MobileCovers from "./Page/MobileCovers";
import TemperedGlass from "./Page/TemperedGlass";
import Display from "./Page/Display";
import Touch from "./Page/Touch";
import ScreenCombo from "./Page/ScreenCombo";
import MobileBody from "./Page/MobileBody";

import MobilePartsAccessories from "./Page/MobilePartsAccessories";

const categories = [
  { name: "All", path: "all" },
  { name: "Mobile Parts Accessories", path: "mobile-parts-accessories" },
  // { name: "Mobile Phones", path: "mobile-phones" },
  { name: "Keypad Mobile", path: "keypad-mobile" },
  { name: "Battery", path: "battery" },
  { name: "Headphone", path: "headphone" },
  { name: "Charger", path: "charger" },
  { name: "Charging Cable", path: "charging-cable" },
  { name: "Mobile Covers", path: "mobile-covers" },
  { name: "Tempered Glass", path: "tempered-glass" },
  { name: "Display", path: "display" },
  { name: "Touch", path: "touch" },
  { name: "Screen Combo", path: "screen-combo" },
  { name: "Mobile Body", path: "mobile-body" },
];

export default function ProductsRoutes() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-2">Latest Products</h1>
      <div className="w-full h-1 bg-gray-300 mb-4"></div>

      <nav className="flex gap-12 mb-6 border-b border-gray-200 overflow-x-auto">
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
        <Route path="mobile-parts-accessories" element={<MobilePartsAccessories />} />
        <Route path="keypad-mobile" element={<KeypadMobile />} />
        {/* <Route path="mobile-phones" element={<MobilePhones />} /> */}
        {/* <Route path="vivophones" element={<VivoPhones />} /> */}
        <Route path="battery" element={<Battery />} />
        <Route path="headphone" element={<Headphone />} />
        <Route path="charger" element={<Charger />} />
        <Route path="charging-cable" element={<ChargingCable />} />
        <Route path="mobile-covers" element={<MobileCovers />} />
        <Route path="tempered-glass" element={<TemperedGlass />} />
        <Route path="display" element={<Display />} />
        <Route path="touch" element={<Touch />} />
        <Route path="screen-combo" element={<ScreenCombo />} />
        <Route path="mobile-body" element={<MobileBody />} />

        {/* Catch all unmatched routes and redirect to 'all' */}
        <Route path="*" element={<Navigate to="all" replace />} />
      </Routes>
    </div>
  );
}
