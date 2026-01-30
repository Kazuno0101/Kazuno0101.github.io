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
		<div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
				className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm rounded-full bg-sage/50 dark:bg-sage/20 text-coffee dark:text-sage"
			>
				<span className="w-2 h-2 rounded-full bg-sage dark:bg-peach animate-pulse"></span>
				<span className="line-through">Available for work</span>
			</motion.div>

			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
				className="max-w-3xl mb-4 sm:mb-6 font-serif text-4xl font-bold sm:text-5xl md:text-7xl text-coffee dark:text-peach"
			>
				Crafting digital experiences with heart.
			</motion.h1>

			<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="max-w-xl mb-6 sm:mb-8 text-base sm:text-lg text-steel dark:text-sage md:text-xl">
				Hi, I'm a creative developer who loves building beautiful and functional web experiences.
			</motion.p>

			<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-8 sm:mb-12">
				<div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-br from-peach to-sage dark:from-steel dark:to-ocean animate-float" />
			</motion.div>

			<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
				<Button onClick={scrollToProjects}>View My Work</Button>
			</motion.div>
		</div>
	);
}

export default Home;
