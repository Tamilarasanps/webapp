import React, { useContext } from "react";
import "./CSS/Shopcategory.css";
import dropdown_icon from "../component/Assests/dropdown_icon.png";
import Item from "../component/Item/Item";
import { ShopContext } from "../context/Shopcontext";

const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext);


  return (
    <div className="Shopcategory">
      <img className="shopcategory-banner" src={props.banner} alt="Banner" />
      <div className="shopcategory-indexsort">
        <p>
          <span>showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt="Sort" />
        </div>
      </div>
      <div className="shopcategory-product">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else return null;
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default Shopcategory;
