import "../Hero.css";
import heroImg from "../assets/hero.png";
import React, { useState } from "react";

import {
  FaSearch,
  FaUpload,
  FaShoppingBag,
  FaShieldAlt,
  FaStore,
  FaTruck,
  FaUndo,
  FaHeadset,
} from "react-icons/fa";

const medicines = [
  {
    id: 1,
    name: "Paracetamol 650mg",
    subtitle: "Strip of 15 Tablets",
    price: "₹32.00",
    oldPrice: "₹40.00",
    discount: "20% OFF",
    rating: "4.8",
    image: "/images/paracetamol.jpeg",
  },
  {
    id: 2,
    name: "Crocin 650mg",
    subtitle: "Strip of 15 Tablets",
    price: "₹48.00",
    oldPrice: "₹60.00",
    discount: "20% OFF",
    rating: "4.9",
    image: "/images/crocin.jpeg",
  },
  {
    id: 3,
    name: "Dolo 650mg",
    subtitle: "Strip of 15 Tablets",
    price: "₹45.00",
    oldPrice: "₹56.00",
    discount: "20% OFF",
    rating: "4.7",
    image: "/images/dolo.jpeg",
  },
  {
    id: 4,
    name: "Vicks VapoRub 25ml",
    subtitle: "Jar",
    price: "₹85.00",
    oldPrice: "₹100.00",
    discount: "15% OFF",
    rating: "4.8",
    image: "/images/vicks.jpeg",
  },
  {
    id: 5,
    name: "ORS Electrolyte",
    subtitle: "Pack of 20g",
    price: "₹20.00",
    oldPrice: "₹25.00",
    discount: "20% OFF",
    rating: "4.6",
    image: "/images/ors.jpeg",
  },
];

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setSearchResult({
        found: false,
        message: "Please enter a medicine name.",
      });
      return;
    }

    const result = medicines.find((medicine) =>
      medicine.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );

    if (result) {
      setSearchResult({
        found: true,
        medicine: result,
      });
    } else {
      setSearchResult({
        found: false,
        message: `No medicine found for "${searchTerm}".`,
      });
    }
  };

  // Add searched medicine to cart
  const addToCart = (medicine) => {
    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingMedicine = existingCart.find(
      (item) => item.id === medicine.id
    );

    let updatedCart;

    if (existingMedicine) {
      updatedCart = existingCart.map((item) =>
        item.id === medicine.id
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1,
            }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          ...medicine,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(new Event("cartUpdated"));

    alert(`${medicine.name} added to cart!`);
  };

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

        {/* SEARCH */}
        <div className="search-box">

          <input
            type="text"
            placeholder="Search medicine..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setSearchResult(null);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

          <button
            type="button"
            onClick={handleSearch}
          >
            <FaSearch />
          </button>

        </div>

        {/* SEARCH RESULT */}
        {searchResult && (
          <div className="search-result">

            {searchResult.found ? (
              <div className="search-medicine-card">

                {/* IMAGE */}
                <div className="search-medicine-image">
                  <img
                    src={searchResult.medicine.image}
                    alt={searchResult.medicine.name}
                  />
                </div>

                {/* DETAILS */}
                <div className="search-medicine-details">

                  <h3>
                    {searchResult.medicine.name}
                  </h3>

                  <p className="search-subtitle">
                    {searchResult.medicine.subtitle}
                  </p>

                  {/* PRICE */}
                  <div className="search-price-row">

                    <span className="search-price">
                      {searchResult.medicine.price}
                    </span>

                    <span className="search-old-price">
                      {searchResult.medicine.oldPrice}
                    </span>

                    <span className="search-discount">
                      {searchResult.medicine.discount}
                    </span>

                  </div>

                  {/* RATING */}
                  <div className="search-rating">
                    <span>★</span>
                    {searchResult.medicine.rating}
                  </div>

                  {/* ADD TO CART */}
                  <button
                    className="search-add-cart"
                    onClick={() =>
                      addToCart(searchResult.medicine)
                    }
                  >
                    Add to Cart
                  </button>

                </div>

              </div>
            ) : (
              <p className="not-found">
                {searchResult.message}
              </p>
            )}

          </div>
        )}

       

        {/* FEATURES */}
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

      {/* RIGHT */}
      <div className="hero-right">
        <img src={heroImg} alt="Hero" />
      </div>

    </section>
  );
};

export default Hero;