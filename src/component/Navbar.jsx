import "../Navbar.css";
import logoImg from "../assets/logo.png";
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
        <a href="/">Categories</a>
        <a href="/">Offers</a>
        <a href="/">Track Order</a>
        <a href="/">Help</a>
      </div>

      {/* Cart */}
      <div className="cart">
        <FaShoppingCart />
        <span>0</span>
      </div>

      {/* Login */}
      <button className="login-btn">
        Login / Sign Up
      </button>
    </nav>
  );
}

export default Navbar;