import { useState } from "react"
import "../styles/ServicesPage.css"

function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("matensa")

  const services = [
    {
      id: "matensa",
      icon: "💰",
      title: "Money Transfer",
      description: "Complete financial transaction solutions for individuals and businesses",
      color: "#1B75BC",
      subServices: ["Money Transfer", "Exchange of Money", "Online Payments", "Business Thru APP"],
      whatsappNumber: "81082144",
      hasAppStoreLinks: true,
      partner: {
        name: "MaTensa SAL.",
        logo: "/logos/matensa2.png",
        website: "https://www.matensa.com",
      },
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
        "Travel",
        "Cars",
        "Pets",
        "Work",
        "Fire",
        "Cash & Valuables",
        "Compensation",
      ],
      whatsappNumber: "76083471",
      partners: [
        { name: "Fidelity", logo: "/logos/fid.png", website: "https://www.fidelity.com.lb/" },
        { name: "Securite", logo: "/logos/securite.png", website: "https://securiteassurance.com/" },
      ],
    },
    {
      id: "marketing",
      icon: "💻",
      title: "Web Development & Marketing Agency",
      description: "Creative solutions that elevate your brand presence",
      color: "#1B75BC",
      subServices: [
        "Website Design & Development",
        "App Design & Development",
        "Brand Strategy",
        "Branding & Identity",
        "Packaging",
        "Podcast Production",
        "Social media advertising",
        "Media Guidance",
        "Digital Marketing",
      ],
      whatsappNumber: "81082144",
      partner: {
        name: "Vertexa Digital Studios",
        logo: "/logos/vertexa.png",
        website: "https://www.vertexa.digital",
      },
    },
    {
      id: "travel",
      icon: "✈️",
      title: "Travel Services",
      description: "End-to-end travel solutions for seamless journeys",
      color: "#1B75BC",
      subServices: ["Tickets", "Hotel Reservation", "Taxi", "Car Rental", "Visa Assistance"],
      whatsappNumber: "81082144",
      partner: {
        name: "Black Pearl",
        logo: "/logos/black.png",
        website: "https://blackpearlholiday.com/",
      },
    },
    {
      id: "translations",
      icon: "🌐",
      title: "Translation Services",
      description: "Professional translation services in multiple languages",
      color: "#1B75BC",
      subServices: ["All type of letters & books", "Embassy's documents", "Legal personal papers"],
      whatsappNumber: "81082144",
      // In-house — no partner
    },
    {
      id: "business",
      icon: "📊",
      title: "Business Developments",
      description: "Strategic consulting to accelerate your business growth",
      color: "#1B75BC",
      subServices: [
        "Feasability Study",
        "Business managements & development",
        "Prepare missions & visions",
        "Tax Advisory",
        "Catering",
        "Wedding Planner",
        "Webinars & Events",
      ],
      whatsappNumber: "81082144",
      // In-house — no partner
    },
    {
      id: "registrations",
      icon: "📋",
      title: "Registrations",
      description: "Legal and official registration services made simple",
      color: "#1B75BC",
      subServices: [
        "Trade Mark registration",
        "Corporate & Private Entities Registration",
        "Real estate Registration",
        "Car Registration",
        "Commercial Registration",
      ],
      whatsappNumber: "81082144",
      // In-house — no partner
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
      whatsappNumber: "81082144",
      // In-house — no partner
    },
    {
      id: "Delivery Services",
      icon: "🚚",
      title: "Delivery Services",
      description: "Fast and reliable delivery solutions for all your needs",
      color: "#1B75BC",
      subServices: [
        "Taxi Services",
        "Business Deliveries",
        "Item Delivery",
        "WhatsApp-Based Booking",
      ],
      whatsappNumber: "81082144",
      partner: {
        name: "Allo Delivery",
        logo: "/logos/allo.png",
        website: "https://allodelivery.netlify.app/",
      },
    },
    {
      id: "Cleaning Services",
      icon: "🧹",
      title: "Cleaning Services",
      description: "Professional cleaning services for homes and businesses",
      color: "#1B75BC",
      subServices: [
        "Residential Cleaning",
        "Corporate Cleaning",
        "Retail & Business Cleaning",
        "Deep Cleaning",
        "Scheduled Maintenance",
      ],
      whatsappNumber: "81082144",
      partner: {
        name: "A2Z Cleaning Company",
        logo: "/images/partners/cleaning-logo.png",
        website: "",
      },
    },
  ]

  const getWhatsAppLink = (number) => {
    return `https://wa.me/961${number}`
  }

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
          <div className="services-layout">
            {/* Side Navigation */}
            <aside className="services-sidebar">
              <h3 className="sidebar-title">Our Services</h3>
              <nav className="services-nav">
                {services.map((service) => (
                  <button
                    key={service.id}
                    className={`nav-item ${activeCategory === service.id ? "active" : ""}`}
                    onClick={() => setActiveCategory(service.id)}
                  >
                    <div className="nav-icon-wrapper">
                      <div className="nav-icon">{service.icon}</div>
                    </div>
                    <span className="nav-label">{service.title.split(" | ")[0]}</span>
                  </button>
                ))}
              </nav>
            </aside>

            {/* Content Area */}
            <div className="services-content">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`content-panel ${activeCategory === service.id ? "active" : ""}`}
                >
                  <div className="service-detail-card">
                    <div className="service-detail-header">
                      <div className="service-detail-icon">{service.icon}</div>
                      <div className="service-detail-info">
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                      </div>
                    </div>

                    <div className="service-detail-content">
                      {/* Official Partnership Section — single partner */}
                      {service.partner && (
                        <div className="official-partnership">
                          <div className="partnership-label">
                            <span className="partnership-badge">✦ Official Partnership</span>
                          </div>
                          <div className="partnership-body">
                            <div className="partnership-logo-wrapper">
                              <img
                                src={service.partner.logo}
                                alt={`${service.partner.name} logo`}
                                className="partnership-logo"
                                onError={(e) => {
                                  e.currentTarget.style.display = "none"
                                  e.currentTarget.nextSibling.style.display = "flex"
                                }}
                              />
                              <div className="partnership-logo-placeholder" style={{ display: "none" }}>
                                <span>{service.partner.name.charAt(0)}</span>
                              </div>
                            </div>
                            <div className="partnership-info">
                              <p className="powered-by-text">Powered by</p>
                              <p className="partner-name">{service.partner.name}</p>
                              {service.partner.website && (
                                <a
                                  href={service.partner.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="partner-website-link"
                                >
                                  <span className="partner-website-icon">🌐</span>
                                  Visit Website
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Official Partnership Section — multiple partners */}
                      {service.partners && (
                        <div className="official-partnership">
                          <div className="partnership-label">
                            <span className="partnership-badge">✦ Official Partnerships</span>
                          </div>
                          <div className="partnership-body partnership-body--multi">
                            {service.partners.map((p, idx) => (
                              <div key={idx} className="partnership-partner">
                                <div className="partnership-logo-wrapper">
                                  <img
                                    src={p.logo}
                                    alt={`${p.name} logo`}
                                    className="partnership-logo"
                                    onError={(e) => {
                                      e.currentTarget.style.display = "none"
                                      e.currentTarget.nextSibling.style.display = "flex"
                                    }}
                                  />
                                  <div className="partnership-logo-placeholder" style={{ display: "none" }}>
                                    <span>{p.name.charAt(0)}</span>
                                  </div>
                                </div>
                                <div className="partnership-info">
                                  <p className="powered-by-text">Powered by</p>
                                  <p className="partner-name">{p.name}</p>
                                  {p.website && (
                                    <a
                                      href={p.website}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="partner-website-link"
                                    >
                                      <span className="partner-website-icon">🌐</span>
                                      Visit Website
                                    </a>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <h3>What We Offer</h3>
                      <div className="sub-services-grid">
                        {service.subServices.map((subService, idx) => (
                          <div key={idx} className="sub-service-item">
                            <span className="check-icon">✓</span>
                            <span>{subService}</span>
                          </div>
                        ))}
                      </div>

                      <div className="service-detail-actions">
                        {service.id === "matensa" && service.hasAppStoreLinks ? (
                          <div className="app-store-buttons">
                            <a
                              href="https://play.google.com/store/apps/details?id=com.matensa.app"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="app-store-link"
                            >
                              <img
                                src="/images/play.png"
                                alt="Download on Google Play"
                                className="app-store-badge"
                              />
                            </a>
                            <a
                              href="https://apps.apple.com/app/matensa/id123456789"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="app-store-link"
                            >
                              <img
                                src="/images/app.png"
                                alt="Download on App Store"
                                className="app-store-badge"
                              />
                            </a>
                          </div>
                        ) : (
                          <a
                            href={getWhatsAppLink(service.whatsappNumber)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                          >
                            Get Started with {service.title.split(" | ")[0]}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
              <a
                href={getWhatsAppLink("81082144")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                Contact Us Today
              </a>
              <a href="tel:+96181082144" className="btn btn-secondary">
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