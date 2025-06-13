import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import AppWrapper from "./App";
import reportWebVitals from "./reportWebVitals";

// ✅ Use unregister instead of register
import { unregister } from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

// ✅ Unregister any previous service worker
unregister();

// Optional performance measuring
reportWebVitals();
