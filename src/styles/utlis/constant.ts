import * as SS from 'styled-system';
const {compose} = SS;

export const TYPOGRAPHY = SS.typography;

export const COMMON = compose(SS.space, SS.color, SS.display, SS.background);

export const BORDER = compose(SS.border, SS.shadow);

export const LAYOUT = SS.layout;
export const POSITION = SS.position;
export const FLEX = SS.flexbox;

export const BOX = compose(COMMON, LAYOUT, FLEX, POSITION, BORDER);

export const GRID = SS.grid;
