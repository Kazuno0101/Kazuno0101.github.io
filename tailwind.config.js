/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#FFFFFF',
        'ink': '#0A0A0A',
        'muted': '#6B6B6B',
        'amber': '#F2B705',
        'coral': '#E14434',
      },
      fontFamily: {
        'sans': ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'],
        'mono': ['"JetBrains Mono"', '"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      borderWidth: {
        '3': '3px',
      },
      borderRadius: {
        'none': '0px',
      },
      transitionDuration: {
        '120': '120ms',
      },
    },
  },
  plugins: [],
}
