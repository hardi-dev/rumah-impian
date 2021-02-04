import {createGlobalStyle} from 'styled-components';
import FSEmeric from '../assets/fonts/FSEmericWeb-Regular.woff';
import FSEmericBold from '../assets/fonts/FSEmericWeb-Bold.woff';
import FSEmericMedium from '../assets/fonts/FSEmericWeb-Medium.woff';
import reset from 'styled-reset';
import {colors} from '../styles/tokens';

export const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'FS Emeric';
    font-style: normal;
    src: url(${FSEmeric});
  }

  @font-face {
    font-family: 'FS Emeric';
    font-style: normal;
    font-weight: bold;
    src: url(${FSEmericBold});
  }

  @font-face {
    font-family: 'FS Emeric';
    font-weight: 500;
    src: url(${FSEmericMedium});
  }

  html {
    scroll-behavior: smooth;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'FS Emeric', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-weight: normal;
    overflow-x: hidden;
    min-height: 100vh;
    font-size: 12px;
    line-height: 1.66;

    @media screen and (min-width: 576px) {
      font-size: 14px;
      line-height: 1.66;
    }

    @media screen and (min-width: 768px) {
      font-size: 1vw;
      line-height: 1.66;
    }
  }

  input {
    font-size: 12px;
    line-height: 1.66;
    font-family: 'FS Emeric', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

    @media screen and (min-width: 576px) {
      font-size: 14px;
      line-height: 1.66;
    }

    @media screen and (min-width: 768px) {
      font-size: 1vw;
      line-height: 1.66;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  .lime {
    color: ${colors.secondary25}
  }

  .royal-blue {
    color: ${colors.primary50}
  }
  
  .blue {
    color: ${colors.primary25}
  }

  .orange {
    color: ${colors.secondary100}
  }

  .navy {
    color: ${colors.primary100}
  }

  .navy-50 {
    color: "#95A4C4"
  }

  .dark {
    color: ${colors.dark}
  }

  .medium {
    color: ${colors.medium}
  }
`;
