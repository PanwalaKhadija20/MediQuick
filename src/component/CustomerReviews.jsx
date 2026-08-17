import React, { useState } from "react";
import "./CustomerReviews.css";

const reviews = [
  {
    text: "Very fast delivery and genuine medicines. Highly recommended!",
    name: "Rakesh Patel",
  },
  {
    text: "Best medical delivery service in Surat. Very reliable!",
    name: "Hetal Shah",
  },
  {
    text: "Good packaging and medicines delivered within 30 minutes.",
    name: "Pratik Mehta",
  },
  {
    text: "Excellent service and genuine medicines. Really satisfied!",
    name: "Neha Patel",
  },
  {
    text: "Fast delivery and very easy ordering experience.",
    name: "Rahul Shah",
  },
];

function CustomerReviews() {
  const [startIndex, setStartIndex] = useState(0);

  const nextReviews = () => {
    setStartIndex((prev) => (prev + 1) % reviews.length);
  };

  const previousReviews = () => {
    setStartIndex(
      (prev) => (prev - 1 + reviews.length) % reviews.length
    );
  };

  const visibleReviews = [
    reviews[startIndex],
    reviews[(startIndex + 1) % reviews.length],
    reviews[(startIndex + 2) % reviews.length],
  ];

  return (
    <section className="customer-section">

      <h2>What Our Customers Say</h2>

      <div className="reviews-wrapper">

        {/* Left Arrow */}
        <button
          className="review-arrow left-arrow"
          onClick={previousReviews}
        >
          ‹
        </button>

        {/* Review Cards */}
        <div className="reviews-container">
          {visibleReviews.map((review, index) => (
            <div className="review-card" key={index}>

              <div className="quote">“</div>

              <p className="review-text">
                {review.text}
              </p>

              <h3>{review.name}</h3>

              <div className="stars">
                ★ ★ ★ ★ ★
              </div>

            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="review-arrow right-arrow"
          onClick={nextReviews}
        >
          ›
        </button>

      </div>

    </section>
  );
}

export default CustomerReviews;