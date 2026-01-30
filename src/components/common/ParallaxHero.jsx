import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function ParallaxHero({ children }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  // Different speeds for parallax layers
  const skyY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const sunY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const mountainBackY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const mountainMidY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const hillY = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])
  const treeY = useTransform(scrollYProgress, [0, 1], ['0%', '70%'])
  const fieldY = useTransform(scrollYProgress, [0, 1], ['0%', '80%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Sky gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-amber-200 via-orange-100 to-yellow-50 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-800"
        style={{ y: skyY }}
      />

      {/* Sun/Moon */}
      <motion.div 
        className="absolute top-[10%] left-1/2 -translate-x-1/2"
        style={{ y: sunY }}
      >
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 dark:from-slate-200 dark:to-slate-400 blur-sm opacity-80" />
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-200 to-orange-300 dark:from-slate-100 dark:to-slate-300" />
      </motion.div>

      {/* Clouds */}
      <motion.div style={{ y: skyY }} className="absolute top-[15%] left-[10%] w-32 h-12 bg-white/40 dark:bg-white/10 rounded-full blur-xl" />
      <motion.div style={{ y: skyY }} className="absolute top-[20%] right-[15%] w-40 h-14 bg-white/30 dark:bg-white/10 rounded-full blur-xl" />
      <motion.div style={{ y: skyY }} className="absolute top-[12%] right-[30%] w-24 h-10 bg-white/30 dark:bg-white/10 rounded-full blur-xl" />

      {/* Far mountains - dark silhouette */}
      <motion.div 
        className="absolute bottom-[45%] left-0 right-0"
        style={{ y: mountainBackY }}
      >
        <svg viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
          <path 
            fill="currentColor" 
            className="text-emerald-800/40 dark:text-slate-700/60"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L0,320Z"
          />
        </svg>
      </motion.div>

      {/* Mid mountains - green hills */}
      <motion.div 
        className="absolute bottom-[35%] left-0 right-0"
        style={{ y: mountainMidY }}
      >
        <svg viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
          <path 
            fill="currentColor" 
            className="text-emerald-700/50 dark:text-slate-600/70"
            d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,165.3C840,171,960,213,1080,218.7C1200,224,1320,192,1380,176L1440,160L1440,320L0,320Z"
          />
        </svg>
      </motion.div>

      {/* Rolling hills */}
      <motion.div 
        className="absolute bottom-[25%] left-0 right-0"
        style={{ y: hillY }}
      >
        <svg viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
          <path 
            fill="currentColor" 
            className="text-emerald-600/60 dark:text-emerald-900/80"
            d="M0,96L80,112C160,128,320,160,480,165.3C640,171,800,149,960,149.3C1120,149,1280,171,1360,181.3L1440,192L1440,320L0,320Z"
          />
        </svg>
      </motion.div>

      {/* Trees layer */}
      <motion.div 
        className="absolute bottom-[18%] left-0 right-0 flex justify-around"
        style={{ y: treeY }}
      >
        {/* Tree 1 - Palm */}
        <svg className="w-16 h-24 sm:w-20 sm:h-32 text-emerald-800 dark:text-emerald-950" viewBox="0 0 100 150">
          <rect x="45" y="80" width="10" height="70" fill="currentColor" className="text-amber-800 dark:text-amber-950"/>
          <ellipse cx="50" cy="60" rx="30" ry="40" fill="currentColor"/>
          <ellipse cx="30" cy="50" rx="20" ry="30" fill="currentColor"/>
          <ellipse cx="70" cy="50" rx="20" ry="30" fill="currentColor"/>
        </svg>
        {/* Tree 2 */}
        <svg className="w-12 h-20 sm:w-16 sm:h-28 text-emerald-700 dark:text-emerald-900 hidden sm:block" viewBox="0 0 100 150">
          <rect x="45" y="90" width="10" height="60" fill="currentColor" className="text-amber-700 dark:text-amber-900"/>
          <ellipse cx="50" cy="70" rx="35" ry="45" fill="currentColor"/>
        </svg>
        {/* Tree 3 */}
        <svg className="w-14 h-22 sm:w-18 sm:h-30 text-emerald-800 dark:text-emerald-950" viewBox="0 0 100 150">
          <rect x="45" y="85" width="10" height="65" fill="currentColor" className="text-amber-800 dark:text-amber-950"/>
          <ellipse cx="50" cy="55" rx="28" ry="38" fill="currentColor"/>
          <ellipse cx="35" cy="65" rx="18" ry="25" fill="currentColor"/>
          <ellipse cx="65" cy="65" rx="18" ry="25" fill="currentColor"/>
        </svg>
        {/* Tree 4 */}
        <svg className="w-12 h-20 sm:w-16 sm:h-28 text-emerald-700 dark:text-emerald-900 hidden md:block" viewBox="0 0 100 150">
          <rect x="45" y="90" width="10" height="60" fill="currentColor" className="text-amber-700 dark:text-amber-900"/>
          <ellipse cx="50" cy="70" rx="35" ry="45" fill="currentColor"/>
        </svg>
        {/* Tree 5 */}
        <svg className="w-16 h-24 sm:w-20 sm:h-32 text-emerald-800 dark:text-emerald-950" viewBox="0 0 100 150">
          <rect x="45" y="80" width="10" height="70" fill="currentColor" className="text-amber-800 dark:text-amber-950"/>
          <ellipse cx="50" cy="60" rx="30" ry="40" fill="currentColor"/>
          <ellipse cx="30" cy="50" rx="20" ry="30" fill="currentColor"/>
          <ellipse cx="70" cy="50" rx="20" ry="30" fill="currentColor"/>
        </svg>
      </motion.div>

      {/* Rice terraces / Plantation field */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0"
        style={{ y: fieldY }}
      >
        {/* Terrace lines */}
        <div className="relative h-48 sm:h-64">
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-emerald-500/70 dark:bg-emerald-800/80 rounded-t-[100%]" />
          <div className="absolute bottom-8 left-[5%] right-[5%] h-10 bg-emerald-400/70 dark:bg-emerald-700/80 rounded-t-[100%]" />
          <div className="absolute bottom-14 left-[10%] right-[10%] h-10 bg-emerald-500/60 dark:bg-emerald-800/70 rounded-t-[100%]" />
          <div className="absolute bottom-20 left-[15%] right-[15%] h-8 bg-emerald-400/50 dark:bg-emerald-700/60 rounded-t-[100%]" />
          <div className="absolute bottom-24 left-[20%] right-[20%] h-8 bg-emerald-500/40 dark:bg-emerald-800/50 rounded-t-[100%]" />
        </div>
      </motion.div>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-emerald-600 dark:bg-emerald-950" />

      {/* Content overlay */}
      <motion.div 
        className="relative z-10 min-h-screen flex items-center justify-center"
        style={{ y: contentY, opacity }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default ParallaxHero
