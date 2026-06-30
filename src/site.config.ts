import type { Site } from "@/types";

export const site: Site = {
	name: "Guil Sa",
	title: "Code, craft, and getting things done.",
	tagline: "Short technical notes for people shipping software.",
	description:
		"Concise technical notes on software, systems, product, and building things.",
	url: "https://guilsa.com",
	ogImage: "/social-card.png",
	lang: "en-GB",
	ogLocale: "en_GB",
};

export const dateConfig = {
	locale: "en-GB",
	options: {
		day: "numeric",
		month: "short",
		year: "numeric",
	},
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "About",
		path: "/about/",
	},
	{
		title: "Tech Blog",
		path: "/posts/",
	},
	{
		title: "Creative Writing",
		path: "/writing/",
	},
];
