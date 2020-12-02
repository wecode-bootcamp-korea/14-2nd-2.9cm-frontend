import React, { useState, useEffect } from 'react';
import styled, { StyleSheetManager } from "styled-components";
import Nav from '../../Component/Nav/Nav';
import Footer from '../../Component/Footer/Footer';
import { FaRegHeart } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { VscComment } from 'react-icons/vsc';
import ProductCard from './ProductCard/ProductCard';
// import ProductCard from './ProductCard/ProductCard';

export default function Main() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("/data/productData.json")
      .then((response) => response.json())
      .then((response) => {
        setProductData(response.data)
      })
  })

  // console.log('productData >>>>>>>>>>>> ', productData);

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
          <CategoryOptionFilter>
            <ProductInfo>
              <ProductInfoHeading>상품정보</ProductInfoHeading>
              <FreeShipping>
                <Shipping
                type='checkbox'
                defaultChecked={false}
                />
                <PriceLabel
                  for='cb1'
                >
                  무료배송
                </PriceLabel>
              </FreeShipping>
              <OnSale>
                <Shipping
                type='checkbox'
                defaultChecked={false}
                />
                <PriceLabel
                  for='cb2'
                >
                  할인상품만
                </PriceLabel>
              </OnSale>
              <SoldOut>
                <Shipping
                type='checkbox'
                defaultChecked={false}
                />
                <PriceLabel
                  for='cb3'
                >
                  품절상품 제외
                </PriceLabel>
              </SoldOut> 
            </ProductInfo>
            <PriceList>
              <PriceListHeading>가격대</PriceListHeading>
              <PriceWidth>
                <Price
                type='radio'
                defaultChecked={false}
                />
                <PriceLabel
                  for='cb1'
                >
                  전체 가격
                </PriceLabel>
              </PriceWidth>
              <PriceWidth>
                <Price
                type='radio'
                defaultChecked={false}
                />
                <PriceLabel
                  for='cb2'
                >
                  0 ~ 10,000원
                </PriceLabel>
              </PriceWidth>
              <PriceWidth>
                <Price
                type='radio'
                defaultChecked={false}
                />
                <PriceLabel
                  for='cb3'
                >
                  10,000원 ~ 50,000원 
                </PriceLabel>
              </PriceWidth>
              <PriceWidth>
                <Price
                type='radio'
                defaultChecked={false}
                />
                <PriceLabel
                  for='cb4'
                >
                  50,0000원 ~ 100,0000원
                </PriceLabel>
              </PriceWidth>
              <PriceWidth>
                <Price
                type='radio'
                defaultChecked={false}
                />
                <PriceLabel
                  for='cb5'
                >
                  100,0000원 ~ 20,0000원
                </PriceLabel>
              </PriceWidth>
            </PriceList>
            <BrandListWrapper>
              <BrandsHeading>브랜드</BrandsHeading>
              <SearchBox></SearchBox>
              <BrandList>
                <Brand
                  type='checkbox'
                  defaultChecked={false}
                  />
                  <BrandLabel
                    for='cb1'
                  >
                    나이키 (59)
                  </BrandLabel>
                </BrandList>
                <BrandList>
                <Brand
                  type='checkbox'
                  defaultChecked={false}
                  />
                  <BrandLabel
                    for='cb1'
                  >
                    아디다스 (36)
                  </BrandLabel>
                </BrandList>
                <BrandList>
                <Brand
                  type='checkbox'
                  defaultChecked={false}
                  />
                  <BrandLabel
                    for='cb1'
                  >
                    뉴발란스 (88)
                  </BrandLabel>
                </BrandList>
                <BrandList>
                <Brand
                  type='checkbox'
                  defaultChecked={false}
                  />
                  <BrandLabel
                    for='cb1'
                  >
                    반스 (21)
                  </BrandLabel>
                </BrandList>
                <BrandList>
                <Brand
                  type='checkbox'
                  defaultChecked={false}
                  />
                  <BrandLabel
                    for='cb1'
                  >
                    컨버스 (8)
                  </BrandLabel>
                </BrandList>
            </BrandListWrapper>
          </CategoryOptionFilter>
        </CategoryOption>
        <CategoryList>
          <ListFilterWrapper>
            <ListFilter>
              <ListFilterAll>
                전체
              </ListFilterAll>
              <ListFilterOne>
                하이탑
              </ListFilterOne>
              <ListFilterTwo>
                로우탑
              </ListFilterTwo>
              <ListFilterThree>
                슬립온
              </ListFilterThree>
              <ListFilterFour>
                런닝화
              </ListFilterFour>
            </ListFilter>
            <ListFilterButton>
              추천순
            </ListFilterButton>
          </ListFilterWrapper>
        
          {/* {!!productData.length > 0 && productData.map((product) => {
            return (
              <ProductCard key={product.id} id={product.id} product={product}/>
            )
          })} */}
          <ProductCards>
            <ProductImage src='/images/sneakers1.jpg'></ProductImage>
            <ProductName>호카오네오네</ProductName>
            <ProductNameDetail>HOKA ONE ONE BONDI 7 WIDE BLACK / 1110530-BBLC</ProductNameDetail>
            <ProductPrice>199,000원</ProductPrice>
            <ProductShpping>무료배송</ProductShpping>
            <ProductReaction>
              <HeartIcon>
                <FaRegHeart />626
              </HeartIcon>
              <CommentIcon>
                <VscComment />37
              </CommentIcon>              
            </ProductReaction>
          </ProductCards>
          <PageChangeWrapper>
            <PageChange>
              1 2 3 4 5 6 <FaArrowRight />
            </PageChange>
          </PageChangeWrapper>
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
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
`

const ProductInfoHeading = styled.div``

const FreeShipping = styled.div`
  margin: 10px 0;
  font-weight: normal;
`
const OnSale = styled.div`
  margin: 10px 0;
  font-weight: normal;
`
const SoldOut = styled.div`
  margin: 10px 0;
  font-weight: normal;
`

const PriceLabel = styled.label`
  margin-left: 5px;
  font-size: 13px;
`

const Shipping = styled.input``

const PriceList = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding: 30px 0 20px 0;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
`

const PriceListHeading = styled.div``

const PriceWidth = styled.div`
  margin: 8px 0;
  font-size: 12px;
  font-weight: normal;
`

const Price = styled.input``

const BrandListWrapper = styled.div`
  margin: 30px 0 60px 0;
  font-size: 16px;
  font-weight: bold;
`

const BrandsHeading = styled.div`
  margin: 40px 0 20px 0;
`

const SearchBox = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  margin: 10px 0;
`

const BrandList = styled.div`
`

const Brand = styled.input`
  margin: 10px 0;
`

const BrandLabel = styled.label`
  margin-left: 5px;
  font-size: 13px;
  font-weight: normal;
`

const CategoryList = styled.div`
  width: 100%;
  margin-right: 100px;
  box-sizing: border-box;
`

const ListFilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  margin: 30px 50px 0 60px;
  border: 1px solid #ddd;
  font-size: 14px;
  color: #bbb;

`

const ListFilter = styled.div`
  display: flex;
  align-items: center;
`

const ListFilterAll = styled.div`
  margin: 0 20px;
  padding-right: 20px;
  border-right: 1px solid #bbb;
  font-weight: bold;
  color: #000;
`

const ListFilterOne = styled.div`
  margin: 0 20px;
  padding-right: 20px;
  border-right: 1px solid #bbb;
`

const ListFilterTwo = styled.div`
  margin: 0 20px;
  padding-right: 20px;
  border-right: 1px solid #bbb;
`

const ListFilterThree = styled.div`
  margin: 0 20px;
  padding-right: 20px;
  border-right: 1px solid #bbb;
`

const ListFilterFour = styled.div`
  margin: 0 20px;
  padding-right: 20px;
  border-right: 1px solid #bbb;
`

const ListFilterButton = styled.button`
  border: none;
  text-align: center;
  height: 100%;
  padding: 0 30px;
  border-left: 1px solid #ddd;
`

// 

const ProductCards = styled.div`
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

const PageChangeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`

const PageChange = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: 48px;
  margin-right: 20px;
  width: 300px;

  svg {
    font-size: 28px;
  }
`
