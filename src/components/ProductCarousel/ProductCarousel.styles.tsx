import styled from "styled-components";
import Fond from "../Fond/Fond.component";

export const StyledFond = styled(Fond)`
  opacity: 0;
  transform: scale(0.8);
  transition: 1s cubic-bezier(0.22, 1, 0.36, 1);

  &.active {
    opacity: 1;
    transform: scale(1);
    transition: 1s cubic-bezier(0.22, 1, 0.36, 1);
  }
`;
