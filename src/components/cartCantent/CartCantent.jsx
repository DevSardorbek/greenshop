import React from "react";
import "../../sass/__cartCantent.scss";
import itemimg from "../../assets/primg.png";
import del from "../../assets/Delete.svg";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCartQuantity,
  decrementCartQuantity,
  removeItemFromCart,
} from "../../context/cartSlice";

const CartCantent = ({ data }) => {
  const dispatch = useDispatch();
  const totalPrice = data?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  let cards = data?.map((item) => (
    <div key={item.id} className="cart__products-item">
      <div className="cart__item-name">
        <img src={item.images[0]} alt="" />
        <div>
          <h3>{item.title}</h3>
          <p>{item.brand}</p>
        </div>
      </div>
      <div className="cart__item-intro">
        <h3>${item.price}</h3>
        <div className="cart__item-quatity">
          <button
            disabled={item.quantity <= 1}
            onClick={() => dispatch(decrementCartQuantity(item))}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(incrementCartQuantity(item))}>
            +
          </button>
        </div>
        <h3>${item.price * item.quantity}</h3>
        <button
          onClick={() => dispatch(removeItemFromCart(item))}
          className="btn_del"
        >
          <img src={del} alt="" />
        </button>
      </div>
    </div>
  ));

  return (
    <div className="cart__cantent">
      <div className="container">
        <div className="cart__cantent-line">
          <NavLink to={"/"}>Home</NavLink> /<p>Shop</p>/<p>Shopping Cart</p>
        </div>
        <div className="cart_cantent-wrapper">
          <div className="cart__cantent-products">
            <div className="cart__products-info">
              <p>Products</p>
              <div>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p></p>
              </div>
            </div>
            {cards}
          </div>
          <div className="cart__cantent-total">
            <div className="total__search">
              <input type="text" placeholder="Enter coupon code here..." />
              <button>Apply</button>
            </div>
            <div className="subtotal">
              <p>Subtotal</p>
              <h2>$2,683.00</h2>
            </div>
            <div className="coupon">
              <p>Coupon Discount</p>
              <h3>(-) 00.00</h3>
            </div>
            <div className="shiping">
              <p>Shiping</p>
              <div>
                <h3>$16.00</h3>
                <span>View shipping charge</span>
              </div>
            </div>
            <div className="total_itm">
              <h3>Total</h3>
              <h2>${totalPrice}</h2>
            </div>
            <button className="btn1">
              <NavLink to={"/product-chekout"}>Proceed To Checkout</NavLink>
            </button>
            <button className="btn2">Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCantent;
