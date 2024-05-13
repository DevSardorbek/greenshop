import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../sass/__productChekout.scss";
import primg from "../../assets/primg.png";
import visa from "../../assets/visa.png";
import { useSelector } from "react-redux";

const ProductChekout = ({ data }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [textarea, setTextarea] = useState("");
  const [obj, setObj] = useState(null);

  const handleCreateUser = () => {
    const newObj = {
      firstName,
      lastName,
      region,
      city,
      state,
      zip,
      email,
      phone: +phone,
      textarea,
    };
    setObj(newObj);
    console.log(newObj);
    setFirstName("");
    setLastName("");
    setRegion("");
    setCity("");
    setState("");
    setZip("");
    setEmail("");
    setPhone("");
    setTextarea("");
  };

  const carts = useSelector((s) => s.cart.value);
  const totalPrice = carts?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  let cards = carts?.map((item) => (
    <div key={item.id} className="order__card">
      <div className="order__name">
        <img src={item.images[0]} alt="" />
        <div>
          <h3>{item.title}</h3>
          <p>{item.category}</p>
        </div>
      </div>
      <span>(x {item.quantity})</span>
      <h2>${item.price * item.quantity}</h2>
    </div>
  ));

  return (
    <div className="chekout__wrapper">
      <div className="container">
        <div className="chekout_line">
          <NavLink to={"/"}>
            <h4>Home</h4>
          </NavLink>
          /<NavLink to={"/product-cart"}>Shop</NavLink> /<p>Chekout</p>
        </div>
        <div className="chekout__section">
          <form className="chekout__biling-adress">
            <h2>Billing Address</h2>
            <div className="user__name user__flex">
              <label>
                <p>
                  First Name <span>*</span>
                </p>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  required
                />
              </label>
              <label>
                <p>
                  Last Name <span>*</span>
                </p>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  required
                />
              </label>
            </div>
            <div className="user__country user__flex">
              <label>
                <p>
                  Country / Region <span>*</span>
                </p>
                <input
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  type="text"
                  placeholder="Select a country / region"
                  required
                />
              </label>
              <label>
                <p>
                  Town / City <span>*</span>
                </p>
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  required
                />
              </label>
            </div>
            <div className="user__street user__flex">
              <label>
                <p>
                  Street Address <span>*</span>
                </p>
                <input
                  type="text"
                  placeholder="House number and street name"
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  placeholder="Appartment, suite, unit, etc. (optional)"
                  required
                />
              </label>
            </div>
            <div className="user__state user__flex">
              <label>
                <p>
                  State <span>*</span>
                </p>
                <input
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  type="text"
                  required
                />
              </label>
              <label>
                <p>
                  Zip <span>*</span>
                </p>
                <input
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  type="text"
                  required
                />
              </label>
            </div>
            <div className="user__adress user__flex">
              <label>
                <p>
                  Email address <span>*</span>
                </p>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </label>
              <label>
                <p>
                  Phone Number <span>*</span>
                </p>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="number"
                  placeholder={+998}
                />
              </label>
            </div>
            <div className="user__ship">
              <input type="radio" required />
              <p>Ship to a different address?</p>
            </div>
            <div className="user__order">
              <label>
                <p>Order notes (optional)</p>
                <textarea
                  value={textarea}
                  onChange={(e) => setTextarea(e.target.value)}
                  cols="30"
                  rows="10"
                ></textarea>
              </label>
            </div>
          </form>
          <div className="chekout__order">
            <div className="chekout__title">
              <h3>Products</h3>
              <h3>Subtotal</h3>
            </div>
            <div className="order__cards">{cards}</div>
            <div className="order__count">
              <p>
                Have a coupon code? <span>Click here</span>
              </p>
              <div className="order__sub">
                <h4>Subtotal</h4>
                <h3>$2,683.00</h3>
              </div>
              <div className="order__coupon">
                <h4>Coupon Discount</h4>
                <h4>(-) 00.00</h4>
              </div>
              <div className="order__shiping">
                <h4>Shipping</h4>
                <div>
                  <h3>$16.00</h3>
                  <span>View shipping charge</span>
                </div>
              </div>
            </div>
            <div className="order__total">
              <h4>Total</h4>
              <h3>${totalPrice}</h3>
            </div>
            <div className="payment__method">
              <h3>Payment Method</h3>
              <div className="pay_in">
                <div className="pay">
                  <input type="radio" name="pay" />
                  <img src={visa} alt="" />
                </div>
                <div className="pay">
                  <input type="radio" name="pay" />
                  <p>Direct bank transfer</p>
                </div>
                <div className="pay">
                  <input type="radio" name="pay" />
                  <p>Cash on delivery</p>
                </div>
              </div>
              <button onClick={handleCreateUser}>Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductChekout;
