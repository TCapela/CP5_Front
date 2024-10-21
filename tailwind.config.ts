import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#ffffff',
        'foreground': '#171717',
        'magnetic-blue': '#1e90ff',
        'earth-green': '#32cd32',
        'field-purple': '#6a0dad',
        'primary': "#3490dc",
        'secondary': "#ffed4a",
      },
      fontSize: {
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
      },
      spacing: {
        '2': '0.5rem', 
        '4': '1rem',   
        '8': '2rem',  
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem', 
        'lg': '0.5rem',   
        'full': '9999px', 
      },
    },
  },
  
  plugins: [],
};
export default config;
