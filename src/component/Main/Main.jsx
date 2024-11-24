import React from "react";
import "./Main.css";
import hand_icon from "../Assests/hand_icon.png";
import arrow_icon from "../Assests/arrow.png";
import hero_image from "../Assests/hero_image.png";

const Main = () => {
  return (
    <div className="main">
      <div className="main-left">
        <h2>NEW ARRAIVALS ONLY</h2>
        <div className="handicon">
          <p>new</p>
          <img src={hand_icon} alt="" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
        <div className="main-latest-btn">
          <div>Latest Collection</div>

          <img src={arrow_icon} alt="" />
        </div>
      </div>

      <div className="main-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Main;
