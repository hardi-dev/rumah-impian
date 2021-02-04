import React, {FC, forwardRef, Ref} from 'react';
import Fond from '../Fond/Fond.component';
import {containers} from '../../styles//tokens';
import {IContainerProps} from './Container.types';

const Container: FC<IContainerProps> = forwardRef(
  ({children, fluid, ...rest}, ref: Ref<HTMLDivElement>) => {
    return (
      <Fond
        ref={ref}
        marginX="auto"
        paddingX={{_: '10vw', md: '1rem'}}
        width="100%"
        maxWidth={fluid ? '100%' : containers}
        {...rest}>
        {children}
      </Fond>
    );
  },
);

export default Container;
