import "../Hero.css";
import heroImg from "../assets/hero.png";

import {
  FaSearch,
  FaMicrophone,
  FaUpload,
  FaShoppingBag,
  FaShieldAlt,
  FaStore,
  FaTruck,
  FaUndo,
  FaHeadset,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Your Health,
          <br />
          <span>Our Priority</span>
        </h1>

        <p>
          Order medicines from trusted pharmacies in Surat
          and get doorstep delivery Fast.
        </p>

        {/* Search */}

        <div className="search-box">

          <input
            type="text"
            placeholder="Search medicines, brands, and more..."
          />

          <button className="search-btn">
            <FaSearch />
          </button>


        </div>

        {/* Buttons */}

        <div className="hero-buttons">

          <button className="upload-btn">
            <FaUpload />
            <div>
              <h4>Upload Prescription</h4>
              <p>Get medicines verified</p>
            </div>
          </button>

          <button className="quick-btn">
            <FaShoppingBag />
            <div>
              <h4>Quick Order</h4>
              <p>Reorder saved medicines</p>
            </div>
          </button>

        </div>

        {/* Features */}

        <div className="features">

          <div>
            <FaShieldAlt />
            <span>100% Genuine Medicines</span>
          </div>

          <div>
            <FaStore />
            <span>Licensed Pharmacies</span>
          </div>

          <div>
            <FaTruck />
            <span>Fast Delivery</span>
          </div>

          <div>
            <FaUndo />
            <span>Easy Returns</span>
          </div>

          <div>
            <FaHeadset />
            <span>24×7 Support</span>
          </div>

        </div>

      </div>

      {/* Right */}

      <div className="hero-right">
        <img src={heroImg} alt="Hero" />
      </div>

    </section>
  );
};

export default Hero;