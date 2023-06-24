export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    'nuxt-time'
  ],

  build: {
    transpile: ['gsap'],
  },

  unocss: {
    attributify: true,
    icons: true,
    components: false,
    typography: true,
    theme: {
      colors: {
        primary: {
          DEFAULT: '#333333',
          50: '#f5f5f5',
          100: '#ebebeb',
          200: '#cccccc',
          300: '#adadad',
          400: '#707070',
          500: '#333333',
          600: '#2e2929',
          700: '#261d1d',
          800: '#1f1212',
          900: '#170a0a',
          950: '#0f0404'
        },
        vernaillen: {
          DEFAULT: '#9C8E1B',
          50: '#faf9f0',
          100: '#f5f3e1',
          200: '#e6e2b5',
          300: '#d6d090',
          400: '#baaf4e',
          500: '#9c8e1b',
          600: '#8c7815',
          700: '#755d0f',
          800: '#5e4509',
          900: '#452e06',
          950: '#2e1b02'
        },
        avocado: {
          DEFAULT: '#7b8856',
          50: '#f8f9f7',
          100: '#f2f3ee',
          200: '#dee1d5',
          300: '#cacfbb',
          400: '#a3ac89',
          500: '#7b8856',
          600: '#6f7a4d',
          700: '#5c6641',
          800: '#4a5234',
          900: '#3c432a',
          950: '#242819'
        },
      }
    },
    shortcuts: [
      ['btn', 'px-4 py-1 rounded inline-block bg-vernaillen text-white cursor-pointer hover:opacity-80 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50']
    ],
    safelist: [
      // Sizes
      ...(() => {
        const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl']
        return [
          ...sizes.map(size => `min-w-${size}`),
          ...sizes.map(size => `min-h-${size}`),
          ...sizes.map(size => `max-w-${size}`),
          ...sizes.map(size => `max-h-${size}`)
        ]
      })(),
      // Icons
      ...[
        'i-mdi-whatsapp',
        'i-mdi-instagram',
        'i-mdi-github'
      ]
    ],
    preflights: [
      {
        getCSS: ({ theme }) => `
                * {
                  padding: 0;
                  margin: 0;
                  font-family: ${theme.fontFamily?.sans};
                  -webkit-touch-callout: none; /* iOS Safari */
                  -webkit-user-select: none; /* Safari */
                   -khtml-user-select: none; /* Konqueror HTML */
                     -moz-user-select: none; /* Firefox */
                      -ms-user-select: none; /* Internet Explorer/Edge */
                          user-select: none; /* Non-prefixed version, currently
                                                supported by Chrome and Opera */
                }
                .prose {
                  max-width: 90% !important;
                }
                .prose a {
                  color: #755d0f;
                  text-decoration: none;
                  border-bottom: 1px dotted rgba(200, 200, 200, 0.5);
                  transition: border .2s ease-in-out;
                }
                .prose a:hover {
                  border-bottom: 1px solid ${theme.colors?.vernaillen.DEFAULT};
                  border-color: ${theme.colors?.vernaillen.DEFAULT};
                }
              `
      }
    ]
  },

  devtools: { enabled: true },
  plugins: []
})
