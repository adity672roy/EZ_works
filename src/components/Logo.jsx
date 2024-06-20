import React from "react";
import EZlogo from "../assets/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img src={EZlogo} alt="EZ Works Logo" className="logo_img"/>

      <p className="logo_heading">A Suite Of Business Support Services</p>
      <p className="logo_description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt... Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed
      </p>
    </div>
  );
};

export default Logo;
