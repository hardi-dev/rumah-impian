import styled from "styled-components";
import Fond from "../../components/Fond/Fond.component";
import { secondary, secondaryDark } from "../../styles/tokens/colors";
import bg from "../../assets/images/bg.png";

export const StyledFond = styled(Fond)`
  background: url(${bg}) left bottom no-repeat,
    linear-gradient(90deg, ${secondary}, ${secondaryDark});
  min-height: 71vw;
`;
