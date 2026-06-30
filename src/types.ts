export type Site = {
	name: string;
	title: string;
	tagline?: string;
	description: string;
	url: string;
	ogImage: string;
	lang: string;
	ogLocale: string;
};

export type PaginationLink = {
	url: string;
	text?: string;
	srLabel?: string;
};

export type SiteMeta = {
	title: string;
	description?: string;
	ogImage?: string | undefined;
	articleDate?: string | undefined;
};
