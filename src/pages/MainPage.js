import React from 'react';
import BannerContainer from '../containers/BannerContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import MainInputContainer from '../containers/common/MaininputContainer';
import { MainPageWrapper } from '../styles/PageWrapper';
// 사이트를 처음 방문 했을 때 보이는 view 입니다.
const MainPage = () => {
  return (
    <MainPageWrapper>
      <HeaderContainer />
      <BannerContainer />
      <MainInputContainer />
    </MainPageWrapper>
  );
};

export default MainPage;
