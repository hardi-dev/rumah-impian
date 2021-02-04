import styled from "styled-components";
import { compose, system, TextTransformProps } from "styled-system";
import { TYPOGRAPHY, COMMON, LAYOUT } from "../../styles/utlis/constant";
import { ITextProps } from "./Text.types";
import sx from "../../styles/utlis/sx";
import IgnoredProps from "../../styles/utlis/ignoredProps";

const shouldForwardProp = (prop: any, _defaultValidatorFn: any) => {
  return !IgnoredProps.test(prop);
};

const textTransform = system({
  textTransform: true,
});

export const StyledText = styled("span").withConfig({ shouldForwardProp })<
  ITextProps & TextTransformProps
>`
  font-family: "AvenirNext";
  && {
    ${compose(COMMON, TYPOGRAPHY, LAYOUT)}
  }
  ${textTransform}
  ${sx}
`;
