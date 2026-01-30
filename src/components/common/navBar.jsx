import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Work' },
    { id: 'contact', label: 'Say Hi' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
      setActiveSection(id)
    }
    closeMenu()
  }

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'px-4 sm:px-8 py-3' : 'px-0 py-0'
    }`}>
      <motion.nav 
        className={`transition-all duration-500 ${
          isScrolled 
            ? 'max-w-4xl mx-auto rounded-full bg-cream/95 dark:bg-ocean/95 backdrop-blur-xl shadow-xl border border-coffee/10 dark:border-cream/10' 
            : 'bg-cream/80 dark:bg-ocean/80 backdrop-blur-md border-b border-coffee/5 dark:border-cream/5'
        }`}
        layout
      >
        <div className={`flex justify-between items-center transition-all duration-500 ${
          isScrolled ? 'max-w-4xl mx-auto px-6 py-2' : 'max-w-6xl mx-auto px-4 sm:px-6 py-4'
        }`}>
          <button onClick={() => scrollToSection('home')}>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`rounded-full border-2 border-coffee dark:border-cream flex items-center justify-center transition-all duration-500 ${
                isScrolled ? 'w-8 h-8' : 'w-10 h-10'
              }`}
            >
              <span className={`font-serif font-bold text-coffee dark:text-cream transition-all duration-500 ${
                isScrolled ? 'text-sm' : 'text-lg'
              }`}>K</span>
            </motion.div>
          </button>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button 
                  onClick={() => scrollToSection(link.id)}
                  className={`relative text-coffee dark:text-cream hover:text-peach dark:hover:text-peach transition-all duration-300 ${
                    isScrolled ? 'text-sm' : 'text-base'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-peach dark:bg-peach"
                    />
                  )}
                </button>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button 
              onClick={toggleMenu}
              className="text-coffee dark:text-cream p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden overflow-hidden ${
                isScrolled ? 'rounded-b-3xl' : ''
              }`}
            >
              <ul className="flex flex-col py-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button 
                      onClick={() => scrollToSection(link.id)}
                      className={`block w-full text-left px-6 py-3 text-lg transition-colors ${
                        activeSection === link.id 
                          ? 'text-peach bg-peach/10' 
                          : 'text-coffee dark:text-cream hover:text-peach hover:bg-peach/5'
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}

export default Navbar
