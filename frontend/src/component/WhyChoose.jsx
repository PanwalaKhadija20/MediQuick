import React from "react";
import "./WhyChoose.css";

const benefits = [
  {
    icon: "🛡️",
    title: "100% Genuine",
    subtitle: "Medicines",
  },
  {
    icon: "⚕️",
    title: "Licensed & Trusted",
    subtitle: "Pharmacies",
  },
  {
    icon: "🚚",
    title: "Super Fast",
    subtitle: "Delivery",
  },
  {
    icon: "📦",
    title: "Easy Returns &",
    subtitle: "Refunds",
  },
  {
    icon: "🎧",
    title: "24x7 Customer",
    subtitle: "Support",
  },
];

function WhyChoose() {
  return (
    <section className="why-choose-section">
      <div className="why-choose-box">

        {/* Decorative leaves */}
        <div className="leaf leaf-one">🍃</div>
        <div className="leaf leaf-two">🍃</div>
        <div className="leaf leaf-three">🍃</div>

        <h2>Why Choose MediQuick?</h2>

        <div className="benefits-container">
          {benefits.map((benefit, index) => (
            <React.Fragment key={index}>
              <div className="benefit-card">

                <div className="benefit-icon">
                  {benefit.icon}
                </div>

                <div className="benefit-text">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.subtitle}</p>
                </div>

              </div>

              {index !== benefits.length - 1 && (
                <div className="benefit-divider"></div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;