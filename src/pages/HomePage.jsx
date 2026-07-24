import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Features from '../components/Features.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import Testimonials from '../components/Testimonials.jsx'

export default function HomePage() {
  return (
    <div className="home-page">
      {/* 1  */} <Navbar />

      <main>
        {/* 3  */} <Hero />
        {/* 4  */} <Features />
        {/* 5  */} <About />
        {/* 6  */} <Services />
        {/* 7  */} <Testimonials />
      </main>
    </div>
  )
}
