import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import projects from '../data/projects.json'

function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-serif text-4xl md:text-5xl font-bold text-coffee dark:text-cream mb-12 text-center"
      >
        My Work
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white/80 dark:bg-steel/40 border border-sage dark:border-transparent rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all"
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title}
                className="aspect-video w-full object-cover rounded-2xl mb-4"
              />
            ) : (
              <div className="aspect-video bg-sage/30 dark:bg-ocean/50 rounded-2xl mb-4" />
            )}
            
            <h3 className="font-serif text-2xl font-bold text-coffee dark:text-cream mb-2">
              {project.title}
            </h3>
            
            <p className="text-steel dark:text-sage mb-4">
              {project.desc}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-peach/50 dark:bg-peach/20 text-coffee dark:text-cream text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-coffee dark:text-cream hover:text-peach transition-colors"
                >
                  <Github size={24} />
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-coffee dark:text-cream hover:text-peach transition-colors"
                >
                  <ExternalLink size={24} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
