// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://haruzheng.harutw.tw',
	integrations: [mdx(), sitemap()],
	output: 'static',
	//base: '/my-astro-site/',
});
