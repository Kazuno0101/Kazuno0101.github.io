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
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home'
      setActiveSection(hash)
      setIsScrolled(hash !== 'home')
    }
    
    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const scrollToSection = (id) => {
    window.location.hash = id
    setActiveSection(id)
    closeMenu()
  }

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 z-50"
      initial={false}
      animate={{
        padding: isScrolled ? '12px 16px' : '0px',
      }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.nav 
        className="backdrop-blur-xl"
        initial={false}
        animate={{
          maxWidth: isScrolled ? '56rem' : '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: isScrolled ? 9999 : 0,
          backgroundColor: isScrolled 
            ? 'rgba(var(--color-cream-rgb, 250 247 240) / 0.95)' 
            : 'rgba(var(--color-cream-rgb, 250 247 240) / 0.8)',
          boxShadow: isScrolled 
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' 
            : 'none',
          borderWidth: isScrolled ? '1px' : '0px',
          borderBottomWidth: isScrolled ? '1px' : '1px',
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        style={{
          borderColor: 'rgba(74, 60, 49, 0.1)',
        }}
      >
        <motion.div 
          className="flex justify-between items-center"
          initial={false}
          animate={{
            paddingLeft: isScrolled ? '24px' : '16px',
            paddingRight: isScrolled ? '24px' : '16px',
            paddingTop: isScrolled ? '8px' : '16px',
            paddingBottom: isScrolled ? '8px' : '16px',
          }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <button onClick={() => scrollToSection('home')}>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border-2 border-coffee dark:border-cream flex items-center justify-center"
              initial={false}
              animate={{
                width: isScrolled ? 32 : 40,
                height: isScrolled ? 32 : 40,
              }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.span 
                className="font-serif font-bold text-coffee dark:text-cream"
                initial={false}
                animate={{
                  fontSize: isScrolled ? '14px' : '18px',
                }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                K
              </motion.span>
            </motion.div>
          </button>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <motion.button 
                  onClick={() => scrollToSection(link.id)}
                  className="relative text-coffee dark:text-cream hover:text-peach dark:hover:text-peach"
                  initial={false}
                  animate={{
                    fontSize: isScrolled ? '14px' : '16px',
                  }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-peach dark:bg-peach"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
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
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden overflow-hidden"
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
    </motion.div>
  )
}

export default Navbar
