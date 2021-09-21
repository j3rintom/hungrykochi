import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import "../App";
function Footer() {
  return (
    <div className="footer-container">
      <div className="pages">
        <h2>Pages</h2>
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="/signup" className="links">
          Sign Up
        </Link>
      </div>
      <div className="contact">
        <h2>Contact Us</h2>
        <ul>
          <li>
            <a href="https://mail.google.com/" target="_blank">
              <i class="fas fa-envelope-open"></i>
              <p>hungrykochin@gmail.com</p>
            </a>
          </li>
          <li>
            <a href="https://wa.me/914443322323" target="_blank">
              <i class="fas fa-phone"></i>
              <p>+91 4443322323</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
