import { Button } from 'components/primitives';
import data from 'data/home';
import Image from 'next/image';
import Link from 'next/link';

import {
	ArrowRight,
	Check,
	CheckCircle,
	Lightning,
	MagnifyingGlass,
} from '@phosphor-icons/react/dist/ssr';

export default function Page() {
	return (
		<>
			{/* Hero Section */}
			<div className='container mx-auto flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 bg-[url("/hero-bg.gif")] bg-center bg-cover bg-no-repeat'>
				<h1 className="gradient-hero-title max-w-[17ch] text-center font-light text-7xl leading-tight">
					<span className="highlighted-title-text">
						{data.mainHeading[0]}
					</span>{' '}
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
				<div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:items-end md:text-left">
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

				<div className="relative">
					<Image
						src="/product.jpeg"
						alt="Our Product - Multimodel Conversational AI"
						className="rounded-3xl"
					/>

					<div className="gradient-border z-20 mt-6 bg-black/10 p-8 backdrop-blur-lg lg:absolute lg:top-20 lg:left-0 lg:translate-x-[-25px]">
						<Lightning size={32} />
						<h3 className="my-4 text-2xl text-gray">
							Preprocessing Techniques
						</h3>
						<p className="mt-2 opacity-80 lg:max-w-[40ch]">
							{data.product.highlight}
						</p>
					</div>

					<div className="gradient-border absolute top-20 right-[-25px] z-20 hidden items-center gap-2 rounded-full! bg-black/10 px-4 py-2 backdrop-blur-lg lg:flex">
						<MagnifyingGlass size={20} weight="duotone" />
						<p className="max-w-[40ch] truncate text-gray">
							Halloween is a time for elaborate costumes,
							collecting sweet treats, bobbing for apples, telling
							ghost stories by the light of a jack-o-lantern and
							watching
						</p>
					</div>

					<div className="gradient-border absolute top-full left-1/2 z-20 hidden translate-x-[-50%] translate-y-[-50%] items-center gap-2 rounded-full! bg-black/10 px-4 py-2 backdrop-blur-lg lg:flex">
						<CheckCircle size={20} weight="duotone" />
						<p className="text-gray">
							A robust framework handles the functionalities
						</p>
					</div>

					<div className="hover-reveal gradient-border absolute right-0 bottom-0 z-20 hidden aspect-square translate-x-[-25px] translate-y-[25px] flex-col justify-center gap-4 bg-black/10 px-4 py-2 backdrop-blur-lg lg:flex">
						<Image
							src="/graph.png"
							alt="Model Architecture"
							className="w-full"
						/>
						<p className="max-w-[12ch] text-2xl text-gray">
							Model Architecture
						</p>
					</div>

					<Image
						src="/plot-dark.png"
						alt="Our Product - Multimodel Conversational AI"
						className="revealable absolute top-0 left-0 z-10 hidden h-full w-full rounded-3xl"
					/>
				</div>
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
