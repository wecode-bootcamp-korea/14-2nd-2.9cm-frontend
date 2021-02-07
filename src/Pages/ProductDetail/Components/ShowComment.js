import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import HoverRatings from './HoverRatings';

export default function ShowComment(props) {
  const data = props?.commentsData[0];
  const [showData, setShowData] = useState();

  const API = 'http://3.34.44.13:8000/store/1/review';
  useEffect(() => {
    fetch(API, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(res => {
        console.log('....', res);
        setShowData(res.review_list);
        props.totalCount(res.total_count);
      });
    console.log(showData);
  }, []);

  return (
    <ReviewCommentsWrapper>
      {showData?.map(el => (
        <>
          <ReviewInfo key={el.id}>
            <div>
              <HoverRatings value={el?.rate} />
              <span>{el?.user}</span>
            </div>
            <div>{(el?.date).slice(0, 10)}</div>
          </ReviewInfo>
          <ReviewComments key={el?.id}>
            <CommentInfo>
              <UserSize>[사이즈]{data?.size} 구매</UserSize>
              <UserComment key={el?.id}>{el?.content}</UserComment>
            </CommentInfo>
            {/* <UserCommentImage alt="" src={el.image} /> */}
          </ReviewComments>
        </>
      ))}
    </ReviewCommentsWrapper>
  );
}

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
  overflow: hidden;
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

const UserCommentImage = styled.img`
  width: 56px;
  height: 56px;
`;
