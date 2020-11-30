import React from 'react'
import styled, { StyleSheetManager } from "styled-components";
import { FaSearch } from 'react-icons/fa'

export default function SearchModal(props) {

  return (
    <ModalWrapper onClick={props.closeModal}>
      <Modal>
        <button onClick={props.closeModal}>X</button>
        <SearchBox onClick={(e) => e.stopPropagation()}>
          <p>
            <input onChange={props.handleSearch} onKeyUp={props.handleSearch} placeholder='Search'></input>
            <FaSearch />
          </p>
          <span>인기검색어</span>
          <ul>
            <li>오라리</li>
            <li>니들스</li>
            <li>캡틴선샤인</li>
            <li>엔지니어드가먼츠</li>
            <li>빔즈</li>
            <li>오라리</li>
            <li>니들스</li>
            <li>캡틴선샤인</li>
            <li>엔지니어드가먼츠</li>
            <li>빔즈</li>
          </ul>
        </SearchBox>
      </Modal>
    </ModalWrapper>
  )
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.96);
  font-size: 17px;
  font-weight: bold;
  z-index: 1000000000;

`

const Modal = styled.div`

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  top: -50px;
  right: 50px;
  padding-right: 100px;

  button {
    display: inline-block;
    position: absolute;
    top: 50px;
    right: 50px;
    font-size: 40px;
    border: none;
    font-weight: normal;

  }
  
`

const SearchBox = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50px;
  right: 50px;

  span {
    margin-top: 30px;
    font-size: 26px;
  }

  p {
    display: flex;
    align-items: center;
    margin-top: 100px;

    input {
    width: 750px;
    height: 55px;
    border: none;
    border-bottom: 6px solid #000;

    &::placeholder {
      font-size: 40px;
      font-weight: bold;
      color: #ccc;
    }
    }

    svg {
      width: 47px;
      height: 47px;
    }
  }
  ul {
    
    li {
      font-size: 15px;
      line-height: 40px;
    }
  }
`