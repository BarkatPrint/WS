// src/components/InstallPWAButton.js
import React, { useEffect, useState } from "react";

const InstallPWAButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowButton(true);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("✅ User accepted the PWA install");
        } else {
          console.log("❌ User dismissed the PWA install");
        }
        setDeferredPrompt(null);
        setShowButton(false);
      });
    }
  };

  return (
    showButton && (
      <button onClick={handleInstallClick} style={{ padding: "10px 20px", fontSize: "16px" }}>
        📲 Install App
      </button>
    )
  );
};

export default InstallPWAButton;
