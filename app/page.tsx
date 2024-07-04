import { Button } from 'components/primitives';

import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

export default function Page() {
	return (
		<>
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
		</>
	);
}
