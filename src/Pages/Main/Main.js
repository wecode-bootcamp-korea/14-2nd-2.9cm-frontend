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

`