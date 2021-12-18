import React from 'react';
import styled from 'styled-components';
import { ReactComponent as FullStar } from '../lib/assets/fullStar.svg';
import { ReactComponent as EmptyStar } from '../lib/assets/emptyStar.svg';

const Banner = ({ timData, onFavorite }) => {
  return (
    <StyledLogWrapper>
      {timData.map((tim) => {
        let {
          id,
          content,
          createAt,
          updateAt,
          isFavorite,
          tag_id,
          keyword_id,
          post_tag = { tag: '', tag_color: 'grey' },
          post_keyword,
          image,
        } = tim;
        let { tag, tag_color } = post_tag || {
          tag: '',
          tag_color: 'grey',
        };
        let { keyword_name: keyword, keyword_color } = post_keyword || {
          keyword_name: '',
          keyword_color: 'grey',
        };
        const date = createAt.toString().slice(5, 10);

        return (
          <div key={id}>
            <Tag tagColor={tag_color || 'grey'}>#{tag || ''}</Tag>
            <Keyword keyword_color={keyword_color} keyword={keyword}></Keyword>
            <Keyword keywordColor={keyword_color || 'grey'}>
              @{keyword || ''}
            </Keyword>
            <ContentWrapper>
              <Text>{content}</Text>
              <Star isFavorite={isFavorite} onFavorite={onFavorite} id={id} />
              <StyledDate>{date}</StyledDate>
            </ContentWrapper>
          </div>
        );
      })}
    </StyledLogWrapper>
  );
};
const Star = ({ isFavorite, onFavorite, id }) => {
  return (
    <StyledStar onClick={() => onFavorite(id)}>
      {isFavorite ? <FullStar /> : <EmptyStar />}
    </StyledStar>
  );
};
const StyledLogWrapper = styled.div`
  width: 1000px;
  height: 48px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #878787;
  background-color: #ffffff;
  font-size: 20px;
  display: flex;
  margin-bottom: 10px;
`;
const Tag = styled.div`
  background-color: ${({ theme, tagColor }) =>
    tagColor !== 'undefined' ? theme.component[tagColor][1] : '#FAFCF9'};
  color: ${(props) => props.theme.font['white']};
  font-size: 20px;
  text-align: center;
  align-items: center;
  padding: 11px 15px;
  border-radius: 8px 0px 0px 8px;
  font-weight: bold;
`;
const Keyword = styled.div`
  background-color: ${({ theme, keywordColor }) =>
    theme.component[keywordColor][2] || 'white'};
  color: ${(props) => props.theme.font[1]};
  border-radius: 0px 8px 8px 0px;
  font-weight: bold;
  padding: 11px 15px;
  margin-left: 3px;
`;
const ContentWrapper = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: right;
  align-items: center;
`;
const Text = styled.div`
  margin-right: 80px;
`;
const StyledStar = styled.div`
  margin-right: 25px;
`;
const StyledDate = styled.div`
  margin-right: 40px;
  font-weight: bold;
`;
export default Banner;
