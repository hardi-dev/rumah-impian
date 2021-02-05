import {CommonProps, LayoutProps} from '../../styles/types';
import {IMarkerPosition} from '../CardProductDetail/CardProductDetail.types';

export interface ICardProductAddressProps extends CommonProps, LayoutProps {
  address: string;
  description: string;
  map: string;
  markerPos: IMarkerPosition;
  onClickButton: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
