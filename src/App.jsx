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
import TeamPage from "./Pages/TeamPage";

// Components
import InstallPWAIcon from "./App/InstallPWAIcon";

// ✅ AppWrapper for Router setup
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

// ✅ Main App with conditional header/footer
function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <>
      {/* ✅ Show Header on all pages except Landing */}
      {!isLandingPage && <Header />}

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
        <Route path="/team" element={<TeamPage />} />
      </Routes>

      {/* ✅ Show Footer on all pages except Landing */}
      {!isLandingPage && <Footer />}

      {/* ✅ Show PWA install icon always */}
      <InstallPWAIcon />
    </>
  );
}

export default AppWrapper;
