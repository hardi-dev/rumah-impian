import {TColorToken, TIconTokens, BoxProps} from '../../styles/types';

export type TIcon = {[key: string]: React.FC<SVGElement>};

export interface IIconProps extends BoxProps {
  testID?: string;
  name: TIconTokens;
  color?: TColorToken | string;
}
