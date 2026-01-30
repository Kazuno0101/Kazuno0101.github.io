import { motion } from 'framer-motion';

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
		<div className="max-w-6xl py-16 mx-auto">
			<div className="grid items-center gap-12 md:grid-cols-2">
				<motion.img
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className="w-full max-w-md mx-auto aspect-square rounded-3xl object-cover animate-float"
					src="/me.jpeg"
					alt="Profile"
				/>

				<div>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="mb-4 sm:mb-6 font-serif text-3xl sm:text-4xl font-bold md:text-5xl text-coffee dark:text-cream"
					>
						Who am I? 🤔
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed text-steel dark:text-sage"
					>
						I'm a passionate developer who believes in creating digital experiences that not only work great but also bring joy to
						users. When I'm not coding, you'll find me exploring new coffee shops ☕ or playing with my cat 🐱.
					</motion.p>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="mb-4 font-serif text-2xl font-bold text-coffee dark:text-cream"
					>
						Tech Stack
					</motion.h2>

					<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
						{skills.map((skill, index) => (
							<motion.div
								key={skill.name}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								whileHover={{ rotate: [-10, 10, 0], transition: { duration: 0.3 } }}
								className="flex flex-col items-center p-4 bg-white/80 dark:bg-steel/40 border border-sage dark:border-transparent shadow-md cursor-pointer rounded-2xl"
							>
								<span className="mb-2 text-3xl">{skill.icon}</span>
								<span className="text-sm font-medium text-coffee dark:text-cream">
									{skill.name}
								</span>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
