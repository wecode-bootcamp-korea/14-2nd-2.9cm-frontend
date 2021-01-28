import React from 'react';
import styled from 'styled-components';
import Line from './Components/SignUpFourthStep';
function SignUpFourth(props) {
  const goToFifth = () => {
    props.history.push('/signUp5');
  };
  return (
    <>
      <SignUpWrapper>
        <Box>
          <SimpleSignUp>간편가입</SimpleSignUp>
          <BorderBox>
            <Line />
            <TextWrapper>
              <Text1>본인인증하고</Text1>
              <Text2>혜택을 받으세요</Text2>
            </TextWrapper>
            <BottomWrapper>
              <AgreeBox>
                <Input type='checkbox' defaultChecked={true} />
                <Label title='[필수] 이용약관 동의' for='cb1'>
                  이벤트 참여 시 당첨 확률이 높아요.
                </Label>
              </AgreeBox>

              <AgreeBox>
                <Input type='checkbox' defaultChecked={true} />
                <Label title='[필수] 개인정보 처리방침 동의' for='cb1'>
                  더 많은 쿠폰을 받을 수 있어요.
                </Label>
              </AgreeBox>

              <AgreeBox>
                <Input type='checkbox' defaultChecked={true} />
                <Label
                  title='[선택]] 광고성 정보 수신 및 마케팅 활용 동의'
                  for='cb1'
                >
                  주문 시 따로 본인인증할 필요 없어요.
                </Label>
              </AgreeBox>
            </BottomWrapper>
            <FirstButton type='button' onClick={goToFifth}>
              혜택 없이 계속 가입하기
            </FirstButton>
            <SecondButton type='button' onClick={goToFifth}>
              본인인증하고 혜택받기
            </SecondButton>
          </BorderBox>
        </Box>
      </SignUpWrapper>
    </>
  );
}

export default SignUpFourth;

const SignUpWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
`;

const SimpleSignUp = styled.div`
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
  display: block;
  margin: 0 0 32px 0;
  padding-top: 20px;
  border-top: 4px solid #f4f4f4;
`;

const Text1 = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 300;
  font-size: 36px;
  line-height: 28px;
  padding-top: 18px;
`;

const Text2 = styled(Text1)`
  font-weight: 600;
  border: 0px solid #ffffff;
  padding: 0;
`;

const BottomWrapper = styled.div`
  margin: 0 0 30px 72px;
`;

const AgreeBox = styled.div`
  display: inline-flex;
  padding: 5px 0 5px 0;
  font-size: 14px;
  line-height: 26px;
  cursor: pointer;
  vertical-align: center;
  align-items: center;
`;

const Input = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 9px;
  cursor: pointer;
`;

const Label = styled.label`
  padding: 10px 0;
  font-size: 16px;
  cursor: pointer;
`;

const FirstButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #5d5d5d;
  background: #ffffff;
  outline: none;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
  cursor: pointer;
`;

const SecondButton = styled(FirstButton)`
  color: #ffffff;
  background: #375fff;
  border: 0px solid #d4d4d4;
`;
