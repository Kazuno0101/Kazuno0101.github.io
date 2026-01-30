import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import projects from '../data/projects.json'

function Projects() {
  return (
    <div className="max-w-4xl mx-auto py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-serif text-4xl md:text-5xl font-bold text-coffee dark:text-cream mb-12 text-center"
      >
        My Work
      </motion.h1>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ x: 8 }}
            className="group flex items-center justify-between p-5 bg-white/60 dark:bg-steel/30 border border-sage/50 dark:border-steel/50 rounded-2xl hover:bg-white/80 dark:hover:bg-steel/50 transition-all"
          >
            <div className="flex-1">
              <h3 className="font-serif text-xl font-bold text-coffee dark:text-cream mb-1">
                {project.title}
              </h3>
              <p className="text-steel dark:text-sage text-sm mb-3">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-0.5 bg-sage/30 dark:bg-sage/20 text-coffee dark:text-sage text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3 ml-4">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-steel dark:text-sage hover:text-coffee dark:hover:text-cream transition-colors"
                >
                  <Github size={20} />
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-steel dark:text-sage hover:text-coffee dark:hover:text-cream transition-colors"
                >
                  <ExternalLink size={20} />
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
