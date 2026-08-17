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
    <footer className="footer">

      {/* Download App Section */}
      <div className="download-section">

        <div className="download-text">
          <h2>Download the MediQuick App</h2>
          <p>Faster. Simpler. Better.</p>
        </div>

        <div className="app-buttons">
          <button className="app-button">
            <span className="app-icon">▶</span>
            <span>
              <small>GET IT ON</small>
              <strong>Google Play</strong>
            </span>
          </button>

          <button className="app-button">
            <span className="app-icon">●</span>
            <span>
              <small>Download on the</small>
              <strong>App Store</strong>
            </span>
          </button>
        </div>

        <div className="footer-phone">
          <Smartphone size={70} />
        </div>

        <div className="qr-box">
          <div className="qr-placeholder">▦</div>
          <p>Scan QR Code<br />to Download</p>
        </div>

      </div>


      {/* Main Footer */}
      <div className="main-footer">

        <div className="footer-content">

          {/* MediQuick */}
          <div className="footer-about">

            <div className="footer-logo">
              <div className="logo-icon">
                <Smartphone size={20} />
              </div>

              <div>
                <h2>MediQuick</h2>
                <span>Medicine Delivered Fast</span>
              </div>
            </div>

            <p>
              Your trusted partner for fast and
              reliable medicine delivery in Surat.
            </p>

           <div className="social-icons">
  <a href="#">
    <Share2 size={17} />
  </a>

  <a href="#">
    <MessageCircle size={17} />
  </a>

  <a href="#">
    <Video size={17} />
  </a>

  <a href="#">
    <Smartphone size={17} />
  </a>
</div>

          </div>


          {/* Company */}
          <div className="footer-column">
            <h3>Company</h3>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
          </div>


          {/* Customer Care */}
          <div className="footer-column">
            <h3>Customer Care</h3>
            <a href="#">Help Center</a>
            <a href="#">How to Order</a>
            <a href="#">Returns & Refunds</a>
            <a href="#">Track Order</a>
          </div>


          {/* My Account */}
          <div className="footer-column">
            <h3>My Account</h3>
            <a href="#">My Orders</a>
            <a href="#">My Addresses</a>
            <a href="#">My Profile</a>
            <a href="#">Saved Medicines</a>
          </div>


          {/* Legal */}
          <div className="footer-column">
            <h3>Legal</h3>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Refund Policy</a>
          </div>


          {/* Payment */}
          <div className="footer-column payment">
            <h3>We Accept</h3>

            <div className="payments">
              <span>UPI</span>
              <span>VISA</span>
              <span>MC</span>
              <span>PayPal</span>
            </div>
          </div>

        </div>


        {/* Bottom */}
        <div className="footer-bottom">

          <p>© 2024 MediQuick. All rights reserved.</p>

          <div className="location">
            <MapPin size={15} />
            <span>Surat, Gujarat, India</span>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;