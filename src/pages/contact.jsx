import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Send } from 'lucide-react';

function Contact() {
	const [sent, setSent] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSent(true);
		setTimeout(() => setSent(false), 3000);
	};

	const copyEmail = () => {
		navigator.clipboard.writeText('hello@example.com');
		alert('Email copied!');
	};

	return (
		<div className="max-w-2xl px-4 sm:px-6 py-12 sm:py-16 mx-auto">
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
				className="mb-6 font-serif text-3xl sm:text-4xl font-bold text-center md:text-5xl text-coffee dark:text-cream"
			>
				Let's make something amazing together.
			</motion.h1>

			<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
				<motion.a
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					href="https://github.com/Kazuno0101"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center transition-colors rounded-full shadow-lg w-12 h-12 sm:w-14 sm:h-14 bg-white/80 dark:bg-steel/40 text-coffee dark:text-cream hover:text-peach"
				>
					<Github size={28} />
				</motion.a>
				<motion.a
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					href="https://www.linkedin.com/in/nuno-alwi/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center transition-colors rounded-full shadow-lg w-12 h-12 sm:w-14 sm:h-14 bg-white/80 dark:bg-steel/40 text-coffee dark:text-cream hover:text-peach"
				>
					<Linkedin size={28} />
				</motion.a>
				<motion.a
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					href="https://www.instagram.com/kazuno_nuno/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center transition-colors rounded-full shadow-lg w-12 h-12 sm:w-14 sm:h-14 bg-white/80 dark:bg-steel/40 text-coffee dark:text-cream hover:text-peach"
				>
					<Instagram size={28} />
				</motion.a>
			</motion.div>

			<motion.button
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4 }}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={copyEmail}
				className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 mx-auto mb-8 sm:mb-12 font-semibold text-sm sm:text-base rounded-full bg-coffee dark:bg-peach text-cream dark:text-coffee"
			>
				<Mail size={20} />
				Copy Email
			</motion.button>

			<motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} onSubmit={handleSubmit} className="space-y-6">
				<input
					type="text"
					placeholder="Your Name"
					className="w-full px-4 sm:px-6 py-3 sm:py-4 shadow-md bg-white/80 dark:bg-steel/40 text-coffee dark:text-cream placeholder:text-steel dark:placeholder:text-sage rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-peach"
				/>
				<input
					type="email"
					placeholder="Your Email"
					className="w-full px-4 sm:px-6 py-3 sm:py-4 shadow-md bg-white/80 dark:bg-steel/40 text-coffee dark:text-cream placeholder:text-steel dark:placeholder:text-sage rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-peach"
				/>
				<textarea
					placeholder="Your Message"
					rows={5}
					className="w-full px-4 sm:px-6 py-3 sm:py-4 shadow-md resize-none bg-white/80 dark:bg-steel/40 text-coffee dark:text-cream placeholder:text-steel dark:placeholder:text-sage rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-peach"
				/>

				<motion.button
					type="submit"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="flex items-center justify-center w-full gap-2 px-5 sm:px-6 py-3 sm:py-4 overflow-hidden font-semibold text-sm sm:text-base rounded-xl sm:rounded-full bg-peach dark:bg-sage text-coffee"
				>
					{sent ? (
						<motion.div initial={{ x: 0 }} animate={{ x: 500 }} transition={{ duration: 1 }}>
							<Send size={20} />
						</motion.div>
					) : (
						<>
							<Send size={20} />
							Send Message
						</>
					)}
				</motion.button>
			</motion.form>
		</div>
	);
}

export default Contact;
