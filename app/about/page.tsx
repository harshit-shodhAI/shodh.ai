import EmployeeCard from 'components/about/EmployeeCard';
import { Button } from 'components/primitives';
import data from 'lib/data/about.json';
import Image from 'next/image';
import Link from 'next/link';

import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr';

export default function Page() {
	return (
		<>
			{/* Hero Section */}
			<div className='container mx-auto flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 bg-[url("/hero-bg.gif")] bg-center bg-cover bg-no-repeat'>
				<p className="font-medium text-sm uppercase tracking-widest">
					{data['top-heading']}
				</p>
				<h1 className="gradient-hero-title max-w-[24ch] text-center font-light text-7xl leading-tight">
					{data.mainHeading}
				</h1>
				<p className="mb-6 max-w-[54ch] text-center opacity-80">
					{data.mainSubtext}
				</p>
			</div>

			{/* Mission and Expertise Section */}
			<div className="container flex flex-col gap-16 py-28">
				<h2 className="font-light text-7xl text-gray">
					{data.Heading2}
				</h2>

				<div className="grid grid-cols-2">
					<div className="z-10">
						<div className="gradient-border translate-x-16 translate-y-64 bg-white/[0.06] p-8 backdrop-blur-2xl">
							<h3 className="mb-6 font-light text-4xl text-gray">
								{data.content[0].head}
							</h3>
							<p className="text-gray/80">
								{data.content[0].caption}
							</p>
						</div>
					</div>

					<div className="relative">
						<Image
							src={data.content[0].image}
							alt={data.content[0].head}
							width={100}
							height={100}
							className="aspect-square w-full"
						/>
					</div>
				</div>

				<div className="grid grid-cols-2">
					<div className="relative">
						<Image
							src={data.content[1].image}
							alt={data.content[1].head}
							width={100}
							height={100}
							className="aspect-square w-full"
						/>
					</div>

					<div>
						<div className="gradient-border translate-x-[-64px] translate-y-64 bg-white/[0.06] p-8 backdrop-blur-2xl">
							<h3 className="mb-6 font-light text-4xl text-gray">
								{data.content[1].head}
							</h3>
							<p className="text-gray/80">
								{data.content[1].caption}
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Leadership Section */}
			<div className="container flex flex-col gap-32">
				<h2 className="font-light text-7xl text-gray">
					{data.Heading3}
				</h2>

				<div className="gradient-border grid grid-cols-2">
					<div className="flex flex-col gap-4 p-12">
						<div className="flex items-center justify-between">
							<h4 className="text-3xl">Dr. Arastu Sharma</h4>

							<Link href="/">
								<LinkedinLogo size={24} />
							</Link>
						</div>

						<span className="mt-[-10px] self-start rounded-md bg-blue/20 p-1.5 font-medium text-blue tracking-widest">
							CEO
						</span>

						<p className="opacity-70">
							Dr. Arastu Sharma holds a PhD in Machine Learning
							from the University of Cambridge. During his tenure
							at Microsoft, he led a significant project that
							successfully reduced Azure data warehouse costs by
							over $100 million per month. Additionally, he
							developed a cutting-edge computer vision tool that
							was subsequently acquired by GSK.
						</p>
					</div>

					<Image
						src="/arastu.svg"
						alt="Dr. Arastu Sharma"
						height={1024}
						width={1024}
						className="scale-105"
					/>
				</div>

				<div className="gradient-border grid grid-cols-2">
					<Image
						src="/neeta.svg"
						alt="Dr. Neeta Trivedi"
						height={1024}
						width={1024}
						className="scale-105"
					/>

					<div className="flex flex-col gap-4 p-12">
						<div className="flex items-center justify-between">
							<h4 className="text-3xl">Dr. Neeta Trivedi</h4>

							<Link href="/">
								<LinkedinLogo size={24} />
							</Link>
						</div>

						<span className="mt-[-10px] self-start rounded-md bg-blue/20 p-1.5 font-medium text-blue tracking-widest">
							CTO
						</span>

						<p className="opacity-70">
							Dr. Neeta Trivedi earned her PhD in Sensor Networks
							from the Indian Institute of Science (IISc). She has
							over 20 years of experience at DRDO, where she led
							AI projects for fighter jets and drones. She is also
							the founder of InferQ, a company specializing in
							defense AI projects.
						</p>
					</div>
				</div>

				<div className="gradient-border grid grid-cols-2">
					<div className="flex flex-col gap-4 p-12">
						<div className="flex items-center justify-between">
							<h4 className="text-3xl">Marc Sommer</h4>

							<Link href="/">
								<LinkedinLogo size={24} />
							</Link>
						</div>

						<span className="mt-[-10px] self-start rounded-md bg-blue/20 p-1.5 font-medium text-blue tracking-widest">
							CPO
						</span>

						<p className="opacity-70">
							Marc Sommer holds an MSc in Information Systems from
							the Technical University of Munich (TUM). He has
							experience consulting financial companies in Quantum
							Computing at Sopra Steria. Additionally, he is the
							founder of Machbarschaft, an award-winning ML-driven
							NGO.
						</p>
					</div>

					<Image
						src="/marc.svg"
						alt="Marc Sommer"
						height={1024}
						width={1024}
						className="scale-105"
					/>
				</div>
			</div>

			{/* Meet the Team Section */}
			<div className="container flex flex-col gap-16 py-28">
				<h2 className="font-light text-7xl text-gray">
					{data.Heading4}
				</h2>

				<div className="flex gap-8">
					<Button
						rounded
						twStyles="!bg-white/25 uppercase text-white tracking-widest text-sm"
					>
						View All
					</Button>

					<Button
						rounded
						twStyles="bg-white/25 uppercase text-white tracking-widest text-sm"
					>
						Product
					</Button>

					<Button
						rounded
						twStyles="bg-white/25 uppercase text-white tracking-widest text-sm"
					>
						Research
					</Button>

					<Button
						rounded
						twStyles="bg-white/25 uppercase text-white tracking-widest text-sm"
					>
						Application
					</Button>
				</div>

				<div className="grid grid-cols-3 gap-8">
					<EmployeeCard
						image="/marc.svg"
						name="Marc Sommer"
						info="Never give up until it's done"
						designation="ML Intern"
						linkedin="/"
					/>

					<EmployeeCard
						image="/marc.svg"
						name="Marc Sommer"
						info="Never give up until it's done"
						designation="ML Intern"
						linkedin="/"
					/>

					<EmployeeCard
						image="/marc.svg"
						name="Marc Sommer"
						info="Never give up until it's done"
						designation="ML Intern"
						linkedin="/"
					/>

					<EmployeeCard
						image="/marc.svg"
						name="Marc Sommer"
						info="Never give up until it's done"
						designation="ML Intern"
						linkedin="/"
					/>

					<EmployeeCard
						image="/marc.svg"
						name="Marc Sommer"
						info="Never give up until it's done"
						designation="ML Intern"
						linkedin="/"
					/>

					<EmployeeCard
						image="/marc.svg"
						name="Marc Sommer"
						info="Never give up until it's done"
						designation="ML Intern"
						linkedin="/"
					/>
				</div>
			</div>
		</>
	);
}
