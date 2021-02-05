import styled from "styled-components";
import Fond from "../Fond/Fond.component";

export const StyledFond = styled(Fond)`
  opacity: 0;
  transform: translateY(10%);
  transition: 1s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: -1;

  &.active {
    opacity: 1;
    transform: translateY(0%);
    transition: 1s cubic-bezier(0.22, 1, 0.36, 1);
    z-index: 10;
  }
`;
