import React from "react";
import {
  MessageCircle,
  MapPin,
  Smartphone,
  Share2,
  Video,
} from "lucide-react";

import "./Footer.css";

function Footer() {
  return (
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
  );
}

export default Footer;