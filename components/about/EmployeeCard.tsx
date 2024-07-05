import Image from 'next/image';
import Link from 'next/link';

import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr';

import type { FC } from 'react';

type EmployeeCardProps = {
	image: string;
	name: string;
	info: string;
	designation: string;
	linkedin: string;
};

const EmployeeCard: FC<EmployeeCardProps> = ({
	image,
	name,
	info,
	designation,
	linkedin,
}) => {
	return (
		<div className="gradient-border flex flex-col gap-2 p-6">
			<Image src={image} alt={name} height={512} width={512} />

			<p className="my-1">"{info}"</p>

			<div className="flex flex-wrap">
				<h4 className="font-medium text-2xl text-white/90">{name}</h4>
				<Link href={linkedin} className="ml-auto">
					<LinkedinLogo size={24} />
				</Link>
				<p className="w-full text-white/60">{designation}</p>
			</div>
		</div>
	);
};

export default EmployeeCard;
