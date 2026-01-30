import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Coffee, Heart } from 'lucide-react';

function Contact() {
	const socials = [
		{ icon: Github, href: 'https://github.com/Kazuno0101', label: 'GitHub' },
		{ icon: Linkedin, href: 'https://www.linkedin.com/in/nuno-alwi/', label: 'LinkedIn' },
		{ icon: Instagram, href: 'https://www.instagram.com/kazuno_nuno/', label: 'Instagram' },
	];

	return (
		<div className="max-w-3xl py-16 sm:py-24 mx-auto text-center">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.6 }}
				className="mb-8"
			>
				<span className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-peach/30 dark:bg-peach/20 text-coffee dark:text-peach mb-6">
					<Coffee size={16} />
					Let's grab a coffee!
				</span>
			</motion.div>

			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.6, delay: 0.1 }}
				className="mb-4 font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-coffee dark:text-cream"
			>
				Say Hello!
			</motion.h1>

			<motion.p
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="mb-10 text-lg sm:text-xl text-steel dark:text-sage max-w-xl mx-auto leading-relaxed"
			>
				I'm always excited to connect with fellow developers, designers, or anyone who wants to chat about tech, coffee, or cats.
			</motion.p>

			<motion.a
				href="mailto:hello@example.com"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.5, delay: 0.3 }}
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				className="inline-flex items-center gap-3 px-8 py-4 mb-12 text-lg font-medium rounded-2xl bg-coffee dark:bg-peach text-cream dark:text-coffee shadow-lg hover:shadow-xl transition-shadow"
			>
				<Mail size={22} />
				hello@example.com
			</motion.a>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.5, delay: 0.4 }}
				className="mb-12"
			>
				<p className="text-sm text-steel dark:text-sage mb-6">Or find me on</p>
				<div className="flex justify-center gap-4">
					{socials.map((social, index) => (
						<motion.a
							key={social.label}
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
							whileHover={{ y: -4 }}
							className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/60 dark:bg-steel/30 border border-sage/30 dark:border-steel/50 text-coffee dark:text-cream hover:bg-white/80 dark:hover:bg-steel/50 transition-all"
						>
							<social.icon size={20} />
							<span className="text-sm font-medium">{social.label}</span>
						</motion.a>
					))}
				</div>
			</motion.div>

			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.8 }}
				className="inline-flex items-center gap-2 text-sm text-steel dark:text-sage"
			>
				Made with <Heart size={14} className="text-peach fill-peach" /> and lots of coffee
			</motion.p>
		</div>
	);
}

export default Contact;
