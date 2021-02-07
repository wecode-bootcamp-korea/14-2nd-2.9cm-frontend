import React, { useState, useEffect } from 'react';
import styled, { StyleSheetManager } from 'styled-components';
import Dropdown from './Dropdown';
import ScrolledDropdown from './ScrolledDropdown';
import { useHistory } from 'react-router-dom';
import { AiOutlineDownload } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { AiFillShopping } from 'react-icons/ai';
import { RiLoginBoxFill } from 'react-icons/ri';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';

export default function NavScroll(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [navData, setNavData] = useState([]);
  const [isHover, setIsHover] = useState(false);
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

  const checkToken = () => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const logout = () => {
    localStorage.clear();
    alert('로그아웃 완료');
    setIsLoggedIn(false);
  };

  const openDropDown = () => setIsHover(true);

  const closeDropDown = () => setIsHover(false);

  return (
    <NavScrollWrapper>
      <NavIconWrapper>
        <Logo>2.9CM</Logo>
        <NavMenuWrapper>
          <ul>
            {navMenuData?.map((menu, idx) => {
              return <li key={idx}>{menu}</li>;
            })}
          </ul>
        </NavMenuWrapper>
        <NavIcons>
          <MyPage>
            <FaUser className='myPageIcon' />
          </MyPage>
          <MyHeart>
            <FaHeart />
          </MyHeart>
          <ShoppingBag>
            <AiFillShopping />
          </ShoppingBag>
          {isLoggedIn ? (
            <Logout onClick={logout}>
              <RiLogoutBoxFill />
            </Logout>
          ) : (
            <Login onClick={() => history.push('/login')}>
              <RiLoginBoxFill />
            </Login>
          )}
        </NavIcons>
      </NavIconWrapper>
      <NavDetailMenuWrapper>
        <div>
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
        </div>
        <SearchIcon>
          <FaSearch onClick={props.openModal} />
        </SearchIcon>
      </NavDetailMenuWrapper>
      {isHover ? (
        props.isScrolled ? (
          <ScrolledDropdown closeDropDown={closeDropDown} />
        ) : (
          <Dropdown closeDropDown={closeDropDown} />
        )
      ) : (
        ''
      )}
    </NavScrollWrapper>
  );
}

const NavScrollWrapper = styled.div`
  height: 250px;
  padding-top: 160px;
  margin-bottom: 60px;
`;

const NavIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  height: 59px;
`;

const Logo = styled.div`
  font-size: 56px;
  font-weight: bold;
  margin-left: 50px;
`;

const NavIcons = styled.div`
  display: flex;
  cursor: pointer;
`;

const MyPage = styled.div`
  font-size: 10px;
  margin: auto 5px;

  svg {
    font-size: 17px;
  }
`;

const MyHeart = styled.div`
  font-size: 10px;
  margin: auto 5px;

  svg {
    font-size: 18px;
  }
`;

const ShoppingBag = styled.div`
  font-size: 10px;
  margin: auto 5px;

  svg {
    font-size: 22px;
  }
`;

const Login = styled.div`
  font-size: 10px;
  margin: auto 5px;
  margin-right: 50px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Logout = styled.div`
  font-size: 10px;
  margin: auto 5px;
  margin-right: 50px;

  svg {
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
    font-size: 40px;
    margin-right: 50px;
  }

  ul {
    display: flex;
    font-size: 36px;
    font-weight: bold;
    height: 30px;

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
  justify-content: space-between;
  align-items: center;
  color: #000;
  height: 34px;
  margin: 30px;

  div {
    display: flex;
    align-items: center;
  }

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

const SearchIcon = styled.div`
  svg {
    font-size: 36px;
    margin-right: 20px;
    cursor: pointer;
  }
`;
