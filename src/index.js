import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// ✅ Correct import if App.jsx is inside src/App/
import AppWrapper from "./App/App"; 
import reportWebVitals from "./reportWebVitals";

// ✅ Correct import for PWA service worker
import * as serviceWorkerRegistration from "./App/serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

// ✅ Register service worker to enable PWA (offline & installable)
serviceWorkerRegistration.register();

// Optional: Web Vitals for performance monitoring
reportWebVitals();
