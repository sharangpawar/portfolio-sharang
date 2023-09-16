import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={require("../../../assets/Home/shape.png")}
          alt="no internet access"
        />
        {/* <img src={require("../../../assets/Home/shape.png")}></img> */}
      </div>
    </div>
  );
};

export default Footer;
