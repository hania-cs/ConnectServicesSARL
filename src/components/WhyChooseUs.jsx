import '../styles/WhyChooseUs.css'

function WhyChooseUs() {
  return (
    <section className="why-choose section">
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: '#fff' }}>Why Choose Connect Services?</h2>
          <p>We're not just another service provider. Here's what makes us different.</p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">⚡</div>
            <h3>Fast & Efficient</h3>
            <p>Quick turnaround times without compromising on quality. We value your time as much as you do.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">💎</div>
            <h3>Premium Quality</h3>
            <p>Top-tier services delivered by experienced professionals who care about excellence.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">🔒</div>
            <h3>Secure & Reliable</h3>
            <p>Your data and transactions are protected with industry-leading security measures.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">💰</div>
            <h3>Competitive Pricing</h3>
            <p>Fair, transparent pricing with no hidden fees. Get the best value for your money.</p>
          </div>

         
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs