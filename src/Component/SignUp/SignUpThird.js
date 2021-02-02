import React from 'react';
import { useState, useEffect } from 'react';
import SignUpChild from './SignUpChild';

export default function SignUpThird(props) {
  const [title, setTitle] = useState('비밀번호');
  const [idValue, setIdValue] = useState('');
  const datas = [
    {
      id: 1,
      alt: 'userPw',
      placeholder: '비밀번호 입력',
      validationText: ['영문포함 ', ' 숫자포함 ', ' 8-20자 이내'],
      handleInput: 'handleInputPw',
    },
    {
      id: 2,
      alt: 'userPw',
      placeholder: '비밀번호 확인',
      validationText: ['비밀번호 일치'],
      handleInput: 'handleInputRePw',
    },
  ];

  return (
    <div>
      <SignUpChild
        type='password'
        title={title}
        push={props.history.push}
        data={datas}
      />
    </div>
  );
}
