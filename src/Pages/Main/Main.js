import React from 'react';
import styled, { StyleSheetManager } from "styled-components";
import Nav from '../../Component/Nav/Nav';
import Footer from '../../Component/Footer/Footer';

export default function Main() {
  return (
    <>
      <Nav />
      <MainWrapper>
        <CategoryOption>
          <CategoryOptionList>
            <h1>남성신발</h1>
            <button>NEW</button>
            <button>BEST</button>
            <button>스니커즈</button>
            <button>로퍼</button>
            <button>구두</button>
            <button>부츠</button>
            <button>샌들</button>
          </CategoryOptionList>
            <OptionFilter>
              <Filter>필터</Filter>
              <Refresh>초기화</Refresh>
            </OptionFilter>
            <ProductInfo>상품정보</ProductInfo>
            <CheckBox>무료배송</CheckBox>
            
          <CategoryOptionFilter>
          </CategoryOptionFilter>
        </CategoryOption>
        <CategoryList>
        </CategoryList>
      </MainWrapper>
      <Footer />
    </>
  )
}

const MainWrapper = styled.div`
  display: flex;
`

const CategoryOption = styled.div`
  width: 250px;
  height: 1000px;
  margin-left: 50px;


`

const CategoryOptionList = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 4px solid #000;
  padding-bottom: 40px;

  h1 {
    font-size: 23px;
    font-weight: bold;
    padding: 0 0 20px 0;
    border-bottom: 4px solid #000;
    margin: 20px 0;
  }

  button {
    font-size: 16px;
    line-height: 40px;
    border: none;
    text-align: start;
    font-size: 16px;
    color: #5D5D5D;
  }

`

const CategoryOptionFilter = styled.div`

`
const OptionFilter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`

const Filter = styled.div`
  font-size: 18px;
`

const Refresh = styled.div`
  font-size: 14px;
  text-decoration: underline;
  color: #bbb;
`

const ProductInfo = styled.div`
  margin-top: 40px;
  font-size: 16px;
`

const CheckBox = styled.div`

`

const CategoryList = styled.div`

`