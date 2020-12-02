import React from "react";
import styled from "styled-components";
import { IoIosArrowDropdown } from "react-icons/io";

export default function Header() {
  return (
    <div>
      <HeaderWrapper>
        남성신발 <IoIosArrowDropdown width="22px" height="22px" /> / 스니커즈{" "}
        <IoIosArrowDropdown width="22px" height="22px" />
      </HeaderWrapper>
    </div>
  );
}

const HeaderWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 35px 0 5px 0;
  margin: 0 auto;
  font-size: 16px;
  font-weight: 500;
`;
