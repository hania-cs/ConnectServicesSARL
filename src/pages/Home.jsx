import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Partners from '../components/Partners'
import CTA from '../components/CTA'

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
            <Partners />

      <CTA />
    </main>
  )
}

export default Home