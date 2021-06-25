import css from 'styled-jsx/css'

const baseStyle = css.global`
  :root {
    /* bx colors */
    /* blue */
    --bx-blue: #3363ff;
    --bx-blue-space: #0a1433;
    --bx-blue-tea: #0f1e4c;
    --bx-blue-clip: #142866;
    --bx-blue-point: #193180;
    --bx-blue-cross: #1f3b99;
    --bx-blue-moon: #294fcc;
    --bx-blue-place: #294fcc;
    --bx-blue-flip: #2e59e5;
    --bx-blue-glam: #4773ff;
    --bx-blue-rock: #5c82ff;
    --bx-blue-fun: #7092ff;
    --bx-blue-air: #85a1ff;
    --bx-blue-soft: #99b1ff;
    --bx-blue-new: #adc1ff;
    --bx-blue-shine: #c2d0ff;
    --bx-blue-clear: #d6e0ff;
    --bx-blue-cloud: #ebefff;
    /* orange */
    --bx-orange: #ff7e44;
    --bx-orange-blod: #190d07;
    --bx-orange-wine: #4c2614;
    --bx-orange-novel: #66321b;
    --bx-orange-space: #994c29;
    --bx-orange-go: #8f4726;
    --bx-orange-get: #cc6536;
    --bx-orange-full: #e5713d;
    --bx-orange-miles: #ff8b57;
    --bx-orange-gum: #ff9869;
    --bx-orange-point: #ffa57c;
    --bx-orange-fly: #ffb28f;
    --bx-orange-rubber: #ffbea1;
    --bx-orange-elastic: #ffcbb4;
    --bx-orange-candy: #ffd8c7;
    --bx-orange-rose: #ffe5da;
    --bx-orange-blank: #fff2ec;
    /* light blue */
    --bx-lblue: #2bb9ff;
    --bx-lblue-only: #041219;
    --bx-lblue-night: #092533;
    --bx-lblue-sea: #114a66;
    --bx-lblue-our: #155c80;
    --bx-lblue-well: #1a6f99;
    --bx-lblue-give: #1e81b2;
    --bx-lblue-bx: #2294cc;
    --bx-lblue-way: #27a6e5;
    --bx-lblue-sky: #40c0ff;
    --bx-lblue-ice: #55c7ff;
    --bx-lblue-drop: #6bceff;
    --bx-lblue-dream: #80d5ff;
    --bx-lblue-snow: #95dcff;
    --bx-lblue-winter: #aae3ff;
    --bx-lblue-easy: #bfeaff;
    --bx-lblue-thin: #d5f1ff;
    --bx-lblue-day: #eaf8ff;
    /* light orange */
    --bx-lorange: #fda460;
    --bx-lorange-state: #322615;
    --bx-lorange-grow: #654c2a;
    --bx-lorange-truck: #97723f;
    --bx-lorange-box: #b08549;
    --bx-lorange-pyme: #ca9854;
    --bx-lorange-try: #e3ab5e;
    --bx-lorange-summer: #fcbe69;
    --bx-lorange-fruit: #fcc478;
    --bx-lorange-row: #fdcb87;
    --bx-lorange-make: #fdd296;
    --bx-lorange-travel: #fdd8a5;
    --bx-lorange-send: #feecd2;
    --bx-lorange-skin: #fef2e1;
    /* black */
    --bx-black: #212121;
    --bx-grey-one: #333333;
    --bx-grey-press: #4d4d4d;
    --bx-grey-mistery: #666666;
    --bx-grey-play: #808080;
    --bx-grey-time: #b3b3b3;
    --bx-grey-me: #cccccc;
    --bx-grey-you: #e5e5e5;
    --bx-grey-up: #f6f6f6;
    --bx-grey-on: #fbfbfb;
    --bx-white: #ffffff;
    /* green */
    --bx-green-future: #408d5c;
    --bx-green-game: #effaf3;
    /* extras */
    --bx-light-express: #00b4db;
    --bx-light-dream: #e5f7fb;
    /* red */
    --bx-red-alert: #fd2626;
    --bx-red-black: #4c0b0b;
    --bx-red-up: #7e1313;
    --bx-red-blood: #b11b1b;
    --bx-red-medium: #fe6767;
    --bx-red-nice: #fe9292;
    --bx-red-land: #febebe;
    --bx-red-clean: #ffe9e9;
    /* yellow */
    --bx-yellow-alert: #ffe27c;
    --bx-yellow-go: #665a32;
    --bx-yellow-gold: #99884b;
    --bx-yellow-brown: #e0c35c;
    --bx-yellow-air: #ffe896;
    --bx-yellow-nice: #ffeeb1;
    --bx-yellow-cloud: #fff6d8;
    --bx-yellow-blank: #fffcf2;
    /* alerts */
    --bx-alert-dark: #d3d3d4;
    --bx-alert-border-dark: #bcbebf;
    --bx-alert-danger: #dc3545;
    --bx-alert-success-border: var(--bx-green-future);
    --bx-alert-success-fg: var(--bx-green-future);
    --bx-alert-success-bg: var(--bx-green-game);
    --bx-alert-danger-border: var(--bx-red-alert);
    --bx-alert-danger-fg: var(--bx-red-alert);
    --bx-alert-danger-bg: var(--bx-red-clean);
    --bx-alert-info-border: var(--bx-light-express);
    --bx-alert-info-fg: var(--bx-light-express);
    --bx-alert-info-bg: var(--bx-light-dream);
    --bx-alert-warning-border: var(--bx--yellow-brown);
    --bx-alert-warning-fg: var(--bx--yellow-brown);
    --bx-alert-warning-bg: var(--bx--yellow-blank);
    /* general */
    --bx-secondary: #eaeaeb;
    --bx-bg: #ffffff;
    --bx-bg-secondary: #eaeaeb;
    --bx-fg: #18191a;
    --bx-grey: #eaeaea;
    --bx-selection: rgba(0, 0, 0, 0.99);
    --bx-bg-gradient: linear-gradient(
      85.92deg,
      var(--bx-color-blue) 14.32%,
      var(--bx-color-lblue) 99.53%
    );
    /* fonts */
    --bx-font-primary: 'Mont', system-ui, -apple-system, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --bx-font-secondary: 'Lato', system-ui, -apple-system, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }
`

export default baseStyle
