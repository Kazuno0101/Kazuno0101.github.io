function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-40 -left-40 w-96 h-96 bg-peach/40 dark:bg-steel/30 rounded-full blur-3xl animate-blob"
      />
      <div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-sage/40 dark:bg-ocean/50 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: '5s' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-peach/20 dark:bg-steel/20 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: '10s' }}
      />
    </div>
  )
}

export default AnimatedBackground
