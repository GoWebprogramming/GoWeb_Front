import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import MainInputContainer from '../containers/common/MaininputContainer';
import TimViewContainer from '../containers/postview/TimViewContainer';
import { TimPageWrapper } from '../styles/PageWrapper';

const TimViewPage = () => {
  return (
    <>
      <TimPageWrapper>
        {/* <HeaderContainer /> */}
        <TimViewContainer />
        <MainInputContainer />
      </TimPageWrapper>
    </>
  );
};

export default TimViewPage;
