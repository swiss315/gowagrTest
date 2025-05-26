import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '20px 10px 20px 0px #2121211F',
      },

      backgroundImage: {
        'custom-pattern': "url('/assets/svg/background_pattern.svg')",
        'custom-pattern-modified': "url('/assets/svg/startwinning/background_pattern_modified.svg')",
        'custom-spiral': "url('/assets/svg/background_spiral.svg')",
        'custom-line': "url('/assets/svg/background_line.svg')",
        'custom-ecosystem': "url('/assets/svg/joinecosystem/background_ecosystem.svg')",

        'numerous-gradient': 'linear-gradient(151.77deg, #232D39 13.02%, #000000 111.41%)',
        'instant-gradient': 'linear-gradient(149.5deg, #104333 16%, #28A981 109.16%)',
        'bonus-gradient': 'linear-gradient(180deg, #FFC2F7 0%, #FFFBFD 100%)',
        'custom-dark-gradient': 'linear-gradient(123.33deg, #19212A 42.76%, #000000 134%)',
        'transparent-dark-gradient': 'linear-gradient(123.33deg, rgba(25, 33, 42, 0) 42.76%, #19212A 42.76%, #000000 134%)',
        'gradient-pattern':
            'linear-gradient(123.33deg, #19212A 42.76%, #000000 134%), url("/assets/svg/startwinning/background_pattern_modified.svg")',

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#141B23',
        secondary: '#D0F091',
        customCream: '#FBFFF4',
        greenText: '#104333',
        lemonGreen: '#12DD27',
        wineText: '#540835',
        lightPink: '#FD89ED'
      },
      borderColor: {
        lemonGreenBorder: "#D0F091",
        lightPinkBorder: "#FFC2F7",
      },

    },
  },
  plugins: [],
} satisfies Config;
