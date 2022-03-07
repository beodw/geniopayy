module.exports = {
  content: [
    "./src/components/**/**/*.js",
    "./src/components/**/*.js",
    "./src/*.js",
  ],
  theme: {
  	colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'teal': '#017189',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'bright-teal': '#2B899D',
      'beige': '#FFF5E9',
      'pink' : '#FDA4AF', 
      'black': "#000000",
      'grey': "#2B4146",
      'green': "#22C55E",
      'buttonActive': "#017189",
      'cardCream': "#FFF6E6",
      'cardPink': '#FBF1F0',
      'cardGreen': '#DDECEF',
      'highlighted': '#EEF7F9',
      'greyBorder': "#F3F4F6",
      'tealAlt': "#0A6375",
      'searchBG':'#F8FCFC',
      'red' : '#DB1F35',
      'bgGrey': '#CBD5E1',

    },
    screens: {
      'xs': '1px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
    fontFamily: {
    	'nunito': ['Nunito', 'sans-serif'],
    }
  },
  plugins: [],
}