import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Tim from './Tim';
// keyword 안에 있는 tim 나열
// 선택한 tim 을 가장 앞에 두도록

const TimView = ({
  user,
  postList,
  tagName,
  tagColor,
  keywordName,
  keywordColor,
  onEditPost,
  onDeletePost,
}) => {
  const scrollRef = useRef();
  const [index, setIndex] = useState(0);
  // 스크롤값 가져와야 함.
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.children[index].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
      });
    }
  }, [index, scrollRef]);
  const onClickLeft = (e) => {
    if (index > 0) setIndex((prevIdx) => prevIdx - 1);
  };
  const onClickRight = (e) => {
    const childrenLength = scrollRef.current.children.length;
    if (index < childrenLength - 1) setIndex((prevIdx) => prevIdx + 1);
  };

  if (!user || !postList) return null;
  return (
    <>
      <TIMViewWrapper>
        <HeaderMargin />

        <ListStatus>
          <Mark tagColor={tagColor}>{tagName}</Mark>
          <Mark keywordColor={keywordColor}>{keywordName}</Mark>
        </ListStatus>
        <PostList>
          <TimListWrapper ref={scrollRef}>
            {postList.map((post) => (
              <Tim
                key={post.id}
                post={post}
                tagName={tagName}
                tagColor={tagColor}
                keywordName={keywordName}
                keywordColor={keywordColor}
                onDeletePost={onDeletePost}
                onEditPost={onEditPost}
              />
            ))}
            {postList.length !== 0 && (
              <>
                <LeftBtn onClick={onClickLeft}>
                  <FiChevronLeft size='25' />
                </LeftBtn>
                <RightBtn onClick={onClickRight}>
                  <FiChevronRight size='25' />
                </RightBtn>
              </>
            )}
          </TimListWrapper>
        </PostList>
      </TIMViewWrapper>
    </>
  );
};

const TIMViewWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 60px);
  box-sizing: border-box;
  background-color: #ffffff;
`;
const ListStatus = styled.div`
  display: flex;
  padding: 35px 66px;
  background-color: #f6f6f6;
  align-items: flex-start;
`;
const Mark = styled.button`
  height: 80px;
  display: flex;
  background-color: ${({ theme, tagColor, keywordColor }) => {
    if (tagColor != null) return theme.component[tagColor][1];
    if (keywordColor != null) return theme.component[keywordColor][2];
  }};
  align-items: center;
  padding: 0px 28px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.theme.font['white']};
  & + & {
    margin-left: 30px;
  }
`;
const PostList = styled.div`
  position: relative;
  padding: 0 25px;
`;
const TimListWrapper = styled.ul`
  transition: 1s;
  padding: 50px 0;
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  width: 100%;
  overflow: auto;
  scroll-snap-type: x mandatory; /* Chrome Canary */
  scroll-snap-type: mandatory; /* Firefox */
  -ms-scroll-snap-type: mandatory; /* IE/Edge */
  -webkit-scroll-snap-type: mandatory; /* Safari */
  -webkit-scroll-snap-destination: 0% 0%;
  -webkit-overflow-scrolling: touch; /* important for iOS */

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const HeaderMargin = styled.div`
  margin-top: 60px;
`;
const LeftBtn = styled.button`
  cursor: pointer;
  outline: 0;
  position: absolute;
  top: 50%;
  left: 30px;
  background-color: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightBtn = styled.button`
  cursor: pointer;
  outline: 0;
  position: absolute;
  top: 50%;
  right: 30px;
  background-color: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TimView;
