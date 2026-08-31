import React from "react";
import "./TopPharmacies.css";

const pharmacies = [
  {
    name: "Apollo Pharmacy",
    location: "Adajan, Surat",
    time: "30 mins",
    rating: "4.8",
    logo: "/images/apollo.jpeg",
  },
  {
    name: "Wellness Forever",
    location: "City Light, Surat",
    time: "25 mins",
    rating: "4.7",
    logo: "/images/wellness.jpeg",
  },
  {
    name: "MedPlus",
    location: "Varchha, Surat",
    time: "35 mins",
    rating: "4.6",
    logo: "/images/medplus.jpeg",
  },
  {
    name: "Gujarat Medical",
    location: "Piplod, Surat",
    time: "40 mins",
    rating: "4.7",
    logo: "/images/gujarat-medical.jpeg",
  },
];

function TopPharmacies() {
  return (
    <section className="pharmacy-section">

      <div className="pharmacy-heading">
        <h2>Top Rated Pharmacies in Surat</h2>

      </div>

      <div className="pharmacy-container">

        {pharmacies.map((pharmacy, index) => (
          <div className="pharmacy-card" key={index}>

            <div className="pharmacy-top">

              <img
                src={pharmacy.logo}
                alt={pharmacy.name}
                className="pharmacy-logo"
              />

              <div>
                <h3>{pharmacy.name}</h3>
                <p>{pharmacy.location}</p>
              </div>

            </div>

            <div className="pharmacy-info">

              <div>
                <strong>{pharmacy.time}</strong>
                <span>Delivery Time</span>
              </div>

              <div className="free-delivery">
                FREE
              </div>

            </div>

            <div className="rating">
              ⭐ {pharmacy.rating}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default TopPharmacies;