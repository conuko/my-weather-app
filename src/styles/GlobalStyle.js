import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  /*
    * Reset CSS
    * http://meyerweb.com/eric/tools/css/reset/
    * v2.0 | 20110126
    * License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /**
   * fonts
  */
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

  /**
   * global
  */
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Open Sans', sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    padding: 75px;
    color: ${theme.color.text};
    background-color: ${theme.color.black};
  }

  button, input {
    font-family: 'Open Sans', sans-serif;
  }

  input:focus {
    box-shadow: 0 0 5px ${theme.color.red};
    border: 3px solid ${theme.color.red};
  }

`;

export default GlobalStyle;
