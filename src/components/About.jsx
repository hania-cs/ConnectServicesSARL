import { Link } from 'react-router-dom'
import '../styles/About.css'

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-content">
            <div className="section-title">
              <h2>One Company, Endless Possibilities</h2>
            </div>
            <p className="about-text">
              We've reimagined what a service company can be. No more juggling multiple providers, no more complicated processes. Just seamless, integrated solutions that work together perfectly.
            </p>

            {/* <CHANGE> Feature cards now displayed horizontally */}
            <div className="about-features">
              <div className="feature-card">
                <div className="feature-number">01</div>
                <div className="feature-content">
                  <h3>Integrated Solutions</h3>
                  <p>All services work together seamlessly, saving you time and hassle.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-number">02</div>
                <div className="feature-content">
                  <h3>Expert Team</h3>
                  <p>Specialists in every field, united under one roof for your convenience.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-number">03</div>
                <div className="feature-content">
                  <h3>Customer Obsessed</h3>
                  <p>Your success is our mission. We go above and beyond, every time.</p>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn btn-primary">Discover Our Story</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About