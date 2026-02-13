import { useEffect, useState } from 'react'
import '../styles/Hero.css'

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="badge">
                <span className="badge-dot"></span>
                Connecting You to Tomorrow
              </div>
              
              <h1>
                Everything You Need,<br />
                <span className="highlight">All in One Place</span>
              </h1>
              
              <p className="subtitle">
                Travel arrangements, insurance coverage, money transfers, professional translations, 
                web development services, and many more. Connect Services SARL brings it all together.
              </p>
              
              <div className="hero-buttons">
                <a href="/services" className="btn btn-accent">
                  <span>Explore Services</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="/contact" className="btn btn-secondary">
                  <span>Get in Touch</span>
                </a>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Services Offered</div>
                </div>
               
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support Available</div>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div 
                className="floating-card floating-card-1"
                style={{
                  transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
                }}
              >
                <div className="card-icon-wrapper">
                  <div className="card-icon">✈️</div>
                </div>
                <div className="card-content">
                  <div className="card-title">Travel Agency</div>
                  <p className="card-text">Book your dream vacation</p>
                </div>
                <div className="card-glow"></div>
              </div>

              <div 
                className="floating-card floating-card-2"
                style={{
                  transform: `translate(${mousePosition.x * 0.7}px, ${mousePosition.y * 0.7}px)`
                }}
              >
                <div className="card-icon-wrapper">
                  <div className="card-icon">🛡️</div>
                </div>
                <div className="card-content">
                  <div className="card-title">Insurance</div>
                  <p className="card-text">Complete protection</p>
                </div>
                <div className="card-glow"></div>
              </div>

              <div 
                className="floating-card floating-card-3"
                style={{
                  transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
                }}
              >
                <div className="card-icon-wrapper">
                  <div className="card-icon">💸</div>
                </div>
                <div className="card-content">
                  <div className="card-title">Money Transfer</div>
                  <p className="card-text">Fast & secure transfers</p>
                </div>
                <div className="card-glow"></div>
              </div>

              <div 
                className="floating-card floating-card-4"
                style={{
                  transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`
                }}
              >
                <div className="card-icon-wrapper">
                  <div className="card-icon">🌐</div>
                </div>
                <div className="card-content">
                  <div className="card-title">Web Development</div>
                  <p className="card-text">Modern digital solutions</p>
                </div>
                <div className="card-glow"></div>
              </div>

              <div 
                className="floating-card floating-card-5"
                style={{
                  transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.6}px)`
                }}
              >
                <div className="card-icon-wrapper">
                  <div className="card-icon">📢</div>
                </div>
                <div className="card-content">
                  <div className="card-title">Marketing</div>
                  <p className="card-text">Grow your business</p>
                </div>
                <div className="card-glow"></div>
              </div>

              

              <div className="connection-line line-1"></div>
              <div className="connection-line line-2"></div>
              <div className="connection-line line-3"></div>
              <div className="connection-line line-4"></div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  )
}

export default Hero