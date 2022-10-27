const theme = {
  color: {
    white: '#ffffff',
    black: '#111111',
    grayscale900: '#22223D',
    grayscale700: '#525068',
    grayscale600: '#6B677D',
    grayscale500: '#837E92',
    grayscale300: '#B2ADBB',
    grayscale200: '#C9CDDB',
    grayscale100: '#E0DDE4',
    grayscale50: '#F7F6F8',
    // https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors
    malibu900: '#005494',
    malibu800: '#0073b4',
    malibu700: '#0084c8',
    malibu600: '#0097db',
    malibu500: '#00a4e9',
    malibu400: '#00b2eb',
    malibu300: '#42bfed',
    malibu200: '#7cd1f2',
    malibu100: '#b1e3f6',
    malibu50: '#E1F4FB',
  },
  weight: {
    bold: 700,
    medium: 500,
    regular: 400,
  },
  zIndex: {
    negative: -1,
    default: 0,
    first: 1,
    second: 2,
  },
};

export type Theme = typeof theme;

export default theme;
