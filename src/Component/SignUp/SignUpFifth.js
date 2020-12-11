import React, { useEffect } from "react";
import styled from "styled-components";
import Line from "./Components/SignUpFifthStep";
import {useState} from "react";
function SignUpFifth(props) {
  const [dataBox, setDataBox] = useState();
  const [certificationNumber, setCertificationNumber] = useState();
  const [inputCertificationNumber, setInputCertificationNumber] = useState("");
  const data = [
    {id: 1,
    info: "이름",
    placeholder: "이름",
    name: "Name"},
    {id: 2,
    info: "생년월일",
    placeholder: "ex)1999-12-25",
    name: "Birth"},
    {id: 3,
    info: "성별",
    placeholder: "남 or 여",
    name: "Gender"},
    {id: 4,
    info: "휴대폰번호",
    placeholder: "'-'없이 숫자만 입력",
    name: "PhoneNumber"},
  ]
    const messageData = [
      {id: 5,
      info: "문자인증번호",
      placeholder: "ex)000000",
      name: "CertificationNumber"}
    ]
  const handleData = (e) => {
    setDataBox({...dataBox,
      [e.target.name] : e.target.value})
  }
  const API = "http://13.125.3.178:8000/user/sms";
  const certification = () => {
    fetch(API, {
      method: "POST",
      body: JSON.stringify({
        "name": dataBox?.Name,
        "dob": dataBox?.Birth,
        "gender" : dataBox?.Gender,
        "phone": dataBox?.PhoneNumber,
      })
    }).then(res => res.json())
    .then(res => {
      console.log("Message:",res);
    })
  }
  const handleInputCertification = (e) => {
    setInputCertificationNumber(e.target.value);
    setDataBox({...dataBox,
      [e.target.name] : e.target.value});
  }

  const APISECOND = "http://13.125.3.178:8000/user/details";
  const goToMain = () => {
    fetch(APISECOND, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        "name": dataBox?.Name,
        "dob": dataBox?.Birth,
        "auth_number": dataBox?.CertificationNumber,
        "gender" : dataBox?.Gender,
        "phone": dataBox?.PhoneNumber,
      })
    }).then(res => res.json())
    .then(res => {
      console.log("Message:",res);
      if(res.message === "SUCCESS") {
        alert("본인인증이 완료되었습니다.");
        props.history.push("/");
      } else {
        alert("인증번호를 다시 입력해주세요.");
      }
      })
  }

  return (
    <SignUpWrapper>
      <Box>
        <SimpleSignUp>
          본인인증
        </SimpleSignUp>
        <BorderBox>
          <Line
          />
          <TextWrapper>
            {data.map(el => 
              <Text key={el.id}>
              <UserInfo>{el.info}</UserInfo>
              <UserInfoInput 
              type="text" 
              placeholder={el.placeholder}
              name={el.name}
              onChange={handleData}
              >
              </UserInfoInput>
              </Text>
            )}
            <GoToCertification
              type="button"
              onClick={certification}>
              문자인증 번호받기
            </GoToCertification>
            {messageData.map(el => 
              <Text key={el.id}>
              <UserInfo>{el.info}</UserInfo>
              <UserInfoInput 
              type="text" 
              placeholder={el.placeholder}
              name={el.name}
              onChange={handleInputCertification}
              >
              </UserInfoInput>
              </Text>
            )}
          </TextWrapper>
          <GoToShopping
          type="button"
          onClick={goToMain} >
            쇼핑하러 가기
          </GoToShopping>
        </BorderBox>
      </Box>
    </SignUpWrapper>
  )
}

export default SignUpFifth;

const SignUpWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 400px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const  SimpleSignUp = styled.div`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 44px;
  text-align: center;
`;

const BorderBox = styled.div`
  position: relative;
  display: block;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 428px;
  padding-top: 18px;
`;

const TextWrapper = styled.div`
  margin: 0 0 32px 0;
  padding-top: 20px;
  border-top: 4px solid #f4f4f4;
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 13px;
  line-height: 30px;
  padding-top: 13px;
`;

const UserInfo = styled.span`
  width: 23%;
  height: 42px;
  padding-top: 6px;
`;

const UserInfoInput = styled.input`
  width: 77%;
  height: 42px;
  padding-left: 10px;
  `;

const GoToShopping = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:48px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #ffffff;
  background: #000000;
  border: 0px solid #d4d4d4;
  border-radius: 2px;
  cursor: pointer;
`;

const GoToCertification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:48px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #ffffff;
  background: #000000;
  border: 0px solid #d4d4d4;
  border-radius: 2px;
  cursor: pointer;
`;