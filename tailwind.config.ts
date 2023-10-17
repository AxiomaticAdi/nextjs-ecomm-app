import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    plugins: [require("daisyui")],
    daisyui: {
        base: true,
        themes: [
            {
                custom: {
                    "primary": "#403D39",
                    "primary-focus": "#EB5E28",
                    "primary-content": "#ffffff",

                    "secondary": "#EB5E28",
                    "secondary-focus": "#d7521d",
                    "secondary-content": "#454545",

                    "accent": "#f9f2dc",
                    "accent-focus": "#f2e7c5",
                    "accent-content": "#ffffff",

                    "neutral": "#454545",
                    "neutral-focus": "#CCC5B9",
                    "neutral-content": "#ffffff",

                    "base-100": "#FFFCF2",
                    "base-200": "#f9f2dc",
                    "base-300": "#f2e7c5",
                    "base-content": "#252422",

                    "info": "#66c7ff",
                    "success": "#87cf3a",
                    "warning": "#e1d460",
                    "error": "#ff6b6b",
                },
            },
        ],
    },
};
export default config;
