import React from "react";
import "./Descriptionbox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="description-navgator">
        <div className="descriptionbox-nav-box">Desccription</div>
        <div className="descriptionbox-nav-box-fade">Review (122)</div>
      </div>
      <div className="description-description">
        <p>
          "Our E-Commerce platform is dedicated to providing a distinguished
          selection of high-quality clothing, designed to meet the diverse needs
          of modern shoppers. With a focus on timeless elegance and contemporary
          trends, our collection includes both formal attire and casual
          essentials, crafted with the finest materials and attention to detail.
          We prioritize style, comfort, and durability in every garment,
          ensuring a perfect fit for every occasion.
          <p>
            Whether you seek sophisticated office wear or relaxed weekend
            outfits, our range offers unparalleled quality and refinement,
            delivered with exceptional customer service." This maintains a
            formal tone while emphasizing quality and service.
          </p>
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
