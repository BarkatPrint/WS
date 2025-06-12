import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import AppWrapper from "./App"; // Your main App component with Router
import reportWebVitals from "./reportWebVitals";

// ✅ Register PWA service worker
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

// ✅ Enable offline and install features
serviceWorkerRegistration.register();

// Optional: performance monitoring
reportWebVitals();
