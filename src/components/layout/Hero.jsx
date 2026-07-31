import { about, profile } from '../../data/portfolio.js';
import { useClock } from '../../hooks/useClock.js';
import { useTyping } from '../../hooks/useTyping.js';
import Marquee from '../ui/Marquee.jsx';
import Sticker from '../ui/Sticker.jsx';
import FloatingShape from '../ui/FloatingShape.jsx';

// Colored ticker: alternating bright pills instead of flat strip
const tickerLabels = [
	'OPEN TO WORK',
	profile.location,
	profile.role,
	'OPEN TO FREELANCE',
];

const tickerColors = ['bg-amber', 'bg-blue', 'bg-pink', 'bg-lime'];

const tickerItems = tickerLabels.map((label, i) => (
	<span
		className={`inline-block border-2 border-ink px-3 py-1 ${tickerColors[i % tickerColors.length]} text-ink`}
	>
		{label}
	</span>
));

const roles = ['Frontend', 'Backend', 'Fullstack'];

export default function Hero() {
	const wib = useClock('Asia/Jakarta');
	const { display: typedRole, caret } = useTyping(roles);

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
					{about.prompt}
					<span
						className='border-2 border-current px-2 py-0.5 font-bold text-ink dark:text-bg bg-lime'
						aria-label={`Waktu lokal: ${wib}`}
					>
						WIB {wib}
					</span>
				</div>

				{/* poster wordmark + headline */}
				<div className='overflow-hidden'>
					<h1 className='font-display font-extrabold text-ink dark:text-bg leading-[0.9] tracking-tight'>
						<span
							className='block text-[2.75rem] hero-line sm:text-7xl md:text-8xl'
							style={{ animationDelay: '60ms' }}
						>
							{profile.name}
						</span>
					</h1>
					<div className='mt-2 hero-line sm:mt-3'>
						<span className='block text-coral text-[2.75rem] sm:text-7xl md:text-8xl leading-[0.9]'>
							{typedRole}
							<span className='font-mono font-normal'>{caret}</span>
							<span className='block sm:inline'>Developer</span>
						</span>
					</div>
				</div>

				<div
					className='hero-line'
					style={{ animationDelay: '320ms' }}
				>
					<p className='max-w-xl text-lg text-muted dark:text-bg/80'>
						{profile.tagline}
					</p>
				</div>

				<div
					className='flex flex-wrap gap-4 hero-line'
					style={{ animationDelay: '440ms' }}
				>
					<a
						href='#work'
						className='btn-pop border-3 border-ink dark:border-bg bg-amber text-ink font-mono text-sm font-bold px-6 py-3.5 hover:bg-ink hover:text-bg dark:hover:bg-bg dark:hover:text-ink'
					>
						lihat proyek →
					</a>
					<a
						href='#contact'
						className='btn-pop border-3 border-ink dark:border-bg bg-lime text-ink font-mono text-sm font-bold px-6 py-3.5 hover:bg-ink hover:text-bg dark:hover:bg-bg dark:hover:text-ink'
					>
						mulai ngobrol
					</a>
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
