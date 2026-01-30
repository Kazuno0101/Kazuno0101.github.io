import ReactFullpage from '@fullpage/react-fullpage'
import { motion } from 'framer-motion'
import Navbar from './components/common/Navbar.jsx'
import ParallaxHero from './components/common/ParallaxHero.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <div className="bg-cream dark:bg-ocean transition-colors duration-500">
      <Navbar />
      
      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000}
        navigation={true}
        navigationPosition={'right'}
        anchors={['home', 'about', 'projects', 'contact']}
        sectionsColor={['transparent', 'transparent', 'transparent', 'transparent']}
        css3={true}
        easing={'easeInOutCubic'}
        scrollOverflow={true}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {/* Home Section */}
              <div className="section">
                <ParallaxHero>
                  <Home />
                </ParallaxHero>
              </div>

              {/* About Section */}
              <div className="section">
                <div className="flex items-center justify-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-16">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full"
                  >
                    <About />
                  </motion.div>
                </div>
              </div>

              {/* Projects Section - full width for horizontal scroll */}
              <div className="section">
                <div className="flex items-center justify-center min-h-screen pt-16">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full"
                  >
                    <Projects />
                  </motion.div>
                </div>
              </div>

              {/* Contact Section - no scroll overflow */}
              <div className="section fp-noscroll">
                <div className="flex items-center justify-center h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-16 overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-h-screen"
                  >
                    <Contact />
                  </motion.div>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>
  )
}

export default App
