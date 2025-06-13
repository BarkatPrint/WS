import React from "react";
import { Link } from "react-router-dom";

const productRoutes = [
  {
    category: "Mobile Accessories",
    items: [
      { path: "/products/mobile-parts-accessories", label: "Mobile Parts & Accessories", icon: "🛠️" },
      { path: "/products/mobile-phones", label: "Mobile Phones", icon: "📱" },
      { path: "/products/keypad-mobile", label: "Keypad Mobiles", icon: "🔢" },
      { path: "/products/battery", label: "Smartphone Battery", icon: "🔋" },
      { path: "/products/keypad-battery", label: "Keypad Battery", icon: "🔌" },
      { path: "/products/headphone", label: "Headphones", icon: "🎧" },
      { path: "/products/charger", label: "Chargers", icon: "⚡" },
      { path: "/products/charging-cable", label: "Charging Cables", icon: "🔌" },
      { path: "/products/mobile-covers", label: "Mobile Covers", icon: "📱" },
      { path: "/products/tempered-glass", label: "Tempered Glass", icon: "🛡️" },
      { path: "/products/display", label: "Display Screens", icon: "📲" },
      { path: "/products/touch", label: "Touch Panels", icon: "🤏" },
      { path: "/products/screen-combo", label: "Screen Combos", icon: "📱🔧" },
    ],
  },
  {
    category: "Electronics",
    items: [
      { path: "/products/camera", label: "Cameras", icon: "📷" },
      { path: "/products/printers", label: "Printers", icon: "🖨️" },
      { path: "/products/laptops", label: "Laptops", icon: "💻" },
    ],
  },
];

const ProductsPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-green-700">
        Explore Our Products
      </h1>

      {productRoutes.map((group, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
            {group.category}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {group.items.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="bg-white border border-gray-200 hover:border-green-600 shadow-sm hover:shadow-lg transition-all rounded-lg p-4 flex flex-col items-center text-center"
              >
                <span className="text-3xl mb-2">{item.icon}</span>
                <span className="text-sm font-medium text-gray-800">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
