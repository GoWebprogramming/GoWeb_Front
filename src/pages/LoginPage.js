import React from 'react';
import SigninContainer from '../containers/auth/SigninContainer';
import { SigninPageWrapper } from '../styles/PageWrapper';

const SigninPage = () => {
  return (
    <SigninPageWrapper>
      <SigninContainer />
    </SigninPageWrapper>
  );
};

export default SigninPage;
