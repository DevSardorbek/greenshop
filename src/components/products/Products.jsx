import React, { useState, useEffect } from "react";
import "../../sass/__porducts.scss";
import cart from "../../assets/cart.png";
import heart from "../../assets/heart.png";
import search from "../../assets/search.png";
import { addToCart } from "../../context/cartSlice";
import { useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = ({ data }) => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});
  const handleAddToCart = (el) => {
    dispatch(addToCart(el));
    setAddedToCart((prev) => ({
      ...prev,
      [el.id]: (prev[el.id] || 0) + 1,
    }));
    if (addedToCart[el.id] >= 1) {
      toast.error(`"${el.title}" mahsuloti savatchada  bor!`);
    } else {
      toast.success(`"${el.title}" mahsuloti savatchaga qo'shildi!`);
    }
  };

  return (
    <div className="products_wrapper">
      <div className="container">
        <div className="products_category">
          <div></div>
          <div className="card_category">
            <p>All Plants</p>
            <p>New Arrivals</p>
            <p>Sale</p>
          </div>
          <div className="card_short">
            <span>Short by: Default sorting</span>
          </div>
        </div>
        <div className="line">
          <span></span>
        </div>
        <div className="products_cards">
          <ToastContainer />
          {data?.map((el) => (
            <div key={el.id} className="product_card">
              <img src={el.images[0]} alt="" />
              <div className="card_wish">
                <button onClick={() => handleAddToCart(el)}>
                  <img src={cart} alt="" />
                </button>
                <img src={heart} alt="" />
                <img src={search} alt="" />
              </div>
              <p>{el.title}</p>
              <h3>${el.price}</h3>
              {addedToCart[el.id] && (
                <p>{addedToCart[el.id]} marta savatchada bor</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
