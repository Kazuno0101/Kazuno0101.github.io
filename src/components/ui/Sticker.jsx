import {
  Star, Sparkles, Asterisk, Zap, Hexagon, Triangle, Circle,
  Square, Diamond, Plus, X, Sun, Flame, Bolt, Trophy, Code2, Heart,
} from 'lucide-react'

const ICONS = {
  Star, Sparkles, Asterisk, Zap, Hexagon, Triangle, Circle,
  Square, Diamond, Plus, X, Sun, Flame, Bolt, Trophy, Code2, Heart,
}

// Rotated decorative badge with a hard offset shadow.
// `color` = tailwind bg class (e.g. 'bg-pink'), `icon` = lucide icon name.
// Purely decorative (aria-hidden); keeps layout tidy when used sparingly.
export default function Sticker({
  icon = 'Sparkles',
  color = 'bg-pink',
  rotate = 'right',
  size = 'md',
  className = '',
}) {
  const Icon = ICONS[icon] || Sparkles
  const tilt = rotate === 'left' ? 'tilt-l' : 'tilt-r'
  const sizes = {
    sm: 'h-10 w-10',
    md: 'h-14 w-14',
    lg: 'h-20 w-20',
  }
  const iconSizes = { sm: 18, md: 24, lg: 32 }

  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center border-3 border-ink text-ink shadow-hard-sm ${color} ${sizes[size]} ${tilt} ${className}`}
    >
      <Icon size={iconSizes[size]} strokeWidth={2.5} />
    </span>
  )
}
