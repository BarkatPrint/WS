import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import AppWrapper from "./App"; // Your main App component
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"; // PWA Support

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

// ✅ Register service worker (now disabled inside file)
serviceWorkerRegistration.register();

// 📊 Optional: measure app performance
reportWebVitals();
