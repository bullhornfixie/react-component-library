import './font.css'

const sizes = {
  xs: 12,
  sm: 14,
  base: 16,
  md: 24,
  lg: 36,
  xl: 42,
  xxl: 48,
  xxxl: 64,
}

const breakpoints = {
  largeDesktop: 1200,
  desktop: 992,
  tablet: 767,
  phablet: 480,
  phone: 320,
}

const colors = {
  white: '#FFFFFF',
  black: '#000000',
  grey: '#CCCCCC',
  ghost: '#FAFAFA',
  snow: '#F9F9F9',
  vapor: '#F6F6F6',
  whiteSmoke: '#F5F5F5',
  silver: '#EFEFEF',
  smoke: '#EEEEEE',
  gainsboro: '#DDDDDD',
  iron: '#CCCCCC',
  base: '#AAAAAA',
  aluminum: '#999999',
  jumbo: '#888888',
  monsoon: '#777777',
  steel: '#666666',
  charcoal: '#555555',
  tuatara: '#444444',
  oil: '#333333',
  jet: '#222222',
  transparent: 'rgba(255,255,255,0)',
  overlay: 'rgba(00,00,00,0.5)',
}

const easing = {
  hover: 'all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s',
  default: '0.6s ease-in 0s',
  bezier: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
}

const transitions = {
  offset: '100',
  delay: '300',
}

const coverImage = {
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

const font = {
  family: {
    body: 'DM Sans, Arial, sans-serif',
    heading: 'DM Sans, Arial, sans-serif',
    mono: 'Inconsolata, monospace',
    custom: 'Dollie',
    custom2: 'BrilliantCut',
  },
  weight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  lineheights: {
    body: 1.5,
    heading: 1.1,
  },
}

export { breakpoints, colors, coverImage, easing, font, sizes, transitions }
