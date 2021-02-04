import {spaces, colors, radius, icons, scrabbles} from '../tokens';
import theme from '../theme/customTheme';
import {ElementType, ClassAttributes} from 'react';
import {SystemStyleObject} from '@styled-system/css';
import * as SS from 'styled-system';

/*
==================================================================
Tokens
==================================================================
*/
const tokens = {
  spaces,
  colors,
  radius,
  icons,
  scrabbles,
};

export type Tokens = typeof tokens;
export type TSpaceToken = keyof Tokens['spaces'];
export type TColorToken = keyof Tokens['colors'];
export type TRadiusToken = keyof Tokens['radius'];
export type TIconTokens = keyof Tokens['icons'];
export type TScrabbleTokens = keyof Tokens['scrabbles'];
export type TTheme = typeof theme;

export interface BaseProps extends ClassAttributes<any> {
  as?: ElementType;
  className?: string;
  sx?: SystemStyleObject;
  id?: string;
}

export interface CommonProps
  extends BaseProps,
    SS.ColorProps,
    SS.SpaceProps,
    SS.BackgroundProps,
    SS.DisplayProps {}

export interface LayoutProps extends CommonProps, SS.LayoutProps {}

export interface TypographyProps extends BaseProps, SS.TypographyProps {}

export interface BorderProps
  extends SS.BordersProps,
    SS.BoxShadowProps,
    SS.BorderProps {}

export interface PositionProps extends SS.PositionProps {}

export interface BoxProps
  extends BaseProps,
    CommonProps,
    LayoutProps,
    SS.FlexboxProps,
    BorderProps,
    PositionProps,
    TypographyProps,
    SS.TransformProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {}

export interface FlexProps extends BoxProps {}
