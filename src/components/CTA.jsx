import '../styles/CTA.css'

function CTA() {
  return (
    <section className="cta ection" id="contact">
      <div className="cta-info-wrapper">
              <div className="cta-info-card">

                <div className="section-title">
                    <h2>Contact Us</h2>
                    <p>Reach out to us through any of these channels</p>
                </div>

                <div className="cta-methods">
                  <div className="cta-method">
                    <div className="cta-method-icon">📧</div>
                    <div className="cta-method-content">
                      <h4>Email</h4>
                      <a href="mailto:support@connect-services.me">support@connect-services.me</a>
                    </div>
                  </div>

                  <div className="cta-method">
                    <div className="cta-method-icon">📞</div>
                    <div className="cta-method-content">
                      <h4>Phone</h4>
                      <a href="tel:+ 961 81 88 28 48">+ 961 81 88 28 48</a>
                    </div>
                  </div>

                  <div className="cta-method">
                    <div className="cta-method-icon">📱</div>
                    <div className="cta-method-content">
                      <h4>WhatsApp</h4>
                      <a href="https://wa.me/+ 961 81 88 28 48" target="_blank" rel="noopener noreferrer">
                        + 961 81 88 28 48
                      </a>
                    </div>
                  </div>

                  <div className="cta-method">
                    <div className="cta-method-icon">📍</div>
                    <div className="cta-method-content">
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
            </div>
    </section>
  )
}

export default CTA