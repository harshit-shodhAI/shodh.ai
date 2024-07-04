type LinkCategory = Record<string, string>[];
type Link = Record<string, Record<string, string>[]>;

export const footerLinkCategories: LinkCategory = [
	{
		title: 'Products',
		category: 'products',
	},
	{
		title: 'Useful Links',
		category: 'usefulLinks',
	},
	{
		title: 'Contacts',
		category: 'contacts',
	},
];

export const footerLinks: Link = {
	products: [
		{
			title: 'Home',
			to: '/home',
		},
		{
			title: 'Products',
			to: '/products',
		},
		{
			title: 'About',
			to: '/about',
		},
		{
			title: 'Process',
			to: '/process',
		},
	],

	usefulLinks: [
		{
			title: 'FAQ',
			to: '/faq',
		},
		{
			title: 'Online Support',
			to: '/online-support',
		},
		{
			title: 'Partner with Us',
			to: '/partner',
		},
	],

	contacts: [
		{
			title: 'Get in touch',
			to: '/contact',
		},
		{
			title: 'Bangalore, India',
			to: '#',
		},
		{
			title: 'arastu@shodh.ai',
			to: 'mailto:arastu@shodh.ai',
		},
	],
};

export const sampleJobs = [
	{
		title: 'Machine Learning Researcher/scientist',
		description:
			'We are looking for a mid-level Machine Learning Researcher/Scientist to join our team.',
		slug: 'ml-app',
		tags: ['Remote', 'Full Time'],
	},
	{
		title: 'Research Scientist (NLP)',
		description:
			'We are looking for an entry-level Research Scientist (NLP) to join our team.',
		slug: 'nlp',
		tags: ['Remote', 'Full Time'],
	},
	{
		title: 'Software Engineer/Developer',
		description:
			'We are looking for a senior-level Software Engineer/Developer to join our team.',
		slug: 'software-engineer',
		tags: ['Remote', 'Full Time'],
	},
	{
		title: 'Machine Learning Research Intern',
		description:
			'We are looking for an entry-level Machine Learning Research Intern to join our team.',
		slug: 'ml-intern',
		tags: ['Remote', 'Full Time'],
	},
];
