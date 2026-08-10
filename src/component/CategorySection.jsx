import React from "react";
import {
  FaCapsules,
  FaThermometerHalf,
  FaBandAid,
  FaBriefcaseMedical,
  FaBaby,
  FaPumpSoap,
  FaHeartbeat,
  FaPills,
  FaArrowRight,
} from "react-icons/fa";

import "./CategorySection.css";

const categories = [
  {
    name: "Tablets &",
    name2: "Capsules",
    icon: <FaCapsules />,
  },
  {
    name: "Fever",
    icon: <FaThermometerHalf />,
  },
  {
    name: "Pain Relief",
    icon: <FaBandAid />,
  },
  {
    name: "First Aid",
    icon: <FaBriefcaseMedical />,
  },
  {
    name: "Baby Care",
    icon: <FaBaby />,
  },
  {
    name: "Personal Care",
    icon: <FaPumpSoap />,
  },
  {
    name: "Diabetes Care",
    icon: <FaHeartbeat />,
  },
  {
    name: "Health",
    name2: "Supplements",
    icon: <FaPills />,
  },
];

function CategorySection() {
  return (
    <section className="category-section">

      {/* Header */}
      <div className="category-header">
        <h2>Shop by Category</h2>

        <button className="view-all-btn">
          View all categories
          <FaArrowRight />
        </button>
      </div>

      {/* Categories */}
      <div className="category-list">

        {categories.map((category, index) => (
          <div className="category-card" key={index}>

            <div className="category-icon">
              {category.icon}
            </div>

            <div className="category-name">
              <span>{category.name}</span>

              {category.name2 && (
                <span>{category.name2}</span>
              )}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default CategorySection;