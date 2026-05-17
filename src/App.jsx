import Header from './components/Header'
import Hero from './components/Hero'
import Trust from './components/Trust'
import Services from './components/Services'
import ExperienceVideo from './components/ExperienceVideo'
import WhyChooseUs from './components/WhyChooseUs'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />
        <ExperienceVideo />
        <WhyChooseUs />
        <Packages />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
