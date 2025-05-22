import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Header bar */}
    <header className="bg-[#00292d] text-white px-12 py-6 flex 
    items-center justify-between flex-wrap relative z-[1100]">
        {/* Brand */}
        <div className="flex-1 min-w-[150px]">
          <h2 className="text-2xl font-bold">
            <Link to="/" onClick={closeMenu} className="text-white no-underline">
              📱 AR Mobile
            </Link>
          </h2>
        </div>

        {/* Nav (desktop only) */}
        <nav className="hidden md:flex flex-1 justify-center gap-6">
          {["/", "/products", "/about", "/contact"].map((path, i) => {
            const names = ["Home", "Products", "About", "Contact"];
            const isActive = location.pathname === path;
            return (
              <Link
                key={i}
                to={path}
                onClick={closeMenu}
                className={`text-white no-underline hover:font-semibold ${
                  isActive ? "font-bold" : "font-light"
                }`}
              >
                {names[i]}
              </Link>
            );
          })}
        </nav>

        {/* Info (desktop only) */}
        <div className="hidden md:flex items-center gap-6 font-semibold text-sm">
          <span>📦 Free Delivery</span>
          <span>📞 7050266383</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          &#9776;
        </button>
      </header>

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-100 shadow-lg p-4 flex flex-col transition-transform duration-300 z-[1200] ${
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

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4">
          {["/", "/products", "/about", "/contact"].map((path, i) => {
            const names = ["Home", "Products", "About", "Contact"];
            const isActive = location.pathname === path;
            return (
              <Link
                key={i}
                to={path}
                onClick={closeMenu}
                className={`text-[#00292d] text-lg ${
                  isActive ? "font-bold" : "font-medium"
                }`}
              >
                {names[i]}
              </Link>
            );
          })}
        </nav>

        {/* Info section (mobile) */}
        <div className="pt-4 border-t border-gray-300 text-[#00292d] font-semibold mt-auto">
          📦 Free Delivery <br />
          📞 7050266383
        </div>
      </div>
      
    </>
  );
};

export default Header;
