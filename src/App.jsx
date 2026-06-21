import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Certifications />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}