import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      boxShadow: {
        "custom-heavy": "5px 5px 1px rgba(48, 46, 53,1)",
      },

      colors: {
        "custom-purple": "#34285B",
        "custom-grayBlack": "rgba(48, 46, 53, 1)",
        "custom-green": "#60B478"
      }

    },
  },
  plugins: [],
};
export default config;
