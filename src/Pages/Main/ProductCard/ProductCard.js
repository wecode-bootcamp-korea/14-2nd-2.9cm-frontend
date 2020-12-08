import React from 'react'
import styled, { StyleSheetManager } from "styled-components";
import { FaRegHeart } from 'react-icons/fa';
import { VscComment } from 'react-icons/vsc';

export default function ProductCard(props) {

  return (
    <ProductCardWrapper>
      {props.product.map((item, idx) => {
        return (
        <ProductCards key={idx}>
          <ProductImageWrapper>
            <ProductImage onClick={props.goToProductDetail} src={item.image}></ProductImage>
          </ProductImageWrapper>
          <ProductName>{item.brand}</ProductName>
          <ProductNameDetail>{item.name}</ProductNameDetail>
          <ProductPrice>{item.price}</ProductPrice>
          {/* <Percent></Percent> */}
          <ProductSalePrice>{Math.ceil((1-(item.sale_price/item.price))*100)}% <span>{item.sale_price}원</span></ProductSalePrice>
          <span>무료배송</span>
          <ProductReaction>
            <div>
              <FaRegHeart />{item.heartCount}
            </div>
            <div>
              <VscComment />{item.commentCount}
            </div>              
          </ProductReaction>
        </ProductCards>
        )
      })}
      <Mark />
    </ProductCardWrapper>
  )
}

const ProductCardWrapper = styled.div`
  display: inline-block;
  margin: 10px 0;
  padding-left: 30px;
  width: 100%;
  
`

const ProductCards = styled.div`
  display: inline-block;
  margin: 20px 20px 0 0;
  position: relative;

`

const ProductImageWrapper = styled.div`
  overflow: hidden;
`

const ProductImage = styled.img`
  width: 330px;
  height: 330px;
  transition: 0.3s;
  cursor: pointer;  

  &:hover {
    transform: scale(1.2);
  }
  
`

const ProductName = styled.div`
  margin: 10px 0;
  font-size: 13px;
  font-weight: bold;
  text-decoration: underline;

`

const ProductNameDetail = styled.div`
  margin: 10px 0;
  color: #000;
  font-size: 12px;
  
`

const ProductPrice = styled.div`
  margin: 10px 0;
  color: #aaa;
  font-size: 14px;
  font-weight: bold;
  text-decoration: line-through;
  
`

const Percent = styled.div`
  margin-bottom: 5px;
`

const ProductSalePrice = styled.div`
  color: #FF4800;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 16px;

  span {
    color: #000;
  }
`

const ProductReaction = styled.div`
  display: flex;
  margin: 10px 0;

  svg {
    margin-right: 5px;
  }
  div {
    margin-right: 30px;
  }
`

const Mark = styled.div``
