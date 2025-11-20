"use client"

import { useState } from "react"
import "../styles/ServicesPage.css"

function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState(null)

  const services = [
    {
      id: "matensa",
      icon: "💰",
      title: "Money Transfer | Powered by MaTensa Co.",
      description: "Complete financial transaction solutions for individuals and businesses",
      color: "#1B75BC",
      subServices: ["Money Transfer", "Exchange of Money", "Online Payments", "Business Thru APP"],
    },
    {
      id: "insurance",
      icon: "🛡️",
      title: "Insurance",
      description: "Comprehensive coverage protecting what matters most to you",
      color: "#1B75BC",
      subServices: [
        "Medical",
        "Life",
        "Cash & Safe",
        "Travel",
        "Cars",
        "Pets",
        "Public Liability",
        "Fire",
        "Work Compensation",
        "Groups",
      ],
    },
    {
      id: "business",
      icon: "📊",
      title: "Business Developments",
      description: "Strategic consulting to accelerate your business growth",
      color: "#1B75BC",
      subServices: [
        "Website Development",
        "Feasability Study",
        "Business managements & control",
        "Prepare missions & visions",
        "Tax Advisory",
        "Catering",
        "Wedding Planner",
        
      ],
    },
    {
      id: "travel",
      icon: "✈️",
      title: "Travel Services",
      description: "End-to-end travel solutions for seamless journeys",
      color: "#1B75BC",
      subServices: ["Tickets", "Hotel Reservation", "Taxi", "Rent a Car", "Catering Supplies", "Webinars"],
    },
    {
      id: "translations",
      icon: "🌐",
      title: "Translations",
      description: "Professional translation services in multiple languages",
      color: "#1B75BC",
      subServices: ["All type of letters & books", "Embassy's documents", "Legal personal papers"],
    },


    {
      id: "marketing",
      icon: "🎨",
      title: "Art & Marketing Agency",
      description: "Creative solutions that elevate your brand presence",
      color: "#1B75BC",
      subServices: [
        "Branding",
        "Social media advertising",
        "Interior Design",
        "Media Guide",
        "Art working",
        "Digital Marketing",
      ],
    },
    {
      id: "registrations",
      icon: "📋",
      title: "Registrations",
      description: "Legal and official registration services made simple",
      color: "#1B75BC",
      subServices: [
        "Corporate & private registration",
        "Commercial registration",
        "Trade Mark registration",
        "NSSF",
        "MOF",
        "Real estate Registration",
        "Car Registration",
      ],
    },
    {
      id: "realestate",
      icon: "🏢",
      title: "Real Estate",
      description: "Property solutions and professional management services",
      color: "#1B75BC",
      subServices: [
        "Buy & Sell Lands",
        "Buy & Sell apartments",
        "Revaluation of Fixed Assets",
        "Building management & control",
      ],
    },
    
  ]

  return (
    <main className="services-page">
      <section className="about-hero services-hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-text">
              <div className="hero-label">OUR SERVICES</div>
              <h1>Comprehensive Solutions for Every Need</h1>
              <p className="hero-description">
                Eight specialized service categories, countless possibilities. Discover how we can help you achieve your
                goals with our integrated approach. From travel arrangements to business development, we've got you
                covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid section">
        <div className="container">
          <div className="services-accordion">
            {services.map((service) => (
              <div
                key={service.id}
                className={`service-accordion-item ${activeCategory === service.id ? "active" : ""}`}
                onClick={() => setActiveCategory(activeCategory === service.id ? null : service.id)}
              >
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <div className="service-title-group">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div className="service-toggle">
                    <span>{activeCategory === service.id ? "−" : "+"}</span>
                  </div>
                </div>

                <div className={`service-content ${activeCategory === service.id ? "expanded" : ""}`}>
                  <div className="sub-services">
                    {service.subServices.map((subService, idx) => (
                      <div key={idx} className="sub-service-item">
                        <span className="check-icon">✓</span>
                        <span>{subService}</span>
                      </div>
                    ))}
                  </div>
                  <a href="/contact" className="btn btn-primary">
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss which services can help you achieve your goals. Our expert team is ready to assist you.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-accent">
                Contact Us Today
              </a>
              <a href="tel:+1234567890" className="btn btn-secondary">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
