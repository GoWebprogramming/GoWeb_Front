import React from 'react';
import SignupContainer from '../containers/auth/SignupContainer';
import { SignupPageWrapper } from '../styles/PageWrapper';

const SignupPage = () => {
  return (
    <SignupPageWrapper>
      <SignupContainer />
    </SignupPageWrapper>
  );
};

export default SignupPage;
