import { useEffect, useRef } from 'react'
import '../styles/Partners.css'

function Partners() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 0.5 // Adjust speed here (lower = slower)

    const scroll = () => {
      scrollPosition += scrollSpeed
      
      // Reset position when first set of logos has scrolled past
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      
      scrollContainer.scrollLeft = scrollPosition
    }

    const intervalId = setInterval(scroll, 20)

    // Pause on hover
    const handleMouseEnter = () => clearInterval(intervalId)
    const handleMouseLeave = () => {
      clearInterval(intervalId)
      const newIntervalId = setInterval(scroll, 20)
      return () => clearInterval(newIntervalId)
    }

    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      clearInterval(intervalId)
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // List of logo filenames from your public/logos folder
  const logos = [
    'fid.png',
    'matensa2.png',
    'next.png',
    'securite.png',
    'sira.png',
    'vertexa.png',
    'kaber.png'
  ]

  return (
    <section className="partners section">
      <div className="container">
        <div className="partners-content">
          <div className="section-header">
            <h2 className="section-title">Working With Industry Leaders</h2>
            <p className="section-description">
              We collaborate with the best in the business to deliver exceptional service to our clients
            </p>
          </div>

          <div className="logos-container">
            <div className="logos-scroll" ref={scrollRef}>
              {/* Duplicate logos for seamless infinite scroll */}
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div key={index} className="logo-wrapper">
                  <img 
                    src={`/logos/${logo}`} 
                    alt={`Partner ${index + 1}`}
                    className="partner-logo"
                  />
                </div>
              ))}
            </div>
            
            {/* Fade edges */}
            <div className="fade-edge fade-left"></div>
            <div className="fade-edge fade-right"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners