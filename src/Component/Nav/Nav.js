import React from 'react'
import styled, { StyleSheetManager } from "styled-components";
import { AiOutlineDownload } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { AiFillShopping } from 'react-icons/ai';
import { RiLoginBoxFill } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';

export default function Nav() {
  return (
    <NavWrapper>
      <NavBanner>
        <BannerDescription>
          29CM 회원가입 경품혜택과 앱 <color>15%</color> 할인쿠폰
        </BannerDescription>
        <BannerButton>
          <bonus>혜택받기</bonus>
          <AiOutlineDownload />
        </BannerButton>
      </NavBanner>
      <NavIconWrapper>
        <Logo>
          2.9CM
        </Logo>
        <NavIcons>
          <MyPage><FaUser className='myPageIcon' /> MY PAGE</MyPage>
          <MyHeart><FaHeart /> MY HEART</MyHeart>
          <ShoppingBag>
            <AiFillShopping />
            SHOPPING BAG
          </ShoppingBag>
          <Login><RiLoginBoxFill />LOGIN</Login>
        </NavIcons>
      </NavIconWrapper>
      <NavMenuWrapper>
        <ul>
          <li>Special-Order</li>
          <li>Showcase</li>
          <li>29TV</li>
          <li>PT</li>
          <li>Welove</li>
        </ul>
        <FaSearch />
      </NavMenuWrapper>
      <NavDetailMenuWrapper>
        <ul>
          <li>WOMEN</li>
          <li>MEN</li>
          <li>HOME</li>
          <li>BEUATY</li>
          <li>TECH</li>
          <li>CULTURE</li>
        </ul>
       <Border></Border> 
        <ul>
          <li>Best</li>
          <li>Event</li>
          <li>Brand</li>
          <li>Lookbook</li>
        </ul>
      </NavDetailMenuWrapper>
    </NavWrapper>
  )
}

const NavWrapper = styled.div``

const NavBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  height: 56px;
`

const BannerDescription = styled.div`
  margin-left: 50px;
  color: #fff;
  font-weight: bold;
  
  span {
    color: #ff4800;
  }
`

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

  span {
    font-size: 13px;
    color: #ff4800;
  }

  svg {
    font-size: 13px;
  }
`

const NavIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  height: 59px;
`

const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-left: 50px;
`

const NavIcons = styled.div`
  display: flex;
`

const MyPage = styled.div`
  font-size: 10px;
  margin: auto 5px;

  svg {
    font-size: 17px;
  }
`

const MyHeart = styled.div`
  font-size: 10px;
  margin: auto 5px;

  svg {
    font-size: 17px;
  }
`

const ShoppingBag = styled.div`
  font-size: 10px;
  margin: auto 5px;

  svg {
    font-size: 14px;
  }
`

const Login = styled.div`
  font-size: 10px;
  margin: auto 5px;
  margin-right: 50px;

  svg {
    width: 20px;
    height: 20px;
  }
`

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

    li {
      margin-left: 30px;
    }
  }

`

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

    li {
      margin-right: 20px;
      font-weight: bold;
    }
  }
`

const Border = styled.div`
  width: 15px;
  height: 30px;
  border-right: 1px solid #ddd;
  margin-right: 30px;
`
