/* eslint-disable no-lone-blocks */
import React from 'react';
import styled from 'styled-components';
import Line2 from './Components/SignUpSecondStep';
import Line3 from './Components/SignUpThirdStep';
import { useState, useEffect } from 'react';

function SignUpChild(props) {
  const [id, setId] = useState();
  const [userInput, setUserInput] = useState('');
  const [userInputPw, setUserInputPw] = useState('');
  const [userInputRePw, setUserInputRePw] = useState('');
  const [checkPwLength, setIsPwLengthValidation] = useState(false);
  const [checkPwEnglish, setCheckPwEnglish] = useState(false);
  const [checkPwNumber, setCheckPwNumber] = useState(false);
  const [isMatchPassword, setIsMatchPassword] = useState(false);
  const [res, setRes] = useState('');
  const [idValue, setIdValue] = useState('');

  const handleInputId = event => {
    setUserInput(event.target.value);
    if (userInput) {
      const idValidation = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (idValidation.test(event.target.value)) {
        setId(true);
      } else {
        setId(false);
      }
    }
  };
  const handleInputPw = event => {
    setUserInputPw(event.target.value);
    const checkNum = /[0-9]/;
    const checkEng = /[a-zA-Z]/;
    const checkLength =
      event.target.value?.length > 7 && event.target.value?.length < 21;
    checkLength
      ? setIsPwLengthValidation(true)
      : setIsPwLengthValidation(false);
    checkNum.test(event.target.value)
      ? setCheckPwNumber(true)
      : setCheckPwNumber(false);
    checkEng.test(event.target.value)
      ? setCheckPwEnglish(true)
      : setCheckPwEnglish(false);
  };

  const handleInputRePw = event => {
    setUserInputRePw(event.target.value);
    userInputPw === event.target.value
      ? setIsMatchPassword(true)
      : setIsMatchPassword(false);
  };

  const goToThird = () => {
    if (id) {
      props.push('/signUp3');
    }
    setIdValue(userInput);
  };

  const API = 'http://3.34.44.13:8000/user/signup';

  const goToFourth = () => {
    console.log(userInput);

    fetch(API, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        email: 'polepole0004@naver.com',
        password: userInputPw,
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log('2', res);
        localStorage.setItem('token', res.access_token);
        setRes(res);
        if (res.message === 'SUCCESS') {
          props.push('/signUp4');
        }
      });
  };

  const { placeholder, alt } = props.data;
  return (
    <SignUpWrapper>
      <Box>
        <SimpleSignUp>간편가입</SimpleSignUp>
        <Box2>
          {props.title === '아이디' ? <Line2 /> : <Line3 />}
          <Text>
            로그인에 사용할
            <br />
            {props.title}를 입력해주세요.
          </Text>
          {props.title === '비밀번호' ? (
            props.data.map(el => (
              <div key={el.id}>
                <InputId>
                  <Input
                    type={props.type}
                    alt={alt}
                    value={props.inputId}
                    placeholder={el.placeholder}
                    onChange={
                      el.handleInput === 'handleInputPw'
                        ? handleInputPw
                        : handleInputRePw
                    }
                  />
                </InputId>
                <Validation
                  id={
                    userInputRePw
                      ? isMatchPassword
                      : checkPwEnglish && checkPwNumber && checkPwLength
                  }
                >
                  {el.validationText.map(text => (
                    <span key={props.data.id}>{text}</span>
                  ))}
                </Validation>
              </div>
            ))
          ) : (
            <>
              <InputId>
                <Input
                  type={props.type}
                  alt={alt}
                  placeholder={placeholder}
                  onChange={
                    props.title === '아이디' ? handleInputId : handleInputPw
                  }
                />
              </InputId>
              <Validation>
                {id ? '' : '이메일 형식이 올바르지 않습니다.'}
              </Validation>
            </>
          )}
          <NextButton
            id={
              userInput
                ? id
                : checkPwEnglish &&
                  checkPwNumber &&
                  checkPwLength &&
                  isMatchPassword
            }
            type='button'
            onClick={props.title === '아이디' ? goToThird : goToFourth}
          >
            다음
          </NextButton>
        </Box2>
      </Box>
    </SignUpWrapper>
  );
}

export default SignUpChild;

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
  // display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SimpleSignUp = styled.div`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 44px;
  text-align: center;
`;

const Box2 = styled.div`
  position: relative;
  display: block;
  flex-direction: column;
  align-items: left;
  width: 400px;
  height: 428px;
  padding-top: 18px;
`;

const Text = styled.div`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  border-top: 4px solid #f4f4f4;
  padding-top: 18px;
`;

const InputId = styled.div`
  width: 100%;
  height: 48px;
  font-weight: 500;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
  margin-bottom: 7px;
  border-bottom: 1px solid #f4f4f4;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 14px;
  cursor: text;
`;

const Validation = styled.div`
  hieght: 40px;
  margin-bottom: 14px;
  color: ${props =>
    props?.userInputRePw
      ? props.isMatchPassword
        ? '#375FFF'
        : '#ff4800'
      : props.checkPwEnglish &&
        props.checkPwNumber &&
        props.checkPwLength &&
        props.isMatchPassword
      ? '#375FFF'
      : '#c4c4c4'};
  font-size: 12px;
  texst-align: left;
`;

const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  margin-top: 14px;
  background: ${props =>
    props?.userInputPw
      ? props.checkPwEnglish &&
        props.checkPwNumber &&
        props.checkPwLength &&
        props.isMatchPassword
        ? '#375FFF'
        : '#c4c4c4'
      : props.id
      ? '#375FFF'
      : '#c4c4c4'};
  font-size: 14px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
`;
