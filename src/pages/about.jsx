import { motion } from 'framer-motion';
import GitHubContributions from '../components/common/GitHubContributions.jsx';

const skills = [
	{ name: 'React', icon: '⚛️' },
	{ name: 'JavaScript', icon: '🟨' },
	{ name: 'Tailwind', icon: '🎨' },
	{ name: 'Node.js', icon: '🟢' },
	{ name: 'TypeScript', icon: '💙' },
	{ name: 'Git', icon: '🔀' },
];

function About() {
	return (
		<div className="max-w-6xl py-8 mx-auto">
			<div className="grid items-start gap-8 md:grid-cols-2">
				{/* Left - Photo (1/2) */}
				<motion.img
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className="w-full aspect-square rounded-3xl object-cover animate-float sticky top-24"
					src="/me.jpeg"
					alt="Profile"
				/>

				{/* Right - Content */}
				<div>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="mb-3 font-serif text-2xl sm:text-3xl font-bold md:text-4xl text-coffee dark:text-cream"
					>
						Who am I? 🤔
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mb-6 text-sm sm:text-base leading-relaxed text-steel dark:text-sage"
					>
						I'm a passionate developer who believes in creating digital experiences that not only work great but also bring joy to
						users. When I'm not coding, you'll find me exploring new coffee shops ☕ or playing with my cat 🐱.
					</motion.p>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="mb-3 font-serif text-xl font-bold text-coffee dark:text-cream"
					>
						Tech Stack
					</motion.h2>

					<div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-6">
						{skills.map((skill, index) => (
							<motion.div
								key={skill.name}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{ duration: 0.4, delay: index * 0.05 }}
								whileHover={{ rotate: [-10, 10, 0], transition: { duration: 0.3 } }}
								className="flex flex-col items-center p-2 bg-white/80 dark:bg-steel/40 border border-sage dark:border-transparent shadow-md cursor-pointer rounded-xl"
							>
								<span className="text-xl">{skill.icon}</span>
								<span className="text-xs font-medium text-coffee dark:text-cream">
									{skill.name}
								</span>
							</motion.div>
						))}
					</div>

					{/* GitHub Activity Stats - below tech stack */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="mb-3 font-serif text-xl font-bold text-coffee dark:text-cream"
						>
							GitHub Activity
						</motion.h2>
						<GitHubContributions username="Kazuno0101" />
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default About;
