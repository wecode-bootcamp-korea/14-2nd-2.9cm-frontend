import React from 'react';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FaInstagramSquare } from 'react-icons/fa'
import { AiFillGoogleCircle } from 'react-icons/ai';


export default function Footer() {
  return (
    <div className='Footer'>
      <div className='footerTop'>
        <div className='border'></div>
        <div className='footerPhoneNumber'>
          1644-0560
        </div>
        <div className='footerOpeningHours'>
          AM 10:00 ~ PM 05:00 Off-time PM 12:00 ~ PM 02:00 <br></br>DAY OFF (SATURDAY. SUNDAY, HOLIDAY)
        </div>
        <div className='footerIconsWrapper'>
          <div className='faqIcon'>FAQ</div>
          <div className='footerIcons'>
            <div className='footerIcon'>
              <FontAwesomeIcon className='facebookIcon' icon={faFacebook} />
              <FaInstagramSquare className='instagramIcon'/>
              <AiFillGoogleCircle className='googleIcon'/>
            </div>
          </div>
        </div>
      </div>
      <div className='footerMiddle'>
        <ul className='notice'>
          <li>NOTICE</li>
          <li>[공지] SKT 간편본인확인 서비스 순단 발생 안내</li>
          <li>[공지] iOS 10 이하 버전 지원 중단 안내</li>
          <li>[공지] 29CM 서비스 리뉴얼 예정 사전 공지</li>
          <li>[공지] 개인정보 처리방침 변경 사전 안내</li>
          <li>[공지] 개인정보 처리방침 변경 사전 안내</li>
        </ul>
        <ul className='aboutUs'>ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
          <li>[공지] SKT 간편본인확인 서비스 순단 발생 안내</li>
          <li>[공지] iOS 10 이하 버전 지원 중단 안내</li>
          <li>[공지] 29CM 서비스 리뉴얼 예정 사전 공지</li>
          <li>[공지] 개인정보 처리방침 변경 사전 안내</li>
          <li>[공지] 개인정보 처리방침 변경 사전 안내</li>
        </ul>
        <ul className=''>
          <li>NOTICE</li>
          <li>[공지] SKT 간편본인확인 서비스 순단 발생 안내</li>
          <li>[공지] iOS 10 이하 버전 지원 중단 안내</li>
          <li>[공지] 29CM 서비스 리뉴얼 예정 사전 공지</li>
          <li>[공지] 개인정보 처리방침 변경 사전 안내</li>
          <li>[공지] 개인정보 처리방침 변경 사전 안내</li>
        </ul>
        <ul className=''>
          <li>NOTICE</li>
          <li>[공지] SKT 간편본인확인 서비스 순단 발생 안내</li>
          <li>[공지] iOS 10 이하 버전 지원 중단 안내</li>
          <li>[공지] 29CM 서비스 리뉴얼 예정 사전 공지</li>
          <li>[공지] 개인정보 처리방침 변경 사전 안내</li>
          <li>[공지] 개인정보 처리방침 변경 사전 안내</li>
        </ul>
        <ul className=''>
          <li>NOTICE</li>
          <li>[공지] SKT 간편본인확인 서비스 순단 발생 안내</li>
          <li>[공지] iOS 10 이하 버전 지원 중단 안내</li>
          <li>[공지] 29CM 서비스 리뉴얼 예정 사전 공지</li>
          <li>[공지] 개인정보 처리방침 변경 사전 안내</li>
          <li>[공지] 개인정보 처리방침 변경 사전 안내</li>
        </ul>
      </div>
      <div className='footerBottom'></div>
    </div>
  )
}