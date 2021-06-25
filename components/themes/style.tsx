import css from 'styled-jsx/css'

const style = css.global`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html {
    height: 100%;
    box-sizing: border-box;
    -webkit-text-size-adjust: 100%;
  }
  body {
    position: relative;
    min-width: 320px;
    min-height: 100%;
    margin: 0;
    height: 100%;
  }
  html,
  body {
    font-family: var(--bx-font-secondary);
    font-size: 16px;
    direction: ltr;
    font-feature-settings: 'kern';
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
    background: var(--bx-bg);
    color: var(--bx-fg);
    transition: color 0.1s ease-in-out, background 0.1s ease-in-out;
  }
  ::selection {
    text-shadow: none;
    background: var(--bx-selection);
    color: var(--bx-bg);
  }
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`

export default style
