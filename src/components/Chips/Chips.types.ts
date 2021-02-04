import {MarginProps, BackgroundColorProps, TextColorProps} from 'styled-system';

export interface IChipsProps extends MarginProps, BackgroundColorProps, TextColorProps {
  circle?: boolean;
  label?: string | number;
}