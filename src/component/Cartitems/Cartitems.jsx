import React, { useContext, useState } from "react";
import "./Cartitem.css";
import { ShopContext } from "../../context/Shopcontext";
import remove_icon from "../Assests/cart_cross_icon.png";

const Cartitems = () => {
  const { gettotalamt, all_product, cartItems, removecart } = useContext(ShopContext);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const applyPromoCode = () => {
    if (promoCode === "SAVE10") {
      setDiscount(gettotalamt() * 0.1); // 10% Discount
    } else {
      alert("Invalid Promo Code");
    }
  };

  if (Object.keys(cartItems).length === 0 || gettotalamt() === 0) {
    return (
      <div className="cartitem">
        <h2>Your cart is empty!</h2>
        <p>Start adding items to your cart.</p>
      </div>
    );
  }

  return (
    <div className="cartitem">
      <div className="cartitem-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id}>
              <div className="cartitems-format cartitem-format-main">
                <img
                  src={product.image}
                  alt={product.name}
                  className="cartitem-product-icon"
                />
                <p>{product.name}</p>
                <p>${product.new_price.toFixed(2)}</p>
                <button className="cartitems-quantity">
                  {cartItems[product.id]}
                </button>
                <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
                <img
                  src={remove_icon}
                  onClick={() => removecart(product.id)}
                  alt={`Remove ${product.name}`}
                  className="removecart-item"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-items">
              <p>Subtotal</p>
              <p>${gettotalamt().toFixed(2)}</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <h1>Total</h1>
              <h1>${(gettotalamt() - discount).toFixed(2)}</h1>
            </div>
          </div>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>

        <div className="cartitems-promocode">
          <p>Have a promo code?</p>
          <div className="cartitem-promobox">
            <input
              type="text"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              aria-label="Promo code input"
            />
            <button className="apply-promocode-button" onClick={applyPromoCode}>
              Apply
            </button>
          </div>
          {discount > 0 && <p>Promo code applied! You saved ${discount.toFixed(2)}.</p>}
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
