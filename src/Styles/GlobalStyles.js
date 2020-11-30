import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    box-sizing:border-box;
  }
  body{
      font-size:14px;
      background-color:#fff;
      font-family: "campton", "Apple SD Gothic Neo", NanumBarunGothic, "나눔바른고딕", Malgun Gothic, "맑은 고딕", dotum, sans-serif;
  }
  a{
      text-decoration:none;
      color:inherit;
      cursor: pointer;
  }
  ol, ul, li {
      list-style: none;
  }
  img {
      display: block;
      width: 100%;
      height: 100%;
  }
  input, button {
      background-color: transparent;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "campton", "Apple SD Gothic Neo", NanumBarunGothic, "나눔바른고딕", Malgun Gothic, "맑은 고딕", dotum, sans-serif;
  }
  html, body, #root {
    height: 100%;
  }
  blockquote,
q {
  quotes: none;
}
blockquote {
  &:before,
  &:after {
    content: '';
    content: none;
  }
}
q {
  &:before,
  &:after {
    content: '';
    content: none;
  }
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
  `;
export default GlobalStyles;