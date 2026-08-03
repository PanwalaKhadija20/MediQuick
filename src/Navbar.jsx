import "./Navbar.css";
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
          src="/logo.png"
          alt="logo"
        />
        <div>
          <h2>MediQuick</h2>
          <span>Medicine Delivered Fast</span>
        </div>
      </div>

      {/* Location */}
      <div className="location">
        <FaMapMarkerAlt />
        <div>
          <small>Deliver to</small>
          <p>
            Adajan, Surat <FaChevronDown />
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search medicines, health products..."
        />
        <button>
          <FaSearch />
        </button>
      </div>

      {/* Menu */}
      <div className="menu">
        <a href="/">Categories</a>
        <a href="/">Offers</a>
        <a href="/">Upload Rx</a>
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