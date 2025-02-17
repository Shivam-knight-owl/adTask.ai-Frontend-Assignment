import './App.css'
import { BelowContactUsCompo } from './components/BelowContactUsCompo'
import { CompanyBanner } from './components/CompanyBanner'
import { ContactUsCompo } from './components/ContactUsCompo'
import { FeaturesSection } from './components/FeaturesSection'
import { Footer } from './components/Footer'
import { HeroContent } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { ServicesCompo } from './components/ServicesCompo'
import { TestimonialsCompo } from './components/TestimonialCompo'
import { VideoDiv } from './components/VideoDiv'
import { WorksWith } from './components/WorksWith'

function App() {

  return (
    <div>
      <Navbar/>
      <HeroContent/>
      <VideoDiv/>
      <CompanyBanner/>
      <WorksWith/>
      <FeaturesSection/>
      <ServicesCompo/>
      <TestimonialsCompo/>
      <ContactUsCompo/>
      <BelowContactUsCompo/>
      <Footer />
    </div>
  )
}

export default App
