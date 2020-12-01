import React from 'react'
import styled, { StyleSheetManager } from "styled-components";
import { FaRegHeart } from 'react-icons/fa';
import { VscComment } from 'react-icons/vsc';
export default function ProductCard({product}) {

  
  console.log('product >>>>>>>>>>>>>>>>>>>', product)

  return (
    <ProductCardWrapper>
      <ProductCard>
        <ProductImage src={product.productImage}></ProductImage>
        <ProductName>{product.brand}</ProductName>
        <ProductNameDetail>{product.productName}</ProductNameDetail>
        <ProductPrice>{product.productPrice}</ProductPrice>
        <ProductShpping>무료배송</ProductShpping>
        <ProductReaction>
          <HeartIcon>
            <FaRegHeart />{product.heartCount}
          </HeartIcon>
          <CommentIcon>
            <VscComment />{product.commentCount}
          </CommentIcon>              
        </ProductReaction>
      </ProductCard>
    </ProductCardWrapper>
  )
}

const ProductCardWrapper = styled.div`
  margin: 30px 60px 30px 60px;
  width: 330px;
  height: 470px;
  
`

const ProductImage = styled.img`
  width: 330px;
  height: 330px;
`

const ProductName = styled.div`
  text-decoration: underline;
  font-size: 13px;
  font-weight: bold;
  margin: 10px 0;
`

const ProductNameDetail = styled.div`
  font-size: 12px;
  color: #ccc;
  margin: 10px 0;
`

const ProductPrice = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0;
`

const ProductShpping = styled.button`
  border: 1px solid #ddd;
  margin: 10px 0;
`

const ProductReaction = styled.div`
  display: flex;
  margin: 10px 0;

  svg {
    margin-right: 5px;
  }
`

const HeartIcon = styled.div`
  margin-right: 30px;
`

const CommentIcon = styled.div``

