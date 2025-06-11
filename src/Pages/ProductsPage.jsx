import React from "react";
import { Link } from "react-router-dom";

const productRoutes = [
  {
    category: "Mobile Accessories",
    items: [
      { path: "/products/mobile-parts-accessories", label: "Mobile Parts & Accessories", icon: "🛠️" },
      { path: "/products/mobile-phones", label: "Mobile Phones", icon: "📱" },
      { path: "/products/keypad-mobile", label: "Keypad Mobile", icon: "📱" },
      { path: "/products/battery", label: "Battery", icon: "🔋" },
      { path: "/products/keypad-battery", label: "Keypad Battery", icon: "🔌" },
      { path: "/products/headphone", label: "Headphone", icon: "🎧" },
      { path: "/products/charger", label: "Charger", icon: "⚡" },
      { path: "/products/charging-cable", label: "Charging Cable", icon: "🔌" },
      { path: "/products/mobile-covers", label: "Mobile Covers", icon: "📱" },
      { path: "/products/tempered-glass", label: "Tempered Glass", icon: "🛡️" },
      { path: "/products/display", label: "Display", icon: "📱" },
      { path: "/products/touch", label: "Touch", icon: "🤏" },
      { path: "/products/screen-combo", label: "Screen Combo", icon: "📱🔧" },
    ],
  },
  {
    category: "Electronics",
    items: [
      { path: "/products/camera", label: "Camera", icon: "📷" },
      { path: "/products/printers", label: "Printers", icon: "🖨️" },
      { path: "/products/laptops", label: "Laptops", icon: "💻" },
    ],
  },
];

const ProductsPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">Our Products</h1>

      {productRoutes.map((group, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">{group.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {group.items.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="bg-white shadow hover:shadow-md p-4 rounded flex items-center gap-3 hover:bg-gray-50 transition"
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
