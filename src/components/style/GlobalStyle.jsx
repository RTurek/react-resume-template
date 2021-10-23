import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const primaryFontFamily = 'Lato, sans-serif';

export const COLORS = {
  PRIMARY: '#0099ff',
  SECONDARY: '#ff9900',
  BLACK: '#000000'
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,900&subset=latin,latin-ext&display=swap'); /* stylelint-disable-line no-invalid-position-at-import-rule */

  ${styledNormalize}

  body {
    font-size: 16px;
    font-family: ${primaryFontFamily};
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    background-color: #ffffff;
    min-height: 100%;
    color: ${COLORS.BLACK};
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: ${COLORS.PRIMARY};
    cursor: pointer;
    text-decoration: none;
  }

  a:focus {
    outline: ${COLORS.SECONDARY} auto 1px;
  }
`;

export default GlobalStyle;
