import {icons, iconSize, colors} from '../tokens';

const tokens = {icons, iconSize, colors};
export type Tokens = typeof tokens;
export type TColors = keyof Tokens['colors'];
export type TIcons = keyof Tokens['icons'];
export type TIconSize = keyof Tokens['iconSize'];
