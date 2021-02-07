import React, { useEffect, useState } from 'react';
import styled, { StyleSheetManager } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';

export default function Footer() {
  const [footerData, setFooterData] = useState([]);

  useEffect(() => {
    fetch('/data/footerData.json')
      .then(response => response.json())
      .then(response => {
        setFooterData(response.footerdata);
      });
  }, []);

  return (
    <FooterWrapper>
      <FooterTop>
        <TopBorder></TopBorder>
        <FooterPhoneNumber>1644-0560</FooterPhoneNumber>
        <FooterOpeningHours>
          AM 10:00 ~ PM 05:00 Off-time PM 12:00 ~ PM 02:00<br></br>DAY OFF
          (SATURDAY. SUNDAY, HOLIDAY)
        </FooterOpeningHours>
        <FooterIconsWrapper>
          <FaqIcon>FAQ</FaqIcon>
          <div>
            <FooterIcon>
              <FontAwesomeIcon icon={faFacebook} />
              <FaInstagramSquare />
              <AiFillGoogleCircle />
            </FooterIcon>
          </div>
        </FooterIconsWrapper>
      </FooterTop>
      <FooterMiddle>
        <FooterMiddleLeft>
          <ul>
            {/* <h2>NOTICE</h2>
            {footerMiddleLeft.map((data) => {
              return (
                <li>{data}</li>
              )
            })} */}
            <h2>NOTICE</h2>
            <li>[공지] SKT 간편본인확인 서비스 순단 발생 안내</li>
            <li>[공지] iOS 10 이하 버전 지원 중단 안내</li>
            <li>[공지] 29CM 서비스 리뉴얼 예정 사전 공지</li>
            <li>[공지] 개인정보 처리방침 변경 사전 안내</li>
            <li>[공지] 개인정보 처리방침 변경 사전 안내</li>
          </ul>
        </FooterMiddleLeft>
        <FooterMiddleRight>
          <ul>
            {/* {footerMiddleRight.map((data) => {
                return (
                  <li>{data}</li>
                )
              })} */}
          </ul>
          <ul>
            <h2>MY ORDER</h2>
            <li>취소/교환/반품 내역</li>
            <li>상품리뷰 내역</li>
            <li>증빙서류발급</li>
          </ul>
          <ul>
            <h2>MY ACCOUNT</h2>
            <li>회사정보수정</li>
            <li>회원등급</li>
            <li>마일리지현황</li>
            <li>쿠폰</li>
          </ul>
          <ul>
            <h2>HELP</h2>
            <li>1:1 상담내역</li>
            <li>상품 Q&A 내역</li>
            <li>공지사항</li>
            <li>FAQ</li>
            <li>고객의 소리</li>
          </ul>
        </FooterMiddleRight>
      </FooterMiddle>
      <FooterBottom>
        <FooterBottomLeft>
          <ul>
            <h2>개인정보처리방침</h2>이용약관
            <li>
              상호명(주)에이플러스비사업장소재지서울특별시 강남구 선릉로93길 35
              나라키움 역삼B빌딩 4층팩스070-8622-7737사업자등록번호101-86-64617
            </li>
            <li>통신판매업신고2019-서울강남-02774 </li>
            <li>
              고객센터1644-0560평일 10:00 ~ 17:00 / Off-time 12:00 ~ 14:00
              (토/일/공휴일
              휴무)이메일customer@29cm.co.kr대표이사윤자영개인정보책임자신재홍호스팅서비스(주)에이플러스비
            </li>
          </ul>
        </FooterBottomLeft>
        <FooterBottomRight>
          <FontAwesomeIcon icon={faFacebook} />
          <FaInstagramSquare />
          <AiFillGoogleCircle />
        </FooterBottomRight>
      </FooterBottom>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  width: 100%;
  padding: 0 50px;
`;

const FooterTop = styled.div`
  width: 100%;
  height: 149px;
`;

const TopBorder = styled.div`
  border: 2px solid #000;
  width: 50px;
  margin-bottom: 20px;
`;

const FooterPhoneNumber = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FooterOpeningHours = styled.div`
  font-size: 12px;
  color: grey;
  line-height: 20px;
`;

const FooterIconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FaqIcon = styled.div`
  display: inline-block;
  width: 67px;
  height: 27px;
  color: #fff;
  padding-left: 10px;
  line-height: 27px;
  background-color: #303033;
  border-radius: 5px;
  margin: 10px 0;
`;

const FooterIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 36px;

  svg {
    margin-right: 10px;
  }
`;

const FooterMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #eee;
  margin-top: 30px;
  width: 100%;
  height: 177px;

  ul {
    font-size: 13px;
    font-weight: bold;
    h2 {
      margin: 15px 0 10px 0;
    }
    li {
      font-size: 12px;
      font-weight: normal;
      line-height: 24px;
    }
  }
`;

const FooterMiddleLeft = styled.div``;
const FooterMiddleRight = styled.div`
  display: flex;

  ul {
    margin-right: 70px;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 111px;
  border-top: 1px solid #eee;
`;

const FooterBottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 899px;

  ul {
    font-size: 12px;

    h2 {
      display: inline-block;
      margin: 10px 0;
      border-right: 1px solid #ddd;
      padding-right: 10px;
      margin-right: 10px;
      font-weight: bold;
    }
    li {
      line-height: 20px;
      font-size: 10px;
    }
  }
`;

const FooterBottomRight = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  svg {
    font-size: 26px;
    margin-right: 5px;
    color: #bbb;
  }
`;
