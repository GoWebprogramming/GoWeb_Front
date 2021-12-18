import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import MainInputContainer from '../containers/common/MaininputContainer';
import KeywordListViewContainer from '../containers/postview/KeywordListViewContainer';
import { KeywordPageWrapper } from '../styles/PageWrapper';

const KeywordListViewPage = () => {
  return (
    <KeywordPageWrapper>
      {/* <HeaderContainer /> */}
      <KeywordListViewContainer />
      <MainInputContainer />
    </KeywordPageWrapper>
  );
};

export default KeywordListViewPage;
