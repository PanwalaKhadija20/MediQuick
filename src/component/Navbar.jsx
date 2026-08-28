import "../Navbar.css";
import logoImg from "../assets/logo.png";
import { Link } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaShoppingCart,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      {/* ================= LOGO ================= */}
      <Link to="/" className="logo">
        <img
          src={logoImg}
          alt="MediQuick logo"
        />

        <div>
          <h2>MediQuick</h2>
          <span>Medicine Delivered Fast</span>
        </div>
      </Link>

<<<<<<< HEAD
      {/* Login */}
      <Link to="/login" className="login-btn">
        Login/sign up
      </Link>
=======

      {/* ================= LOCATION ================= */}
      <div className="location">

        <FaMapMarkerAlt className="location-icon" />

        <div className="location-text">

          <small>Deliver to</small>

          <select className="location-dropdown">
            <option>Adajan, Surat</option>
            <option>Vesu, Surat</option>
            <option>Katargam, Surat</option>
            <option>Varachha, Surat</option>
            <option>Athwa, Surat</option>
          </select>

        </div>

      </div>


      {/* ================= MENU ================= */}
      <div className="menu">

        {/* Home */}
        <Link to="/">Home</Link>

        {/* Categories */}
        <Link to="/categories">Categories</Link>

        {/* Offers */}
        <Link to="/offers">Offers</Link>

        {/* Track Order */}
        <Link to="/track-order">Track Order</Link>

       
      </div>


      {/* ================= CART ================= */}
      <Link to="/cart" className="cart">

        <FaShoppingCart />

        <span>0</span>

      </Link>


      {/* ================= LOGIN ================= */}
      <button className="login-btn">
        Login / Sign Up
      </button>

>>>>>>> 0a598cf3dc18f566124bc75cdf06ff588ea7db8e
    </nav>
  );
}

export default Navbar;