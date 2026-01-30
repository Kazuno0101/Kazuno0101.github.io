import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, X } from 'lucide-react'
import projects from '../data/projects.json'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const scrollContainerRef = useRef(null)

  const openModal = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleWheel = (e) => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth
      const currentScrollLeft = container.scrollLeft
      
      const isAtStart = currentScrollLeft <= 0 && e.deltaY < 0
      const isAtEnd = currentScrollLeft >= maxScrollLeft - 1 && e.deltaY > 0
      
      if (!isAtStart && !isAtEnd) {
        e.preventDefault()
        e.stopPropagation()
      }
      
      container.scrollLeft += e.deltaY * 1.5
      
      const progress = container.scrollLeft / maxScrollLeft
      setScrollProgress(Math.min(Math.max(progress, 0), 1))
    }

    const handleScroll = () => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth
      const progress = container.scrollLeft / maxScrollLeft
      setScrollProgress(Math.min(Math.max(progress, 0), 1))
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    container.addEventListener('scroll', handleScroll)
    
    return () => {
      container.removeEventListener('wheel', handleWheel)
      container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="h-full flex flex-col justify-center overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6 px-4"
      >
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-coffee dark:text-cream mb-2">
          My Work
        </h1>
        <p className="text-steel dark:text-sage text-sm">
          Scroll to explore
        </p>
      </motion.div>

      {/* Progress Bar */}
      <div className="w-24 mx-auto h-0.5 bg-coffee/10 dark:bg-cream/10 rounded-full mb-8 overflow-hidden">
        <motion.div 
          className="h-full bg-coffee dark:bg-cream rounded-full"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Horizontal Gallery */}
      <div className="relative flex-1 flex items-center">
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto overflow-y-hidden px-8 md:px-16 lg:px-24 py-6 scrollbar-hide"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth'
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openModal(project)}
              className="flex-shrink-0 cursor-pointer group"
            >
              {/* Card with subtle notebook feel */}
              <div className="relative w-[300px] sm:w-[340px] md:w-[360px]">
                {/* Main card */}
                <div 
                  className="relative bg-cream dark:bg-slate-800 rounded-xl overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2 dark:border dark:border-slate-700"
                  style={{
                    boxShadow: '0 4px 20px rgba(105, 69, 9, 0.08)',
                  }}
                >
                  {/* Subtle top accent bar using project color - with glow in dark mode */}
                  <div 
                    className={`h-1.5 w-full ${project.color || 'bg-sage'}`}
                    style={{
                      boxShadow: 'var(--tw-shadow, none)',
                    }}
                  />
                  {/* Glow effect for dark mode */}
                  <div 
                    className={`absolute top-0 left-0 right-0 h-8 opacity-0 dark:opacity-30 blur-xl ${project.color || 'bg-sage'}`}
                  />

                  {/* Content */}
                  <div className="relative p-6 md:p-7">
                    {/* Header with number */}
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-xs font-medium text-steel/50 dark:text-cream/50 tracking-wider">
                        PROJECT {String(index + 1).padStart(2, '0')}
                      </span>
                      {/* Decorative dot - with subtle glow in dark mode */}
                      <div 
                        className={`w-2.5 h-2.5 rounded-full ${project.color || 'bg-sage'}`}
                        style={{
                          boxShadow: document.documentElement.classList.contains('dark') 
                            ? `0 0 8px 2px currentColor` 
                            : 'none',
                        }}
                      />
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-coffee dark:text-cream mb-3 leading-snug">
                      {project.title}
                    </h3>

                    {/* Subtle divider */}
                    <div className="w-12 h-px bg-coffee/20 dark:bg-cream/20 mb-4" />

                    {/* Description */}
                    <p className="text-steel dark:text-sage text-sm leading-relaxed mb-5 line-clamp-3">
                      {project.desc}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2.5 py-1 bg-sage/20 dark:bg-sage/10 text-coffee dark:text-sage text-xs font-medium rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Footer */}
                    <div className="flex items-center pt-2 border-t border-coffee/10 dark:border-cream/10">
                      <div className="flex gap-2">
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 hover:bg-sage/20 dark:hover:bg-sage/10 rounded-lg text-steel dark:text-sage hover:text-coffee dark:hover:text-cream transition-all"
                          >
                            <Github size={18} />
                          </a>
                        )}
                        {project.demo && (
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 hover:bg-peach/30 dark:hover:bg-peach/20 rounded-lg text-steel dark:text-sage hover:text-coffee dark:hover:text-cream transition-all"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="flex-shrink-0 w-4 md:w-8" />
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-coffee/30 dark:bg-ocean/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-cream dark:bg-slate-800 rounded-xl overflow-hidden shadow-2xl dark:border dark:border-slate-700"
            >
              {/* Top accent bar - with glow in dark mode */}
              <div className={`h-2 w-full ${selectedProject.color || 'bg-sage'}`} />
              <div 
                className={`absolute top-0 left-0 right-0 h-10 opacity-0 dark:opacity-25 blur-xl ${selectedProject.color || 'bg-sage'}`}
              />

              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-5 right-4 z-10 p-2 hover:bg-coffee/10 dark:hover:bg-cream/10 rounded-lg transition-colors"
              >
                <X size={18} className="text-steel dark:text-sage" />
              </button>

              {/* Content */}
              <div className="relative p-7 md:p-8">
                {/* Header */}
                <span className="text-xs font-medium text-steel/50 dark:text-cream/50 tracking-wider mb-3 block">
                  PROJECT {String(projects.findIndex(p => p.id === selectedProject.id) + 1).padStart(2, '0')}
                </span>

                <h2 className="font-serif text-2xl md:text-3xl font-bold text-coffee dark:text-cream mb-3 pr-8">
                  {selectedProject.title}
                </h2>

                {/* Divider */}
                <div className="w-16 h-px bg-coffee/20 dark:bg-cream/20 mb-5" />

                <p className="text-steel dark:text-sage text-base leading-relaxed mb-6">
                  {selectedProject.desc}
                </p>

                {/* Tech */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-steel/60 dark:text-cream/50 uppercase tracking-wider mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1.5 bg-sage/20 dark:bg-sage/10 text-coffee dark:text-sage text-sm font-medium rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-coffee/10 dark:border-cream/10">
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-coffee/5 dark:bg-cream/5 hover:bg-coffee/10 dark:hover:bg-cream/10 rounded-lg text-coffee dark:text-cream transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a 
                      href={selectedProject.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-coffee dark:bg-peach hover:bg-coffee/90 dark:hover:bg-peach/90 rounded-lg text-cream dark:text-coffee transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects
