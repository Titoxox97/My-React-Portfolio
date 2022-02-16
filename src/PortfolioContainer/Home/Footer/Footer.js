import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-mother">
        <img
          src={require("../../../assets/dashboard/bookNegative.svg").default}
          alt="no internet connection"
        />
      </div>
    </div>
  );
}
