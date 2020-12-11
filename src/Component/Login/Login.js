import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import styled, { StyleSheetManager } from "styled-components";
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

export default function Login() {
  let history = useHistory();

  const responseGoogle = (response) => {
    console.log(response.accessToken, "success");
    
    fetch("http://192.168.200.117:8000/user/login/google", {
      method: "POST",
      headers: {
        Authorization: response.accessToken,
      },
    })
    .then((res) => res.json())
    .then((res) => {
      if(res.access_token) {
        localStorage.setItem("token", res.access_token);
      }
    })

    history.push("/");

  } 

  const failResponseGoogle = (response) => {
    console.log(response, "fail");
  }

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
            <div>
              <SocialLoginHeading>SNS계정으로 로그인하기</SocialLoginHeading>
              <SocialLoginIcons>
                <GoogleLogin 
                  clientId="977684250755-p43j7e34c5m3a0vfkhdpj1qkmuh8nfd2.apps.googleusercontent.com"
                  buttonText=""
                  onSuccess={responseGoogle}
                  onFailure={failResponseGoogle}
                  cookiePolicy={'single_host_origin'}
                />            
              </SocialLoginIcons>
              <SignUpButton>계정이 없으신가요? 간편가입하기</SignUpButton>
              <LoginEtc>
                <FindId>아이디 (이메일) 찾기</FindId>
                <FindPassword>비밀번호 찾기</FindPassword>
                <CheckOrder>2018년 2월 이전 비회원 주문조회</CheckOrder>
              </LoginEtc>
            </div>
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
  margin: 20px 0 20px 0;
  padding: 0 14px;
  border: 1px solid #ddd;
  font-size: 16px;

`

const PasswordId = styled(LoginId)``

const LoginButton = styled.button`
  height: 56px;
  margin-bottom: 20px;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  
`

const SocialLoginHeading = styled.div`
  text-align: center;
  margin: 10px 0 20px 0;
  font-size: 16px;
  font-weight: bold;
  
`

const SocialLoginIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;

  div {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    border-radius: 50% !important;
  }

  button {

    width: 44px;
    height: 44px;
    margin: 0 10px 20px 5px;
    border-radius: 50% !important;
    text-align: center !important;
    
  }
`

const SignUpButton = styled.button`
  height: 56px;
  width: 100%;
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 28px;
  
`

const LoginEtc = styled.div`
  display: flex;
  text-align: center;
  font-size: 12px;

`

const FindPassword = styled.div`
  display: inline-block;
  margin: 0 8px;
  padding: 20px 0;
  
`

const FindId = styled(FindPassword)`
  height: 19px;
  
`

const CheckOrder = styled.div`
  display: inline-block;
  margin: 0 8px;
  padding: 20px 0;
  color: #bbb;
  

`