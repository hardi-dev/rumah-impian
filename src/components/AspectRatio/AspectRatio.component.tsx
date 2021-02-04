import React, {FC, forwardRef, Ref} from 'react';
import {IAspectRationProps} from './AspectRatio.types';
import {Fond} from '../';

export const AspectRatio: FC<IAspectRationProps> = forwardRef(
  (
    {
      ratio = 4 / 3,
      bg,
      display,
      alignContent,
      justifyItems,
      justifyContent,
      flexWrap,
      flexDirection,
      flex,
      flexGrow,
      flexShrink,
      flexBasis,
      justifySelf,
      alignSelf,
      order,
      alignItems,
      children,
      ...props
    },
    ref: Ref<HTMLDivElement>,
  ) => (
    <Fond
      ref={ref}
      {...props}
      sx={{
        position: 'relative',
        overflow: 'hidden',
      }}>
      <Fond
        sx={{
          width: '100%',
          height: 0,
          paddingBottom: 100 / ratio + '%',
        }}
      />
      <Fond
        bg={bg}
        display={display}
        alignContent={alignContent}
        justifyItems={justifyItems}
        justifyContent={justifyContent}
        flexWrap={flexWrap}
        flexDirection={flexDirection}
        flex={flex}
        flexGrow={flexGrow}
        flexShrink={flexShrink}
        flexBasis={flexBasis}
        justifySelf={justifySelf}
        alignSelf={alignSelf}
        alignItems={alignItems}
        order={order}
        sx={{
          position: 'absolute',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        }}>
        {children}
      </Fond>
    </Fond>
  ),
);

export default AspectRatio;
