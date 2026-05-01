import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Certifications from './components/Certifications'
import Testimonials from './components/Testimonials'
import Features from './components/Features'
import Process from './components/Process'
import Team from './components/Team'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'

export default function App() {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Certifications />
        <Testimonials />
        <Features />
        <Process />
        <Team />
        <Gallery />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
