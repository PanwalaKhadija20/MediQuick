import React, { useState } from "react";
import {
  MapPin,
  Pencil,
  Trash2,
  ShieldCheck,
  Truck,
  Clock3,
  Tag,
  Plus,
} from "lucide-react";

import Footer from "./Footer";
import "./Checkout.css";

const products = [
  {
    id: 1,
    name: "Paracetamol 650mg",
    type: "Strip of 15 Tablets",
    price: 32,
    quantity: 1,
    image: "/images/paracetamol.jpeg",
  },
  {
    id: 2,
    name: "Crocin 650mg",
    type: "Strip of 15 Tablets",
    price: 48,
    quantity: 1,
    image: "/images/crocin.jpeg",
  },
  {
    id: 3,
    name: "Vicks VapoRub 25ml",
    type: "Jar",
    price: 85,
    quantity: 1,
    image: "/images/vicks.jpeg",
  },
  {
    id: 4,
    name: "ORS Electrolyte Powder 21.8gm",
    type: "Pack of 21.8g",
    price: 20,
    quantity: 1,
    image: "/images/ors.jpeg",
  },
];

function Checkout() {

  const [selectedAddress, setSelectedAddress] = useState("home");

  const [paymentMethod, setPaymentMethod] = useState("upi");

  const [instructions, setInstructions] = useState("");

  const subtotal = products.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const originalPrice = 222;

  const discount = originalPrice - subtotal;

  const deliveryFee = 20;

  const total = subtotal + deliveryFee;

  return (
    <div className="checkout-page">

      {/* Breadcrumb */}
      <div className="checkout-breadcrumb">
        Home <span>›</span> Cart <span>›</span> Checkout
      </div>


      {/* Heading */}
      <div className="checkout-heading">

        <h1>Checkout</h1>

        <p>
          Fill in your details and place your order
        </p>

      </div>


      {/* Checkout Steps */}
      <div className="checkout-steps">

        <div className="checkout-step active">

          <span>1</span>

          <strong>
            Delivery Address
          </strong>

        </div>

        <div className="step-line"></div>

        <div className="checkout-step">

          <span>2</span>

          <strong>
            Payment
          </strong>

        </div>

        <div className="step-line"></div>

        <div className="checkout-step">

          <span>3</span>

          <strong>
            Review & Place Order
          </strong>

        </div>

      </div>


      {/* Main Checkout Layout */}
      <div className="checkout-layout">


        {/* ================= LEFT ================= */}

        <div className="checkout-left">


          {/* Delivery Address */}
          <section className="checkout-card">

            <div className="section-title">

              <h2>
                Delivery Address
              </h2>

              <button className="add-address">
                <Plus size={16} />
                Add New Address
              </button>

            </div>


            {/* Home Address */}
            <div
              className={`address-option ${
                selectedAddress === "home"
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                setSelectedAddress("home")
              }
            >

              <input
                type="radio"
                checked={selectedAddress === "home"}
                onChange={() =>
                  setSelectedAddress("home")
                }
              />

              <div className="address-icon">
                <MapPin size={18} />
              </div>

              <div className="address-details">

                <div className="address-name">

                  <strong>Home</strong>

                  <span>(Default)</span>

                  <small>DEFAULT</small>

                </div>

                <p>
                  12, Silver Plaza, G-12,
                  Adajan, Surat - 395009
                  <br />
                  Gujarat, India
                </p>

                <p>
                  +91 98765 43210
                </p>

              </div>

              <div className="address-actions">

                <button>
                  <Pencil size={15} />
                  Edit
                </button>

                <button>
                  <Trash2 size={15} />
                  Remove
                </button>

              </div>

            </div>


            {/* Work Address */}
            <div
              className={`address-option ${
                selectedAddress === "work"
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                setSelectedAddress("work")
              }
            >

              <input
                type="radio"
                checked={selectedAddress === "work"}
                onChange={() =>
                  setSelectedAddress("work")
                }
              />

              <div className="address-icon">
                <MapPin size={18} />
              </div>

              <div className="address-details">

                <div className="address-name">
                  <strong>Work</strong>
                </div>

                <p>
                  Office No. 501, City Business Park,
                  Vesu,
                  <br />
                  Surat - 395007, Gujarat, India
                </p>

                <p>
                  +91 91234 56789
                </p>

              </div>

              <div className="address-actions">

                <button>
                  <Pencil size={15} />
                  Edit
                </button>

                <button>
                  <Trash2 size={15} />
                  Remove
                </button>

              </div>

            </div>


            {/* Delivery Instructions */}
            <div className="instructions">

              <label>
                Delivery Instructions (Optional)
              </label>

              <textarea
                maxLength="150"
                placeholder="E.g. Leave at the door, Call before delivery, etc."
                value={instructions}
                onChange={(e) =>
                  setInstructions(e.target.value)
                }
              ></textarea>

              <div className="character-count">
                {instructions.length}/150
              </div>

            </div>

          </section>


          {/* Payment Method */}
          <section className="checkout-card">

            <div className="section-title">

              <h2>
                Payment Method
              </h2>

              <span className="secure-payment">
                <ShieldCheck size={16} />
                100% Secure Payments
              </span>

            </div>


            {/* UPI */}
            <div
              className={`payment-option ${
                paymentMethod === "upi"
                  ? "payment-selected"
                  : ""
              }`}
              onClick={() =>
                setPaymentMethod("upi")
              }
            >

              <input
                type="radio"
                checked={paymentMethod === "upi"}
                onChange={() =>
                  setPaymentMethod("upi")
                }
              />

              <div className="payment-logo upi">
                UPI
              </div>

              <div className="payment-text">

                <strong>UPI</strong>

                <p>
                  Pay using any UPI app
                </p>

              </div>

              <span className="recommended">
                Recommended
              </span>

            </div>


            {/* Card */}
            <div
              className={`payment-option ${
                paymentMethod === "card"
                  ? "payment-selected"
                  : ""
              }`}
              onClick={() =>
                setPaymentMethod("card")
              }
            >

              <input
                type="radio"
                checked={paymentMethod === "card"}
                onChange={() =>
                  setPaymentMethod("card")
                }
              />

              <div className="payment-logo card-logo">
                VISA
              </div>

              <div className="payment-text">

                <strong>
                  Credit / Debit Card
                </strong>

                <p>
                  Pay using any credit or debit card
                </p>

              </div>

              <div className="card-brands">
                VISA &nbsp; ●● &nbsp; RuPay
              </div>

            </div>


            {/* Net Banking */}
            <div
              className={`payment-option ${
                paymentMethod === "netbanking"
                  ? "payment-selected"
                  : ""
              }`}
              onClick={() =>
                setPaymentMethod("netbanking")
              }
            >

              <input
                type="radio"
                checked={paymentMethod === "netbanking"}
                onChange={() =>
                  setPaymentMethod("netbanking")
                }
              />

              <div className="payment-symbol">
                ◉
              </div>

              <div className="payment-text">

                <strong>
                  Net Banking
                </strong>

                <p>
                  Pay using your net banking
                </p>

              </div>

            </div>


            {/* Wallet */}
            <div
              className={`payment-option ${
                paymentMethod === "wallet"
                  ? "payment-selected"
                  : ""
              }`}
              onClick={() =>
                setPaymentMethod("wallet")
              }
            >

              <input
                type="radio"
                checked={paymentMethod === "wallet"}
                onChange={() =>
                  setPaymentMethod("wallet")
                }
              />

              <div className="payment-symbol">
                ▣
              </div>

              <div className="payment-text">

                <strong>
                  Wallets
                </strong>

                <p>
                  Pay using Paytm, PhonePe,
                  Amazon Pay & more
                </p>

              </div>

            </div>


            {/* COD */}
            <div
              className={`payment-option ${
                paymentMethod === "cod"
                  ? "payment-selected"
                  : ""
              }`}
              onClick={() =>
                setPaymentMethod("cod")
              }
            >

              <input
                type="radio"
                checked={paymentMethod === "cod"}
                onChange={() =>
                  setPaymentMethod("cod")
                }
              />

              <Truck size={20} />

              <div className="payment-text">

                <strong>
                  Cash on Delivery (COD)
                </strong>

                <p>
                  Pay cash when your order is delivered
                </p>

              </div>

              <span className="cod-charge">
                ₹20 COD Charges
              </span>

            </div>


            <div className="ssl-message">

              <ShieldCheck size={20} />

              <span>
                Your payments are secure with
                256-bit SSL encryption.
              </span>

            </div>

          </section>

        </div>


        {/* ================= RIGHT ================= */}

        <div className="checkout-right">


          {/* Order Summary */}
          <section className="order-summary">

            <div className="summary-header">

              <h2>
                Order Summary
              </h2>

              <strong>
                {products.length} Items
              </strong>

            </div>


            {/* Products */}

            {products.map((item) => (

              <div
                className="checkout-product"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="checkout-product-info">

                  <strong>
                    {item.name}
                  </strong>

                  <p>
                    {item.type}
                  </p>

                  <span>
                    ₹{item.price}.00 × {item.quantity}
                  </span>

                </div>

                <strong className="product-total">
                  ₹{item.price}.00
                </strong>

              </div>

            ))}


            {/* Price */}
            <div className="summary-prices">

              <div>
                <span>
                  Price ({products.length} items)
                </span>

                <strong>
                  ₹{originalPrice}.00
                </strong>
              </div>

              <div className="checkout-discount">

                <span>
                  Discount
                </span>

                <strong>
                  - ₹{discount}.00
                </strong>

              </div>

              <div>

                <span>
                  Delivery Fee ⓘ
                </span>

                <strong>
                  ₹{deliveryFee}.00
                </strong>

              </div>

            </div>


            {/* Total */}

            <div className="checkout-total">

              <span>
                To Pay
              </span>

              <strong>
                ₹{total}.00
              </strong>

            </div>


            <div className="checkout-saving">

              <Tag size={17} />

              You saved ₹{discount}.00 on this order

            </div>


            {/* Free Delivery */}

            <div className="delivery-progress">

              <div className="delivery-progress-title">

                <Truck size={22} />

                <p>
                  Add items worth
                  <strong> ₹31 </strong>
                  to get
                  <br />
                  <b>FREE Delivery</b>
                </p>

              </div>

              <div className="progress-bar">

                <div></div>

              </div>

              <div className="progress-label">

                <span>₹0</span>
                <span>₹199</span>

              </div>

            </div>

          </section>


          {/* Delivery Time */}

          <div className="delivery-time">

            <Clock3 size={22} />

            <div>

              <p>
                Your order will be delivered by
              </p>

              <strong>
                Tomorrow, 11 May
              </strong>

              <div className="delivery-info">

                <span>
                  30 mins Delivery
                </span>

                <span>
                  7 AM - 10 PM
                </span>

              </div>

            </div>

          </div>


          {/* Promo Code */}

          <div className="promo-box">

            <h3>
              Have a promo code?
            </h3>

            <div className="promo-input">

              <input
                type="text"
                placeholder="Enter coupon code"
              />

              <button>
                Apply
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* Why Shop With MediQuick */}

      <section className="why-checkout">

        <div className="why-image">
          💊
        </div>

        <div className="why-title">

          <h2>
            Why shop with MediQuick?
          </h2>

        </div>

        <div className="why-item">
          <ShieldCheck size={25} />
          <span>
            100% Genuine
            <br />
            Medicines
          </span>
        </div>

        <div className="why-item">
          <ShieldCheck size={25} />
          <span>
            Licensed
            <br />
            Pharmacies
          </span>
        </div>

        <div className="why-item">
          <Truck size={25} />
          <span>
            Fast Delivery
            <br />
            in 30 mins
          </span>
        </div>

        <div className="why-item">
          <Clock3 size={25} />
          <span>
            Easy Returns
            <br />
            & Refunds
          </span>
        </div>

        <div className="why-item">
          <MessageIcon />
          <span>
            24x7 Customer
            <br />
            Support
          </span>
        </div>

      </section>


      {/* Existing Footer */}
      <Footer />

    </div>
  );
}


/* Small customer support icon */

function MessageIcon() {
  return (
    <span className="support-icon">
      ♧
    </span>
  );
}

export default Checkout;