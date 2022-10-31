import { prettyScrollbar } from '$/styles/utils/mixins';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize};
  * {
    box-sizing: border-box;
  }
  html, body, #__next {
    /* allow percentage heights */
    height: 100%;
  }
  #__next {
    /* stacking context isolation */
    isolation: isolate;
  }
  body {
    font-family: 'Jakarta', -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    ${prettyScrollbar};
  }
  #__next {
    display: flex;

    > * {
      flex: 1;
    }
  }
  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;

export default GlobalStyle;
