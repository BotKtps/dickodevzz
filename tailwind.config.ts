import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#050505",       // Hitam pekat
        crimson: "#ff0000",    // Merah murni
        slate: "#111111",      // Abu gelap untuk card
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-red': '0 0 20px rgba(255, 0, 0, 0.3)',
        'glow-red-strong': '0 0 50px rgba(255, 0, 0, 0.6)',
      },
      backgroundImage: {
        'vignette': 'radial-gradient(circle, transparent 20%, black 120%)',
      }
    },
  },
  plugins: [],
};
export default config;

