import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import MainInputContainer from '../containers/common/MaininputContainer';
import TagViewContainer from '../containers/postview/TagViewContainer';
import { GridViewPageWrapper } from '../styles/PageWrapper';

const TagViewPage = () => {
  return (
    <GridViewPageWrapper>
      {/* <HeaderContainer /> */}
      <TagViewContainer />
      <MainInputContainer />
    </GridViewPageWrapper>
  );
};

export default TagViewPage;
