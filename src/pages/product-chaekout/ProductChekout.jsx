import React from "react";
import { NavLink } from "react-router-dom";
import "../../sass/__productChekout.scss";

const ProductChekout = () => {
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
                <input type="text" required />
              </label>
              <label>
                <p>
                  Last Name <span>*</span>
                </p>
                <input type="text" required />
              </label>
            </div>
            <div className="user__country user__flex">
              <label>
                <p>
                  Country / Region <span>*</span>
                </p>
                <input
                  type="text"
                  placeholder="Select a country / region"
                  required
                />
              </label>
              <label>
                <input type="text" required />
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
                <input type="text" required />
              </label>
              <label>
                <p>
                  Zip <span>*</span>
                </p>
                <input type="text" required />
              </label>
            </div>
            <div className="user__adress user__flex">
              <label>
                <p>
                  Email address <span>*</span>
                </p>
                <input type="email" />
              </label>
              <label>
                <p>
                  Phone Number <span>*</span>
                </p>
                <input type="number" value={+998} />
              </label>
            </div>
            <div className="user__ship">
              <input type="radio" />
              <p>Ship to a different address?</p>
            </div>
            <div className="user__order">
              <label>
                <p>Order notes (optional)</p>
                <textarea cols="30" rows="10"></textarea>
              </label>
            </div>
          </form>
          <div className="chekout__order"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductChekout;
