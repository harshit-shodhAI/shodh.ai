import { Button } from 'components/primitives';

import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

export default function Page() {
	return (
		<>
			<div className='container mx-auto flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 bg-[url("/hero-bg.gif")] bg-center bg-cover bg-no-repeat'>
				<h1 className="max-w-[17ch] text-center text-7xl">
					Advancing AI for Real-World Problems
				</h1>
				<p className="max-w-[54ch] text-center">
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
