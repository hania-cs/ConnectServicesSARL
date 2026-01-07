import "../styles/AboutPage.css"

function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-text">
              <div className="hero-label">ABOUT US</div>
              <h1>We're Connect Services</h1>
              <p className="hero-description">
                We're a dedicated team passionate about simplifying your life through integrated solutions. From travel
                to finance, insurance to translations, we bring all essential services under one roof. Read on to learn
                more about Connect Services' story and meet the team behind your seamless experience.
              </p>
            </div>
            <div className="hero-image">
              <img src="../images/heroAbout.png" alt="Connect Services Team" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <div className="section-label">Our Story</div>
              <h2>Built on Trust, Driven by Excellence</h2>
              <p>
                Connect Services SARL was founded this year (2025) with a clear and innovative vision: to make life simpler by bringing multiple essential services together in one place. The idea was born from a simple observation — clients often have to hop from one company to another to manage everyday needs, wasting time and energy in the process.
              </p>
              <p>
               As a young and ambitious startup, we aim to change that. Connect Services SARL is designed to be your all-in-one service partner, offering everything from travel arrangements and insurance solutions to money transfers, professional translations, and more — all under one roof.
              </p>
              <p>
              Our goal is to redefine convenience by combining efficiency, trust, and accessibility in one integrated platform. Though we’re just getting started, our passion for innovation and our commitment to customer satisfaction drive everything we do.
              </p>
            </div>
            <div className="story-stats">
              <div className="stat-box">
                <div className="stat-icon">🚀</div>
                <div className="stat-num">Founded in 2025</div>
                <div className="stat-text">A new vision for simplified services</div>
              </div>
              <div className="stat-box">
                <div className="stat-icon">🌍</div>
                <div className="stat-num">Multiple Services, One Platform</div>
                <div className="stat-text">Convenience at your fingertips</div>
              </div>
              <div className="stat-box">
                <div className="stat-icon">💡</div>
                <div className="stat-num">Driven by Innovation</div>
                <div className="stat-text">Building smarter solutions for clients</div>
              </div>
              <div className="stat-box">
                <div className="stat-icon">🤝</div>
                <div className="stat-num">Customer-Centric Approach</div>
                <div className="stat-text">Your satisfaction, our priority</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card vision-card">
              <div className="vm-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To be the premier, trusted 'business enablement center' in local & regional area, simplifying complex
administrative and commercial processes for businesses and individuals through a fully integrated
network of specialized expertise.
              </p>
            </div>
            <div className="vm-card mission-card">
              <div className="vm-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                Connect Services SARL empowers clients by providing a comprehensive, reliable package of services—
from business launch to daily operations—leveraging a carefully selected, performance-based network
of expert consultants and service providers, ensuring efficiency, compliance, and growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values section">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-number">01</div>
              <h3>Integrity</h3>
              <p>
                We operate with complete transparency and honesty in every interaction, building trust through
                consistent ethical practices.
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">02</div>
              <h3>Excellence</h3>
              <p>
                We pursue the highest standards in everything we do, continuously improving our services and exceeding
                expectations.
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">03</div>
              <h3>Innovation</h3>
              <p>
                We embrace change and leverage technology to create better, more efficient solutions for our clients.
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">04</div>
              <h3>Customer Focus</h3>
              <p>
                Our clients are at the heart of everything we do. Their success and satisfaction drive our decisions.
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">05</div>
              <h3>Collaboration</h3>
              <p>
                We believe in the power of teamwork, both internally and with our partners, to achieve extraordinary
                results.
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">06</div>
              <h3>Reliability</h3>
              <p>We deliver on our promises, providing consistent, dependable service you can count on every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us-detailed section">
        <div className="container">
          <div className="section-title">
            <h2>Why Clients Choose Us</h2>
            <p>The advantages that set us apart from the competition</p>
          </div>
          <div className="why-bento">
            <div className="why-item large">
              <h3>One-Stop Solution</h3>
              <p>
                No more juggling multiple providers. From travel bookings to insurance, money transfers to translations
                - we handle it all. Save time, reduce stress, and enjoy the convenience of centralized service
                management.
              </p>
              <ul className="benefit-list">
                <li>Single point of contact for all services</li>
                <li>Streamlined billing and documentation</li>
                <li>Integrated service solutions</li>
              </ul>
            </div>
            <div className="why-item medium">
              <h3>Expert Team</h3>
              <p>
                Our specialists bring decades of combined experience across all service areas, ensuring you receive
                professional, knowledgeable assistance every time.
              </p>
            </div>
            <div className="why-item medium">
              <h3>Competitive Pricing</h3>
              <p>
                Benefit from our economies of scale and strategic partnerships to get the best rates without
                compromising on quality or service.
              </p>
            </div>
            
              <div className="why-item medium">
              <h3>Secure & Certified</h3>
              <p>
               Industry-leading security standards and international certifications.
              </p>
            </div>
            <div className="why-item medium">
              <h3>Fast Processing</h3>
              <p>
                Quick turnaround times on all service requests.
              </p>
            </div>
           
            
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Team</h2>
            <p>The experts dedicated to making your experience exceptional</p>
          </div>
          <div className="team-grid">
           

          

            <div className="team-card">
              <div className="team-image">
                <img src="../images/nidaa.png" alt="Team Member" />
              </div>
              <div className="team-info">
                <h3>Nidaa Safi</h3>
                <p className="team-role">Real Estate Manager</p>
                <p className="team-bio">
He oversees property operations, drives market positioning, and implements communication strategies that support company growth and client engagement.
</p>
              </div>
            </div>
            
                <div className="team-card">
              <div className="team-image">
                <img src="../images/kholoud.png" alt="Team Member" />
              </div>
              <div className="team-info">
                <h3>Kholoud Naji</h3>
                <p className="team-role">Sworn translator</p>
                <p className="team-bio">
                 She manages legal, financial, and technical translations with precision. Experienced in mentoring and training, she combines linguistic expertise with strong leadership to ensure accurate and reliable services.

                </p>
              </div>
              
            </div>
               <div className="team-card">
              <div className="team-image">
                <img src="../images/yolla.jpg" alt="Team Member" />
              </div>
              <div className="team-info">
                <h3>Yolla Dergham</h3>
                <p className="team-role">Creative Director & Marketing Specialist</p>
                <p className="team-bio">
                  She oversees creative strategy and content, combining over 11 years of experience with strategic thinking and creativity to deliver impactful campaigns.
                </p>
              </div>
            </div>
                   <div className="team-card">
              <div className="team-image">
                <img src="../images/hania.jpg" alt="Team Member" />
              </div>
              <div className="team-info">
                <h3>Hania Seifeldeen</h3>
                <p className="team-role">Full Stack Developer</p>
                <p className="team-bio">
                  She creates professional and user-friendly websites, combining creativity and client-focused expertise to deliver engaging platforms that effectively showcase services and projects.

                </p>
              </div>
            </div>
            
          <div className="team-card">
              <div className="team-image">
                <img src="../images/Fidaa.jpg" alt="Team Member" />
              </div>
              <div className="team-info">
                <h3>Fidaa Safi</h3>
                <p className="team-role">Ma Tensa Transaction officer</p>
                <p className="team-bio">
Specializing in transaction operations, she manages client services, account support, and payment processing, combining strong communication and analytical skills to ensure accuracy, reliability, and high-quality service delivery.
                </p>
              </div>
            </div>
     

            
            
             <div className="team-card">
              <div className="team-image">
                <img src="../images/n2.png" alt="Team Member" />
              </div>
              <div className="team-info">
                <h3>Nisreen Talayeh</h3>
                <p className="team-role">Insurance Specialist</p>
                <p className="team-bio">

She leverages international experience from France and Lebanon and is recognized in France for leadership and excellence in client support, combining strong communication and analytical skills to ensure accuracy, reliability, and high-quality service delivery.



                </p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <img src="../images/image.png" alt="Team Member" />
              </div>
              <div className="team-info">
                <h3>Ghaith Olabi</h3>
                <p className="team-role">Insurance Speicalist</p>
                <p className="team-bio">
He supports the efficient and compliant handling of client services, policy administration, and claims processing, applying solid problem-solving and communication skills to ensure reliable, high-quality service.


                </p>
              </div>
            </div>
 
              
          
             
 <div className="team-card">
                <div className="team-image">
                  <img src="../images/rami.png" alt="Team Member" />
                </div>
                <div className="team-info">
                  <h3>Rami Dagher</h3>
                  <p className="team-role">Accountant</p>
                  <p className="team-bio">
                    He ensures accurate and compliant financial operations, combining practical experience with strong problem-solving skills to maintain high standards and support organizational success.

                  </p>
                </div>
            </div>
          

           
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience the Connect Services Difference?</h2>
            <p>Join thousands of satisfied clients who trust us with their essential services.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-accent">
                Get Started Today
              </a>
              <a href="/services" className="btn btn-secondary">
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
