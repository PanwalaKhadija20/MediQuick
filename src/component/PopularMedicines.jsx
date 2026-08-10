import React from "react";
import "./PopularMedicines.css";

const medicines = [
  {
    name: "Paracetamol 650mg",
    subtitle: "Strip of 15 Tablets",
    price: "₹32.00",
    oldPrice: "₹40.00",
    discount: "20% OFF",
    rating: "4.8",
    image: "/images/paracetamol.jpeg",
  },
  {
    name: "Crocin 650mg",
    subtitle: "Strip of 15 Tablets",
    price: "₹48.00",
    oldPrice: "₹60.00",
    discount: "20% OFF",
    rating: "4.9",
    image: "/images/crocin.jpeg",
  },
  {
    name: "Dolo 650mg",
    subtitle: "Strip of 15 Tablets",
    price: "₹45.00",
    oldPrice: "₹56.00",
    discount: "20% OFF",
    rating: "4.7",
    image: "/images/dolo.jpeg",
  },
  {
    name: "Vicks VapoRub 25ml",
    subtitle: "Jar",
    price: "₹85.00",
    oldPrice: "₹100.00",
    discount: "15% OFF",
    rating: "4.8",
    image: "/images/vicks.jpeg",
  },
  {
    name: "ORS Electrolyte",
    subtitle: "Pack of 20g",
    price: "₹20.00",
    oldPrice: "₹25.00",
    discount: "20% OFF",
    rating: "4.6",
    image: "/images/ors.jpeg",
  },
];

function PopularMedicines() {
  return (
    <section className="popular-medicines">

      {/* Heading */}
      <div className="medicine-heading">
        <h2>Popular Medicines</h2>

        <a href="#" className="view-all">
          View all medicines <span>→</span>
        </a>
      </div>

      {/* Medicine Cards */}
      <div className="medicine-container">

        {/* Left Arrow */}
        <button className="medicine-arrow left-arrow">
          ‹
        </button>

        {medicines.map((medicine, index) => (
          <div className="medicine-card" key={index}>

            {/* Product Image */}
            <div className="medicine-image">
              <img src={medicine.image} alt={medicine.name} />
            </div>

            {/* Product Details */}
            <div className="medicine-details">

              <h3>{medicine.name}</h3>

              <p className="medicine-subtitle">
                {medicine.subtitle}
              </p>

              {/* Price */}
              <div className="price-row">
                <span className="medicine-price">
                  {medicine.price}
                </span>

                <span className="old-price">
                  {medicine.oldPrice}
                </span>

                <span className="discount">
                  {medicine.discount}
                </span>
              </div>

              {/* Rating */}
              <div className="rating">
                <span className="star">★</span>
                <span>{medicine.rating}</span>
              </div>

              {/* Cart */}
              <div className="cart-row">

                <span className="delivery-icon">
                  ♧
                </span>

                <button className="add-cart">
                  Add to Cart
                </button>

              </div>

            </div>
          </div>
        ))}

        {/* Right Arrow */}
        <button className="medicine-arrow right-arrow">
          ›
        </button>

      </div>
    </section>
  );
}

export default PopularMedicines;