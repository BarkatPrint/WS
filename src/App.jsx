import React from "react";
import {
  HashRouter as Router, // ✅ Use HashRouter for GitHub Pages
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
import ProductsRoutes from "./Products/ProductsRoutes";
import UploadProductWithPasscode from "./admin/UploadToCloudinary";
import UploadToCloudinary from "./admin/UploadToCloudinary";
import ProductsPage from "./Pages/ProductsPage";
import TeamPage from "./Pages/TeamPage"; // ✅ New Team Page

// Components
import InstallPWAIcon from "./App/InstallPWAIcon"; // ✅ PWA Install Icon

// ✅ Wrapper for using useLocation inside Routes
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <>
      {/* ✅ Show Header except on Landing Page */}
      {!isLanding && <Header />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/seller" element={<SellerPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/*" element={<ProductsRoutes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<UploadProductWithPasscode />} />
        <Route path="/upload-cloudinary" element={<UploadToCloudinary />} />
        <Route path="/team" element={<TeamPage />} /> {/* ✅ New Team Route */}
      </Routes>

      {/* ✅ Show Footer except on Landing Page */}
      {!isLanding && <Footer />}

      {/* ✅ Always show install icon */}
      <InstallPWAIcon />
    </>
  );
}

export default AppWrapper;
