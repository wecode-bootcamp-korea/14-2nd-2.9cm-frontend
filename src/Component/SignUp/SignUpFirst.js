import * as React from "react";
import styled from "styled-components";
import Line from "./Components/SignUpFirstStep";
import {useState, useEffect} from "react";
import Footer from "../Footer/Footer";

function SignUpFirst(props) {
  const [allChecked, setAllChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [activateBtn, setActivateBtn] = useState(true);
  console.log(activateBtn);
  console.log(allChecked);
  console.log(checked1);
  console.log(checked2);
  console.log(checked3);
  console.log(checked4);
  const handleAllChecked = () => {
    setAllChecked(!allChecked);
    if(!allChecked) {
      setChecked1(!checked1);
      setChecked2(!checked2);
      setChecked3(!checked3);
      setChecked4(!checked4);
      setActivateBtn(!activateBtn);
    } else {
      setChecked1(!checked1);
      setChecked2(!checked2);
      setChecked3(!checked3);
      setChecked4(!checked4);
      setActivateBtn(!activateBtn);
    }
  }
  const handleChecked1 = () => {
    setChecked1(!checked1);
  }
  const handleChecked2 = () => {
    setChecked2(!checked2);
  }
  const handleChecked3 = () => {
    setChecked3(!checked3);
  }
  const handleChecked4 = () => {
    setChecked4(!checked4);
  }

  useEffect(() => {
    let curtruecnt  = 0;
    if(checked1) curtruecnt++;
    if(checked2) curtruecnt++;
    if(checked3) curtruecnt++;
    if(checked4) curtruecnt++;
    if(curtruecnt > 2) {
      setActivateBtn(true);
    }
    if(curtruecnt < 3) {
      setActivateBtn(false);
    }
    if(curtruecnt === 4) {
      setAllChecked(true);
    }
    if(curtruecnt < 4) {
      setAllChecked(false);
    }
  }, [checked1, checked2, checked3, checked4])
  return (
     <>
      <SignUpWrapper>
        <Box>
          <SimpleSignUp>
            간편가입
          </SimpleSignUp>
          <Box2>
            <Line
            />
            <Text>
              29CM 서비스 이용약관에<br></br>동의해주세요.
            </Text>
            <AllAgreement>
              <InputCheckbox
              type="checkbox"
              checked={allChecked}
              onChange={handleAllChecked}
              />
              <Label 
              for="cb1"
              >
                모두 동의 (선택 정보 포함)
              </Label>
            </AllAgreement>
            <AgreementCheckbox>
              <InputCheckbox
                type="checkbox"
                checked={checked1}
                onChange={handleChecked1}
              />
              <Label 
                title="[필수] 만14세 이상 보기"
                for="cb1"
              >
                [필수] 만 14세 이상
              </Label>
              <None type="button">비밀글인데 보셨나요?</None>
            </AgreementCheckbox>
            <AgreementCheckbox>
              <InputCheckbox
                type="checkbox"
                checked={checked2}
                onChange={handleChecked2}
              />
              <Label 
                title="[필수] 만14세 이상 보기"
                for="cb1"
              >
                [필수] 이용약관 동의
              </Label>
              <Button type="button">보기</Button>
            </AgreementCheckbox>
            <AgreementCheckbox>
              <InputCheckbox
                type="checkbox"
                checked={checked3}
                onChange={handleChecked3}
              />
              <Label 
                title="[필수] 만14세 이상 보기"
                for="cb1"
              >
                [필수] 개인정보 처리방침 동의
              </Label>
              <Button type="button">보기</Button>
            </AgreementCheckbox>
            <AgreementCheckbox>
              <InputCheckbox
                type="checkbox"
                checked={checked4}
                onChange={handleChecked4}
              />
              <Label 
                title="[필수] 만14세 이상 보기"
                for="cb1"
              >
                [선택] 광고성 정보 수신 및 마케팅 활용 동의
              </Label>
              <Button type="button">보기</Button>
            </AgreementCheckbox>
            <GoToSignUp 
            id={activateBtn}
            type="button"
            onClick={()=>{allChecked ? props.history.push("/signUp2"):props.history.push("#")}}>
              동의하고 가입하기
            </GoToSignUp>
          </Box2>
        </Box>
      </SignUpWrapper>
      <Footer />
    </>
  )
}
export default SignUpFirst;

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
  justify-content: center;
  flex-direction: column;
`;

const  SimpleSignUp = styled.div`
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

const AllAgreement = styled.form`
  display: inline-flex;
  width: 100%;
  margin-bottom: 15px;
  padding: 22px 0;
  font-size: 14px;
  line-height: 28px;
  cursor: pointer;
  vertical-align: center;
  align-items: center;
  border-bottom: 1px solid #f4f4f4;
`;

const AgreementCheckbox = styled.form`
  display: inline-flex;
  padding: 5px 0 5px 0;
  font-size: 14px;
  line-height: 26px;
  cursor: pointer;
  vertical-align: center;
  align-items: center;
`;

const None = styled.div`
  color: white;
`;

const InputCheckbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 9px;
  cursor: pointer;
`;

const Label = styled.label`
cursor: pointer;
`;

const Button = styled.span`
  margin-left: 5px;
  cursor: pointer;
`;

const GoToSignUp = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:48px;
  border: none;
  background: ${props => props.activateBtn ? "#c4c4c4" : "#375FFF"};
  font-size: 14px;
  color: #fff;
  outline: none;
  cursor: pointer;
  margin-top: 28px;
`;