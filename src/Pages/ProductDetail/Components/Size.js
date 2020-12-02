import React from "react";
import styled from "styled-components";

export default function Size() {
  return <Input name="isGoing" type="checkbox" placeholder="사이즈" />;
}

const Input = styled.input`
  width: 100%;
`;
