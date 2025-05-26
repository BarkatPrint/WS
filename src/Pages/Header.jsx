import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };
  const toggleProducts = () => setProductsOpen(!productsOpen);

  const productSubRoutes = [
    { path: "/products/all", label: "All", icon: "📋" },
    { path: "/products/mobile-parts-accessories", label: "Mobile Parts & Accessories", icon: "🛠️" },
    { path: "/products/mobile-phones", label: "Mobile Phones", icon: "📱" },
    { path: "/products/Keypad-Mobile", label: "Keypad Mobile", icon: "📱" },
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
  ];

  const navLinks = [
    { path: "/", label: "Home" },
    { label: "Products", subRoutes: productSubRoutes },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Header Bar */}
      <header className="bg-[#00292d] text-white px-6 md:px-12 py-6 flex items-center justify-between flex-wrap relative z-[1100]">
        {/* Brand */}
        <div className="flex-1 min-w-[150px]">
          <h2 className="text-2xl font-bold">
            <Link to="/" onClick={closeMenu} className="text-white no-underline">
              📱 AR Mobile
            </Link>
          </h2>
        </div>

        {/* Nav - Desktop */}
        <nav className="hidden md:flex flex-1 justify-center gap-6">
          {navLinks.map((item, i) =>
            item.subRoutes ? (
              <div key={i} className="relative group">
                <button
                  className="text-white font-light hover:font-semibold flex items-center gap-1"
                  onClick={toggleProducts}
                >
                  {item.label}
                  <span className="text-sm">{productsOpen ? "▲" : "▼"}</span>
                </button>
                {productsOpen && (
                  <div className="absolute top-full left-0 bg-white text-black shadow-md flex flex-col min-w-[220px] z-50 mt-2 rounded">
                    {item.subRoutes.map((sub, j) => (
                      <Link
                        key={j}
                        to={sub.path}
                        className="px-4 py-2 hover:bg-gray-200 text-sm no-underline flex items-center gap-2"
                        onClick={closeMenu}
                      >
                        <span>{sub.icon}</span> {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={i}
                to={item.path}
                onClick={closeMenu}
                className={`text-white no-underline hover:font-semibold ${
                  location.pathname === item.path ? "font-bold" : "font-light"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Info - Desktop */}
        <div className="hidden md:flex items-center gap-6 font-semibold text-sm">
          <span>📦 Free Delivery</span>
          <span>📞 7050266383</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-4 flex flex-col transition-transform duration-300 z-[1200] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={closeMenu}
          aria-label="Close Menu"
          className="self-end text-xl font-bold mb-4"
        >
          ×
        </button>

        {/* Mobile Navigation */}
        <nav className="flex flex-col gap-4">
          {navLinks.map((item, i) =>
            item.subRoutes ? (
              <div key={i}>
                <button
                  onClick={toggleProducts}
                  className="text-[#00292d] text-lg font-semibold flex justify-between items-center w-full"
                >
                  {item.label}
                  <span>{productsOpen ? "▲" : "▼"}</span>
                </button>
                {productsOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2 max-h-60 overflow-y-auto">
                    {item.subRoutes.map((sub, j) => (
                      <Link
                        key={j}
                        to={sub.path}
                        onClick={closeMenu}
                        className="text-[#00292d] text-base font-normal flex items-center gap-2"
                      >
                        <span>{sub.icon}</span> {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={i}
                to={item.path}
                onClick={closeMenu}
                className={`text-[#00292d] text-lg ${
                  location.pathname === item.path ? "font-bold" : "font-medium"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Info */}
        <div className="pt-4 border-t border-gray-300 text-[#00292d] font-semibold mt-auto">
          📦 Free Delivery <br />
          📞 7050266383
        </div>
      </div>
    </>
  );
};

export default Header;
