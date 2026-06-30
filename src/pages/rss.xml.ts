import rss from "@astrojs/rss";
import { site } from "@/site-config";
import { getAllPosts } from "@/utils";

export const GET = async () => {
	const posts = await getAllPosts();

	return rss({
		title: site.title,
		description: site.description,
		site: import.meta.env.SITE,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.publishDate,
			link: `posts/${post.slug}`,
		})),
	});
};
