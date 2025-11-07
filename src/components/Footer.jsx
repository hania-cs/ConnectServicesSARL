import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin } from "lucide-react";

import '../styles/Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <img src="/images/logo.png" alt="Connect Services SARL" className="footer-logo" />
            <p>Your trusted partner for travel, insurance, money transfer, translation, and more. All your essential services in one place.</p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Travel Agency</a></li>
              <li><a href="#services">Insurance</a></li>
              <li><a href="#services">Money Transfer</a></li>
              <li><a href="#services">Translation</a></li>
            </ul>
          </div>

         <div className="footer-col">
            <h4>Connect With Us</h4>

    <div className="fot-social-links">
      <a
        href="https://www.facebook.com/profile.php?id=61583161839622"
        className="fot-social-link facebook"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook size={24} />
      </a>

      <a
        href="https://www.instagram.com/connect.services.sarl/"
        className="fot-social-link instagram"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram size={24} />
      </a>

      <a
        href="https://www.linkedin.com/in/connectservicessarl"
        className="fot-social-link linkedin"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={24} />
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