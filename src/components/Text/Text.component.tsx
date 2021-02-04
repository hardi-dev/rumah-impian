import React, {FC, ElementType} from 'react';
import {StyledText} from './Text.styles';
import {ITextProps} from './Text.types';
import {TypographyProps} from 'styled-system';
import {fonts} from '../../styles/tokens';

const {fontSizes, lineHeight} = fonts;

const caption: TypographyProps = {
  fontSize: fontSizes[0],
  lineHeight: lineHeight[0],
};

const body2: TypographyProps = {
  fontSize: fontSizes[0],
  lineHeight: lineHeight[0],
};

const body1: TypographyProps = {
  fontSize: fontSizes[1],
  lineHeight: lineHeight[1],
};

const h4: TypographyProps = {
  fontSize: fontSizes[2],
  lineHeight: lineHeight[0],
};

const h3: TypographyProps = {
  fontSize: fontSizes[3],
  lineHeight: lineHeight[2],
};
const h2: TypographyProps = {
  fontSize: fontSizes[4],
  lineHeight: lineHeight[1],
};

const h1: TypographyProps = {
  fontSize: fontSizes[5],
  lineHeight: lineHeight[4],
};

const title: TypographyProps = {
  fontSize: fontSizes[6],
  lineHeight: lineHeight[3],
};

const Text: FC<ITextProps> = ({
  children,
  variant = 'body1',
  color = 'dark',
  ...rest
}) => {
  const config: {[key: string]: TypographyProps} = {
    caption,
    body2,
    body1,
    h4,
    h3,
    h2,
    h1,
    title,
  };

  const configAs: {[key: string]: ElementType} = {
    caption: 'p',
    body2: 'p',
    body1: 'p',
    h4: 'h5',
    h3: 'h4',
    h2: 'h3',
    h1: 'h2',
    title: 'h1',
  };

  return (
    <StyledText
      as={configAs[variant]}
      {...config[variant]}
      color={color}
      {...rest}>
      {children}
    </StyledText>
  );
};

export default Text;
