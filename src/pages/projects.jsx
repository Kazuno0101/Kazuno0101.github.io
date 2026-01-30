import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, X, ArrowRight } from 'lucide-react'
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
          className="flex gap-8 overflow-x-auto overflow-y-hidden px-8 md:px-16 lg:px-24 py-4 scrollbar-hide"
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
              <div 
                className={`relative w-[300px] sm:w-[340px] md:w-[380px] h-[420px] sm:h-[460px] rounded-2xl overflow-hidden ${project.color || 'bg-sage/30'} transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2`}
              >
                {/* Background image */}
                {project.image && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                )}

                {/* Content */}
                <div className="relative h-full p-6 md:p-8 flex flex-col justify-between">
                  {/* Top */}
                  <div>
                    {/* Number */}
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-600 mb-4 block">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    
                    {/* Title */}
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-800 mb-4 leading-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed line-clamp-3">
                      {project.desc}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div>
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-white/50 dark:bg-white/60 text-slate-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Links & CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3">
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2.5 bg-white/60 hover:bg-white rounded-full text-slate-600 hover:text-slate-800 transition-all"
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
                            className="p-2.5 bg-slate-800 hover:bg-slate-700 rounded-full text-white transition-all"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                      
                      {/* View details */}
                      <motion.div 
                        className="flex items-center gap-2 text-slate-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <span>View details</span>
                        <ArrowRight size={14} />
                      </motion.div>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-xl rounded-2xl overflow-hidden ${selectedProject.color || 'bg-cream'} shadow-2xl`}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
              >
                <X size={18} className="text-slate-600" />
              </button>

              {/* Background image */}
              {selectedProject.image && (
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-15"
                  style={{ backgroundImage: `url(${selectedProject.image})` }}
                />
              )}

              {/* Content */}
              <div className="relative p-8 md:p-10">
                {/* Number */}
                <span className="text-sm font-medium text-slate-500 mb-4 block">
                  Project {String(projects.findIndex(p => p.id === selectedProject.id) + 1).padStart(2, '0')}
                </span>

                <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                  {selectedProject.title}
                </h2>

                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  {selectedProject.desc}
                </p>

                {/* Tech */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1.5 bg-white/60 text-slate-700 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-white/70 hover:bg-white rounded-full text-slate-700 transition-colors text-sm font-medium"
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
                      className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-full text-white transition-colors text-sm font-medium"
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
