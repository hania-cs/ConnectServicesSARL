"use client"

import { Link } from "react-router-dom"
import "../styles/Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <img src="/images/logo.jpg" alt="Connect Services SARL" className="footer-logo" />
            <p>
              Your trusted partner for travel, insurance, money transfer, translation, and more. All your essential
              services in one place.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                  Matensa
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                  Insurance
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                  Travel Services
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                  Translations
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                📘
              </a>
              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                🐦
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                📷
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                💼
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Connect Services SARL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
