import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AllProducts from "../Products/AllProducts";

// 🔽 Add or remove banner images from this array
const bannerImages = [
  `${process.env.PUBLIC_URL}/Home.jpg`,
  `${process.env.PUBLIC_URL}/WS Bazaar.jpg`,
  `${process.env.PUBLIC_URL}/WS Bazaar 2.jpg`,
];

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔄 Auto slide effect with pause logic
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  // 🖱️ Pause on image click, resume after 5 seconds
  const handleBannerClick = () => {
    setIsPaused(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  return (
    <div className="w-full h-full overflow-hidden">
      {/* 🔁 Banner Slider */}
      <div className="relative w-full overflow-hidden">
        <img
          src={bannerImages[currentSlide]}
          alt={`Banner ${currentSlide + 1}`}
          onClick={handleBannerClick}
          className="w-full h-auto transition-all duration-700 cursor-pointer"
          style={{ objectFit: isMobile ? "contain" : "cover" }}
        />

        {/* 🔘 Slider Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsPaused(true);
                clearTimeout(timeoutRef.current);
                timeoutRef.current = setTimeout(() => {
                  setIsPaused(false);
                }, 5000);
              }}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-blue-600" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 🏷️ Main Heading */}
      <h2 className="mt-8 mb-10 font-extrabold text-4xl text-center" style={{ color: "#00292d" }}>
        Welcome to Our WS Bazaar
      </h2>

      {/* 📦 Info Section */}
      <div className="px-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <p className="text-gray-800 text-lg mb-4 text-center md:text-left">
            1 Piece ho ya 100 Piece – Sabko Milega <strong>Wholesale Rate</strong>!
          </p>
          <p className="text-gray-700 mb-4 text-center md:text-left">
            Shopkeeper ho ya Customer – ab sabko saman milega direct factory price par.
          </p>
          <p className="text-gray-700 mb-4 text-center md:text-left">
            Har tarah ke mobile accessories & parts – ek jagah, ek click mein.
          </p>
          <p className="text-gray-700 mb-6 text-center md:text-left">
            🚚 Ghar baithe order karein aur <strong>Home Delivery</strong> payein poore India mein.
          </p>
          <Link
            to="/products"
            className="w-full max-w-[300px] text-center bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-200"
          >
            View All Products
          </Link>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <h3 className="mb-4 font-bold text-xl" style={{ color: "#00292d" }}>
            Product Nahi Mila? WhatsApp Par Direct Mangwa Sakte Hain!
          </h3>
          <p className="text-gray-700 mb-6 text-center md:text-left">
            Agar aapko hamari website par koi product nahi mil raha, to niche diye gaye WhatsApp
            button par click karke humein seedha message bhej sakte hain.
          </p>
          <a
            href="https://wa.me/917050266383?text=Mujhe%20ek%20product%20chahiye%20jo%20website%20par%20nahi%20mil%20raha%20hai.%20Kripya%20mujhse%20contact%20kijiye."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 transition duration-200 text-white font-semibold px-6 py-3 rounded-lg shadow-md max-w-[300px] w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.916 11.916 0 0012 0C5.372 0 0 5.372 0 12c0 2.118.555 4.168 1.605 5.962L0 24l6.177-1.6A11.962 11.962 0 0012 24c6.628 0 12-5.372 12-12 0-3.208-1.25-6.214-3.48-8.52zm-1.93 13.73c-.273.764-1.56 1.436-2.43 1.536-.64.074-1.417.105-3.07-1.084-2.43-1.7-4-5.25-4.125-5.5-.13-.25-1.045-1.38-1.045-2.63 0-1.25.74-1.862 1-2.11.273-.25.64-.32.96-.32.312 0 .5 0 .722.024.23.025.337.035.486.55.14.49.48 1.688.52 1.814.04.13.07.25 0 .4-.07.13-.11.32-.18.5-.07.18-.36.47-.57.6-.2.13-.38.28-.52.48-.13.18-.28.45-.12.88.156.42.7 1.1 1.5 1.78 1.03.95 1.88 1.25 2.156 1.39.27.14.42.12.57-.07.15-.18.62-.72.77-.96.15-.25.3-.22.5-.13.2.1 1.25.59 1.46.7.22.12.36.18.41.28.06.11.06.62-.21 1.39z" />
            </svg>
            <span className="text-base">WhatsApp Par Message Karein</span>
          </a>
        </div>
      </div>

      {/* 🌟 Featured Products */}
      <div className="mt-16 px-4">
        <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Featured Products
        </h3>
        <AllProducts />
      </div>
    </div>
  );
}
