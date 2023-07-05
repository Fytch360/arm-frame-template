import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
  time, mark, audio, video, hr {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  html, body, #root {
    height: 100%;
    overflow: auto !important;
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  #dropdown {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1300;

    & > div:first-child {
      height: 100%;
    }
  }

  #dialogs {
    position: fixed;
    z-index: 1400;
  }

  #toast-messages {
    position: fixed;
    z-index: 1500;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    & > div:first-child {
      height: 100%;
    }
  }
`;
