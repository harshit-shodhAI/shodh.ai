import data from 'data/footer.json';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<>
			<div className="container mb-12 flex items-start justify-end gap-32 w-screen overflow-x-hidden">
				<Image
					src="/logo.svg"
					alt="Shodh.AI Logo"
					width={120}
					height={50}
					className="mr-auto"
				/>

				{data.links.map((category,key) => (
					<div key={key}>
						<h3 className="mb-12 font-bold uppercase tracking-widest">
							{category.heading}
						</h3>

						<ul className="flex flex-col gap-6">
							{category.subLinks.map((link, key) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<li key={key}>
									<Link href={link.path}>{link.name}</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<div className="h-[1px] bg-white/20" />

			<div className="container flex justify-between py-6 text-sm text-white/60">
				<p>{data.copyright.text}</p>

				<div className="flex gap-6">
					<Link href="/privacy-policy">{data.privacy.text}</Link>
					<Link href="/terms">{data.terms.text}</Link>
				</div>
			</div>
		</>
	);
};

export default Footer;
