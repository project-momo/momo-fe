import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    font-family: 'IBM Plex Sans KR', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
    color: black;
  }

  button{
    cursor: pointer;
  }

  /* @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  } */

  blockquote,
  body,
  dd,
  dl,
  dt,
  fieldset,
  figure,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  html,
  iframe,
  legend,
  li,
  ol,
  p,
  pre,
  textarea,
  ul {
    margin: 0;
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: 400;
  }
  ul {
    list-style: none;
  }
  button,
  input,
  select {
    margin: 0;
  }
  html {
    box-sizing: border-box;
  }
  *,
  :after,
  :before {
    box-sizing: inherit;
  }
  img,
  video {
    height: auto;
    max-width: 100%;
  }
  iframe {
    border: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  td,
  th {
    padding: 0;
  }
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export default GlobalStyle;
