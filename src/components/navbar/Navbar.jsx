import React from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import logout from "../../assets/Logout.png";
import cart from "../../assets/cart.png";
import "../../sass/__navbar.scss";
import { NavLink } from "react-router-dom";
import Home from "../../pages/home/Home";
import { useSelector } from "react-redux";
const Navbar = () => {
  const carts = useSelector((s) => s.cart.value);
  return (
    <div className="navbar_wrapper">
      <div className="container">
        <div className="navbar_section">
          <div className="navbar_logo">
            <NavLink to={"/"}>
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="navbar_links">
            <NavLink to={"/"}>Home</NavLink>
            <a href="#">Shop</a>
            <a href="#">Plant Care</a>
            <a href="#">Blogs</a>
          </div>
          <div className="navbar_login">
            <img src={search} alt="" />
            <div className="nav_cart">
              <span>{carts.length}</span>
              <NavLink to={"product-cart"}>
                <img src={cart} alt="" />
              </NavLink>
            </div>
            <button>
              <img src={logout} alt="" />
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
