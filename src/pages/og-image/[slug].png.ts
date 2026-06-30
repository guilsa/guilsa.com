import type { APIContext, GetStaticPaths } from "astro";
import satori, { type SatoriOptions } from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";
import { getAllPosts } from "@/utils";

const ogOptions: SatoriOptions = {
	width: 1200,
	height: 630,
	// debug: true,
	fonts: [],
};

const markup = html`<div tw="relative flex w-full h-full bg-[#10100f]">
		<div tw="absolute inset-0 flex items-center justify-center">
			<svg width="320" height="320" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<rect width="512" height="512" rx="88" fill="#10100f"/>
				<path d="M164 150 H348" stroke="#f5f0e8" stroke-width="50" stroke-linecap="round"/>
				<path d="M164 256 H300" stroke="#f5f0e8" stroke-width="50" stroke-linecap="round"/>
				<path d="M164 362 H240" stroke="#f5f0e8" stroke-width="50" stroke-linecap="round"/>
				<circle cx="356" cy="356" r="31" fill="#f5f0e8"/>
			</svg>
		</div>
	</div>`;

export async function GET(_ctx: APIContext) {
	const svg = await satori(markup, ogOptions);
	const png = new Resvg(svg).render().asPng();
	return new Response(png, {
		headers: {
			"Content-Type": "image/png",
			"Cache-Control": "public, max-age=31536000, immutable",
		},
	});
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getAllPosts();
	return posts.filter(({ data }) => !data.ogImage).map(({ slug }) => ({ params: { slug } }));
};
