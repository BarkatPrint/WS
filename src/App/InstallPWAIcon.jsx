import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

const InstallPWAIcon = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      console.log("✅ App Installed");
    } else {
      console.log("❌ Install dismissed");
    }
    setDeferredPrompt(null);
    setShow(false);
  };

  if (!show) return null;

  return (
    <button
      onClick={handleInstall}
      style={{
        position: "fixed",
        right: "20px",
        bottom: "90px",
        backgroundColor: "#007bff",
        color: "white",
        padding: "12px",
        borderRadius: "50%",
        border: "none",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        cursor: "pointer",
        zIndex: 9999,
      }}
      title="Install App"
    >
      <FaDownload size={20} />
    </button>
  );
};

export default InstallPWAIcon;
