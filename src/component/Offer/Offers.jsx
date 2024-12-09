import React from "react";
import "./Offers.css";
import exclusive_image from "../Assests/exclusive_image.png";
const Offers = () => {
  return (
    <div className="Offers">
      <div className="offer-left">
        <h1>Exculsive</h1>
        <h1>Offers for you</h1>
        <p> ONLY FOR THE BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={exclusive_image} alt="exclusive" style={{height:'350px'}} />
      </div>
    </div>
  );
};

export default Offers;
