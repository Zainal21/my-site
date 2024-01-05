import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@headlessui/tailwindcss"),
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
    require("tailwind-scrollbar"),
  ],
  variants: {
    scrollbar: ["rounded"],
  },
};
export default config;
