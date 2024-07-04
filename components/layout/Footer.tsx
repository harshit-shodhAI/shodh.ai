import { footerLinkCategories, footerLinks } from 'lib/data';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<>
			<div className="container mb-12 flex items-start justify-end gap-32">
				<Image
					src="/logo.svg"
					alt="Shodh.AI Logo"
					width={120}
					height={50}
					className="mr-auto"
				/>

				{footerLinkCategories.map((category) => (
					<div key={category.category}>
						<h3 className="mb-12 font-bold uppercase tracking-widest">
							{category.title}
						</h3>

						<ul className="flex flex-col gap-6">
							{footerLinks[category.category].map((link, key) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<li key={key}>
									<Link href={link.to}>{link.title}</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<div className="h-[1px] bg-white/20" />

			<div className="container flex justify-between py-6 text-sm text-white/60">
				<p>&copy; Copyright {new Date().getFullYear()}. Shodh.AI</p>

				<div className="flex gap-6">
					<Link href="/privacy-policy">Privacy Policy</Link>
					<Link href="/terms">Terms & Conditions</Link>
				</div>
			</div>
		</>
	);
};

export default Footer;
