import {Theme} from 'styled-system';
import {colors, fonts, spaces, breakpoints, radius} from '../tokens';

const customTheme: Theme = {
  fontSizes: fonts.fontSizes,
  space: spaces,
  colors,
  breakpoints,
  radii: radius,
  shadows: ['0px 50px 100px rgba(0, 0, 0, 0.1)'],
};

export default customTheme;
