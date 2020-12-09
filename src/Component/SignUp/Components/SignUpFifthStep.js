import * as React from "react";
import styled from "styled-components";

function AiOutlineLine(props) {
  return (
    <SVG stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="1em" width="1em" {...props}><path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" /></SVG>)
}

export default AiOutlineLine;

const SVG = styled.svg`
  position: absolute;
  top: 18px;
  left: 0%;
  width: 100%;
  height: 4px;
  z-index: 1;
  background-color: black;
`;