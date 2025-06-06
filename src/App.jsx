import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home";
import SellerPage from "./Pages/SellerPage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ProductsRoutes from "./Products/ProductsRoutes";

import UploadProductWithPasscode from "./admin/UploadToCloudinary";
import UploadToCloudinary from "./admin/UploadToCloudinary";  // नया import

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
      {!isLanding && <Header />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/seller" element={<SellerPage />} />
        <Route path="/products/*" element={<ProductsRoutes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin upload page */}
        <Route path="/admin" element={<UploadProductWithPasscode />} />

        {/* नया Cloudinary upload page */}
        <Route path="/upload-cloudinary" element={<UploadToCloudinary />} />
      </Routes>

      {!isLanding && <Footer />}
    </>
  );
}

export default AppWrapper;
