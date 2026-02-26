import { Link } from 'react-router-dom'
import '../styles/Services.css'

function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Comprehensive solutions designed to simplify your life. From travel to finance, we've got you covered.</p>
        </div>

        <div className="bento-grid">
          {/* Large Featured Service */}
          <div className="bento-item bento-large">
            <div className="service-icon-wrapper">
              <div className="service-icon">✈️</div>
            </div>
            <h3>Travel Agency Services</h3>
            <p>Your journey starts here. Complete travel planning, flight bookings, hotel reservations, and visa assistance for destinations worldwide.</p>
            
            <a href="#travel" className="service-link">Learn more →</a>
          </div>

          {/* Medium Service */}
          <div className="bento-item bento-medium">
            <div className="service-icon-wrapper">
              <div className="service-icon">🛡️</div>
            </div>
            <h3>Insurance Solutions</h3>
            <p>Comprehensive coverage for peace of mind. Health, travel, property, and life insurance.</p>
            <a href="/services" className="service-link">Learn more →</a>
          </div>

          {/* Small Services */}
          <div className="bento-item bento-small">
            <div className="service-icon-wrapper">
              <div className="service-icon">💸</div>
            </div>
            <h3>Money Transfer</h3>
            <p>Fast, secure international transfers with competitive rates. Powered by MaTensa SAL.</p>
            <a href="/services" className="service-link">Learn more →</a>
          </div>

          <div className="bento-item bento-small">
            <div className="service-icon-wrapper">
              <div className="service-icon">🌐</div>
            </div>
            <h3>Translation Services</h3>
            <p>Professional translation in multiple languages for all documents.</p>
            <a href="/services" className="service-link">Learn more →</a>
          </div>

          {/* Medium Service */}
          <div className="bento-item bento-medium">
            <div className="service-icon-wrapper">
              <div className="service-icon">💻</div>
            </div>
            <h3>Web Development</h3>
            <p>Custom websites and web applications built for performance and scalability.</p>
            <a href="/services" className="service-link">Learn more →</a>
          </div>

          {/* Large Service */}
          <div className="bento-item bento-large">
            <div className="service-icon-wrapper">
              <div className="service-icon">📃</div>
            </div>
            <h3>Registrations</h3>
            <p>Legal and official registration services made simple.</p>
            <a href="/services" className="service-link">Learn more →</a>
          </div>
        </div>

        <div className="services-cta1">
          <Link to="/services" className="btn btn-primary">View All Services</Link>
        </div>
      </div>
    </section>
  )
}

export default Services