import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';

import type { FC, ReactNode } from 'react';

type FeatureCardProps = {
	icon: ReactNode;
	title: string;
	description: string;
};

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description }) => {
	return (
		<>
			<div className="gradient-border w-full bg-gradient-to-r bg-opacity-20 from-blue to-black">
				<div className="float-right">Test</div>
				<div className="mt-32 p-8">
					<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue/20">
						{icon}
					</div>
					<div className="pt-8 font-medium text-2xl">{title}</div>
					<div className="pt-4 text-gray">{description}</div>
					<div className="flex justify-between pt-8">
						<div className="text-blue">READ MORE</div>
						<ArrowUpRight size={16} weight="bold" color="blue" />
					</div>
				</div>
			</div>
		</>
	);
};

export default FeatureCard;
