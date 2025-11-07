import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <h1>
                Everything You Need,<br />
                <span className="highlight">All in One Place</span>
              </h1>
              <p className="subtitle">
                Travel arrangements, insurance coverage, money transfers, professional translations, and more. Connect Services SARL brings it all together.
              </p>
              
              <div className="hero-buttons">
                <a href="/services" className="btn btn-accent">Explore Services</a>
                <a href="/contact" className="btn btn-secondary">Get in Touch</a>
              </div>

             
            </div>

            <div className="hero-visual">
              <div className="floating-card floating-card-1">
                <div className="card-icon">✈️</div>
                <div className="card-title">Travel Agency</div>
                <p className="card-text">Book your dream vacation</p>
              </div>
              <div className="floating-card floating-card-2">
                <div className="card-icon">🛡️</div>
                <div className="card-title">Insurance</div>
                <p className="card-text">Complete protection</p>
              </div>
              <div className="floating-card floating-card-3">
                <div className="card-icon">💸</div>
                <div className="card-title">Money Transfer</div>
                <p className="card-text">Fast & secure transfers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero