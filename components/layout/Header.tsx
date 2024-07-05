import { Button } from 'components/primitives';
import data from 'lib/data/nav.json';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

const Header = () => {
	return (
		<>
			<div className="container flex h-16 items-center justify-center">
				<Image
					src="/logo.svg"
					alt="Shodh.AI Logo"
					width={120}
					height={50}
					className="mr-auto"
				/>

				<nav className="mx-auto flex gap-12">
					{data.navItems.map((item) => (
						<Link href={item.path} key={item.name}>
							{item.name}
						</Link>
					))}
				</nav>

				<Link href={data.button.path}>
					<Button
						icon={<ArrowRight size={16} weight="bold" />}
						twStyles="scale-90 ml-auto"
					>
						{data.button.name}
					</Button>
				</Link>
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
