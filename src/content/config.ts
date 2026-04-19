import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title:     z.string(),
    title_en:  z.string().optional(),
    city:      z.string(),
    client:    z.string(),
    surface:   z.string().optional(),
    mission:   z.string(),                    // Primary mission label shown on card
    type:      z.array(z.string()),           // Tags: AMO, MOD, Conseil, etc.
    architect: z.string().optional(),
    specifics: z.string().optional(),
    image:     z.string().optional(),
    featured:  z.boolean().default(false),
    order:     z.number().default(99),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title:      z.string(),
    title_en:   z.string().optional(),
    date:       z.date(),
    excerpt:    z.string().optional(),
    excerpt_en: z.string().optional(),
    image:      z.string().optional(),
  }),
});

export const collections = { projects, news };
