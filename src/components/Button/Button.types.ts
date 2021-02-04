import {ButtonHTMLAttributes} from 'react';
import {BoxProps} from '../../styles/types';

type TButtonType = 'small' | 'large';

export interface IButtonProps
  extends BoxProps,
    Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  outlined?: boolean;
  size?: TButtonType;
}
