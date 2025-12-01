import "./careers.css"

export const metadata = {
  title: "Careers - Connect Services",
  description: "Join our team at Connect Services and help us simplify life through integrated solutions.",
}

function CareersPage() {
  return (
    <main className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="careers-container">
          <div className="careers-hero-split">
            <div className="careers-hero-text">
              <div className="careers-hero-label">CAREERS</div>
              <h1>Build Your Future With Us</h1>
              <p className="careers-hero-description">
                Join a dynamic team that's redefining convenience and making a real impact. At Connect Services, we're
                not just building a company—we're creating a movement to simplify everyday life for thousands of
                clients.
              </p>
              <div className="careers-hero-stats">
                <div className="careers-hero-stat">
                  <div className="careers-stat-number">2025</div>
                  <div className="careers-stat-label">Founded</div>
                </div>
                <div className="careers-hero-stat">
                  <div className="careers-stat-number">Growing</div>
                  <div className="careers-stat-label">Team Size</div>
                </div>
               
              </div>
            </div>
           
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
     

      {/* Open Positions Section */}
      <section className="careers-open-positions careers-section">
        <div className="careers-container">
          <div className="careers-section-title">
            <div className="careers-section-label">Open Positions</div>
            <h2>Current Opportunities</h2>
            <p>Find your perfect role and join our growing team</p>
          </div>
          <div className="careers-positions-grid">
           <div className="careers-position-card">
  <div className="careers-position-header">
    <div className="careers-position-badge">Full-Time</div>
    <div className="careers-position-department">Travel & Tourism</div>
  </div>

  <h3>Ticketing and Travel Coordinator</h3>

  <p className="careers-position-description">
    We are seeking an experienced Ticketing and Travel Coordinator to manage flight bookings,
    ticket issuance, and customer travel requests while ensuring smooth and accurate service.
  </p>

  <ul className="careers-position-requirements">
    <li>Strong knowledge of GDS systems (Amadeus / Sabre / Galileo)</li>
    <li>Experience with ticket issuing, reissuing, refunds, and fare rules</li>
    <li>Handling flight changes, cancellations, and rebooking</li>
    <li>Good communication and customer service skills</li>
    <li>Fast and accurate data entry</li>
    <li>Ability to solve problems under pressure</li>
    <li>Strong time management and multitasking skills</li>
    <li>Sales skills and ability to offer suitable travel options</li>
    <li>Previous work experience required</li>
  </ul>

  <a
                href="mailto:marketing@connect-services.me"
                className="careers-position-apply-btn"
              >
                Apply Now
              </a>
</div>


          

            

           

            <div className="careers-position-card">
              <div className="careers-position-header">
  <div className="careers-position-badge">Full-Time</div>
  <div className="careers-position-department">Marketing</div>
</div>

<h3>Senior Graphic Designer</h3>

<p className="careers-position-description">
  We’re looking for a Senior Graphic Designer to create high-quality visual assets
  that support our brand and marketing initiatives. You’ll collaborate closely with
  the marketing team to produce polished designs for both digital and print channels.
</p>

<ul className="careers-position-requirements">
  <li>5+ years of professional graphic design experience</li>
  <li>Strong portfolio showcasing digital, print, and brand design work</li>
  <li>Expertise in Adobe Creative Suite (Photoshop, Illustrator, InDesign)</li>
  <li>Excellent understanding of typography, layout, and visual communication</li>
  <li>Ability to take direction and deliver consistently high-quality designs</li>
</ul>

              <a
                href="mailto:marketing@connect-services.me"
                className="careers-position-apply-btn"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
     

      {/* CTA Section */}
      <section className="careers-cta careers-section" id="apply">
        <div className="careers-container">
          <div className="careers-cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>
              Don't see the perfect role? We're always looking for talented individuals. Send us your resume and let's
              talk about how you can contribute to our growing team.
            </p>
            <div className="careers-cta-buttons">
              <a href="mailto:marketing@connect-services.me" className="careers-btn careers-btn-accent">
                Send Your Resume
              </a>
              <a href="/contact" className="careers-btn careers-btn-secondary">
                Contact HR Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CareersPage
