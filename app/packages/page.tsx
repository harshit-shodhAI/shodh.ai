'use client';

import FeatureCard from 'components/models/FeatureCard';
import { Button } from 'components/primitives';
import data from 'data/packages.json';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

export default function Page() {
	const [activeBenefit, setActiveBenefit] = useState<number>(0);

	return (
		<>
			{/* Hero Section */}
			<div className='container mx-auto flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 bg-[url("/hero-bg.gif")] bg-center bg-cover bg-no-repeat'>
				<h1 className="gradient-hero-title max-w-[17ch] text-center font-light text-7xl leading-tight">
					<span className="highlighted-title-text">Shodh.ai</span>{' '}
					Models
				</h1>
				<p className="mb-6 max-w-[54ch] text-center opacity-80">
					{data.subtext}
				</p>

				<Link href={data.button.link}>
					<Button icon={<ArrowRight size={16} weight="bold" />}>
						{data.button.text}
					</Button>
				</Link>
			</div>

			{/* Features Section */}
			<div className="container flex justify-between gap-4">
				<FeatureCard
					icon={<ArrowRight size={16} weight="bold" />}
					title="Easily Accessible"
					description="Test"
					link=""
				/>
				<FeatureCard
					icon={<ArrowRight size={16} weight="bold" />}
					title="Easily Accessible"
					description="Test"
					link=""
				/>
				<FeatureCard
					icon={<ArrowRight size={16} weight="bold" />}
					title="Easily Accessible"
					description="Test"
					link=""
				/>
			</div>

			{/* Best Models Section */}
			<div className="container flex flex-col gap-16 py-28">
				<div className="flex items-end justify-between">
					<div>
						<p className="mb-6 font-medium text-sm uppercase tracking-widest">
							{data.Heading2}
						</p>
						<h2 className="max-w-[20ch] font-light text-7xl text-gray">
							{data.subtext2}
						</h2>
					</div>

					<p className="max-w-[40ch] opacity-60">{data.content}</p>
				</div>

				<div className="grid grid-cols-5 gap-8">
					{data.models.map((model, i) => (
						<div
							// biome-ignore lint/nursery/useSortedClasses: Formatter breaking due to ternary operator.
							className={`relative gradient-border p-8 ${i % 3 === 0 ? 'col-span-3' : 'col-span-2'}`}
							key={model.model_id}
						>
							<h3 className="z-10 mb-8 text-2xl">{model.name}</h3>
							<p className="z-10 w-1/2 opacity-60">
								{model.highlight}
							</p>

							<Image
								src={model.image}
								alt={model.name}
								height={500}
								width={500}
								className="absolute top-0 right-0 h-full w-1/2"
							/>
						</div>
					))}
				</div>
			</div>

			{/* What Makes Us Different Section */}
			<div className="container flex w-full gap-48 pb-28">
				<div className="flex flex-col justify-center">
					<div className="text-sm">{data.upperHeading3}</div>
					<div className="mb-8 font-extralight text-7xl">
						{data.Heading3}
					</div>
					<div>{data.subtext3}</div>
				</div>
				<div className="flex flex-col items-center gap-8">
					{data.diffrences.map((diffrence) => (
						<FeatureCard
							icon={<ArrowRight size={16} weight="bold" />}
							key={diffrence.heading}
							title={diffrence.heading}
							description={diffrence.subtext}
							link=""
							minimal
						/>
					))}
				</div>
			</div>

			{/* Why Choose Us Section */}
			<div className="container">
				<div className="grid grid-cols-2">
					<div className="gradient-border">left</div>
					<div className="ml-10 flex flex-col">
						<p className="mb-6 font-medium text-sm uppercase tracking-widest">
							{data.upperHeading4}
						</p>
						<h2 className="mb-16 max-w-[20ch] font-light text-7xl text-gray">
							{data.Heading4}
						</h2>

						{data.benefits.map((benefit, i) => (
							<button
								type="button"
								key={benefit.heading}
								onClick={() => setActiveBenefit(i)}
								className="flex flex-col gap-4 py-4"
							>
								<h4 className="text-left text-2xl">
									{benefit.heading}
								</h4>

								{activeBenefit === i && (
									<p className="text-left opacity-60">
										{benefit.text}
									</p>
								)}

								<div
									className={
										activeBenefit === i
											? 'active-divider-gradient'
											: 'divider-gradient'
									}
								/>
							</button>
						))}

						<Link href={data.button2.link} className="my-12">
							<Button
								icon={<ArrowRight size={16} weight="bold" />}
							>
								{data.button2.text}
							</Button>
						</Link>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="container py-28">
				<div className="gradient-border p-16">
					<p className="mb-4 font-light text-7xl text-gray leading-tight">
						{data.Heading5}
					</p>
					<p className="mb-16 opacity-80">{data.subtext5}</p>

					<Link href={data.button3.link}>
						<Button icon={<ArrowRight size={16} weight="bold" />}>
							{data.button3.text}
						</Button>
					</Link>
				</div>
			</div>
		</>
	);
}
