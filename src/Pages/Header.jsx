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
    {
      category: "Mobile Accessories",
      path: "/products/mobile-accessories",
      icon: ""
    },
    {
      category: "Electronics",
      path: "/products/electronics/AllElectronic",
      icon: ""
    },
  ];

  const navLinks = [
    { path: "/", label: "Home" },
    { label: "Products", subRoutes: productSubRoutes },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/team", label: "Team" },
  ];

  return (
    <>
      <header className="bg-white text-black px-6 md:px-12 py-6 flex items-center justify-between flex-wrap relative z-[1100] shadow-md">
        <div className="flex items-center flex-1 min-w-[150px] gap-3">
          <img
            src={`${process.env.PUBLIC_URL}/logo512.png`}
            alt="WS Wholesale Logo"
            className="w-10 h-10 object-contain"
          />
          <h2 className="text-2xl font-bold text-[#189D0E]">
            <Link to="/" onClick={closeMenu} className="no-underline">
              WS Bazaar
            </Link>
          </h2>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-6">
          {navLinks.map((item, i) =>
            item.subRoutes ? (
              <div key={i} className="relative group">
                <button
                  className="font-light hover:font-semibold flex items-center gap-1"
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
                        <span>{sub.icon}</span> {sub.category}
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
                className={`no-underline hover:font-semibold ${
                  location.pathname === item.path ? "font-bold" : "font-light"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Info */}
        <div className="hidden md:flex items-center gap-6 font-semibold text-sm">
          <span>📦 Free Delivery</span>
          <span>📞 7050266383</span>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black text-2xl"
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
                  <div className="ml-2 mt-2 flex flex-col gap-2">
                    {item.subRoutes.map((sub, j) => (
                      <Link
                        key={j}
                        to={sub.path}
                        onClick={closeMenu}
                        className="text-[#00292d] text-base font-normal flex items-center gap-2 pl-4 py-1"
                      >
                        <span>{sub.icon}</span> {sub.category}
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

        <div className="pt-4 border-t border-gray-300 text-[#00292d] font-semibold mt-auto">
          📦 Free Delivery <br />
          📞 7050266383
        </div>
      </div>
    </>
  );
};

export default Header;

// 📌 To add more sub-categories in future, update `productSubRoutes` array with:
// { category: "New Category", path: "/products/new-category", icon: "🔧" }
