import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            "main-bg": "#000000",
            "opacity-white": "#FFFFFF4D",
            "white-text": "#B0B0B0",
            "blue-main": "#2A68FF",
            "yellow-bg": "#FEFFB7",
            "yellow-main": "#FAFF00",
         },
      },
   },
   plugins: [],
};
export default config;
