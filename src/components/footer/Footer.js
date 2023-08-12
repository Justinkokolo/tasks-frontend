import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p>Made with love by Justin K. © {new Date().getFullYear()}.</p>
      </div>
    </div>
  );
}
