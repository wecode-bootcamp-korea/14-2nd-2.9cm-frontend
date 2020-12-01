import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import styled, { StyleSheetManager } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Login() {
  return (
    <>
      <Nav />
      <LoginWrapper>
        <LoginContentsWrapper>
          <LoginHeading>로그인</LoginHeading> 
          <LoginBorder></LoginBorder>
          <LoginContents>
            <LoginId placeholder='아이디 (이메일)'></LoginId>
            <PasswordId placeholder='비밀번호'></PasswordId>
            <LoginButton>로그인하기</LoginButton>
            <SocialLogin>
              <SocialLoginHeading>SNS계정으로 로그인하기</SocialLoginHeading>
              <SocialLoginIcons>
              <FontAwesomeIcon className='facebookIcon' icon={faFacebook} />
                <FontAwesomeIcon className='facebookIcon' icon={faFacebook} />
                <FontAwesomeIcon className='facebookIcon' icon={faFacebook} />
                <FontAwesomeIcon className='facebookIcon' icon={faFacebook} />
              </SocialLoginIcons>
              <SignUpButton>계정이 없으신가요? 간편가입하기</SignUpButton>
              <LoginEtc>
                <FindId>아이디 (이메일) 찾기</FindId>
                <FindPassword>비밀번호 찾기</FindPassword>
                <CheckOrder>2018년 2월 이전 비회원 주문조회</CheckOrder>
              </LoginEtc>
            </SocialLogin>
            </LoginContents>
          </LoginContentsWrapper>
        </LoginWrapper>
      <Footer />
    </>
  )
}

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 620px;
`;

const LoginHeading = styled.div`
  margin: 30px auto;
  font-size: 44px;
`;

const LoginBorder = styled.div`
  border: 2px solid #000;
`

const LoginContents = styled.div`
  display: flex;
  flex-direction: column;
`

const LoginId = styled.input`
  height: 48px;
  border: 1px solid #ddd;
  font-size: 16px;
  padding: 0 14px;
  margin: 20px 0;
`

const PasswordId = styled.input`
  height: 48px;
  border: 1px solid #ddd;
  font-size: 16px;
  padding: 0 14px;
  margin-bottom: 20px;
`

const LoginButton = styled.button`
  background-color: #000;
  color: #fff;
  height: 56px;
  font-size: 16px;
  margin-bottom: 20px;
`

const SocialLogin = styled.div`
`

const SocialLoginHeading = styled.div`
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  margin: 10px 0 20px 0;
`

const SocialLoginIcons = styled.div`
  display: flex;
  justify-content: center;

  svg {
    font-size: 44px;
    margin: 10px;
  }
`

const SignUpButton = styled.button`
  height: 56px;
  width: 100%;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 28px;
  margin-bottom: 20px;
`

const LoginEtc = styled.div`
  display: flex;
  text-align: center;
  font-size: 12px;
`

const FindId = styled.div`
  display: inline-block;
  padding: 20px 0;
  height: 19px;
  margin: 0 8px;
`

const FindPassword = styled.div`
  display: inline-block;
  padding: 20px 0;
  margin: 0 8px;
`

const CheckOrder = styled.div`
  display: inline-block;
  padding: 20px 0;
  color: #bbb;
  margin: 0 8px;

`