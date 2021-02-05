import {MarginProps} from 'styled-system';

export interface IProductCarouselProps extends MarginProps {
  productData: any[];
  onClickButton: (productId: number) => void;
}