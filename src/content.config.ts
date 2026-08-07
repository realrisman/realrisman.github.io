import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			seoTitle: z.string().optional(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			tags: z.array(z.string()).default([]),
			coverImage: image()
				.refine((img) => img.width >= 960, {
					message: 'Cover image must be at least 960 pixels wide!'
				})
				.optional()
		})
});

export const collections = { blog };
