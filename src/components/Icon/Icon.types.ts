import {
  TColors,
  TIconSize,
  TIcons,
} from '../../types';

export type TIcon = {[key: string]: React.FC<SVGElement>};

export interface IIconProps {
  testID?: string;
  name: TIcons;
  size?: TIconSize;
  color?: TColors;
}
