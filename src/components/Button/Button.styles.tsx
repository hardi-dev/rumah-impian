import styled from "styled-components";
import Fond from "../../components/Fond/Fond.component";
import { primaryDark } from "../../styles/tokens/colors";
import { IButtonProps } from "./Button.types";

export const StyledFond = styled(Fond)<IButtonProps>`
  transition: 0.2s cubic-bezier(0.22, 1, 0.36, 1);
  :hover {
    transition: 0.2s cubic-bezier(0.22, 1, 0.36, 1);
    background-color: ${primaryDark};
  }
`;
