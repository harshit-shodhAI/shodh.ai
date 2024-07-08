import Link from 'next/link';

import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';

import type { FC, ReactNode } from 'react';

type FeatureCardProps = {
	icon: ReactNode;
	title: string;
	description: string;
	link: string;
};

const FeatureCard: FC<FeatureCardProps> = ({
	icon,
	title,
	description,
	link,
}) => {
	return (
		<>
			<div
				className="gradient-border relative flex min-h-[512px] w-full items-end overflow-hidden"
				style={{
					background:
						'radial-gradient(at top left, rgba(3, 96, 231, 0.3) 0%, transparent 100%);',
				}}
			>
				<div className="z-10 w-full p-8">
					<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue/20">
						{icon}
					</div>
					<div className="mt-8 font-medium text-2xl text-gray">
						{title}
					</div>
					<div className="pt-4 text-white/40">{description}</div>
					<Link
						href={link}
						className="flex justify-between pt-8 hover:text-blue"
					>
						<span className="font-medium uppercase tracking-widest">
							Read More
						</span>
						<ArrowUpRight size={16} weight="bold" />
					</Link>
				</div>
			</div>
		</>
	);
};

export default FeatureCard;
