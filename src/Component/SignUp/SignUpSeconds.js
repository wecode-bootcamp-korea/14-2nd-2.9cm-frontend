import React from 'react';
import { useState, useEffect } from 'react';
import SignUpSecond from './SignUpSecond';

export default function SignUpSeconds(props) {
  const [title, setTitle] = useState("아이디");
  const data = [
    {id: 1,
    alt: "userId",
    placeholder: "아이디 (이메일) 입력",
    },
    {id: 2,
    alt: "userId",
    placeholder: "아이디 (이메일) 입력",
    }
  ];

  return (
    <div>
      <SignUpSecond 
      title={title}
      push={props.history.push}
      data={data}
      />
    </div>
  )
}