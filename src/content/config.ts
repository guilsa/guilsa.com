import { z, defineCollection } from "astro:content";

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array;
	const lowercaseItems = array.map((str) => str.toLowerCase());
	const distinctItems = new Set(lowercaseItems);
	return Array.from(distinctItems);
}

const post = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string().max(60).optional(),
			description: z.string().optional(),
			publishDate: z
				.string()
				.or(z.date())
				.optional()
				.transform((val) => (val ? new Date(val) : undefined)),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
			coverImage: z
				.object({
					src: image(),
					alt: z.string(),
				})
				.optional(),
			draft: z.boolean().default(false),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			ogImage: z.string().optional(),
		})
		.refine(
			(data) => data.draft || (data.title && data.publishDate),
			{
				message: "title and publishDate are required for non-draft posts",
				path: ["title"],
			}
		),
});

const writing = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string().max(60).optional(),
			description: z.string().optional(),
			publishDate: z
				.string()
				.or(z.date())
				.optional()
				.transform((val) => (val ? new Date(val) : undefined)),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
			coverImage: z
				.object({
					src: image(),
					alt: z.string(),
				})
				.optional(),
			draft: z.boolean().default(false),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			ogImage: z.string().optional(),
		})
		.refine(
			(data) => data.draft || (data.title && data.publishDate),
			{
				message: "title and publishDate are required for non-draft posts",
				path: ["title"],
			}
		),
});

export const collections = { post, writing };
