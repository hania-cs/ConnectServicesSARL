"use client"
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import "../styles/ContactPage.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
  };

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

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll respond within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="matensa">Matensa (Money Transfer)</option>
                      <option value="insurance">Insurance</option>
                      <option value="travel">Travel Services</option>
                      <option value="translations">Translations</option>
                      <option value="marketing">Art & Marketing Agency</option>
                      <option value="registrations">Registrations</option>
                      <option value="realestate">Real Estate</option>
                      <option value="business">Business Developments</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-wrapper">
              <div className="contact-info-card">
                <h3>Contact Information</h3>
                <p className="info-subtitle">Reach out to us through any of these channels</p>

                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">📧</div>
                    <div className="method-content">
                      <h4>Email</h4>
                      <a href="mailto:Marketing@connect-services.me">Marketing@connect-services.me</a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">📞</div>
                    <div className="method-content">
                      <h4>Phone</h4>
                      <a href="tel:+96181882848">+961 81 88 28 48</a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">📱</div>
                    <div className="method-content">
                      <h4>WhatsApp</h4>
                      <a href="https://wa.me/96181882848" target="_blank" rel="noopener noreferrer">
                        +961 81 88 28 48
                      </a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">📍</div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d831.4852391965505!2d35.83239986959562!3d33.52892069833491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ed56820944ff7%3A0x591a9f39bf9d9800!2sConnect%20services%20SARL!5e0!3m2!1sen!2slb!4v1762530152025!5m2!1sen!2slb"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Connect Services SARL Location"
          ></iframe>
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
  );
}

export default ContactPage;
