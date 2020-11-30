import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { AiFillShopping } from 'react-icons/ai';
import { RiLoginBoxFill } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';

import './nav.scss'

export default function Nav() {
  return (
    <div className='Nav'>
      <div className='navBanner'>
        <div className='bannerDescription'>
          29CM 회원가입 경품혜택과 앱 <span>15%</span> 할인쿠폰
        </div>
        <div className='bannerButton'>
          <span>혜택받기</span>
          <AiOutlineDownload />
        </div>
      </div>
      <div className='navIconWrapper'>
        <div className='logo'>2.9CM</div>
        <div className='navIcons'>
          <div className='myPage'><FaUser className='myPageIcon' /> MY PAGE</div>
          <div className='myHeart'><FaHeart className='myHeartIcon' /> MY HEART</div>
          <div className='shoppingBag'><AiFillShopping className='shoppingBagIcon' />SHOPPING BAG</div>
          <div className='login'><RiLoginBoxFill className='loginIcon' />LOGIN</div>
        </div>
      </div>
      <div className='navMenuWrapper'>
        <ul className='navMenu'>
          <li>Special-Order</li>
          <li>Showcase</li>
          <li>29TV</li>
          <li>PT</li>
          <li>Welove</li>
        </ul>
        <FaSearch className='searchIcon' />
      </div>
      <div className='navDetailMenuWrapper'>
        <ul className='detailLeftMenu'>
          <li>WOMEN</li>
          <li>MEN</li>
          <li>HOME</li>
          <li>BEUATY</li>
          <li>TECH</li>
          <li>CULTURE</li>
        </ul>
          <div className='border'></div>
        <ul className='detailRightMenu'>
          <li>Best</li>
          <li>Event</li>
          <li>Brand</li>
          <li>Lookbook</li>
        </ul>
      </div>
    </div>
  )
}
