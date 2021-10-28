import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { PRIMARY_FONT_FAMILY, COLORS } from './styles';

const GlobalStyle = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,900&subset=latin,latin-ext&display=swap'); stylelint-disable-line no-invalid-position-at-import-rule */

  /* ${styledNormalize}

  body {
    font-size: 16px;
    font-family: ${PRIMARY_FONT_FAMILY};
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
  } */
`;

export default GlobalStyle;
