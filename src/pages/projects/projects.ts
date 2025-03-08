import { getRepositoryDetails } from '../../utils';

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
	[key: string]: any;
}

export const projects: Project[] = [
	{
		name: 'PromptMeAI',
		demoLink: 'https://github.com/brown2020/promptmeai',
		image: '/projects/promptmeai/ss-1.png',
		description:
			'An AI-powered platform that allows users to interact with multiple AI models simultaneously. Made significant contributions including AuthJS integration, chat functionality, dark mode, API keys management, and UI/UX improvements.',
		tags: ['TypeScript', 'Next.js', 'Firebase', 'AuthJS', 'Tailwind CSS'],
		contributions: [
			'Implemented AuthJS with Firebase authentication',
			'Added chat functionality with dark mode',
			'Created account configuration and API keys management',
			'Improved UI/UX and mobile responsiveness',
			'Redesigned chat interface'
		],
		pullRequests: 'https://github.com/brown2020/promptmeai/pulls?q=is%3Apr+is%3Aclosed+author%3Arealrisman'
	}
];
