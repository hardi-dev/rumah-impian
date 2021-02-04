import React, { FC, ElementType } from "react";
import { StyledText } from "./Text.styles";
import { ITextProps } from "./Text.types";
import { TypographyProps } from "styled-system";
import { fonts } from "../../styles/tokens";

const { fontSizes, lineHeight } = fonts;

const title: TypographyProps = {
  fontSize: fontSizes[0],
  lineHeight: lineHeight[0],
  fontFamily: "AvenirNextBold",
};

const subtitle: TypographyProps = {
  fontSize: fontSizes[1],
  lineHeight: lineHeight[0],
  fontFamily: "AvenirNextDemi",
};

const body: TypographyProps = {
  fontSize: fontSizes[2],
  lineHeight: lineHeight[0],
};

const caption1: TypographyProps = {
  fontSize: fontSizes[3],
  lineHeight: lineHeight[0],
};

const caption2: TypographyProps = {
  fontSize: fontSizes[4],
  lineHeight: lineHeight[0],
};

const Text: FC<ITextProps> = ({
  children,
  variant = "body",
  color = "black",
  ...rest
}) => {
  const config: { [key: string]: TypographyProps } = {
    title,
    subtitle,
    body,
    caption1,
    caption2,
  };

  const configAs: { [key: string]: ElementType } = {
    title: "h1",
    subtitle: "h2",
    body: "p",
    caption1: "p",
    caption2: "p",
  };

  return (
    <StyledText
      as={configAs[variant]}
      {...config[variant]}
      color={color}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

export default Text;
