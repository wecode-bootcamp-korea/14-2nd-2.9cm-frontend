import React, { useState } from "react";
import styled, { StyleSheetManager } from "styled-components";

const PaginationList = {
  data: ["1", "2", "3", "4", "5", "6"],
};

export default function Pagination({ paginate }) {
  return (
    <ChangeWrapper>
      <ul>
        {PaginationList.data.map((item) => {
          return <li onClick={paginate}>{item}</li>;
        })}
      </ul>
    </ChangeWrapper>
  );
}

const ChangeWrapper = styled.div`
  ul {
    display: flex;

    li {
      font-size: 30px;
      margin: 0 10px;
      cursor: pointer;
    }
  }
`;
