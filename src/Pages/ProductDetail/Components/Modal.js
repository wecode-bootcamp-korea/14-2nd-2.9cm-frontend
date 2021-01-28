import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

export default function Modal(props) {
  const [inputValue, setInputValue] = useState(['']);
  const handleInputValue = event => {
    setInputValue(event.target.value);
    props.inputValue(event.target.value);
  };

  const SubmitComment = e => {
    e.preventDefault();
    props.SubmitComment(inputValue);
  };
  // console.log(inputValue);
  return (
    <Wrapper onClick={props.closeModal}>
      <Form onClick={e => e.stopPropagation()}>
        <div>
          <CommentInput
            type='text'
            placeholder='댓글을 남기세요...'
            onChange={handleInputValue}
          />
        </div>
        <div>
          <SubmitButton type='button' onClick={SubmitComment}>
            등록
          </SubmitButton>
        </div>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 1830px;
  height: 930px;
  z-index: 1000;
`;

const Form = styled.form`
  position: fixed;
  transform: translate(180%, 90%);
  width: 400px;
  height: 250px;
  margin: 0 auto;
  padding: 15px 10px 0 10px;
  z-index: 1001;
  background: #ffffff;
  color: #454c53;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #c9cdd2;
  border-radius: 6px;
`;

const CommentInput = styled.input`
  width: 100%;
  height: 160px;
  color: #26282b;
  border: 1px solid #c9cdd2;
  border-radius: 6px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  background: black;
  color: white;
  text-align: center;
  margin-top: 15px;
  font-weight: 700;
  cursor: pointer;
`;
