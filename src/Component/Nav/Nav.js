import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import { AiOutlineDownload } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { AiFillShopping } from 'react-icons/ai';
import { RiLoginBoxFill } from 'react-icons/ri';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';

export default function Nav(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [navData, setNavData] = useState([]);
  const [isHover, setIsHover] = useState(false);
  // 이 부분 어떻게 못 고칠까??
  const navMenuData = navData[0]?.data;
  const navDetailMenuL = navData[1]?.data;
  const navDetailMenuR = navData[2]?.data;

  let history = useHistory();

  useEffect(() => {
    fetch('/data/navData.json')
      .then(response => response.json())
      .then(response => {
        setNavData(response.navData);
      });
  }, []);

  // 에러의 원인
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
    }
  };

  const logout = () => {
    localStorage.clear();
    alert('로그아웃 완료');
    setIsLoggedIn(false);
  };

  // console.log('>>>>', localStorage.getItem.length);
  // console.log('토큰??????', localStorage.getItem('token'));
  // console.log('구글토큰??????', sessionStorage.getItem('token'));

  const openDropDown = () => {
    setIsHover(true);
  };

  const closeDropDown = () => {
    setIsHover(false);
  };

  return (
    <>
      <NavWrapper>
        <NavBanner>
          <BannerDescription>
            29CM 회원가입 경품혜택과 앱 <span>15%</span> 할인쿠폰
          </BannerDescription>
          <BannerButton>
            <b>혜택받기</b>
            <AiOutlineDownload />
          </BannerButton>
        </NavBanner>
        <NavIconWrapper>
          <Logo onClick={() => history.push('/')}>2.9CM</Logo>
          <NavIcons>
            <MyPage>
              <FaUser className='myPageIcon' /> MY PAGE
            </MyPage>
            <MyHeart>
              <FaHeart /> MY HEART
            </MyHeart>
            <ShoppingBag>
              <AiFillShopping />
              SHOPPING BAG
            </ShoppingBag>
            {isLoggedIn ? (
              <Logout onClick={logout}>
                <RiLogoutBoxFill />
                LOGOUT
              </Logout>
            ) : (
              <Login onClick={() => history.push('/login')}>
                <RiLoginBoxFill />
                LOGIN
              </Login>
            )}
          </NavIcons>
        </NavIconWrapper>
        <NavMenuWrapper>
          <ul>
            {navMenuData?.map((menu, idx) => {
              return (
                <div key={idx} style={{ padding: '10px' }}>
                  <li style={{ width: '100%', height: '100%' }}>{menu}</li>
                </div>
              );
            })}
          </ul>
          <FaSearch onClick={props.openModal} />
        </NavMenuWrapper>
        <NavDetailMenuWrapper>
          <ul>
            {navDetailMenuL?.map((menu, idx) => {
              return (
                <li key={idx} onMouseEnter={openDropDown}>
                  {menu}
                </li>
              );
            })}
          </ul>
          <Border></Border>
          <ul>
            {navDetailMenuR?.map((menu, idx) => {
              return <li key={idx}>{menu}</li>;
            })}
          </ul>
        </NavDetailMenuWrapper>
        {isHover ? <Dropdown closeDropDown={closeDropDown} /> : ''}
      </NavWrapper>
    </>
  );
}

const NavWrapper = styled.div`
  height: 250px;
  margin-bottom: 30px;
`;

const NavBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  height: 56px;
`;

const BannerDescription = styled.div`
  margin-left: 50px;
  color: #fff;
  font-weight: bold;

  span {
    color: #ff4800;
  }
`;

const BannerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  color: #fff;
  background-color: #ff4800;
  width: 90px;
  height: 30px;
  font-size: 13px;
  border-radius: 15px;
  cursor: pointer;

  span {
    font-size: 13px;
    color: #ff4800;
  }

  svg {
    font-size: 13px;
  }
`;

const NavIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  height: 59px;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 30px;
  margin-left: 60px;
  cursor: pointer;
`;

const NavIcons = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const MyPage = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  margin: 0 10px;

  svg {
    margin: 0 5px;
    font-size: 17px;
  }
`;

const MyHeart = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  margin: 0 5px;

  svg {
    margin: 0 5px;
    font-size: 17px;
  }
`;

const ShoppingBag = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  margin: 0 5px;

  svg {
    margin: 0 5px;
    font-size: 22px;
  }
`;

const Login = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  margin: 0 5px;
  margin-right: 50px;

  svg {
    margin: 0 5px;
    width: 20px;
    height: 20px;
  }
`;

// const Logout = styled(Login);

const Logout = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  margin: 0 5px;
  margin-right: 50px;

  svg {
    margin: 0 5px;
    width: 20px;
    height: 20px;
  }
`;

const NavMenuWrapper = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  color: #000;
  height: 53px;
  margin-top: 20px;
  margin-left: 20px;

  svg {
    font-size: 60px;
    margin-right: 50px;
    cursor: pointer;
  }

  ul {
    display: flex;
    font-size: 36px;
    font-weight: bold;
    height: 51px;

    li {
      margin-left: 30px;
      cursor: pointer;

      &:hover {
        border-bottom: 4px solid #000;
      }
    }
  }
`;

const NavDetailMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  height: 34px;
  margin: 30px;

  ul {
    display: flex;
    font-weight: bold;
    margin-left: 20px;
    height: 15px;

    li {
      margin-right: 20px;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        border-bottom: 4px solid #000;
      }
    }
  }
`;

const Border = styled.div`
  width: 15px;
  height: 30px;
  border-right: 1px solid #ddd;
  margin-right: 30px;
`;
