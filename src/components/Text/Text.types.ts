import {CommonProps, TypographyProps, LayoutProps} from '../../styles/types';
import {TextTransformProps} from 'styled-system';

export type ITextType =
  | 'caption'
  | 'body2'
  | 'body1'
  | 'h4'
  | 'h3'
  | 'h2'
  | 'h1'
  | 'title';

export interface ITextProps
  extends CommonProps,
    TypographyProps,
    LayoutProps,
    TextTransformProps {
  variant?: ITextType;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
