/// <reference types="vite-react-ssg" />
import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
   plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] }),
      sitemap({
         hostname: "https://webtangsel.com",
         outDir: "docs",
      }),
   ],
   build: {
      outDir: "docs",
   },
   ssgOptions: {
      dirStyle: "nested",
   },
});
