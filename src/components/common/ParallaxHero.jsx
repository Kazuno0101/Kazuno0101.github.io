import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function ParallaxHero({ children }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  // Smooth parallax transforms
  const skyY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const cloudsY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const archBackY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const archMidY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const archFrontY = useTransform(scrollYProgress, [0, 1], ['0%', '65%'])
  const flowersY = useTransform(scrollYProgress, [0, 1], ['0%', '80%'])
  const groundY = useTransform(scrollYProgress, [0, 1], ['0%', '90%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Sky - soft blue gradient */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: skyY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-300 to-cyan-100 dark:from-indigo-950 dark:via-purple-950 dark:to-slate-900" />
        {/* Subtle light rays */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 via-transparent to-transparent dark:from-purple-500/10" />
      </motion.div>

      {/* Soft clouds */}
      <motion.div style={{ y: cloudsY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[8%] left-[5%] w-48 h-20 bg-white/60 dark:bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-[12%] left-[25%] w-64 h-24 bg-white/50 dark:bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-[6%] right-[10%] w-56 h-20 bg-white/55 dark:bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-[15%] right-[30%] w-40 h-16 bg-white/45 dark:bg-white/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Distant garden arch - back layer */}
      <motion.div 
        className="absolute bottom-[30%] left-0 right-0 flex justify-center"
        style={{ y: archBackY }}
      >
        <svg viewBox="0 0 400 200" className="w-[90%] max-w-4xl opacity-40">
          {/* Arch structure */}
          <path d="M50,200 Q50,50 200,50 Q350,50 350,200" fill="none" stroke="rgb(139, 90, 43)" strokeWidth="4"/>
          {/* Leaves and flowers */}
          <g className="text-green-700 dark:text-green-900">
            {[...Array(20)].map((_, i) => (
              <ellipse key={i} cx={60 + i * 15} cy={60 + Math.sin(i) * 20} rx="12" ry="8" fill="currentColor" opacity="0.7"/>
            ))}
          </g>
          <g className="text-pink-300 dark:text-pink-800">
            {[...Array(12)].map((_, i) => (
              <circle key={i} cx={80 + i * 22} cy={55 + Math.cos(i) * 15} r="5" fill="currentColor"/>
            ))}
          </g>
        </svg>
      </motion.div>

      {/* Middle garden arch */}
      <motion.div 
        className="absolute bottom-[20%] left-0 right-0 flex justify-center"
        style={{ y: archMidY }}
      >
        <svg viewBox="0 0 500 250" className="w-[95%] max-w-5xl opacity-60">
          {/* Arch structure */}
          <path d="M30,250 Q30,40 250,40 Q470,40 470,250" fill="none" stroke="rgb(120, 75, 35)" strokeWidth="6"/>
          {/* Dense foliage */}
          <g className="text-green-600 dark:text-green-800">
            {[...Array(30)].map((_, i) => (
              <ellipse key={i} cx={45 + i * 14} cy={55 + Math.sin(i * 0.8) * 25} rx="18" ry="12" fill="currentColor" opacity="0.8"/>
            ))}
            {[...Array(25)].map((_, i) => (
              <ellipse key={`b${i}`} cx={60 + i * 16} cy={80 + Math.cos(i) * 20} rx="15" ry="10" fill="currentColor" opacity="0.6"/>
            ))}
          </g>
          {/* Pink roses */}
          <g>
            {[...Array(15)].map((_, i) => (
              <g key={i} transform={`translate(${70 + i * 25}, ${50 + Math.sin(i) * 20})`}>
                <circle r="8" fill="rgb(244, 185, 205)" className="dark:fill-pink-700"/>
                <circle r="5" fill="rgb(251, 207, 220)" className="dark:fill-pink-600"/>
                <circle r="2" fill="rgb(253, 230, 235)" className="dark:fill-pink-500"/>
              </g>
            ))}
          </g>
          {/* White flowers */}
          <g>
            {[...Array(10)].map((_, i) => (
              <g key={i} transform={`translate(${90 + i * 32}, ${75 + Math.cos(i * 1.5) * 18})`}>
                <circle r="6" fill="rgb(255, 250, 250)" className="dark:fill-gray-300" opacity="0.9"/>
                <circle r="3" fill="rgb(255, 255, 240)" className="dark:fill-gray-200"/>
              </g>
            ))}
          </g>
        </svg>
      </motion.div>

      {/* Front garden arch - closest */}
      <motion.div 
        className="absolute bottom-[8%] left-0 right-0 flex justify-center"
        style={{ y: archFrontY }}
      >
        <svg viewBox="0 0 600 300" className="w-full max-w-6xl opacity-85">
          {/* Main arch */}
          <path d="M20,300 Q20,30 300,30 Q580,30 580,300" fill="none" stroke="rgb(101, 67, 33)" strokeWidth="8"/>
          
          {/* Lush foliage - top */}
          <g className="text-green-500 dark:text-green-700">
            {[...Array(40)].map((_, i) => (
              <ellipse 
                key={i} 
                cx={30 + i * 14} 
                cy={45 + Math.sin(i * 0.7) * 30} 
                rx="22" 
                ry="14" 
                fill="currentColor" 
                opacity={0.7 + Math.random() * 0.3}
              />
            ))}
          </g>
          
          {/* Foliage - sides */}
          <g className="text-green-600 dark:text-green-800">
            {[...Array(20)].map((_, i) => (
              <ellipse key={`l${i}`} cx={35 + i * 3} cy={60 + i * 12} rx="25" ry="15" fill="currentColor" opacity="0.8"/>
            ))}
            {[...Array(20)].map((_, i) => (
              <ellipse key={`r${i}`} cx={565 - i * 3} cy={60 + i * 12} rx="25" ry="15" fill="currentColor" opacity="0.8"/>
            ))}
          </g>
          
          {/* Big pink roses */}
          <g>
            {[...Array(20)].map((_, i) => {
              const x = 50 + i * 26
              const y = 40 + Math.sin(i * 0.8) * 25
              return (
                <g key={i} transform={`translate(${x}, ${y})`}>
                  <circle r="12" fill="rgb(236, 155, 178)" className="dark:fill-pink-800"/>
                  <circle r="8" fill="rgb(244, 185, 205)" className="dark:fill-pink-700"/>
                  <circle r="4" fill="rgb(251, 207, 220)" className="dark:fill-pink-600"/>
                  <circle r="2" fill="rgb(253, 230, 235)" className="dark:fill-pink-500"/>
                </g>
              )
            })}
          </g>
          
          {/* Side roses */}
          <g>
            {[...Array(8)].map((_, i) => (
              <g key={`sl${i}`} transform={`translate(${25 + i * 2}, ${80 + i * 25})`}>
                <circle r="10" fill="rgb(244, 185, 205)" className="dark:fill-pink-700"/>
                <circle r="6" fill="rgb(251, 207, 220)" className="dark:fill-pink-600"/>
              </g>
            ))}
            {[...Array(8)].map((_, i) => (
              <g key={`sr${i}`} transform={`translate(${575 - i * 2}, ${80 + i * 25})`}>
                <circle r="10" fill="rgb(244, 185, 205)" className="dark:fill-pink-700"/>
                <circle r="6" fill="rgb(251, 207, 220)" className="dark:fill-pink-600"/>
              </g>
            ))}
          </g>
        </svg>
      </motion.div>

      {/* Scattered flower petals floating */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: flowersY }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-pink-200 dark:bg-pink-400/50"
            style={{
              left: `${10 + i * 6}%`,
              top: `${20 + (i % 5) * 15}%`,
            }}
            animate={{
              y: [0, 20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Ground - grass path */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0"
        style={{ y: groundY }}
      >
        {/* Grass sides */}
        <div className="absolute bottom-0 left-0 w-[35%] h-32 bg-gradient-to-r from-green-500 to-green-400 dark:from-green-800 dark:to-green-700 rounded-tr-[100%]" />
        <div className="absolute bottom-0 right-0 w-[35%] h-32 bg-gradient-to-l from-green-500 to-green-400 dark:from-green-800 dark:to-green-700 rounded-tl-[100%]" />
        
        {/* Center path */}
        <div className="absolute bottom-0 left-[30%] right-[30%] h-24 bg-gradient-to-t from-green-600 via-green-500 to-green-400 dark:from-green-900 dark:via-green-800 dark:to-green-700" />
        
        {/* Ground base */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-green-600 dark:bg-green-900" />
      </motion.div>

      {/* Vignette effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/10 dark:to-black/30" />

      {/* Content overlay */}
      <motion.div 
        className="relative z-10 min-h-screen flex items-center justify-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default ParallaxHero
