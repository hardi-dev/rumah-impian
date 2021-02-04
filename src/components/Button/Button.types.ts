import {ButtonHTMLAttributes} from 'react';
import {BoxProps} from '../../styles/types';

export interface IButtonProps
  extends BoxProps,
    Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
      full?: boolean;
}
