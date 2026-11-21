
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        <div>
          <h2>BRIGHT VALLEY COLLEGE</h2>
          <p>
            Empowering students through quality education,
            innovation and opportunities.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/portal">College Portal</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div>
          <h3>Information</h3>
          <Link to="/faq">FAQ</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>

        <div>
          <h3>Contact</h3>
          <p>Email: info@brightvalley.edu</p>
          <p>Phone: +91 98765 43210</p>
          <p>India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Bright Valley College. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
