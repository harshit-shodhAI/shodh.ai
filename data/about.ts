import AchyutVerma from 'public/achyut-verma.jpeg';
import AniveshWale from 'public/anivesh-wale.jpeg';
import BentoBanner from 'public/bento-banner.svg';
import Cambridge from 'public/cambridge.svg';
import Clients from 'public/clients.svg';
import Drdo from 'public/drdo.svg';
import Gsk from 'public/gsk.svg';
import HarshitSandilya from 'public/harshit-sandilya.jpeg';
import Iisc from 'public/iisc.svg';
import Inferigence from 'public/inferigence.svg';
import JatinThakur from 'public/jatin-thakur.jpeg';
import JayShukla from 'public/jay-shukla.jpeg';
import Microsoft from 'public/microsoft.svg';
import OjusavAgarwal from 'public/ojusav-agarwal.jpeg';
import OurMission from 'public/our-mission.svg';
import ProjectsCompleted from 'public/projects-completed.svg';
import RachitJain from 'public/rachit-jain.jpg';
import SatisfactionRate from 'public/satisfaction-rate.svg';
import SopraSteria from 'public/sopra-steria.svg';
import Spread from 'public/spread.svg';
import Tum from 'public/tum.svg';
import WhatWeDo from 'public/what-we-do.svg';

const data = {
	'top-heading': 'About Us',
	mainHeading: 'Get to know the brains behind Shodh.AI',
	mainSubtext:
		'Founded in 2024, our journey began with a vision to simplify and accelerate AI adoption for businesses across diverse industries. Our founders, inspired by the transformative potential of small language models (SLMs), set out to create a platform that would bridge the gap between cutting-edge AI research and practical applications.',
	images: [
		{
			src: ProjectsCompleted,
			alt: '',
			caption: '30+ Projects Completed',
		},
		{
			src: Clients,
			alt: '',
			caption: '100+ Clients',
		},
		{
			src: SatisfactionRate,
			alt: '',
			caption: '98% Satisfaction Rate',
		},
		{
			src: BentoBanner,
			alt: '',
		},
	],
	Heading2: 'Mission and Expertise',
	content: [
		{
			image: OurMission,
			head: 'Our Mission',
			caption:
				'At Shodh.ai, we believe that SLMs will revolutionize how enterprises build AI applications. Our mission is to provide a robust, user-friendly platform that addresses the common challenges faced by businesses in adopting AI.',
		},
		{
			image: WhatWeDo,
			head: 'What we do',
			caption:
				'We offers the first app store for AI models tailored for enterprises. Our platform is designed to cater to specific needs, with a strong focus on LLMs but extending beyond them. We provide tools & resources to work efficiently.',
		},
	],
	Heading3: 'Leadership',
	leaders: [
		{
			name: 'Dr. Arastu Sharma',
			designation: 'CEO',
			linkedin: '#',
			info: 'Dr. Arastu Sharma holds a PhD in Machine Learning from the University of Cambridge. During his tenure at Microsoft, he led a significant project that successfully reduced Azure data warehouse costs by over $100 million per month. Additionally, he developed a cutting-edge computer vision tool that was subsequently acquired by GSK.',
			associations: [
				{
					image: Cambridge,
					alt: 'University of Cambridge',
				},
				{
					image: Microsoft,
					alt: 'Microsoft',
				},
				{
					image: Gsk,
					alt: 'GSK',
				},
			],
		},
		{
			name: 'Dr. Neeta Trivedi',
			designation: 'CTO',
			linkedin: '#',
			info: 'Dr. Neeta Trivedi earned her PhD in Sensor Networks from the Indian Institute of Science (IISc). She has over 20 years of experience at DRDO, where she led AI projects for fighter jets and drones. She is also the founder of InferQ, a company specializing in defense AI projects.',
			associations: [
				{
					image: Iisc,
					alt: 'Indian Institute of Science - IISC',
				},
				{
					image: Inferigence,
					alt: 'Inferigence Quotient',
				},
				{
					image: Drdo,
					alt: 'Defense Research and Development Organization - DRDO',
				},
			],
		},
		{
			name: 'Marc Sommer',
			designation: 'CPO',
			linkedin: '#',
			info: 'Marc Sommer holds an MSc in Information Systems from the Technical University of Munich (TUM). He has experience consulting financial companies in Quantum Computing at Sopra Steria. Additionally, he is the founder of Machbarschaft, an award-winning ML-driven NGO.',
			associations: [
				{
					image: Tum,
					alt: 'TIM',
				},
				{
					image: SopraSteria,
					alt: 'Sopra Steria',
				},
				{
					image: Spread,
					alt: 'Spread',
				},
			],
		},
	],
	Heading4: 'Meet the team',
	memebers: [
		{
			id: 1,
			name: 'Harshit Sandilya',
			designation: '',
			linkedin: 'https://www.linkedin.com/in/harshit-sandilya',
			info: 'Crafting cutting-edge solutions for use cases',
			team: 'Research',
			image: HarshitSandilya,
		},
		{
			id: 2,
			name: 'Jatin Thakur',
			designation: '',
			linkedin: 'https://www.linkedin.com/in/jatin-thakur-4ab38322a/',
			info: 'Designing robust frameworks for high-impact implementations',
			team: 'Research',
			image: JatinThakur,
		},
		{
			id: 3,
			name: 'Jay Shukla',
			designation: '',
			linkedin: 'https://www.linkedin.com/in/jay-shukla-504800234/',
			info: 'Retrieving and Cleaning Open-source Data',
			team: 'Application',
			image: JayShukla,
		},
		{
			id: 4,
			name: 'Ojusav Agarwal',
			designation: '',
			linkedin: 'https://www.linkedin.com/in/ojusav-agarwal-678b2321a/',
			info: 'Developing Advanced Pipelines for Data Processing and Information Retrieval',
			team: 'Application',
			image: OjusavAgarwal,
		},
		{
			id: 5,
			name: 'Anivesh Wale',
			designation: 'Product Designer',
			linkedin: 'https://www.linkedin.com/in/wale-anivesh-20a725219/',
			info: 'Creating a minimalistic and aesthetically pleasing user experience',
			team: 'Application',
			image: AniveshWale,
		},
		{
			id: 6,
			name: 'Achyut Verma',
			designation: '',
			linkedin: 'https://www.linkedin.com/in/achyut-verma-88b13a273/',
			info: 'Generating LLM Solutions',
			team: 'Application',
			image: AchyutVerma,
		},
		{
			id: 11,
			name: 'Rachit Jain',
			designation: '',
			linkedin: 'https://www.linkedin.com/in/rachit-jain-0a8570223',
			info: 'Generating Advanced Data Processing Pipelines',
			team: 'Application',
			image: RachitJain,
		},
	],
};

export default data;
