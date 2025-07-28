import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@styles': path.resolve(__dirname, './src/styles'),
		},
	},
	css: {
		postcss: {
			plugins: [require('tailwindcss'), require('autoprefixer')],
		},
	},
	build: {
		outDir: 'build', // Указываем, что выходная папка будет называться build
	},
});
