import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import EnterDate from '../../common/EnterDate';
import KeywordLine from './KeywordLine';

const KeywordListView = ({ user, postInTag, onFilteringDate }) => {
  const listRef = useRef();
  const [isDrag, setisDrag] = useState(false);
  const [startX, setStartX] = useState();
  const onDragStart = (e) => {
    e.preventDefault();
    setisDrag(true);
    setStartX(e.pageX + listRef.current.scrollLeft);
  };
  const onDragEnd = (e) => {
    setisDrag(false);
  };
  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = listRef.current;
      listRef.current.scrollLeft = startX - e.pageX;
      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };
  if (!user) return null;
  if (!postInTag) return <div>loading...</div>;
  const { tag: tagName, tag_color: tagColor, keyword: keywordList } = postInTag;
  return (
    <KeywordWrapper>
      <KeywordStatus>
        <TagMark tagColor={tagColor}>{tagName}</TagMark>
        <FilterWrapper>
          <EnterDate
            placeholder={'시작날짜'}
            onFilteringDate={onFilteringDate}
          />
        </FilterWrapper>
      </KeywordStatus>
      <KeywordList
        ref={listRef}
        onMouseDown={onDragStart}
        // onMouseMove={isDrag ? onThrottleDragMove : null}
        onMouseMove={isDrag ? onDragMove : null}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
        {keywordList.map((keyword) => (
          <KeywordLine
            key={keyword.id}
            tagName={tagName}
            tagColor={tagColor}
            keywordColor={keyword.keyword_color}
            keywordName={keyword.keyword_name}
            postList={keyword.post}
          />
        ))}
      </KeywordList>
    </KeywordWrapper>
  );
};
const KeywordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const KeywordStatus = styled.div`
  display: flex;
  margin: 35px 66px;
  justify-content: space-between;
  align-items: center;
`;
const KeywordList = styled.div`
  display: flex;
  align-items: stretch;
  position: relative;
  padding: 48px 60px;
  text-align: center;
  background-color: #ffffff;
  overflow: scroll;
  flex: auto;
`;

const FilterWrapper = styled.div`
  height: 54px;
  display: flex;
  background-color: ${(props) => props.theme.brand[5]};
  align-items: center;
  border: none;
  border-radius: 20px;
  padding: 0 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`;
const TagMark = styled.div`
  height: 80px;
  display: flex;
  background-color: ${({ tagColor, theme }) => theme.component[tagColor][1]};
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

export default KeywordListView;
