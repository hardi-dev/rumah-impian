import styled from "styled-components";
import { BOX, TYPOGRAPHY } from "../../styles/utlis/constant";
import { BoxProps } from "../../styles/types";
import sx from "../../styles/utlis/sx";
import IgnoredProps from "../../styles/utlis/ignoredProps";
import { system } from "styled-system";

const shouldForwardProp = (prop: any, _defaultValidatorFn: any) => {
  return !IgnoredProps.test(prop);
};

const transform = system({
  transform: true,
});

const Fond = styled("div").withConfig({ shouldForwardProp })<BoxProps>`
  ${BOX}
  ${TYPOGRAPHY}
  ${transform}
  ${sx}
`;

Fond.displayName = "Box";

export default Fond;
