// src/content.config.ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    year: z.string(),
    role: z.string(),
    tools: z.array(z.string()),
    gridSize: z.enum(['large', 'standard']),
    order: z.number().optional(), // Stops Astro from deleting your sorting data
    heroType: z.string(),
     heroSrc: z.string(),
     heroOrientation: z.string().optional(),
    img1: z.string(),
    img2: z.string(),
    secondarySrc: z.string(),
    wideSrc1: z.string().optional(),
    wideSrc2: z.string().optional(),
    img3: z.string().optional(),
    img4: z.string().optional(),
    img5: z.string().optional(),
    img6: z.string().optional(),
    img7: z.string().optional(),
    img8: z.string().optional(),
    img9: z.string().optional(),
    img10: z.string().optional(),
    img11: z.string().optional(),
    img12: z.string().optional(),
    img13: z.string().optional(),
    img14: z.string().optional(),
    img15: z.string().optional(),
    img16: z.string().optional(),
    img17: z.string().optional(),
    img18: z.string().optional(),
    resultImg1: z.string().optional(),
    resultImg2: z.string().optional(),
    resultImg3: z.string().optional(),
    subtitle: z.string().optional(),
  }),
});

export const collections = { projects };