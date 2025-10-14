export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    import('daisyui')
  ],
  daisyui: {
    themes: ["light", "dark"],
  }
};