import "../Navbar.css";
import logoImg from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaSearch,
  FaShoppingCart,
  FaChevronDown,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img
          src={logoImg}
          alt="logo"
        />
        <div>
          <h2>MediQuick</h2>
          <span>Medicine Delivered Fast</span>
        </div>
      </div>

      {/* Location */}
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

   

      {/* Menu */}
      <div className="menu">
        <Link to="/categories">Categories</Link>
        <a href="/">Offers</a>
        <Link to="/track-order">Track Order</Link>
        <a href="/">Help</a>
      </div>

     {/* Cart */}
      <Link to="/cart" className="cart">
        <FaShoppingCart />
        <span>0</span>
      </Link>

      {/* Login */}
      <button className="login-btn">
        Login / Sign Up
      </button>
    </nav>
  );
}

export default Navbar;