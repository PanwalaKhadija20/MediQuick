import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const suggestions = [
  {
    id: 6,
    name: "Dolo 650mg",
    type: "Strip of 15 Tablets",
    price: 45,
    oldPrice: 56,
    discount: "20% OFF",
    rating: "4.7",
    reviews: "198",
    image: "/images/dolo.jpeg",
  },
  {
    id: 7,
    name: "Calpol 650mg",
    type: "Strip of 15 Tablets",
    price: 40,
    oldPrice: 50,
    discount: "20% OFF",
    rating: "4.6",
    reviews: "154",
    image: "/images/calpol.jpeg",
  },
  {
    id: 8,
    name: "Digene Gel",
    type: "Tube of 20g",
    price: 55,
    oldPrice: 65,
    discount: "15% OFF",
    rating: "4.5",
    reviews: "76",
    image: "/images/digene.jpeg",
  },
  {
    id: 9,
    name: "Allegra 120mg",
    type: "Strip of 10 Tablets",
    price: 155,
    oldPrice: 180,
    discount: "14% OFF",
    rating: "4.6",
    reviews: "83",
    image: "/images/alegra.jpeg",
  },
  {
    id: 10,
    name: "Vitamin C 1000mg",
    type: "Bottle of 15 Tablets",
    price: 120,
    oldPrice: 150,
    discount: "20% OFF",
    rating: "4.8",
    reviews: "311",
    image: "/images/vitamin.jpeg",
  },
];

function Cart() {
  const navigate = useNavigate();

  // Load cart from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      return JSON.parse(savedCart);
    }

    return [];
  });

  // Save cart whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart count in other components
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cart]);

  // Increase quantity
  const increaseQty = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: Math.max(
                  1,
                  (item.quantity || 1) - 1
                ),
              }
            : item
        )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  // Remove all items
  const removeAllItems = () => {
    setCart([]);
  };

  // Add suggestion to cart
  const addSuggestionToCart = (item) => {
    setCart((currentCart) => {
      const existingMedicine = currentCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingMedicine) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: (cartItem.quantity || 1) + 1,
              }
            : cartItem
        );
      }

      return [
        ...currentCart,
        {
          ...item,
          subtitle: item.type,
          quantity: 1,
        },
      ];
    });
  };

  // Continue shopping
  const continueShopping = () => {
    navigate("/");
  };

  // Convert price safely
  const getPrice = (price) => {
    if (typeof price === "number") {
      return price;
    }

    return parseFloat(
      String(price)
        .replace("₹", "")
        .replace(",", "")
    ) || 0;
  };

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) =>
      total +
      getPrice(item.price) *
        (item.quantity || 1),
    0
  );

  // Calculate original price
  const originalPrice = cart.reduce(
    (total, item) =>
      total +
      getPrice(item.oldPrice || item.price) *
        (item.quantity || 1),
    0
  );

  // Discount
  const discount = originalPrice - subtotal;

  // Delivery fee
  const deliveryFee = subtotal >= 199 ? 0 : 20;

  // Final total
  const total = subtotal + deliveryFee;

  return (
    <div className="cart-page">

      {/* Breadcrumb */}
      <div className="cart-breadcrumb">
        Home <span>›</span> Cart
      </div>

      {/* Cart Heading */}
      <div className="cart-heading">

        <div>
          <h1>
            My Cart{" "}
            <span>
              ({cart.length}{" "}
              {cart.length === 1 ? "Item" : "Items"})
            </span>
          </h1>

          <p>
            Review your items and proceed to checkout.
          </p>
        </div>

        <div className="cart-benefits-top">

          <div>
            <span>♢</span>
            <p>
              <b>100% Genuine</b>
              <br />
              Medicines
            </p>
          </div>

          <div>
            <span>♧</span>
            <p>
              <b>Secure</b>
              <br />
              Payments
            </p>
          </div>

          <div>
            <span>↩</span>
            <p>
              <b>Easy Returns</b>
              <br />
              & Refunds
            </p>
          </div>

          <div>
            <span>🚚</span>
            <p>
              <b>Fast Delivery</b>
              <br />
              in 30 mins
            </p>
          </div>

        </div>
      </div>

      {/* Main Cart Area */}
      <div className="cart-layout">

        {/* LEFT SIDE */}
        <div className="cart-left">

          <div className="cart-items-box">

            {cart.length === 0 ? (

              <div className="empty-cart">

                <h2>Your Cart is Empty</h2>

                <p>
                  Add some medicines to continue
                  shopping.
                </p>

                <button
                  onClick={continueShopping}
                >
                  Continue Shopping
                </button>

              </div>

            ) : (

              cart.map((item) => (

                <div
                  className="cart-item"
                  key={item.id}
                >

                  <input
                    type="checkbox"
                    defaultChecked
                  />

                  {/* Product Image */}
                  <div className="cart-product-image">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                  </div>

                  {/* Product Details */}
                  <div className="cart-product-info">

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      {item.subtitle ||
                        item.type}
                    </p>

                    <div className="price-row">

                      <strong>
                        ₹
                        {getPrice(
                          item.price
                        ).toFixed(2)}
                      </strong>

                      {item.oldPrice && (
                        <del>
                          ₹
                          {getPrice(
                            item.oldPrice
                          ).toFixed(2)}
                        </del>
                      )}

                      {item.discount && (
                        <span>
                          {item.discount}
                        </span>
                      )}

                    </div>

                    <div className="stock">
                      ✓ In stock
                    </div>

                  </div>

                  {/* Quantity */}
                  <div className="quantity-box">

                    <button
                      onClick={() =>
                        decreaseQty(item.id)
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity || 1}
                    </span>

                    <button
                      onClick={() =>
                        increaseQty(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                  {/* Item Total */}
                  <div className="item-total">

                    ₹
                    {(
                      getPrice(item.price) *
                      (item.quantity || 1)
                    ).toFixed(2)}

                  </div>

                  {/* Delete */}
                  <button
                    className="delete-btn"
                    onClick={() =>
                      removeItem(item.id)
                    }
                  >
                    🗑
                  </button>

                </div>

              ))
            )}

            {/* Select All */}
            {cart.length > 0 && (

              <div className="select-all">

                <label>

                  <input
                    type="checkbox"
                    defaultChecked
                  />

                  Select All

                </label>

                <button
                  onClick={removeAllItems}
                >
                  🗑 Remove Selected
                </button>

              </div>

            )}

          </div>

          {/* Coupon */}
          <div className="coupon-box">

            <div className="coupon-icon">
              🏷
            </div>

            <div>

              <h3>
                Apply Offers & Save More!
              </h3>

              <p>
                Use coupon code{" "}
                <b>MEDIQ20</b> and get 20% OFF
                on first order.
              </p>

            </div>

            <button>
              Apply Coupon
            </button>

          </div>

        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="cart-right">

          <div className="summary-box">

            <h2>
              Order Summary
            </h2>

            <div className="summary-row">

              <span>
                Price ({cart.length}{" "}
                {cart.length === 1
                  ? "item"
                  : "items"})
              </span>

              <strong>
                ₹{originalPrice.toFixed(2)}
              </strong>

            </div>

            <div className="summary-row discount-row">

              <span>
                Discount
              </span>

              <strong>
                - ₹{discount.toFixed(2)}
              </strong>

            </div>

            <div className="summary-row">

              <span>
                Delivery Fee ⓘ
              </span>

              <strong>
                {deliveryFee === 0
                  ? "FREE"
                  : `₹${deliveryFee}`}
              </strong>

            </div>

            <hr />

            <div className="pay-row">

              <span>
                To Pay
              </span>

              <strong>
                ₹{total.toFixed(2)}
              </strong>

            </div>

            <p className="saving">

              ♢ You saved ₹
              {discount.toFixed(2)}
              {" "}on this order

            </p>

            {/* Free Delivery */}
            <div className="free-delivery">

              <div className="truck-icon">
                🚚
              </div>

              <div>

                <p>

                  {subtotal >= 199 ? (
                    <>
                      You have unlocked
                    </>
                  ) : (
                    <>
                      Add items worth{" "}
                      <b>
                        ₹
                        {Math.max(
                          0,
                          199 - subtotal
                        ).toFixed(2)}
                      </b>{" "}
                      more to get
                    </>
                  )}

                </p>

                <strong>
                  FREE Delivery
                </strong>

              </div>

              <div className="progress">

                <div
                  style={{
                    width: `${Math.min(
                      (subtotal / 199) * 100,
                      100
                    )}%`,
                  }}
                ></div>

              </div>

              <div className="progress-text">

                <span>₹0</span>
                <span>₹199</span>

              </div>

            </div>

          </div>

          {/* Address */}
          <div className="address-box">

            <div className="address-heading">

              <h3>
                Deliver to
              </h3>

              <button>
                Change
              </button>

            </div>

            <h4>
              Home
            </h4>

            <p>
              12, Silver Plaza, G-12,
              <br />
              Adajan, Surat - 395009
              <br />
              Gujarat, India
            </p>

            <div className="location-icon">
              ◎
            </div>

            {/* CHECKOUT BUTTON */}
            <button
              className="checkout-btn"
              onClick={() =>
                navigate("/checkout")
              }
              disabled={cart.length === 0}
            >
              Proceed to Checkout →
            </button>

            <button
              className="shopping-btn"
              onClick={continueShopping}
            >
              🛒 Continue Shopping
            </button>

            <div className="secure-payment">
              ♡ Safe & Secure Payments
            </div>

          </div>

        </div>

      </div>

      {/* You May Also Like */}
      <section className="recommend-section">

        <h2>
          You may also like
        </h2>

        <div className="recommend-grid">

          {suggestions.map(
            (item) => (

              <div
                className="recommend-card"
                key={item.id}
              >

                <div className="recommend-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                </div>

                <h3>
                  {item.name}
                </h3>

                <p>
                  {item.type}
                </p>

                <div className="recommend-price">

                  <strong>
                    ₹{item.price}.00
                  </strong>

                  <del>
                    ₹{item.oldPrice}.00
                  </del>

                  <span>
                    {item.discount}
                  </span>

                </div>

                <div className="rating">
                  ⭐ {item.rating} (
                  {item.reviews})
                </div>

                <button
                  onClick={() =>
                    addSuggestionToCart(item)
                  }
                >
                  🛒 Add to Cart
                </button>

              </div>

            )
          )}

        </div>

      </section>

      {/* Bottom Benefits */}
      <div className="bottom-benefits">

        <div>
          <span>♢</span>
          <p>
            <b>100% Genuine</b>
            <br />
            Medicines
          </p>
        </div>

        <div>
          <span>♧</span>
          <p>
            <b>Licensed</b>
            <br />
            Pharmacies
          </p>
        </div>

        <div>
          <span>🚚</span>
          <p>
            <b>Fast Delivery</b>
            <br />
            in 30 mins
          </p>
        </div>

        <div>
          <span>↩</span>
          <p>
            <b>Easy Returns</b>
            <br />
            & Refunds
          </p>
        </div>

        <div>
          <span>♧</span>
          <p>
            <b>24x7 Customer</b>
            <br />
            Support
          </p>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="cart-footer">

        <div className="footer-brand">

          <h2>💊 MediQuick</h2>

          <p>
            Medicine Delivered Fast
          </p>

          <p>
            Your trusted partner for fast and
            reliable medicine delivery in Surat.
          </p>

          <div className="social-icons">

            <span>f</span>
            <span>◎</span>
            <span>𝕏</span>
            <span>in</span>

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

        <div>

          <h3>We Accept</h3>

          <div className="payment-icons">

            <span>UPI</span>
            <span>VISA</span>
            <span>💳</span>
            <span>RuPay</span>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © 2024 MediQuick. All rights reserved.
          </span>

          <span>
            ⌖ Surat, Gujarat, India
          </span>

        </div>

      </footer>

    </div>
  );
}

export default Cart;