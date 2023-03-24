import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { plugin as markdown, Mode } from 'vite-plugin-markdown';

export default defineConfig({
	plugins: [sveltekit(), markdown({ mode: [Mode.HTML, Mode.TOC] })]
});
