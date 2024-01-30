/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'verdePrincipal': '#1DB954',
      'preto': '#000000',
      'pretoSuave': '#191414',
      'branco': '#FFFFFF',
      'cinzaSuave': '#B2B2B2',
      'cinzaMedio': '#2f2f2f',
      'cinzaEscuro': '#1e1e1e',

      'verdeClaro' : '#27856A',
      'rosa' : '#F037A5',
      'azulClaro' : '#509BF5',
      'laranja' : '#E13300',
    },
    fontFamily: {
      inter: [
        '"Inter", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },
    extend: {},
  },
  plugins: [],
}

