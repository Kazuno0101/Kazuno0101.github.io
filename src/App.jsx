import Navbar from './components/layout/Navbar.jsx'
import Hero from './components/layout/Hero.jsx'
import About from './components/layout/About.jsx'
import Projects from './components/layout/Projects.jsx'
import TickerWall from './components/layout/TickerWall.jsx'
import Skills from './components/layout/Skills.jsx'
import Contact from './components/layout/Contact.jsx'
import Footer from './components/layout/Footer.jsx'
import Grain from './components/ui/Grain.jsx'
import Cursor from './components/ui/Cursor.jsx'
import ScrollProgress from './components/ui/ScrollProgress.jsx'
import EasterEggOverlay from './components/ui/EasterEggOverlay.jsx'

function App() {
  return (
    <div className="min-h-screen bg-bg text-ink dark:bg-ink dark:text-bg font-sans">
      <Grain />
      <ScrollProgress />
      <Cursor />
      <EasterEggOverlay />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <TickerWall />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
