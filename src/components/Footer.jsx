"use client"

import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import "../styles/Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <img src="/images/logo.png" alt="Connect Services SARL" className="footer-logo" />
            <p>
              Your trusted partner for travel, insurance, money transfer, translation, and more. All your essential
              services in one place.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
              <li><Link to="/about" onClick={() => window.scrollTo(0, 0)}>About Us</Link></li>
              <li><Link to="/services" onClick={() => window.scrollTo(0, 0)}>Services</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services" onClick={() => window.scrollTo(0, 0)}>Matensa</Link></li>
              <li><Link to="/services" onClick={() => window.scrollTo(0, 0)}>Insurance</Link></li>
              <li><Link to="/services" onClick={() => window.scrollTo(0, 0)}>Travel Services</Link></li>
              <li><Link to="/services" onClick={() => window.scrollTo(0, 0)}>Translations</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61583161839622" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} />
              </a>
              
              <a href="https://www.instagram.com/connect.services.sarl/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/connectservicessarl" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Connect Services SARL. All rights reserved.</p>
           <p >
  Coded and Designed with <span role="img" aria-label="heart">❤️</span> by{' '}
  <a 
    href="https://haniaseif-portfolio.vercel.app/" 
    style={{ color: '#1e90ff', textDecoration: 'none' }}
  >
    Hania Seifeldeen
  </a>
</p>

        </div>
      </div>
    </footer>
  )
}

export default Footer
