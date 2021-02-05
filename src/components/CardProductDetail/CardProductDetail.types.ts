import {CommonProps, LayoutProps} from '../../styles/types';

export type IMarkerPosition = {
  x: string;
  y: string;
}

export interface ICardProductDetailProps extends CommonProps, LayoutProps {
  productId: number;
  name: string;
  thumb: string;
  type: string;
  negotiable: boolean;
  price: string;
  installment: string;
  bedroom: number;
  bathroom: number;
  buildingSize: string;
  landSize: string;
  liked: boolean;
  buttonLabel?: string;
  address: string;
  description: string;
  map: string;
  markerPos: IMarkerPosition;
  onClickButton: (productId: number) => void;
  onClickLike: (productId: number) => void;
}
