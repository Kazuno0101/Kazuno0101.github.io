import { useScrollProgress } from '../../hooks/useScrollProgress.js'

// Thick (4px) scroll progress bar pinned at the very top of the viewport.
// Width tracks how far the user has scrolled the document.
export default function ScrollProgress() {
  const progress = useScrollProgress()
  return (
    <div
      className="scroll-progress"
      role="progressbar"
      aria-label="Scroll progress"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${Math.max(0.001, progress)})` }}
      />
    </div>
  )
}
