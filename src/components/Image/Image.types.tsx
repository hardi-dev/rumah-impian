import {ImgHTMLAttributes} from 'react';
import {BaseProps} from '../../styles/types';
import {
  LayoutProps,
  ShadowProps,
  SpaceProps,
  PositionProps,
} from 'styled-system';

export interface IImageProps
  extends BaseProps,
    LayoutProps,
    ShadowProps,
    SpaceProps,
    PositionProps,
    Omit<ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> {}
