import {TColor} from '../../types';
export type TTextType = 'title' | 'subtitle' | 'body' | 'caption1' | 'caption2';
export type TTextWeight = 'normal' | 'demi' | 'bold';


export interface ITextProps {
  variant?: TTextType;
  weight?: TTextWeight;
  color?: TColor;
}