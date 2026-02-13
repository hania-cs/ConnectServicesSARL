import { Facebook, Instagram, Linkedin } from "lucide-react"
import "../styles/ContactPage.css"

function ContactPage() {
  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="about-hero contact-hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-text">
              <div className="hero-label">GET IN TOUCH</div>
              <h1>Let's Start a Conversation</h1>
              <p className="hero-description">
                Have questions or ready to get started? We're here to help you find the perfect solution for your needs.
                Our dedicated team is available to assist you with any inquiries and guide you through our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content with Masonry/Bingo Layout */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info Card 1 - Contact Methods */}
            <div className="contact-info-card">
              <h3>Contact Information</h3>
              <p className="info-subtitle">Reach out to us through any of these channels</p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon-wrapper">
                    <div className="method-icon">📧</div>
                  </div>
                  <div className="method-content">
                    <h4>Email</h4>
                    <a href="mailto:Support@connect-services.me">support@connect-services.me</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon-wrapper">
                    <div className="method-icon">📞</div>
                  </div>
                  <div className="method-content">
                    <h4>Phone</h4>
                    <a href="tel:+96181082144">+961 81 082 144</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon-wrapper">
                    <div className="method-icon">📱</div>
                  </div>
                  <div className="method-content">
                    <h4>WhatsApp</h4>
                    <a href="https://wa.me/96181082144" target="_blank" rel="noopener noreferrer">
                      +961 81 082 144
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon-wrapper">
                    <div className="method-icon">📍</div>
                  </div>
                  <div className="method-content">
                    <h4>Address</h4>
                    <p>
                      Dahr Alahmar,
                      <br />
                      Main Road
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info Card 2 - Business Hours & Social */}
            <div className="contact-info-card">
              <h3>Visit Us</h3>
              <p className="info-subtitle">We're here to help you in person</p>

              <div className="business-hours">
                <h4>Business Hours</h4>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Monday - Saturday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <h4 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', color: 'var(--dark)' }}>Connect With Us</h4>
              
              {/* Social Links */}
              <div className="social-links-container">
                <a
                  href="https://www.facebook.com/profile.php?id=61583161839622"
                  className="social-link"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={24} />
                </a>

                <a
                  href="https://www.instagram.com/connect.services.sarl/"
                  className="social-link"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={24} />
                </a>

                <a
                  href="https://www.linkedin.com/in/connectservicessarl"
                  className="social-link"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            {/* Map Card - Integrated in Grid */}
            <div className="map-card">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d831.4852391965505!2d35.83239986959562!3d33.52892069833491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ed56820944ff7%3A0x591a9f39bf9d9800!2sConnect%20services%20SARL!5e0!3m2!1sen!2slb!4v1762530152025!5m2!1sen!2slb"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Connect Services SARL Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Info Card 3 - Quick Info */}
            <div className="contact-info-card">
              <h3>Quick Response</h3>
              <p className="info-subtitle">We're always ready to assist you</p>

              <div className="contact-method" style={{ marginBottom: '1.5rem' }}>
                <div className="method-icon-wrapper">
                  <div className="method-icon">⚡</div>
                </div>
                <div className="method-content">
                  <h4>Response Time</h4>
                  <p>Within 24 hours on business days</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon-wrapper">
                  <div className="method-icon">💬</div>
                </div>
                <div className="method-content">
                  <h4>Support Available</h4>
                  <p>Monday to Saturday, 9 AM - 5 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>What are your response times?</h3>
              <p>
                We typically respond to all inquiries within 24 hours during business days. Urgent matters are
                prioritized and handled immediately.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you offer consultations?</h3>
              <p>
                Yes! We offer free initial consultations to understand your needs and recommend the best solutions for
                you.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can I use multiple services?</h3>
              <p>Many clients benefit from our integrated approach. We offer package deals for multiple services.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage