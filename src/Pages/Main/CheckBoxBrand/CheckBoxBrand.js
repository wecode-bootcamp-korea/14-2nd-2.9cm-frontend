import React from 'react';
import styled, { StyleSheetManager } from 'styled-components';

export default function CheckBoxBrand(props) {
  return (
    <div>
      <Brand
        type='checkbox'
        defaultChecked={false}
        name='나이키'
        onClick={props.handleCheckbox}
      />
      <BrandLabel htmlFor='cb1' name='나이키'>
        나이키 (59)
      </BrandLabel>
    </div>
  );
}

const Brand = styled.div``;

const BrandLabel = styled.div``;
