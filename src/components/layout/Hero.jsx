import { useLocale } from '../../hooks/useLocale.jsx';
import { generateCv } from '../../utils/generateCv.js';
import { useClock } from '../../hooks/useClock.js';
import { useTyping } from '../../hooks/useTyping.js';
import Marquee from '../ui/Marquee.jsx';
import Sticker from '../ui/Sticker.jsx';
import FloatingShape from '../ui/FloatingShape.jsx';

// Colored ticker: alternating bright pills instead of flat strip
const tickerColors = ['bg-amber', 'bg-blue', 'bg-pink', 'bg-lime'];

export default function Hero() {
	const { locale, t } = useLocale();
	const wib = useClock('Asia/Jakarta');
	const { display: typedRole, caret } = useTyping(t.ui.hero.roles);

	// Di dalam komponen supaya ikut re-render saat locale berganti.
	const tickerLabels = [
		t.ui.hero.ticker[0],
		t.profile.location,
		t.profile.role,
		t.ui.hero.ticker[1],
	];

	const tickerItems = tickerLabels.map((label, i) => (
		<span
			key={label}
			className={`inline-block border-2 border-ink px-3 py-1 ${tickerColors[i % tickerColors.length]} text-ink`}
		>
			{label}
		</span>
	));

	return (
		<section
			id='top'
			className='relative overflow-hidden border-b-3 border-ink dark:border-bg'
		>
			{/* decorative sticker cluster — top-right */}
			<div className='absolute flex-col items-center hidden gap-3 top-20 right-8 md:flex'>
				<Sticker
					icon='Sparkles'
					color='bg-pink'
					size='lg'
					rotate='right'
				/>
				<Sticker
					icon='Code2'
					color='bg-blue'
					size='md'
					rotate='left'
				/>
			</div>

			{/* floating shapes — left side, hidden on small screens */}
			<FloatingShape
				shape='circle'
				color='bg-amber'
				size='md'
				rotate={12}
				className='absolute hidden top-32 left-6 lg:block'
			/>
			<FloatingShape
				shape='cross'
				color='bg-coral'
				size='sm'
				rotate={-8}
				className='absolute hidden bottom-40 left-16 lg:block'
			/>

			<div className='flex flex-col max-w-6xl gap-8 px-6 pt-16 pb-12 mx-auto sm:pt-24 sm:pb-16'>
				{/* status strip with live clock */}
				<div className='flex flex-wrap items-center gap-4 font-mono text-xs text-muted dark:text-bg/70'>
					<span
						className='inline-block h-2.5 w-2.5 bg-coral animate-pulse'
						aria-hidden='true'
					/>
					{t.about.prompt}
					<span
						className='border-2 border-current px-2 py-0.5 font-bold text-ink dark:text-bg bg-lime'
						aria-label={t.ui.hero.clockAria.replace('{time}', wib)}
					>
						WIB {wib}
					</span>
				</div>

				{/* poster wordmark + headline */}
				<div className='overflow-hidden'>
					<h1 className='font-display font-extrabold text-ink dark:text-bg leading-[0.9] tracking-tight'>
						<span
							className='block text-[2.25rem] hero-line sm:text-7xl md:text-8xl'
							style={{ animationDelay: '60ms' }}
						>
							{t.profile.name}
						</span>
					</h1>
					<div className='mt-2 hero-line sm:mt-3'>
						<span className='block text-coral text-[2.25rem] sm:text-7xl md:text-8xl leading-[0.9]'>
							{typedRole}
							<span className='font-mono font-normal'>{caret}</span>
							<span className='block sm:inline'>{t.ui.hero.roleSuffix}</span>
						</span>
					</div>
				</div>

				<div
					className='hero-line'
					style={{ animationDelay: '320ms' }}
				>
					<p className='max-w-xl text-base sm:text-lg text-muted dark:text-bg/80'>
						{t.profile.tagline}
					</p>
				</div>

				<div
					className='hero-line'
					style={{ animationDelay: '440ms' }}
				>
					{/* inner flex wrapper: hero-line sets display:inline-block and
						would otherwise override the flex utility (cascade layers) */}
					<div className='flex flex-wrap gap-4'>
						<a
							href='#work'
							className='btn-pop border-3 border-ink dark:border-bg bg-amber text-ink font-mono text-sm font-bold px-6 py-3.5 hover:bg-ink hover:text-bg dark:hover:bg-bg dark:hover:text-ink'
						>
							{t.ui.hero.ctaWork}
						</a>
						<a
							href='#contact'
							className='btn-pop border-3 border-ink dark:border-bg bg-lime text-ink font-mono text-sm font-bold px-6 py-3.5 hover:bg-ink hover:text-bg dark:hover:bg-bg dark:hover:text-ink'
						>
							{t.ui.hero.ctaContact}
						</a>
						<button
							type='button'
							onClick={() => generateCv(locale)}
							className='btn-pop cursor-pointer border-3 border-ink dark:border-bg bg-blue text-ink font-mono text-sm font-bold px-6 py-3.5 hover:bg-ink hover:text-bg dark:hover:bg-bg dark:hover:text-ink'
						>
							{t.ui.hero.ctaCv}
						</button>
					</div>
				</div>
			</div>

			{/* colored status ticker (velocity-reactive) */}
			<div className='py-3 border-t-3 border-ink dark:border-bg'>
				<Marquee
					items={tickerItems}
					duration={28}
					separator='✦'
					reactToScroll
					className='font-mono text-sm font-bold'
				/>
			</div>
		</section>
	);
}
