import React from 'react';
import './login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Login() {
  return (
    <div className='Login'>
      <div className='loginWrapper'>
        <div className='loginHeading'>로그인</div>
        <div className='loginBorder'></div>
        <div className='loginContents'>
          <input className='loginId' placeholder='아이디 (이메일)'></input>
          <input className='passwordId'placeholder='비밀번호'></input>
          <button className='loginButton'>로그인하기</button>
          <div className='socialLogin'>
            <div className='socialLoginHeading'>SNS계정으로 로그인하기</div>
            <div className='socialLoginIcons'>
              <FontAwesomeIcon className='facebookIcon' icon={faFacebook} />
              <FontAwesomeIcon className='facebookIcon' icon={faFacebook} />
              <FontAwesomeIcon className='facebookIcon' icon={faFacebook} />
              <FontAwesomeIcon className='facebookIcon' icon={faFacebook} />
            </div>
            <button className='signUpButton'>계정이 없으신가요? 간편가입하기</button>
            <div className='loginEtc'>
              <div className='findId'>아이디 (이메일) 찾기</div>
              <div className='findPassword'>비밀번호 찾기</div>
              <div className='checkOrder'>2018년 2월 이전 비회원 주문조회</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
