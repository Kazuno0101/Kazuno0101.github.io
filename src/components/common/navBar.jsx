import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Work' },
    { id: 'contact', label: 'Say Hi' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 40
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
      setActiveSection(id)
    }
    closeMenu()
  }

  return (
    <nav className="sticky top-0 z-50 bg-cream/80 dark:bg-ocean/80 backdrop-blur-md border-b border-coffee/5 dark:border-cream/5 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <button onClick={() => scrollToSection('home')}>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-10 h-10 rounded-full border-2 border-coffee dark:border-cream flex items-center justify-center animate-sway"
          >
            <span className="font-serif font-bold text-lg text-coffee dark:text-cream">K</span>
          </motion.div>
        </button>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button 
                onClick={() => scrollToSection(link.id)}
                className="relative text-coffee dark:text-cream hover:text-peach dark:hover:text-peach transition-colors"
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
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button 
            onClick={toggleMenu}
            className="text-coffee dark:text-cream p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="md:hidden overflow-hidden bg-cream/95 dark:bg-ocean/95 backdrop-blur-md border-t border-coffee/5 dark:border-cream/5"
          >
            <ul className="flex flex-col py-4">
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
    </nav>
  )
}

export default Navbar
