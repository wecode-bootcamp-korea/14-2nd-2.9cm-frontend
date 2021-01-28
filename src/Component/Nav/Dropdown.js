import React from 'react';
import { useHistory } from 'react-router-dom';
import styled, { StyleSheetManager } from 'styled-components';

const arr = [
  {
    title: '의류 >',
    contents: [
      'New',
      'Best',
      '29 Edition',
      '아우터',
      '상의',
      '하의',
      '이너웨어',
    ],
  },
  {
    title: '가방 >',
    contents: [
      'New',
      'Best',
      '숄더백',
      '백팩',
      '크로스백',
      '에코백',
      '노트북가방',
    ],
  },
  {
    title: '신발 >',
    contents: ['New', 'Best', '스니커즈', '로퍼', '구두', '샌들'],
  },
  {
    title: '악세서리 >',
    contents: [
      'Best',
      '모자',
      '시계',
      '아이웨어',
      '넥타이',
      '양말',
      '벨트',
      '장갑',
      '목도리',
    ],
  },
];

export default function Dropdown({ closeDropDown, goToProductDetail }) {
  return (
    <Menu onMouseLeave={closeDropDown}>
      {arr.map((itemList, idx) => {
        return (
          <div key={idx}>
            <span>{itemList.title}</span>
            <ul>
              {itemList.contents.map(item => {
                return <li onClick={goToProductDetail}>{item}</li>;
              })}
            </ul>
          </div>
        );
      })}
      <p>
        <img src='/images/sneakers3.jpg'></img>
        <button>이벤트 전체 보기 ----> </button>
      </p>
    </Menu>
  );
}

const Menu = styled.div`
  position: absolute;
  display: flex;
  top: 260px;
  height: 300px;
  width: 100%;
  border: 1px solid #ddd;
  z-index: 9999;
  background-color: #fff;

  div {
    width: 176px;
    height: 246px;
    padding: 30px 0 0 50px;

    span {
      font-size: 15px;
      font-weight: bold;
    }

    ul {
      display: flex;
      flex-direction: column;
      margin-top: 10px;

      li {
        font-size: 13px;
        line-height: 24px;

        &:hover {
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
  }

  p {
    display: flex;
    flex-direction: column;

    img {
      margin: 30px 50px 50px 100px;
      width: 200px;
      height: 150px;
    }

    button {
      display: inline-block;
      width: 200px;
      height: 50px;
      margin-left: 100px;
    }
  }
`;
