import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3030,
	},
	preview: {
		port: 4270,
	},
	build: {
		incremental: true,
		babel: {
			presets: ["@babel/presets-env", "@babel/presets-react"],
		},
		cache: true,
		minify: true,
		mode: "production",
		chunks: true,
		moduleBundling: true,
		prerenderPaths: ["/"],
		modulePreloader: true,
		devCode: true,
		debug: true,
	},
});
