import {CommonProps, LayoutProps} from '../../styles/types';

export interface ICardProductProps extends CommonProps, LayoutProps {
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
  onClickButton: (productId: number) => void;
  onClickLike: (productId: number) => void;
}
