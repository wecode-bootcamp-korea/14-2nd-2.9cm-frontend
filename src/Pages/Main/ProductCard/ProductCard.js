import React from 'react'
import styled, { StyleSheetManager } from "styled-components";
import { FaRegHeart } from 'react-icons/fa';
import { VscComment } from 'react-icons/vsc';

export default function ProductCard(props) {

  const {
    image,
    brand,
    name,
    price,
    heartCount,
    commentCount
  } = props.product;

  return (

    <ProductCardWrapper>
      <div>
        <ProductImage src={image}></ProductImage>
        <ProductName>{brand}</ProductName>
        <ProductNameDetail>{name}</ProductNameDetail>
        <ProductPrice>{price}</ProductPrice>
        <span>무료배송</span>
        <ProductReaction>
          <div>
            <FaRegHeart />{heartCount}
          </div>
          <div>
            <VscComment />{commentCount}
          </div>              
        </ProductReaction>
      </div>
    </ProductCardWrapper>
  )
}

const ProductCardWrapper = styled.div`
  display: inline-block;
  margin: 10px 0;
  padding-left: 30px;
  
`

const ProductImage = styled.img`
  width: 330px;
  height: 330px;
  
`

const ProductName = styled.div`
  margin: 10px 0;
  font-size: 13px;
  font-weight: bold;
  text-decoration: underline;

`

const ProductNameDetail = styled.div`
  margin: 10px 0;
  color: #ccc;
  font-size: 12px;
  
`

const ProductPrice = styled.div`
  margin: 10px 0;
  font-size: 14px;
  font-weight: bold;
  
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
