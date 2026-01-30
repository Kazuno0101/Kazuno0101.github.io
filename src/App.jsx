import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Navbar from './components/common/Navbar.jsx'
import Footer from './components/common/Footer.jsx'
import AnimatedBackground from './components/common/AnimatedBackground.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

function ParallaxSection({ children, id, offset = 50 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

  return (
    <section id={id} ref={ref}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-cream dark:bg-ocean transition-colors duration-500 overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <section id="home">
          <Home />
        </section>
        <ParallaxSection id="about" offset={40}>
          <About />
        </ParallaxSection>
        <ParallaxSection id="projects" offset={30}>
          <Projects />
        </ParallaxSection>
        <ParallaxSection id="contact" offset={20}>
          <Contact />
        </ParallaxSection>
      </main>
      <Footer />
    </div>
  )
}

export default App
