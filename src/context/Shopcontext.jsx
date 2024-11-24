import React, { createContext, useState,  } from "react";
import all_product from "../component/Assests/all_product";

export const ShopContext = createContext(null);

const getCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartitems] = useState(getCart());

  const addtocart = (itemId) => {
    setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removecart = (itemId) => {
    setCartitems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0, // Prevent negative values
    }));
  };


  
  const gettotalamt = () => {
    let totalamt = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let iteminfo = all_product.find((product) => product.id === Number(item));
        if (iteminfo) {
          totalamt += iteminfo.new_price * cartItems[item];
        }
      }
    }
    return totalamt;
  };
   
  const gettotalcartitem = () => {
    return Object.values(cartItems).reduce((total, qty) => total + qty, 0);
  };
  

  const contextValue = {gettotalamt, all_product, cartItems, addtocart, removecart,gettotalcartitem };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
