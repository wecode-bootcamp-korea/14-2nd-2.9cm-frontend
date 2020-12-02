import React from "react";
import styled, { StyleSheetManager } from "styled-components";

const paymentList = [
  "신용/체크카드",
  "현대카드",
  "네이버페이",
  "토스",
  "페이코",
  "카카오페이",
  "삼성 페이",
  "SSG 페이",
  "휴대폰결제",
  "실시간계좌이체",
];

export default function Order() {
  return (
    <OrderWrapper>
      <OrderInfoWrapper>
        <Info>
          <div>주문자 정보</div>
          <CheckAuthentication>
            <div>
              정확한 주문자 정보 확인을 위해 <br></br>주문 시 최초 1회
              본인인증이 필요합니다.
            </div>
            <AuthenticationButton>본인인증 하기</AuthenticationButton>
          </CheckAuthentication>
        </Info>
        <div>
          <ShippingInfoHeading>
            <div>배송정보</div>
            <p>
              <span>*</span>표시는 필수입력 항목
            </p>
          </ShippingInfoHeading>
          <div>
            <ShippingSelectTab>
              <PrevShipping>기존 배송지</PrevShipping>
              <NewShippingInput>신규입력</NewShippingInput>
            </ShippingSelectTab>
            <div>
              <Name>
                <div>배송지명</div>
                <Input></Input>
              </Name>
              <EssentialName>
                <div>
                  수령인<span>*</span>
                </div>
                <Input></Input>
              </EssentialName>
              <EssentialName>
                <div>
                  배송지<span>*</span>
                </div>
                <SearchWrapper>
                  <InputWrapper>
                    <ShortInput></ShortInput>
                    <SearchButton>우편번호 검색</SearchButton>
                  </InputWrapper>
                  <ShippingAddressInput></ShippingAddressInput>
                  <ShippingAddressInput placeholder="상세주소 입력"></ShippingAddressInput>
                </SearchWrapper>
              </EssentialName>
              <PhoneNumberFirst>
                <div>
                  연락처1<span>*</span>
                </div>
                <PhoneNumberInput></PhoneNumberInput>-
                <PhoneNumberInput></PhoneNumberInput>-
                <PhoneNumberInput></PhoneNumberInput>
              </PhoneNumberFirst>
              <PhoneNumberSecond>
                <div>연락처2</div>
                <PhoneNumberInput></PhoneNumberInput>-
                <PhoneNumberInput></PhoneNumberInput>-
                <PhoneNumberInput></PhoneNumberInput>
              </PhoneNumberSecond>
              <ShippingDetail>
                <input type="checkbox" defaultChecked={false} />
                <label for="cb2">기본배송지로 등록</label>
                <form>
                  <select name="shippingRequest">
                    <option value="none">
                      배송시 요청사항을 선택해 주세요
                    </option>
                    <option value="1">부재시 문앞에 놓아주세요</option>
                    <option value="2">부재시 경비실에 맡겨주세요</option>
                    <option value="3">부재시 전화 또는 문자 주세요</option>
                  </select>
                </form>
                <div>
                  - 도서산간 지역의 경우 추후 수령 시 추가 배송비가 발생할 수
                  있으며, 해외배송은 불가합니다.<br></br>- 배송지 불분명 및
                  수신불가 연락처 기입으로 반송되는 왕복 택배 비용은 구매자
                  부담으로 정확한 주소 및 통화 가능한 연락처 필수 기입.<br></br>
                  - 대리 주문으로 해외 주소로 발송 전, 주문품 꼭 확인해주세요.
                  오배송 및 불량 교환에 따른 배송비는 국내 택배 비용만
                  지원됩니다.
                </div>
              </ShippingDetail>
            </div>
          </div>
        </div>
        <Info>
          <div>쿠폰 / 마일리지</div>
          <CouponForm>
            <CouponDetail>
              <div>보너스 쿠폰</div>
              <form>
                <select name="couponSelect">
                  <option value="none">사용가능 쿠폰 2장 / 보유 2장</option>
                  <option value="1">
                    GREEN 회원 16% 특별쿠폰 / 최대 5만원 할인 / ~ 2020년 12월
                    31일 23:59분 까지
                  </option>
                  <option value="2">
                    만나서 반가워요! 10% 쿠폰 / 최대 1만원 할인 / ~ 2020년 12월
                    30일 14:00분 까지
                  </option>
                </select>
              </form>
            </CouponDetail>
            <CouponDetail>
              <div>브랜드 쿠폰</div>
              <form>
                <select name="couponSelect">
                  <option value="none">적용 가능한 쿠폰이 없습니다.</option>
                </select>
              </form>
            </CouponDetail>
            <Mileage>
              <div>마일리지</div>
              <SearchWrapper>
                <InputWrapper>
                  <ShortInput></ShortInput>
                  <SearchButton>모두 사용</SearchButton>
                  <p>
                    보유 마일리지 0<span>p</span>
                  </p>
                </InputWrapper>
              </SearchWrapper>
            </Mileage>
            <EtcDetail>
              - 할인쿠폰 제외 상품이 포함되어 있는 경우, 해당 제품을 제외하고
              할인이 적용됩니다.<br></br>- 브랜드쿠폰과 보너스쿠폰은 중복사용이
              불가능합니다.<br></br>- 일부 상품(할인쿠폰제외상품)에는
              보너스쿠폰이 적용되지 않습니다.<br></br>- 쿠폰에 따라 최대 쿠폰
              사용 금액이 제한될 수 있습니다.<br></br>
            </EtcDetail>
          </CouponForm>
        </Info>
        <CheckOutInfo>
          <div>결제방법</div>
          <span>무이자 카드혜택 보기 +</span>
        </CheckOutInfo>
        <SelectPayment>
          {paymentList.map((payment) => {
            return <button>{payment}</button>;
          })}
        </SelectPayment>
        <CheckOutEtc>
          <span>신용/체크카드</span>
          <p>
            MAC 환경에서도 신용카드 결제가 가능합니다.(ISP 결제 제외)<br></br>
            국내 모든 카드 사용이 가능하며 해외에서 발행된 카드는 이용하실수
            없습니다. (해외배송은 불가능합니다)<br></br>
            금요일 오후 6시~ 일요일 주문은 결제 완료 후 취소 요청시 고객센터
            주문취소를 이용하시면 됩니다.<br></br>
          </p>
          <label>공인인증서 안내</label> &nbsp; &nbsp; &nbsp; &nbsp;
          <label>안심클릭 의무 사용</label>
        </CheckOutEtc>
      </OrderInfoWrapper>
      <OrderCommodity>
        <OrderCommodityTitle>주문상품 정보 / 총 1개</OrderCommodityTitle>
        <OrderCommodityDetail>
          <img src="/images/sneakers1.jpg" alt="신발"></img>
          <p>
            <span>호카오네오네</span>
            까만신발
            <label>199,000원 / 수량 3개</label>
          </p>
        </OrderCommodityDetail>
        <OrderCommodityInfo>
          <InfoWrapper>
            <span>결제금액</span>
            <p>199,000원</p>
          </InfoWrapper>
          <InfoWrapper>
            <span>배송비</span>
            <p>0원</p>
          </InfoWrapper>
          <InfoWrapper>
            <span>마일리지 사용</span>
            <p>0원</p>
          </InfoWrapper>
          <InfoWrapper>
            <span>쿠폰 사용</span>
            <p>0원</p>
          </InfoWrapper>
          <TotalPrice>
            <TotalPriceCheck>총 결제금액</TotalPriceCheck>
            <ShowTotalPrice>199,000원</ShowTotalPrice>
          </TotalPrice>
          <div>
            <input type="checkbox" defaultChecked={false} />
            <label for="cb3">
              주문하실 상품 및 결제, 주문정보 확인하였으며, 이에 동의합니다.
              (필수)
            </label>
          </div>
          <CheckOutButton>CHECK OUT</CheckOutButton>
        </OrderCommodityInfo>
      </OrderCommodity>
    </OrderWrapper>
  );
}

const OrderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 50px;
  box-sizing: border-box;
`;

const OrderInfoWrapper = styled.div`
  width: 60%;
  margin-right: 20px;
`;

const Info = styled.div`
  border-top: 4px solid #000;

  div {
    padding: 20px 0;
    font-size: 18px;
    font-weight: bold;
  }
`;

const CheckAuthentication = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 10px;
  border-top: 1px solid #ddd;
  border-bottom: 4px solid #000;

  div {
    font-size: 14px;
    font-weight: normal;
    color: #5d5d5d;
  }
`;

const AuthenticationButton = styled.button`
  width: 335px;
  height: 48px;
  background-color: #375fff;
  color: #fff;
  outline: none;
  font-weight: bold;
  outline: none;
  border: none;
  margin: 20px 0;
`;

const ShippingInfoHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  border-top: 4 solid #000;
  font-size: 12px;
  border-bottom: 1px solid #ddd;

  div {
    padding: 20px 0;
    font-size: 18px;
    font-weight: bold;
  }
  p {
    span {
      color: #ff4800;
    }
  }
`;

const ShippingSelectTab = styled.div`
  display: flex;
  margin-bottom: 30px;
  border-bottom: 1px solid #ddd;
`;

const PrevShipping = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 167px;
  height: 53px;
  background-color: #eee;
  color: #bbb;
  font-size: 13px;
`;

const NewShippingInput = styled(PrevShipping)`
  background-color: #fff;
  color: black;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 500px;
  height: 40px;
  border: 1px solid #ddd;
  margin: 10px 30px;
`;

const EssentialName = styled(Name)`
  span {
    color: #ff4800;
    padding: 0 4px;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ShortInput = styled(Input)`
  width: 250px;
`;

const ShippingAddressInput = styled(Input)`
  margin-right: 10px;
`;

const SearchButton = styled.button`
  width: 100px;
  height: 42px;
  border-radius: 20px;
  background-color: #eee;
  border: none;
  margin-right: 20px;
`;

const PhoneNumberFirst = styled(EssentialName)`
  margin: 10px 0;

  div {
    margin: 10px 13px 10px 0;
  }
`;

const PhoneNumberInput = styled(Input)`
  width: 102px;
  margin: 0 10px;
`;

const PhoneNumberSecond = styled(PhoneNumberFirst)`
  margin: 10px 0;

  div {
    margin-right: 25px;
  }
`;

const ShippingDetail = styled.div`
  margin-left: 80px;

  input {
    width: 20px;
    height: 20px;
  }

  label {
    margin-left: 10px;
  }

  form {
    margin-top: 10px;
    margin-left: 3px;

    select {
      width: 510px;
      height: 40px;
      border: 1px solid #ddd;
      margin-bottom: 20px;
      padding: 0 10px;
    }
  }

  div {
    color: #686868;
    font-size: 12px;
    line-height: 24px;
    margin-bottom: 30px;
  }
`;

const CouponForm = styled.div`
  font-size: 15px;
  border-top: 1px solid #ddd;
`;

const CouponDetail = styled(ShippingDetail)`
  display: flex;
  height: 30px;
  margin: 0px;

  form {
    margin-left: 30px;
  }

  select {
    margin: 0px;
    border-bottom: none;
  }

  div {
    font-size: 15px;
    font-weight: normal;
  }
`;

const Mileage = styled(Name)`
  height: 60px;

  div {
    font-size: 15px;
    font-weight: normal;
    color: #686868;
    margin-right: 20px;
  }

  p {
    font-size: 13px;
    color: #686868;
  }

  span {
    color: #000;
    font-weight: bold;
  }
`;

const EtcDetail = styled.div`
  color: #686868;
  font-size: 12px !important;
  line-height: 24px;
  padding-top: 0px;
  margin-left: 100px;
  margin-bottom: 30px;
`;

const CheckOutInfo = styled(Info)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 4px solid #000;
  border-bottom: 1px solid #ddd;

  span {
    font-size: 14px;
  }
`;

const SelectPayment = styled.div`
  padding-top: 30px;

  button {
    width: 200px;
    height: 45px;
    background-color: #fff;
    color: #686868;
    border-radius: 20px;
    border: 1px solid #ddd;
    margin: 10px 20px 10px 20px;

    &:hover {
      color: #fff;
      background-color: #000;
      cursor: pointer;
    }
  }
`;

const CheckOutEtc = styled.div`
  margin-top: 30px;
  font-size: 14px;
  span {
    font-weight: bold;
  }
  p {
    line-height: 30px;
  }

  label {
    text-decoration: underline;
    color: #aaa;
  }
`;

const OrderCommodity = styled.div`
  position: sticky;
  top: 0px;
  width: 40%;
  height: 100%;
  border: 4px solid #000;
  padding: 0 20px;
`;

const OrderCommodityTitle = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  padding: 20px 0;
`;

const OrderCommodityDetail = styled.div`
  display: flex;
  border-top: 4px solid #000;
  border-bottom: 1px solid #ddd;
  padding: 20px 0;

  img {
    width: 170px;
    height: 170px;
    margin-right: 20px;
    margin-bottom: 30px;
  }

  p {
    display: flex;
    flex-direction: column;
    line-height: 30px;
    font-size: 16px;

    span {
      font-size: 12px;
      text-decoration: underline;
    }

    label {
      margin-top: 30px;
      font-size: 13px;
      color: #303033;
      font-weight: normal;
    }
  }
`;

const OrderCommodityInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;

  input {
    width: 26px;
    height: 26px;
    margin-right: 20px;
  }

  div {
    display: flex;
    align-items: center;
  }

  label {
    color: #303033;
    line-height: 30px;
    font-size: 15px;
    font-weight: normal;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: normal;
  margin: 10px 0;

  span {
    color: #303033;
    font-size: 14px;
  }

  p {
    font-size: 17px;
  }
`;

const TotalPrice = styled(InfoWrapper)`
  div {
    display: flex;
    align-items: center;
  }
`;

const TotalPriceCheck = styled.div`
  color: #303033;
  font-size: 14px;
  font-weight: bold;
`;

const ShowTotalPrice = styled.div`
  color: #ff4800;
  font-size: 34px;
  font-weight: bold;
`;

const CheckOutButton = styled.button`
  width: 300px;
  height: 70px;
  margin: 40px auto;
  background-color: #000;
  color: #fff;
  font-size: 26px;
`;
