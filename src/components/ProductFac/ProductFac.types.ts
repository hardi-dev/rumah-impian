import {MarginProps} from 'styled-system';
import {TIconTokens} from '../../styles/types';

export interface IProductFacProps extends MarginProps {
  label: string | number;
  icon: TIconTokens;
}