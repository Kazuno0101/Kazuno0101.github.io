import { Github, Linkedin, Instagram } from 'lucide-react';

function Footer() {
	return (
		<footer className="py-8 transition-colors duration-500 border-t bg-cream dark:bg-ocean border-coffee/5 dark:border-cream/5">
			<div className="max-w-6xl px-6 mx-auto text-center">
				<div className="flex justify-center gap-6 mb-4">
					<a
						href="https://github.com/Kazuno0101"
						target="_blank"
						rel="noopener noreferrer"
						className="transition-colors text-steel dark:text-sage hover:text-coffee dark:hover:text-peach"
					>
						<Github size={24} />
					</a>
					<a
						href="https://www.linkedin.com/in/nuno-alwi/"
						target="_blank"
						rel="noopener noreferrer"
						className="transition-colors text-steel dark:text-sage hover:text-coffee dark:hover:text-peach"
					>
						<Linkedin size={24} />
					</a>
					<a
						href="https://www.instagram.com/kazuno_nuno/"
						target="_blank"
						rel="noopener noreferrer"
						className="transition-colors text-steel dark:text-sage hover:text-coffee dark:hover:text-peach"
					>
						<Instagram size={24} />
					</a>
				</div>
				<p className="text-sm text-steel dark:text-sage">Made with love. 2026</p>
			</div>
		</footer>
	);
}

export default Footer;
