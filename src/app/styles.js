/* styles.js */
import css from 'styled-jsx/css'

// Scoped styles
// export const button = css`
//   button {
//     color: hotpink;
//   }
// `

// Global styles
// export const body = css.global`body { 
//     margin: 0; 
//     height: 5571px;
//     width: 1440px;
//     left: 2058px;
//     top: -3476px;
//     border-radius: 0px;
//     background-color: #040C18;

// }`

// Works also with default exports
export default css`
  body { 
    margin: 0; 
    margin-right: 0 !important;
    width: 1440px;
    background-color: #040C18;
    color: white;
    font-family: sans-serif;
}
h1, h2, h3 {
    background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}
.p {
    color: #7dd3fc;
}
.orange {
    color: #FF8A71;
}
.gpt {
    // background: linear-gradient(to left top, rgba(27, 120, 222, 1) 10%, rgba(15, 66, 121, 1) 30%, rgba(27, 120, 222, 1));
    background-color: rgba(15, 66, 121, 1);
}
.rect {
    background: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%), #FFFFFF;
    position: absolute;
    width: 38px;
    height: 4px;
}
.banner {
    background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.random-bg {
    background-color: #031B34;
}
`

