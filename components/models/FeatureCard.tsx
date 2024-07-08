import Link from 'next/link';

import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';

import type { FC, ReactNode } from 'react';

type FeatureCardProps = {
	icon: ReactNode;
	title: string;
	description: string;
	link: string;
	minimal?: boolean;
};

const FeatureCard: FC<FeatureCardProps> = ({
	icon,
	title,
	description,
	link,
	minimal = false,
}) => {
	return (
		<>
			<div
				className={`gradient-border relative flex ${!minimal ? 'min-h-[512px]' : 'min-h-[361px]'} w-full items-end overflow-hidden`}
				style={{
					background:
						'radial-gradient(at top left, rgba(3, 96, 231, 0.3) 0%, transparent 100%);',
				}}
			>
				<div className="z-10 w-full p-8">
					<div
						className={`flex ${!minimal ? 'mb-8 h-12 w-12' : 'mb-4 h-16 w-16'} items-center justify-center rounded-lg ${!minimal && 'bg-blue/20'}`}
					>
						{icon}
					</div>
					<div className="font-medium text-2xl text-gray">
						{title}
					</div>
					<div className="pt-4 text-white/40">{description}</div>

					{!minimal && (
						<Link
							href={link}
							className="flex justify-between pt-8 hover:text-blue"
						>
							<span className="font-medium uppercase tracking-widest">
								Read More
							</span>
							<ArrowUpRight size={16} weight="bold" />
						</Link>
					)}
				</div>
			</div>
		</>
	);
};

export default FeatureCard;
