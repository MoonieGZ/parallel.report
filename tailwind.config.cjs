/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
  theme: {
    fontFamily: {
      body: ['Inter', 'sans-serif'],
      display: ['Atkinson Hyperlegible', 'sans-serif'],
    },
    colors: {
      'light-bg': '#e6e9ef',
      'light-accent': '#ea76cb',
      'light-text': '#4c4f69',
    },
    extend: {
      typography: () => ({
        invert: {
          css: {
            a: {
              background: '#f5c2e7',
              backgroundClip: 'text',
              color: 'transparent',
            },
            'a:hover': {
              background: '#c99fbe',
              backgroundClip: 'text',
              color: 'transparent',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
      prefix: 'ctp',
      defaultFlavour: 'mocha',
    }),
    require('@tailwindcss/typography'),
  ],
};
