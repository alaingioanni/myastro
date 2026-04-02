import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['technology', 'lifestyle', 'tutorials']),
    pubDate: z.coerce.date(),
    author: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};