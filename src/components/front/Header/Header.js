import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = ({ cartItems }) => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            Clothing Shop
          </Link>
        </h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/productslist">Products</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cart" className="cart">
              Cart
              <span className="cart-length">
                {cartItems.length === 0 ? "" : cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
