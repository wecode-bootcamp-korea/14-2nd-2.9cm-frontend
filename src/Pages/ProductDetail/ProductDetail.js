/* eslint-disable no-lone-blocks */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Category from "./Components/Category";
import ShowComment from "./Components/ShowComment";
import Modal from "./Components/Modal";
import { FaRegHeart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import HoverRatings from "./Components/HoverRatings";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { isDOMComponentElement } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/react';

export default function ProductDetail() {
  const [images, setImages] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [comment, setComment] = useState([]);
  const [createReview, setCreateReview] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState(false);
  const [productDetailData, setProductDetailData] = useState();
  const [innerText, setInnerText] = useState();
  const [totalCount, setTotalCount] = useState();

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    arrows: true,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
  };

  const commentsData = [
    {
      "id": 1,
      "userId": "수료하고 위코드 또 갈거야 ...",
      "date": "2020.12.11",
      "size": "270", 
      "img": "사진",
      "comment": "태현님이 좋아할 것 같은 신발, 할인가에 겟또 :)",
    }
  ];
  const len = Math.ceil(totalCount / 5);
  const num = [];
  {for(let i=1; i<len+1; i++) {
    num.push(i);
  }}
// value: 0~12, size: 220~290 객체를 배열 안에 넣어라
  const size = [];
  {for (let i = 0; i < 13; i++) {
    size.push(220 + (5 * i));
  }}

  const sizeData = [];
  {for (let i = 0; i < 13; i++) {
    // sizeData[i].Object.assign(i) ;
  }}

  const API = "http://13.125.3.178:8000/store/1";
  const MOCK = " http://localhost:3000/data/mockUp.json";
  useEffect(() => {
    fetch(MOCK)
    .then((res) => res.json())
    .then((res) => {
      console.log('목업데이터', res);
      setImages(res.src);
    });

    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log('>>>>>>>>>>>>>>>>', res);
        setProductDetailData(res.result);
      });
  }, []);

  const openModal = (e) => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  }
    
  const inputValueFunc = (input) => {
    setInputValue(input);
  }
  const REVIEWAPI = `http://13.125.3.178:8000/store/1/review`;
  const SubmitComment = (inputComment) => {
    fetch(REVIEWAPI, {
      method : "POST",
      headers : {
        "Authorization" : localStorage.getItem("token")
      },
      body : JSON.stringify({
        content : inputComment,
        rate : 4,
        review_image_url : "http://google.com",
      })
    })
    .then((res) => res.json())
    .then((res) => {
      console.log("message", res);
      // props.
    });
    setCreateReview([ 
      {
        "id": createReview?.length,
        "userId": commentsData[0].userId,
        "date": Math.floor(Date.now()/1000),
        "size": "290",
        "img": "사진",
        "comment": inputValue,
      },
      ...createReview
    ]);
    setIsModal(false);
    setInputValue("");
  }

  const deleteComment = (idx) => {
    console.log("이거야야야야야야야",idx);
    fetch(REVIEWAPI, {
      method : "DELETE",
      headers : {
        "Authorization" : localStorage.getItem("token")
      },
      body : JSON.stringify({
        "review_id" : idx.target.id
      })
    })
    .then((res) => res.json())
    .then((res) => {
      console.log("message", res);
    });
    console.log("이거야야야야야야야",idx.target.id);
    const copy = Object.assign([], createReview);
    copy.splice(idx, 1);
    setCreateReview(copy);
    // setCreateReview(createReview.filter(review => review.id !== idx));
  }

  const updateComment = () => {
    
  }

  const goToBottom = () => {
    window.scrollTo({top:12000,
    behavior:"smooth"})
  }
  // const seeReview = (e) => {
  //   wscrollTo();
  // }
  // const PAGINATIONAPI = `http://13.125.3.178:8000/store/1/review?page=${innerText}`;
  const handlePagination = (e) => {
    setInnerText(e.target.innerText);
    console.log(innerText);
    fetch(`http://13.125.3.178:8000/store/1/review?page=${e.target.innerText}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProductDetailData(res?.result);
      });
  }

  // console.log("111111111111111111",productDetailData);

  return (
    <>
      <Category />
      <ModalWrapper>
      { isModal ?
        <Modal inputValue={inputValueFunc} SubmitComment={SubmitComment} closeModal={closeModal}/>:""
      }
      </ModalWrapper>
      <ProductDetailWrapper>
        {productDetailData?.map((el) => { 
          return (
          <ContentsWrapper key={el.id}>
          <Header>
            <Logo
              src="https://img.29cm.co.kr/contents/brand/201705/20170525185325.jpg?width=100"
              alt=""
            />
            <HeaderText>
              <BrandName>Wright LLC</BrandName>
              <ProductDescription>
                불균형한 발에 새로운 균형을 창조한다 하는 신발 브랜드, Wright LLC
              </ProductDescription>
              <GoToBrand type="button">Brand Home</GoToBrand>
            </HeaderText>
          </Header>
          <ProductInformation>
            <Img
              src={el.product_img}
              alt=""
            ></Img>
            <ProductInfoWrapper>
              <TopBox>
          <ProductName>{el.title}</ProductName>
                <Like>
                  <FaRegHeart />
                  <LikeCounter>345</LikeCounter>
                </Like>
              </TopBox>
              <ReviewBox>
                <HoverRatings />
                <GoToReview type="button" onClick={goToBottom}>33개 리뷰 보기</GoToReview>
              </ReviewBox>
              <Price>{el.market_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Price>
              <Sale>{Number((1 - el.sale_price/el.market_price)*100)}% {el.sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</Sale>
              <BonusBox>
                <BonusMenu>
                  상품할인
                  <br />
                  추가혜택
                </BonusMenu>
                <Bonus>
                  <ProductSale>{Number((1 - el.sale_price/el.market_price)*100)}% {el.sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</ProductSale>
                  현대카드 {Number(el.sale_price*0.98).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 (2% 청구할인)
                  <br />
                  적립금 890p
                  <br />
                  할부금 월 {Number(el.sale_price/6).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 (6개월 할부시)
                </Bonus>
              </BonusBox>
              <form>
                <Size name='couponSelect'>
                  <option value='0'>사이즈</option>
                  <option value='1'>{size[0]}</option>
                  <option value='2'>{size[1]}</option>
                </Size>
              </form>
              {/* <Size type="input" placeholder="사이즈" /> */}
              <GoToCart>SHOPPING BAG</GoToCart>
              <GoToBuy>BUY NOW</GoToBuy>
            </ProductInfoWrapper>
          </ProductInformation>
          </ContentsWrapper>
        )}
        )}
        <Product sc-iJuUWI dPVueI>
          상품 설명
          {images?.map((image, idx) => {
            return (
              <ProductView key={idx}>
                <img src={image} alt="ProductDetailView" />
              </ProductView>
            );
          })}
          <ReviewHeader>
            <div>
              <span>리뷰 </span>
              <span>({totalCount + createReview.length}) </span>
              <HoverRatings />
            </div>
            <div>
              <ReviewWriteButton type="button" onClick={openModal}>
                리뷰쓰기
              </ReviewWriteButton>
            </div>
          </ReviewHeader>
          <Slider {...settings}>
            {images?.map((image, idx) => {
              return (
                <ReviewPhotosWrapper key={idx}>
                  <img src={image} alt="" />
                </ReviewPhotosWrapper>
              );
            })}
          </Slider>
          { comment ?
          (createReview.map((data, idx) => 
            <ReviewCommentsWrapper key={data.id}>
              <ReviewInfo>
                <div>
                  <span><HoverRatings /></span>
                  <span>{data.userId}</span>
                </div>
                <div>
                  <UpdateBtn id={data.id} onClick={updateComment}>
                    수정
                  </UpdateBtn>
                  <DeleteBtn idx={data.id} onClick={deleteComment}>
                    삭제
                  </DeleteBtn>                  {data.date}
                </div>
              </ReviewInfo>
              <ReviewComments>
                <CommentInfo onClick={()=>setShow(true)}>
                  <UserSize>[사이즈]{data.size} 구매</UserSize>
                  <UserComment key={data.id}>{data.comment}</UserComment>
                </CommentInfo>
                <UserCommentImage>{data.img}</UserCommentImage>
              </ReviewComments>
            </ReviewCommentsWrapper>
          )):""}
          <ShowComment
            totalCount={(totalCount)=>setTotalCount(totalCount)}
            commentsData={commentsData}
          />
          <Pagination>
            {num.map((number) => 
              <button onClick={handlePagination}>{number + '\xa0\xa0\xa0\xa0'}</button>)}
          </Pagination>
          <Etc>...</Etc>
        </Product>
      </ProductDetailWrapper>
    </>
  );
}

const ProductDetailWrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const ModalWrapper = styled.div``;

const ContentsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
`;

const Header = styled.div`
  display: flex;
  overflow: hidden;
  font-size: 16px;
  line-height: 17.6px;
  vertical-align: top;
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
`;

const HeaderText = styled.ul`
  margin-left: 12px;
  list-style: none;
  word-spacing: 0px;
`;

const BrandName = styled.li`
  display: block;
  font-size: 16px;
  font-weight: 600;
  line-height: 17.6px;
`;

const ProductDescription = styled.li`
  font-size: 13px;
  line-height: 19.5px;
  text-decoration: none solid rgb(48, 48, 51);
  white-space: nowrap;
`;

const GoToBrand = styled.button`
  font-size: 11px;
  line-height: 15px;
  text-decoration: none solid rgb(0, 0, 0);
  text-align: center;
  border: 1px solid #e5e5e5;
  margin: 6px 0 0 0;
  padding: 5px 8px 3px 8px;
  cursor: pointer;
`;

const ProductInformation = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Img = styled.img`
  z-index: 100;
  max-width: 564px;
  height: 438px;
`;

const ProductInfoWrapper = styled.div`
  // display: block;
  vertical-align: middle;
  width: 100%;
  margin-left: 15px;
  z-index: 50;
  border-top: 2px solid #000000;
`;

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0 10px 0;
`;

const ProductName = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-decoration: none solid rgb(0, 0, 0);
  word-spacing: 0px;
`;

const Like = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
`;

const LikeCounter = styled.div`
  font-family: campton;
  font-size: 12px;
  line-height: 14.4px;
  cursor: pointer;
`;

const ReviewBox = styled.div`
  display: inline-flex;
  margin: 10px 0 20px 0;
  font-size: 16px;
`;

const Price = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
  text-decoration: line-through solid rgb(160, 160, 160);
  word-spacing: 0px;
  color: #a0a0a0;
`;

const Sale = styled.div`
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 600;
  line-height: 30px;
  text-decoration: none solid rgb(255, 72, 0);
  word-spacing: 0px;
  color: #ff4800;
`;

const BonusBox = styled.div`
  display: flex;
  border-top: 1px solid #e4e4e4;
  margin: 15px 0 12px;
`;

const BonusMenu = styled.div`
  padding-right: 20px;
  padding-top: 10px;
  font-size: 13px;
  font-weight: 500;
  line-height: 22px;
`;

const Bonus = styled.div`
  font-size: 13px;
  line-height: 22px;
  text-decoration: none solid rgb(48, 48, 51);
`;

const ProductSale = styled(Sale)`
  padding-top: 10px;
  margin: 0;
  font-size: 13px;
  line-height: 22px;
`;

const GoToReview = styled.button`
  margin-left: 10px;
  text-decoration: underline;
  cursor: pointer;
`;

const Size = styled.select`
  width: 100%;
  height: 36px;
  padding-left: 10px;
  margin: 20px 0 20px 0;
  border: 1px solid #d4d4d4;
  font-size: 14px;
  background:white;
`;

const GoToCart = styled.button`
  width: 50%;
  height: 50px;
  font-weight: 800;
  text-align: center;
  border: 1px solid #d4d4d4;
  cursor: pointer;
`;

const GoToBuy = styled(GoToCart)`
  color: #ffffff;
  background: #000000;
`;

const Product = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 40px;
  padding-top: 40px;
  font-size: 22px;
  font-weight: 600;
  line-height: 30px;
`;

const ProductView = styled.div`
  max-width: 750px;
  margin: 0 auto;
  margin-top: 40px;
  padding-top: 20px;
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding: 0 0 12px 0;
  border-bottom: 4px solid #000000;
  font-size: 22px;
  font-weight: 600;
  line-height: 30px;
  text-decoration: none solid rgb(0, 0, 0);
  word-spacing: 0px;
`;

const ReviewWriteButton = styled.span`
  font-size: 14px;
  font-weight: 700;
  text-decoration: underline solid rgb(48, 48, 51);
  cursor: pointer;
`;

const ReviewPhotosWrapper = styled.div`
  margin: 30px 0 30px 0;
  overflow: hidden;
  width: 120px;
  height: 120px;
  cursor: pointer;
`;

const ReviewCommentsWrapper = styled.div`
  height: auto;
  text-align: left;
  padding: 15px 0 10px 0;
  border-top: 1px solid #e4e4e4;
`;

const ReviewInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 10px 10px 10px;
  font-size: 11px;
  font-weight: 300;
  line-height: 15px;
  cursor: pointer;
`;

const ReviewComments = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3px 10px 10px 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  cursor: pointer;
`;

const CommentInfo = styled.div`
  font-size: 14px;
  line-height: 22px;
  padding: 1px 0 1px 0;
  overflow: ${props => props.show ? "":"hidden"};
`;

const UserSize = styled.div`
  color: #a0a0a0;
  text-decoration: none solid rgb(160, 160, 160);
  margin: 0 0 2px 0;
`;

const UserComment = styled.div`
  white-space: nowrap;
  margin: 0 0 2px 0;
`;

const UserCommentImage = styled.div`
  width: 40px;
  height: 40px;
`;

const Pagination = styled.div`
  position: absolute;
  transform: translate(100%);
  width: 300px;
  height: 23px;
  margin-bottom: 50px;
  font-family: campton, "Apple SD Gothic Neo", NanumBarunGothic, 나눔바른고딕, "Malgun Gothic", "맑은 고딕", dotum, sans-serif;
  font-size: 16px;
  font-weight: 300;
  text-decoration: none solid rgb(0, 0, 0);
  cursor: pointer;
  overflow: hidden;

  button {
    cursor: pointer;
    background: white;
    border: none;
  }
`;

const Etc = styled.span`
  position: absolute;
  transform: translate(600px);
  font-family: campton, "Apple SD Gothic Neo", NanumBarunGothic, 나눔바른고딕, "Malgun Gothic", "맑은 고딕", dotum, sans-serif;
  font-size: 24px;
  font-weight: 300;
  text-decoration: none solid rgb(0, 0, 0);
`;

const DisplayModal = styled.div`
`;

const DeleteBtn = styled.button`
  cursor: pointer;
  color: black;
`;

const UpdateBtn = styled.button`
  cursor: pointer;
  color: black;
`;