import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-mother">
        <img
          src={require("../../../assets/dashboard/shape-bg.png").default}
          alt="no internet connection"
        />
      </div>
    </div>
  );
}
