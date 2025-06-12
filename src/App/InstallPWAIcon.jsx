import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

const InstallPWAIcon = () => {
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

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === "accepted") {
        console.log("✅ User installed the app");
      }
      setDeferredPrompt(null);
      setShowButton(false);
    }
  };

  if (!showButton) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center">
      <button
        onClick={handleInstallClick}
        className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out"
        title="Install App"
      >
        <FaDownload size={24} />
      </button>
      <span className="text-sm text-white bg-gray-800 mt-1 px-2 py-1 rounded shadow">
        Install App
      </span>
    </div>
  );
};

export default InstallPWAIcon;
