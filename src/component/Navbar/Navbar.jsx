import React, { useState, useContext } from "react";
import "./Navbar.css";
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/Shopcontext"; // Import your context

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For toggling mobile menu

  const { gettotalcartitem } = useContext(ShopContext); // Access total cart items from context

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu on click
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Shopper Logo" />
        <p>SHOPPER</p>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Menu List */}
      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <li onClick={() => setMenu("shop")}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Shop {menu === "shop" ? <hr /> : <></>}
          </Link>
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens" style={{ textDecoration: "none" }}>
            Men {menu === "mens" ? <hr /> : <></>}
          </Link>
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens" style={{ textDecoration: "none" }}>
            Women {menu === "womens" ? <hr /> : <></>}
          </Link>
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids" style={{ textDecoration: "none" }}>
            Kids {menu === "kids" ? <hr /> : <></>}
          </Link>
        </li>

        {/* Add Login Button in the Menu for Mobile */}
        <li className="menu-login-btn">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="btn">Login</button>
          </Link>
        </li>

        <li className="nav-login-cart">
        <Link to="/cart">
          <img src={cart_icon} alt="Cart" />
        </Link>
        {/* Dynamically update cart count */}
        <div className="nav-cart-count">{gettotalcartitem()}</div>
      </li>
      </ul>

      {/* Cart Icon and Count for Desktop */}
      
    </div>
  );
};

export default Navbar;
