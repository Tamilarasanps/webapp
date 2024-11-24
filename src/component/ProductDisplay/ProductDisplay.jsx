import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assests/star_icon.png";
import star_dull_icon from "../Assests/star_dull_icon.png";
import { ShopContext } from "../../context/Shopcontext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addtocart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(222)</p>
        </div>
        <div className="productdisplay-right-price">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}{" "}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {/* <h3>Premium Cotton T-Shirt</h3> */}
          Soft, comfortable, and durable. Made from 100% cotton, this classic
          fit T-shirt is perfect for everyday wear. Available in multiple colors
          and sizes. Get yours now!
        </div>
        <div className="productdisplay-right-size">
          <h1>Select size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          className="productdisplay-right-butn"
          onClick={() => {
            addtocart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-side-category">
          <span>category:</span>Women,T-shirt,Crop top
        </p>
        <p className="productdisplay-right-side-category">
          <span>Tag:</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
