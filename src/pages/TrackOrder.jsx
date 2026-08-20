import React from "react";
import "./TrackOrder.css";

const orderItems = [
  {
    name: "Paracetamol 650mg",
    type: "Strip of 15 Tablets",
    price: 32,
    image: "/images/paracetamol.jpeg",
  },
  {
    name: "Crocin 650mg",
    type: "Strip of 15 Tablets",
    price: 48,
    image: "/images/crocin.jpeg",
  },
  {
    name: "Vicks VapoRub 25ml",
    type: "Jar",
    price: 85,
    image: "/images/vicks.jpeg",
  },
  {
    name: "ORS Electrolyte Powder 21.8gm",
    type: "Pack of 21.8g",
    price: 20,
    image: "/images/ors.jpeg",
  },
];

const steps = [
  {
    title: "Order Placed",
    date: "11 May, 09:45 AM",
    text: "Your order has been placed",
    icon: "✓",
  },
  {
    title: "Order Confirmed",
    date: "11 May, 09:50 AM",
    text: "We have confirmed your order",
    icon: "✓",
  },
  {
    title: "Order Packed",
    date: "11 May, 10:30 AM",
    text: "Your medicines are packed securely",
    icon: "✓",
  },
  {
    title: "Out for Delivery",
    date: "11 May, 08:35 PM",
    text: "Your order is on the way to you",
    icon: "🚚",
  },
  {
    title: "Delivered",
    date: "Pending",
    text: "Enjoy your medicines & stay healthy",
    icon: "□",
  },
];

function TrackOrder() {
  const subtotal = 185;
  const discount = 17;
  const deliveryFee = 0;
  const paidAmount = subtotal - discount + deliveryFee;

  return (
    <div className="track-page">

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>Home</span>
        <span>/</span>
        <span>My Orders</span>
        <span>/</span>
        <strong>Track Order</strong>
      </div>

      <div className="track-container">

        {/* LEFT SIDE */}
        <main className="track-main">

          <div className="track-heading">
            <div>
              <h1>Track Your Order</h1>
              <p>Order ID: <strong>#MDQ1234567890</strong></p>
              <p>Placed on 11 May, 2026 at 09:45 AM</p>
            </div>

            <button className="support-btn">
              🎧 &nbsp; Contact Support
            </button>
          </div>

          {/* Delivery Status */}
          <section className="delivery-card">

            <div className="delivery-top">
              <div>
                <h3>Estimated Delivery</h3>
                <h2>Tomorrow, 11 May by 10:15 PM</h2>
                <p>Get it delivered to your doorstep</p>
              </div>

              <div className="delivery-status">
                <span>Out for Delivery</span>
                <small>Last updated: Today, 08:35 PM</small>
              </div>
            </div>

            {/* Progress */}
            <div className="progress-wrapper">

              {steps.map((step, index) => (
                <div
                  className={`progress-step ${
                    index <= 3 ? "completed" : ""
                  }`}
                  key={step.title}
                >
                  <div className="step-circle">
                    {step.icon}
                  </div>

                  <div className="step-line"></div>

                  <h4>{step.title}</h4>
                  <small>{step.date}</small>
                  <p>{step.text}</p>
                </div>
              ))}

            </div>

            {/* Delivery Partner */}
            <div className="tracking-section">

              <div className="partner">
                <h3>Delivery Partner</h3>

                <div className="partner-info">
                  <img
                    src="/images/delivery-boy.jpg"
                    alt="Delivery Partner"
                  />

                  <div>
                    <h4>Ramesh Kumar</h4>
                    <p>⭐ 4.8 (120 ratings)</p>
                    <p>📞 +91 98765 43210</p>
                  </div>
                </div>
              </div>

              {/* Live Tracking */}
              <div className="live-tracking">
                <h3>Live Tracking</h3>

                <div className="tracking-map">
                  <div className="map-route">
                    <span className="location-dot">●</span>
                    <div className="route-line"></div>
                    <span className="bike">🏍️</span>
                  </div>
                </div>

                <button className="map-btn">
                  View on Map ↗
                </button>
              </div>

              {/* Address */}
              <div className="address-box">
                <h3>Delivery Address</h3>

                <p>
                  12, Silver Plaza, G-12,
                  <br />
                  Adajan, Surat - 395009
                  <br />
                  Gujarat, India
                </p>

                <button className="change-address">
                  Change Address ✎
                </button>

                <button className="whatsapp-btn">
                  💬 Get Order Updates on WhatsApp
                </button>
              </div>

            </div>

          </section>

          {/* Bottom Features */}
          <div className="features">
            <div>
              <span>🛡️</span>
              <h4>100% Genuine</h4>
              <p>Medicines</p>
            </div>

            <div>
              <span>⚙️</span>
              <h4>Licensed</h4>
              <p>Pharmacies</p>
            </div>

            <div>
              <span>🔒</span>
              <h4>Secure</h4>
              <p>Payments</p>
            </div>

            <div>
              <span>↩️</span>
              <h4>Easy Returns</h4>
              <p>& Refunds</p>
            </div>

            <div>
              <span>🎧</span>
              <h4>24/7 Customer</h4>
              <p>Support</p>
            </div>
          </div>

        </main>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <aside className="order-summary">

          <div className="summary-header">
            <h2>Order Summary</h2>
            <span>4 Items</span>
          </div>

          {orderItems.map((item) => (
            <div className="order-item" key={item.name}>

              <div className="product-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="product-info">
                <h4>{item.name}</h4>
                <p>{item.type}</p>
                <strong>₹{item.price.toFixed(2)}</strong>
              </div>

              <span className="quantity">× 1</span>

            </div>
          ))}

          <div className="price-details">

            <div>
              <span>Price (4 items)</span>
              <strong>₹185.00</strong>
            </div>

            <div>
              <span>Discount</span>
              <strong className="discount">- ₹17.00</strong>
            </div>

            <div>
              <span>Delivery Fee</span>
              <strong>₹0.00</strong>
            </div>

          </div>

          <div className="paid-amount">
            <span>Paid Amount</span>
            <strong>₹168.00</strong>
          </div>

          <div className="payment-note">
            🏷️ You saved ₹17.00 on this order
          </div>

        </aside>

      </div>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-brand">
          <h2>💊 MediQuick</h2>
          <p>
            Your trusted partner for fast and
            reliable medicines delivery in Surat.
          </p>

          <div className="social-icons">
            f &nbsp; ◎ &nbsp; 𝕏 &nbsp; in
          </div>
        </div>

        <div>
          <h3>Company</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </div>

        <div>
          <h3>Customer Care</h3>
          <p>Help Center</p>
          <p>How to Order</p>
          <p>Returns & Refunds</p>
          <p>Track Order</p>
        </div>

        <div>
          <h3>My Account</h3>
          <p>My Orders</p>
          <p>My Addresses</p>
          <p>My Profile</p>
          <p>Saved Medicines</p>
        </div>

        <div>
          <h3>Legal</h3>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Refund Policy</p>
        </div>

      </footer>

    </div>
  );
}

export default TrackOrder;