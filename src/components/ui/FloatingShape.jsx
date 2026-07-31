// Decorative bordered shape (circle / square / cross / plus / triangle)
// with a hard offset shadow. Purely visual — aria-hidden by default.
// `shape` picks the geometry; `color` is a tailwind bg class.
const SHAPE_CLASSES = {
  square: 'floating-shape-square',
  circle: 'floating-shape-circle',
  cross: 'floating-shape-cross',
  plus: 'floating-shape-plus',
  triangle: 'floating-shape-triangle',
  ring: 'floating-shape-ring',
}

const SIZE_CLASSES = {
  sm: 'h-10 w-10',
  md: 'h-16 w-16',
  lg: 'h-24 w-24',
  xl: 'h-32 w-32',
}

export default function FloatingShape({
  shape = 'square',
  color = 'bg-amber',
  size = 'md',
  rotate = 0,
  className = '',
}) {
  const shapeClass = SHAPE_CLASSES[shape] || SHAPE_CLASSES.square
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md

  return (
    <span
      aria-hidden="true"
      className={`floating-shape ${shapeClass} ${sizeClass} ${color} ${className}`}
      style={{ '--shape-rotate': `${rotate}deg` }}
    />
  )
}
