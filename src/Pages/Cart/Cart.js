import React from 'react'
import Nav from '../../Component/Nav/Nav';
import Footer from '../../Component/Footer/Footer';
import { RiChatDeleteLine } from 'react-icons/ri';
import { AiFillPlusCircle, AiFillPauseCircle } from 'react-icons/ai';
import styled from 'styled-components'

export default function Cart() {
  return (
    <>
      <Nav />
      <CartWrapper>
        <CartProgressWrapper>
          <div>01 SHOPPING BAG <span>'{'>'}'</span> </div>
          <div>02 ORDER <span>'{'>'}'</span> </div>
          <div>03 ORDER CONFIRMED</div>
        </CartProgressWrapper>
        <CartContentsWrapper>
          <CartInfo>
            <CartInfoCheckBox
              type='checkbox'
              defaultChecked={false}
            />
            <CartInfoLabel
              for='cb1'
            >
            </CartInfoLabel>
            <ProductInfo>상품정보</ProductInfo>
            <ProductQuantity>수량</ProductQuantity>
            <ProductPrice>주문금액</ProductPrice>
            <ShippingFee>배송비</ShippingFee>
          </CartInfo>
          <CartContents>
            <CartContentsCheckBox
              type='checkbox'
              defaultChecked={false}
            />
            <CartContentsLabel
              for='cb2'
            >
            </CartContentsLabel>
            <ProductDetailWrapper>
              <ProductInfoDetail>
                <ProductInfoImage src='/images/sneakers1.jpg'></ProductInfoImage>
                <ProductDetailContetns>
                  <ProductInfoBrand>호카오네오네</ProductInfoBrand>
                  <ProductInfoName>까만 신발</ProductInfoName>
                  <ProductInfoPrice>199,0000원</ProductInfoPrice>
                  <ProductInfoOption>옵션 : [사이즈] 270</ProductInfoOption>
                </ProductDetailContetns>
              </ProductInfoDetail>
              <CartDeleteButton><RiChatDeleteLine /></CartDeleteButton>
            </ProductDetailWrapper>
            <ProductQuantityCheckWrapper>
              <ProductQuantityCheck>
                <InputQuantity value='1'/>
              </ProductQuantityCheck>
            </ProductQuantityCheckWrapper>
            <ProductPriceDetail>
              <PriceTag>135,000원</PriceTag>
              <BuyButton>BUY NOW</BuyButton>
              <SoldOut>SOLD OUT</SoldOut>
            </ProductPriceDetail>
            <ShippingDetail>
              29CM 무료배송
            </ShippingDetail>
          </CartContents>
        </CartContentsWrapper>
        <ChooseDeleteWrapper>
          <div>
            <SelectDelete>선택상품 삭제</SelectDelete>
            <SoldOutDelete>품절상품 삭제</SoldOutDelete>
          </div>
          <div>
            장바구니는 접속종료 후 60일 동안 보관됩니다.
          </div>
        </ChooseDeleteWrapper>
        <ConfirmPriceWrapper>
          <PriceHeading>
            <div>총 주문금액</div>
            <div>총 배송비</div>
            <div>총 결제금액</div>
          </PriceHeading>
          <CalculatePrice>
            <div>
              <h1>
                199,000원
              </h1>
              <span>
                총 1개
              </span>
            </div>
            <AiFillPlusCircle />
            <div>
              0원
            </div>
            <div>
              <AiFillPauseCircle />
            </div>
            <div>
              199,000원
            </div>
          </CalculatePrice>
        </ConfirmPriceWrapper>
        <div>
          <ChooseShopping>
            <ContinueShoppingButton>CONTINUE SHOPPING</ContinueShoppingButton>
            <CheckoutButton>CHECK OUT</CheckoutButton>
          </ChooseShopping>
        </div>
      </CartWrapper>
      <Footer/>
    </>
  )
}

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

`;

const CartProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  margin: 30px 0;

  span {
    color: #ccc;
    margin: 0 10px;
  }

`

const CartContentsWrapper = styled(CartWrapper)`
  margin: 50px 0;

`

const CartInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  font-size: 18px;
  font-weight: bold;
  border-top: 3px solid black;
  border-bottom: 1px solid #ccc;
  margin: 10px 0;
`

const CartInfoCheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin: 0 20px;
`

const CartInfoLabel = styled.div`
`

const ProductInfo = styled.div`
  display: flex;
  justify-content: center;
  width: 600px;
`

const ProductQuantity = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
`

const ProductPrice = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  
`

const ShippingFee = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
`

const CartContents = styled.div`
  display: flex;
  align-items: center;
  height: 180px;
  width: 100%;
  border-bottom: 1px solid #ddd;
  
`

const CartContentsCheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin: 0 20px;

`

const CartContentsLabel = styled.div`
`

const ProductDetailWrapper = styled.div`
  display: flex;
  border-right: 1px solid #ddd;
  width: 600px;
  height: 180px;

`

const ProductInfoImage = styled.img`
  width: 110px;
  height: 110px;
  margin: auto 20px;
`

const ProductDetailContetns = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  line-height: 30px;

`

const ProductInfoDetail = styled.div`
  display: flex;
  margin-right: 20px;

`

const CartDeleteButton = styled.div`

  svg {
    margin-top: 25px;
    font-size: 40px;
    color: #ddd;
  }
`

const ProductInfoBrand = styled.div`
  font-size: 12px;
`

const ProductInfoName = styled.div`
  font-size: 16px;
  font-weight: bold;
`

const ProductInfoPrice = styled.div`
  font-size: 13px;
  color: #303033;

`

const ProductInfoOption = styled.div`
  font-size: 12px;
  color: #303033;
`

const ProductQuantityCheckWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  font-size: 30px;
  height: 100%;
  border-right: 1px solid #ddd;

  svg {
    font-size: 30px;
    color: #ddd;
  }
`

const ProductQuantityCheck = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  width: 100px;
  color: #ddd;
  
`

const InputQuantity = styled.input`
  text-align: center;
  width: 30px;
  height: 40px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-top: none;
  border-bottom: none;
  margin: 0 10px;
`

const ProductPriceDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  border-right: 1px solid #ddd;
  height: 100%;
`
const PriceTag = styled.div`
  font-size: 22px;
  font-weight: bold;
`

const BuyButton = styled.div`
  font-size: 14px;
  background-color: #000;
  text-align: center;
  padding: 10px;
  margin: 10px 0;
  border-radius: 3px;
  color: #fff;
`

const SoldOut = styled.div`
  display: none;
`

const ShippingDetail = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  font-size: 16px;
  font-weight: bold;
`

const ChooseDeleteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1260px;
  padding: 0 90px;
  font-size: 15px;
  margin-bottom: 60px;
`

const SelectDelete = styled.button`
  width: 130px;
  height: 40px;
  border: 1px solid #bbb;
`

const SoldOutDelete = styled(SelectDelete)`
  margin-left: 10px;
`

const ConfirmPriceWrapper = styled.div`
  border-top: 3px solid #000;
  width: 1260px;
  height: 250px;
`

const PriceHeading = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0 30px 60px;
  font-size: 18px;
  border-bottom: 1px solid #ccc;

  div {
    margin: 0 100px;
  }
`

const CalculatePrice = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1260px;
  padding: 60px 20px 10px 60px;
  font-size: 32px;
  font-weight: bold;
  border-bottom: 1px solid #000;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      margin: 20px 0;
      font-size: 15px;
    }
  }

  div {
    svg {
      transform: rotate(90deg);
    }
  }

`

const ChooseShopping = styled.div`
  margin-bottom: 100px;
`

const ContinueShoppingButton = styled.button`
  width: 400px;
  height: 72px;
  margin-top: 80px;
  background-color: #fff;
  font-weight: bold;
  font-size: 26px;
`

const CheckoutButton = styled(ContinueShoppingButton)`
  margin-left: 10px;
  color: #fff;
  background-color: #000;
`