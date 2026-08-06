export interface Project {
	name: string;
	demoLink: string;
	image?: string;
	tags?: string[];
	description?: string;
	postLink?: string;
	demoLinkRel?: string;
	contributions?: string[];
	pullRequests?: string;
	[key: string]: unknown;
}

export const projects: Project[] = [
	{
		name: 'PromptMeAI',
		demoLink: 'https://github.com/brown2020/promptmeai',
		image: '/projects/promptmeai/ss-1.png',
		description:
			'An AI platform for working with multiple models in one place. I contributed authentication, chat workflows, API-key management, responsive behavior, dark mode, and a clearer product experience.',
		tags: ['TypeScript', 'Next.js', 'Firebase', 'Auth.js', 'Tailwind CSS'],
		contributions: [
			'Integrated Auth.js with Firebase authentication',
			'Built chat flows and dark mode support',
			'Created account and API-key management',
			'Reworked the interface for clarity and responsive use',
			'Redesigned the core chat experience'
		],
		pullRequests: 'https://github.com/brown2020/promptmeai/pulls?q=is%3Apr+is%3Aclosed+author%3Arealrisman'
	}
];
