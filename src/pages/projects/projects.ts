import { getRepositoryDetails } from '../../utils';

export interface Project {
	name: string;
	demoLink: string;
	tags?: string[];
	description?: string;
	postLink?: string;
	demoLinkRel?: string;
	contributions?: string[];
	pullRequests?: string[];
	[key: string]: any;
}

export const projects: Project[] = [
	{
		name: 'PromptMeAI',
		demoLink: 'https://github.com/brown2020/promptmeai',
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
		pullRequests: [
			'https://github.com/brown2020/promptmeai/pull/14',
			'https://github.com/brown2020/promptmeai/pull/9',
			'https://github.com/brown2020/promptmeai/pull/4',
			'https://github.com/brown2020/promptmeai/pull/3',
			'https://github.com/brown2020/promptmeai/pull/2'
		]
	}
];
