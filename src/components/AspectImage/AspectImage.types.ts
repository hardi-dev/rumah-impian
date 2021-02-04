import {ImgHTMLAttributes} from 'react';
import {BaseProps} from '../../styles/types';
import {LayoutProps, ShadowProps, SpaceProps} from 'styled-system';

export interface IAspectImageProps
  extends BaseProps,
    LayoutProps,
    ShadowProps,
    SpaceProps,
    Omit<ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> {
  ratio?: number;
}
