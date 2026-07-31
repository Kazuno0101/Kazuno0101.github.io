// Brutalist filter bar for the projects section. Renders one button per
// category plus an "all" option. Accessible: each button uses aria-pressed.
// Shows project count next to each label.
export default function FilterBar({ categories, active, onSelect, countByCategory }) {
  return (
    <div className="flex flex-wrap gap-3" role="group" aria-label="Filter projects by category">
      <FilterButton
        label="all"
        count={countByCategory ? categories.reduce((sum, c) => sum + countByCategory(c), 0) : undefined}
        isActive={active === 'all'}
        onClick={() => onSelect('all')}
      />
      {categories.map((cat) => (
        <FilterButton
          key={cat}
          label={cat}
          count={countByCategory ? countByCategory(cat) : undefined}
          isActive={active === cat}
          onClick={() => onSelect(cat)}
        />
      ))}
    </div>
  )
}

function FilterButton({ label, count, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`btn-pop border-3 border-ink dark:border-bg px-4 py-2 font-mono text-xs font-bold uppercase transition-colors duration-120 inline-flex items-center gap-2 ${
        isActive
          ? 'bg-ink text-bg dark:bg-bg dark:text-ink'
          : 'bg-bg text-ink dark:bg-ink dark:text-bg hover:bg-amber'
      }`}
    >
      {label}
      {count !== undefined && (
        <span className={`text-[10px] rounded-badge px-1.5 py-0.5 leading-none ${
          isActive ? 'bg-coral text-bg' : 'bg-coral text-bg'
        }`}>
          {count}
        </span>
      )}
    </button>
  )
}
