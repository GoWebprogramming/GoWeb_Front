import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Signin = ({ form, onChange, onSubmit, error }) => {
  return (
    <SigninWrapper>
      <SigninFormWrapper>
        <h1>로그인</h1>
        <SignupLink to='/signup'>TIM이 처음이신가요? 간편 가입하기</SignupLink>
        <SigninForm onSubmit={onSubmit}>
          <InputWrapper>
            <InputName>아이디</InputName>
            <Input
              name='account'
              placeholder='아이디 입력'
              type='text'
              onChange={onChange}
              value={form.account}
            />
          </InputWrapper>
          <InputWrapper>
            <InputName>비밀번호</InputName>
            <Input
              name='password'
              placeholder='비밀번호 입력'
              type='password'
              onChange={onChange}
              value={form.password}
            />
          </InputWrapper>
          <Button>로그인 하기</Button>
        </SigninForm>
        <div>{error && <ErrorMessage>{error}</ErrorMessage>}</div>
      </SigninFormWrapper>
    </SigninWrapper>
  );
};

const SigninWrapper = styled.div`
  height: 500px;
  width: 450px;
  padding: 50px 30px;
  margin: 5rem auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #ffffff;
  @media ${(props) => props.theme.mobile} {
    background-color: ${(props) => props.theme.bgColor};
    box-shadow: none;
    box-sizing: border-box;
    margin: 0 auto;
    height: 100%;
    width: 100%;
  }
`;
const SigninFormWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 3fr 2fr;
  align-items: center;
  justify-items: center;
  height: 100%;
  padding: 0 30px;
  & > h1 {
    margin: 0;
  }
`;
const SigninForm = styled.form`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 0.5fr;
  justify-items: center;
  align-items: center;
`;
const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-self: center;
  align-items: left;
`;
const InputName = styled.h4`
  margin: 0;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  background: #3a980e;
  border: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.75rem;
  color: #ffffff;
  cursor: pointer;
  margin-top: 18.71px;
`;
const SignupLink = styled(Link)`
  border-radius: 20px;
  text-decoration: none;
  color: black;
  padding: 10px;
  &:hover {
    background-color: #e4e5e8;
    transition: background-color 200ms linear;
  }
`;
const ErrorMessage = styled.span`
  color: #e70000;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 15px;
  background: #fbfbfd;
  box-sizing: border-box;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 0;
  font-family: Roboto;
  font-size: 1rem;
  line-height: 1.25rem;
`;
export default Signin;
