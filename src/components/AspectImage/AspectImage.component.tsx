import React, {FC, forwardRef, Ref} from 'react';
import {AspectRatio, Image} from '../';
import {IAspectImageProps} from './AspectImage.types';

const AspectImage: FC<IAspectImageProps> = forwardRef(
  (
    {
      ratio,
      alt,
      crossOrigin,
      decoding,
      loading,
      referrerPolicy,
      sizes,
      src,
      srcSet,
      useMap,
      ...props
    },
    ref: Ref<HTMLDivElement>,
  ) => (
    <AspectRatio ratio={ratio} {...props}>
      <Image
        alt={alt}
        crossOrigin={crossOrigin}
        decoding={decoding}
        loading={loading}
        referrerPolicy={referrerPolicy}
        sizes={sizes}
        src={src}
        srcSet={srcSet}
        useMap={useMap}
        ref={ref}
        sx={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
      />
    </AspectRatio>
  ),
);

export default AspectImage;
