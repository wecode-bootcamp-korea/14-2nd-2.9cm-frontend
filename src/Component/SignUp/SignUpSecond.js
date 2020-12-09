import React from 'react';
import { useState, useEffect } from 'react';
import SignUpChild from './SignUpChild';

export default function SignUpSecond(props) {
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
      <SignUpChild 
      title={title}
      push={props.history.push}
      data={data}
      />
    </div>
  )
}