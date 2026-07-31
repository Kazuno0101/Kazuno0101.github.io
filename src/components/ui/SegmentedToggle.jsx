export default function SegmentedToggle({ options, value, onChange }) {
  return (
    <div className="inline-flex border-3 border-ink dark:border-bg" role="radiogroup" aria-label="Filter by type">
      {options.map((opt, i) => {
        const isActive = value === opt.value
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(opt.value)}
            className={`font-mono text-xs font-bold uppercase px-5 py-2.5 transition-colors duration-120 ${
              isActive
                ? 'bg-ink text-bg dark:bg-bg dark:text-ink'
                : 'bg-bg text-ink dark:bg-ink dark:text-bg hover:bg-amber'
            } ${i > 0 ? 'border-l-3 border-ink dark:border-bg' : ''}`}
          >
            {opt.label}
            {opt.count !== undefined && (
              <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 leading-none ${isActive ? 'bg-coral text-bg' : 'bg-coral text-bg'}`}>
                {opt.count}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
