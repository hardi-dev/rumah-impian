import React, {FC, forwardRef, Ref} from 'react';
import {IButtonProps} from './Button.types';
import {Fond} from '../';
import {colors} from '../../styles/tokens';

export const Button: FC<IButtonProps> = forwardRef(
  (
    {
      bg = 'primary50',
      size = 'small',
      color,
      outlined,
      as = 'button',
      borderRadius = {_: 's', md: 'm'},
      ...props
    },
    ref: Ref<HTMLButtonElement>,
  ) => (
    <Fond
      as={as}
      px={{_: 'm', md: 's'}}
      py={{_: 's', md: 'xs'}}
      bg={outlined ? 'white' : bg}
      color={outlined ? colors[bg as string] : color ? color : 'white'}
      ref={ref}
      fontSize={size === 'small' ? 'body1' : 'h4'}
      borderWidth="1px"
      borderStyle="solid"
      borderColor={outlined ? bg : 'transparent'}
      borderRadius={borderRadius}
      textAlign="center"
      display="inline-block"
      fontFamily="'FS Emeric', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
      {...props}
    />
  ),
);

export default Button;
