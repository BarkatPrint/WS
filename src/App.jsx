import React from "react";
import {
  HashRouter as Router, // For GitHub Pages hosting
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Pages
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home";
import SellerPage from "./Pages/SellerPage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ProductsRoutes from "./Products/mobile-accessories/ProductsRoutes";
import UploadProductWithPasscode from "./admin/UploadToCloudinary";
import UploadToCloudinary from "./admin/UploadToCloudinary";
import ProductsPage from "./Pages/ProductsPage";
import TeamPage from "./Pages/TeamPage";
import MobileAccessories from "./Products/mobile-accessories/mobile-accessories"; // ✅ Accessories page
import AllElectronic from "./Products/Electronics/AllElectronic"; // ✅ Electronics page

// Components
import InstallPWAIcon from "./App/InstallPWAIcon";

// ✅ Wrapper component to use <Router>
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

// ✅ Main App with routes and conditional layout
function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <>
      {!isLandingPage && <Header />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/seller" element={<SellerPage />} />
        <Route path="/all-mobile-accessories" element={<MobileAccessories />} />
        <Route path="/products/*" element={<ProductsRoutes />} />
        <Route path="/products/electronics/AllElectronic" element={<AllElectronic />} /> {/* ✅ NEW Electronics Route */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<UploadProductWithPasscode />} />
        <Route path="/upload-cloudinary" element={<UploadToCloudinary />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>

      {!isLandingPage && <Footer />}

      <InstallPWAIcon />
    </>
  );
}

export default AppWrapper;
