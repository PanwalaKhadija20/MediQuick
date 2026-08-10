import React from "react";
import { FaArrowRight } from "react-icons/fa";
import medicineImage from "../assets/medicine-offer.png";
import "./OfferBanner.css";

function OfferBanner() {
  return (
    <section className="offer-section">

      <div className="offer-banner">

        {/* Left Content */}
        <div className="offer-content">

          <h2>
            Flat <span>20% OFF</span> on First Order
          </h2>

          <p>
            Use code: <strong>MEDIQ20</strong>
          </p>

          <button className="offer-btn">
            Order Now
            <FaArrowRight />
          </button>

        </div>

        {/* Medicine Image */}
        <div className="offer-image">
          <img
            src={medicineImage}
            alt="Medicines"
          />
        </div>

        {/* Discount Circle */}
        <div className="discount-circle">
          <strong>20%</strong>
          <span>OFF</span>
        </div>

      </div>

    </section>
  );
}

export default OfferBanner;