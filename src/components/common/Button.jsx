import { motion } from 'framer-motion'

function Button({ children, onClick, className = '' }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-6 py-3 bg-coffee dark:bg-peach text-cream dark:text-coffee font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow animate-breathe ${className}`}
    >
      {children}
    </motion.button>
  )
}

export default Button
