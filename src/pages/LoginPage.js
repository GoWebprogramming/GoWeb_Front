import React from 'react';
import LoginContainer from '../containers/auth/LoginContainer';
import { LoginPageWrapper } from '../styles/PageWrapper';

const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <LoginContainer />
    </LoginPageWrapper>
  );
};

export default LoginPage;
