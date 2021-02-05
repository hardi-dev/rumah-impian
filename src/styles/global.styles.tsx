import { createGlobalStyle } from "styled-components";
import AvenirNextBold from "../assets/fonts/AvenirNext-Bold.woff";
import AvenirNextDemiBold from "../assets/fonts/AvenirNext-DemiBold.woff";
import AvenirNext from "../assets/fonts/AvenirNext-Regular.woff";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'AvenirNext';
    font-style: normal;
    src: url(${AvenirNext});
  }

  @font-face {
    font-family: 'AvenirNextBold';
    font-style: normal;
    font-weight: bold;
    src: url(${AvenirNextBold});
  }

  @font-face {
    font-family: 'AvenirNextDemi';
    font-weight: 400;
    src: url(${AvenirNextDemiBold});
  }

  html {
    scroll-behavior: smooth;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'AvenirNext', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-weight: normal;
    overflow-x: hidden;
    min-height: 100vh;
    font-size: 16px;

    /* ['576px', '768px', '992px', '1200px']; */

    @media (max-width: 576px) {
      font-size: 12px;
    }

    @media (min-width: 577px) and  (max-width: 992px){
      font-size: 14px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
