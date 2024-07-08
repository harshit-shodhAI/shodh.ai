import { Button } from 'components/primitives';
import data from 'data/home.json';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight, Check } from '@phosphor-icons/react/dist/ssr';

export default function Page() {
	return (
		<>
			{/* Hero Section */}
			<div className='container mx-auto flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 bg-[url("/hero-bg.gif")] bg-center bg-cover bg-no-repeat'>
				<h1 className="gradient-hero-title max-w-[17ch] text-center font-light text-7xl leading-tight">
					<span className="highlighted-title-text">{data.mainHeading[0]}</span>{' '}
					{data.mainHeading[1]}
				</h1>
				<p className="mb-6 max-w-[54ch] text-center opacity-80">
					{data.mainSubtext}
				</p>

				<Link href={data.button.path}>
					<Button icon={<ArrowRight size={16} weight="bold" />}>
						{data.button.name}
					</Button>
				</Link>
			</div>

			{/* Product Section */}
			<div className="container flex flex-col gap-16 py-28">
				<div className="flex items-end justify-between">
					<div>
						<p className="mb-6 font-medium text-sm uppercase tracking-widest">
							{data.product.heading}
						</p>
						<h2 className="max-w-[20ch] font-light text-7xl text-gray">
							{data.product.name}
						</h2>
					</div>

					<p className="max-w-[40ch] opacity-60">
						{data.product.breif}
					</p>
				</div>

				<Image
					src="/product.jpeg"
					alt="Our Product - Multimodel Conversational AI"
					width={3000}
					height={1000}
					className="rounded-3xl"
				/>
			</div>

			{/* CTA Section */}
			<div className="container pb-28">
				<div className="gradient-border p-16">
					<div className="mb-8 flex gap-8">
						{data.card.feature_list.map((feature) => (
							<>
								<Button
									key={feature}
									iconPosition="before"
									icon={<Check size={16} weight="bold" />}
									rounded
								>
									{feature}
								</Button>
							</>
						))}
					</div>

					<p className="mb-16 font-light text-5xl text-gray leading-tight">
						{data.card.heading}
					</p>

					<Link href={data.card.button.path}>
						<Button icon={<ArrowRight size={16} weight="bold" />}>
							{data.card.button.name}
						</Button>
					</Link>
				</div>
			</div>
		</>
	);
}
