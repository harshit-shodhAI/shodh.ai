import { Button } from 'components/primitives';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

const Header = () => {
	return (
		<>
			<div className="container flex h-16 items-center justify-between">
				<Image
					src="/logo.svg"
					alt="Shodh.AI Logo"
					width={120}
					height={50}
				/>

				<nav className="flex gap-12">
					<Link href="/">Home</Link>
					<Link href="/products">Products</Link>
					<Link href="/about">About</Link>
					<Link href="/process">Process</Link>
					<Link href="/faq">FAQ</Link>
				</nav>

				<Button
					icon={<ArrowRight size={16} weight="bold" />}
					twStyles="scale-90"
				>
					Explore Models
				</Button>
			</div>

			<div
				className="h-line w-full"
				style={{
					background:
						'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 49.5%, rgba(255, 255, 255, 0) 100%)',
				}}
			/>
		</>
	);
};

export default Header;
