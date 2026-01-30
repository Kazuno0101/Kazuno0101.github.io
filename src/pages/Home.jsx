import { motion } from 'framer-motion';
import Button from '../components/common/Button.jsx';

function Home() {
	const scrollToProjects = () => {
		const element = document.getElementById('projects');
		if (element) {
			const offset = 40;
			const elementPosition = element.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
		}
	};

	return (
		<div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
				className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-emerald-800 dark:text-emerald-300 shadow-lg"
			>
				<span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
				<span className="line-through">Available for work</span>
			</motion.div>

			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
				className="max-w-3xl mb-4 sm:mb-6 font-serif text-4xl font-bold sm:text-5xl md:text-7xl text-slate-800 dark:text-white drop-shadow-lg"
			>
				Crafting digital experiences with heart.
			</motion.h1>

			<motion.p 
				initial={{ opacity: 0, y: 20 }} 
				animate={{ opacity: 1, y: 0 }} 
				transition={{ delay: 0.4 }} 
				className="max-w-xl mb-8 sm:mb-12 text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-200 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-2xl"
			>
				Hi, I'm a creative developer who loves building beautiful and functional web experiences.
			</motion.p>

			<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
				<Button onClick={scrollToProjects}>View My Work</Button>
			</motion.div>

			{/* Scroll indicator */}
			<motion.div 
				initial={{ opacity: 0 }} 
				animate={{ opacity: 1 }} 
				transition={{ delay: 1 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
			>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
					className="w-6 h-10 border-2 border-slate-600 dark:border-white/50 rounded-full flex justify-center"
				>
					<motion.div 
						className="w-1.5 h-3 bg-slate-600 dark:bg-white/50 rounded-full mt-2"
						animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
						transition={{ duration: 2, repeat: Infinity }}
					/>
				</motion.div>
			</motion.div>
		</div>
	);
}

export default Home;
