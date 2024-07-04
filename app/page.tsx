import { Button } from 'components/primitives';
import Image from 'next/image';

import { ArrowRight, Check } from '@phosphor-icons/react/dist/ssr';

export default function Page() {
	return (
		<>
			{/* Hero Section */}
			<div className='container mx-auto flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 bg-[url("/hero-bg.gif")] bg-center bg-cover bg-no-repeat'>
				<h1 className="gradient-hero-title max-w-[17ch] text-center font-light text-7xl leading-tight">
					<span className="highlighted-title-text">Advancing AI</span>{' '}
					for Real-World Problems
				</h1>
				<p className="mb-6 max-w-[54ch] text-center opacity-80">
					India's first Deep Learning Lab for AI Security! Build a
					safer future with us. Develop AI solutions in Medicine,
					Governance & more!
				</p>

				<Button icon={<ArrowRight size={16} weight="bold" />}>
					Explore Models
				</Button>
			</div>

			{/* Product Section */}
			<div className="container flex flex-col gap-16 py-28">
				<div className="flex items-end justify-between">
					<div>
						<p className="mb-6 font-medium text-sm uppercase tracking-widest">
							Our Product
						</p>
						<h2 className="max-w-[20ch] font-light text-7xl text-gray">
							Multimodal Conversational AI
						</h2>
					</div>

					<p className="max-w-[40ch] opacity-60">
						This project aims to push the boundaries of
						conversational AI by incorporating diverse data sources
						and multimodal inputs, ultimately leading.
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
						<Button
							iconPosition="before"
							icon={<Check size={16} weight="bold" />}
							rounded
						>
							Next-Gen
						</Button>

						<Button
							iconPosition="before"
							icon={<Check size={16} weight="bold" />}
							rounded
						>
							Interdisciplinary
						</Button>
					</div>

					<p className="mb-16 font-light text-7xl text-gray leading-tight">
						Explore our models and see what sets us apart
					</p>

					<Button icon={<ArrowRight size={16} weight="bold" />}>
						Explore Models
					</Button>
				</div>
			</div>
		</>
	);
}
