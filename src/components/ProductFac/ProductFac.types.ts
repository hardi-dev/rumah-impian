import {MarginProps, SizeProps, } from 'styled-system';
import {TIconTokens} from '../../styles/types';
import {ITextType} from '../Text/Text.types';

export interface IProductFacProps extends MarginProps, SizeProps {
  label: string | number;
  icon: TIconTokens;
  textVariant?: ITextType;
}