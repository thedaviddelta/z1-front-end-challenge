const theme = {
  color: {
    white: '#ffffff',
    black: '#111111',
    grayscale900: '#22223D',
    grayscale800: '#3A3953',
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
    // https://github.com/thedaviddelta/kainet-music/blob/f77d429e748eeef6bc4d37e477ffa815187ec033/theme.ts#L25
    kaihong900: '#b22222',
    kaihong800: '#c12c2d',
    kaihong700: '#ce3334',
    kaihong600: '#e03c3a',
    kaihong500: '#ef453c',
    kaihong400: '#eb5554',
    kaihong300: '#e17476',
    kaihong200: '#ec9a9c',
    kaihong100: '#fdcdd3',
    kaihong50: '#feebee',
    // heart colors
    heartEmpty: '#B2B6CA',
    heartFaved: '#BF508B',
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
