import React from "react";
import { useNavigate } from "react-router-dom";
import "./PopularMedicines.css";

export const medicines = [
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

function PopularMedicines() {
  const navigate = useNavigate();

  // Add medicine to cart
  const addToCart = (medicine) => {
    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingMedicine = existingCart.find(
      (item) => item.id === medicine.id
    );

    let updatedCart;

    if (existingMedicine) {
      // Increase quantity if medicine already exists
      updatedCart = existingCart.map((item) =>
        item.id === medicine.id
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1,
            }
          : item
      );
    } else {
      // Add new medicine
      updatedCart = [
        ...existingCart,
        {
          ...medicine,
          quantity: 1,
        },
      ];
    }

    // Save cart
    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    // Update cart count in other components
    window.dispatchEvent(new Event("cartUpdated"));

    // Go to Cart page
    navigate("/cart");
  };

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

        {medicines.map((medicine) => (
          <div
            className="medicine-card"
            key={medicine.id}
          >

            {/* Product Image */}
            <div className="medicine-image">
              <img
                src={medicine.image}
                alt={medicine.name}
              />
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

                <span className="star">
                  ★
                </span>

                <span>
                  {medicine.rating}
                </span>

              </div>

              {/* Cart */}
              <div className="cart-row">

                <span className="delivery-icon">
                  ♧
                </span>

                <button
                  className="add-cart"
                  onClick={() => addToCart(medicine)}
                >
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