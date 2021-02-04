import {CommonProps} from '../../styles/types';

export interface ICardProductProps extends CommonProps {
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
  onClickButton: (productId: number) => void;
  onClickLike: (productId: number) => void;
}
