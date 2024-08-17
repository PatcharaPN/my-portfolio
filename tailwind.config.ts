import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-element": 'url("/bg-gradient-element.png")',
        "gradient-angle":
          "linear-gradient(var(--gradient-angle), #ff7e5f, #feb47b)",
      },
      keyframes: {
        "border-spin": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
        appear: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "border-spin": "border-spin 10s linear infinite",
        appear: "appear 0.5s linear",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: Function }) {
      addUtilities(
        {
          ".bg-gradient-angle": {
            background:
              "linear-gradient(var(--gradient-angle), #ff7e5f, #feb47b)",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};

export default config;
