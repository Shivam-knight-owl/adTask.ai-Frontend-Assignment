import './App.css'
import { CompanyBanner } from './components/CompanyBanner'
import { FeaturesSection } from './components/FeaturesSection'
import { HeroContent } from './components/HeroSection'
import { Navbar } from './components/Navbar'
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
    </div>
  )
}

export default App
