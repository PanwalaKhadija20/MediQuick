import React from "react";
import {
  FaTag,
  FaHeartbeat,
  FaPumpSoap,
  FaLeaf,
  FaHome,
  FaCreditCard,
  FaShieldAlt,
  FaMedkit,
  FaTruck,
  FaUndo,
  FaHeadset,
  FaEnvelope,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Offers.css";

const Offers = () => {
  const offers = [
    {
      tag: "BEST SELLER",
      tagClass: "green-tag",
      title: "Flat 20% OFF",
      subtitle: "on medicines",
      code: "MEDIQ20",
      condition: "On first order above ₹499",
      button: "Shop Now",
      valid: "Valid till 31 May 2027",
      image: "/images/offer1.png",
      cardClass: "medicine-offer",
    },

    {
      tag: "HEALTH CARE",
      tagClass: "yellow-tag",
      title: "Up to 25% OFF",
      subtitle: "on health products",
      code: null,
      condition: "On order above ₹599",
      button: "Shop Now",
      valid: "Valid till 15 May 2027",
      image: "/images/offer2.png",
      cardClass: "health-offer",
    },

    {
      tag: "PERSONAL CARE",
      tagClass: "pink-tag",
      title: "Flat 10% OFF",
      subtitle: "on personal care",
      code: "CARE10",
      condition: "On order above ₹599",
      button: "Shop Now",
      valid: "Valid till 15 May 2027",
      image: "/images/offer3.jpeg",
      cardClass: "personal-offer",
    },

    {
      tag: "BANK OFFER",
      tagClass: "blue-tag",
      title: "Up to ₹150 OFF",
      subtitle: "on orders via card",
      code: null,
      condition: "Min. order ₹999",
      button: "View Details",
      valid: "Valid till 31 May 2027",
      image: "/images/offer4.jpg",
      cardClass: "bank-offer",
    },

    {
      tag: "FREE DELIVERY",
      tagClass: "light-green-tag",
      title: "FREE Delivery",
      subtitle: "on all orders",
      code: null,
      condition: "No minimum order value",
      button: "Shop Now",
      valid: "Valid till 31 May 2027",
      image: "/images/offer5.jpg",
      cardClass: "delivery-offer",
    },
  ];

  return (
    <div className="offers-page">

      {/* ================= HEADER ================= */}

     


      {/* ================= MAIN ================= */}

      <main>

        {/* Breadcrumb */}

        <div className="breadcrumb">
          <span>Home</span>
          <b>/</b>
          <strong>Offers</strong>
        </div>


        {/* ================= TITLE SECTION ================= */}

        <section className="offer-heading">

          <div>
            <h1>Best Offers on Medicines</h1>

            <p>
              Save more on your health & wellness. Limited period deals!
            </p>
          </div>

          <div className="top-discount">

            <div className="discount-icon">
              <FaTag />
            </div>

            <div>
              <small>Save extra on medicines</small>

              <div className="discount-code">
                Use code: <b>MEDIQ20</b>
              </div>
            </div>

            <div className="discount-percent">
              <strong>20% OFF</strong>
              <span>on first order above ₹499</span>
            </div>

          </div>

        </section>


        {/* ================= OFFER CATEGORIES ================= */}

        <div className="offer-categories">

          <button className="category-active">
            <FaTag />
            <span>All Offers</span>
          </button>

          <button>
            <FaHeartbeat />
            <span>Health Care</span>
          </button>

          <button>
            <FaPumpSoap />
            <span>Personal Care</span>
          </button>

          <button>
            <FaLeaf />
            <span>Ayurveda</span>
          </button>

          <button>
            <FaHome />
            <span>Home Care</span>
          </button>

          <button>
            <FaCreditCard />
            <span>Bank Offers</span>
          </button>

        </div>


        {/* ================= OFFER CARDS ================= */}

        <section className="offers-grid">

          {offers.map((offer, index) => (

            <div
              className={`offer-card ${offer.cardClass}`}
              key={index}
            >

              <div className={`offer-tag ${offer.tagClass}`}>
                {offer.tag}
              </div>

              <div className="offer-image">

                <img
                  src={offer.image}
                  alt={offer.title}
                />

              </div>

              <div className="offer-content">

                <h2>{offer.title}</h2>

                <p className="offer-subtitle">
                  {offer.subtitle}
                </p>

                {offer.code && (
                  <div className="offer-code">
                    Use code: <strong>{offer.code}</strong>
                  </div>
                )}

                <p className="offer-condition">
                  {offer.condition}
                </p>

                <button className="shop-offer-btn">
                  {offer.button}
                </button>

                <div className="offer-valid">
                  <FaCalendarAlt />
                  {offer.valid}
                </div>

              </div>

            </div>

          ))}

        </section>


        {/* ================= BENEFITS ================= */}

        <section className="offer-benefits">

          <div className="benefit">

            <FaShieldAlt />

            <div>
              <h3>100% Genuine</h3>
              <h3>Medicines</h3>
              <p>Sourced directly from licensed pharmacies</p>
            </div>

          </div>


          <div className="benefit">

            <FaMedkit />

            <div>
              <h3>Best Prices</h3>
              <h3>Guaranteed</h3>
              <p>Lowest prices on all medicines</p>
            </div>

          </div>


          <div className="benefit">

            <FaTruck />

            <div>
              <h3>Fast Delivery</h3>
              <h3>in 30 mins</h3>
              <p>Quick delivery to your doorstep</p>
            </div>

          </div>


          <div className="benefit">

            <FaUndo />

            <div>
              <h3>Easy Returns</h3>
              <h3>& Refunds</h3>
              <p>Hassle-free returns within 7 days</p>
            </div>

          </div>


          <div className="benefit">

            <FaHeadset />

            <div>
              <h3>24×7 Customer</h3>
              <h3>Support</h3>
              <p>We are here to help you anytime</p>
            </div>

          </div>

        </section>


        {/* ================= SUBSCRIBE ================= */}

        <section className="offer-subscribe">

          <div className="subscribe-left">

            <div className="email-icon">
              <FaEnvelope />
            </div>

            <div>
              <h2>Never miss an offer!</h2>
              <p>
                Subscribe to get the latest offers and health tips.
              </p>
            </div>

          </div>

          <div className="subscribe-form">

            <input
              type="email"
              placeholder="Enter your email address"
            />

            <button>
              Subscribe
            </button>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      

    </div>
  );
};

export default Offers;