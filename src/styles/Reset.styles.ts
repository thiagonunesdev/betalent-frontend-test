import { css } from 'styled-components'

export const ResetStyles = css`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    /* Browser's default root font size is 16 px. */
    /* 62.5% of 16px base font size is 10px. */
    font-size: 62.5%;
  }
  body {
    font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    box-sizing: border-box;
    overflow: hidden;
  }
  a,
  a:active,
  a:focus,
  a:hover {
    text-decoration: none;
  }
  ol,
  ul,
  dl {
    margin-bottom: 0;
  }
`
