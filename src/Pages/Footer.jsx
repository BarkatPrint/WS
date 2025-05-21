import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#00292d",
        color: "#fff",
        padding: "15px 20px",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      &copy; {new Date().getFullYear()} AR Mobile. All rights reserved.
    </footer>
  );
};

export default Footer;
