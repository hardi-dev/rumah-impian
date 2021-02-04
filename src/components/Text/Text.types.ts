import {CommonProps, TypographyProps, LayoutProps} from '../../styles/types';
import {TextTransformProps} from 'styled-system';



export type ITextType =
'title' |
'subtitle' |
'body' |
'caption1' |
'caption2' 

export interface ITextProps
  extends CommonProps,
    TypographyProps,
    LayoutProps,
    TextTransformProps {
  variant?: ITextType;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
