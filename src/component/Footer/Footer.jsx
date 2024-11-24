import React from "react";
import "./Footer.css";
import footer_logo from "../Assests/logo_big.png";
import instagarm_logo from "../Assests/instagram_icon.png";
import pintester_icon from "../Assests/pintester_icon.png";
import whatsapp_icon from "../Assests/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="footer" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-link">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={instagarm_logo} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Resvered</p>
      </div>
    </div>
  );
};

export default Footer;