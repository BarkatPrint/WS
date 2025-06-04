import React from "react";
import {
  BrowserRouter as Router,
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

// Wrapper to enable useLocation with basename for GitHub Pages
function AppWrapper() {
  return (
    <Router basename="/WS">
      <App />
    </Router>
  );
}

function App() {
  const location = useLocation();

  // Since basename is /WS, location.pathname will be relative to that
  // So "/" means root inside /WS, which is landing page
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
      </Routes>

      {!isLanding && <Footer />}
    </>
  );
}

export default AppWrapper;
