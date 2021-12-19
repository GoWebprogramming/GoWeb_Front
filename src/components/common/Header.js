import React from 'react';
import styled from 'styled-components';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';
import { ImExit } from 'react-icons/im';
import { useHistory } from 'react-router-dom';
import Search from './Search/Search';

const Header = ({
  user,
  onLogout,
  pathname,
  isOpenned,
  searchValue,
  handleOpenned,
  handleInputChange,
  searchingData,
  handleKeyUp,
}) => {
  const history = useHistory();

  return (
    <StyledHeader>
      {user ? (
        <LoginWrapper>
          {pathname === '/main' ? (
            <HeaderMenuButton onClick={() => history.push('/tag')}>
              <AiOutlineUnorderedList size='30' />
            </HeaderMenuButton>
          ) : (
            <HeaderMenuButton onClick={() => history.push('/')}>
              <FaHome size='30' />
            </HeaderMenuButton>
          )}
          {/* 검색창 */}
          <Search
            isOpenned={isOpenned}
            searchValue={searchValue}
            handleOpenned={handleOpenned}
            handleInputChange={handleInputChange}
            searchingData={searchingData}
            handleKeyUp={handleKeyUp}
          />
          <NavWrapper>
            <HeaderMenuButton onClick={onLogout}>
              <ImExit size={30} />
            </HeaderMenuButton>
            {/* <Line /> */}
            <HeaderMenuButton>
              <MdAccountCircle size='30' />
            </HeaderMenuButton>
          </NavWrapper>
        </LoginWrapper>
      ) : (
        <LogoutWrapper>
          <HeaderMenuButton
            onClick={() => {
              history.push('/main');
            }}
          >
            <h1>TIM</h1>
          </HeaderMenuButton>

          <NavWrapper>
            <Line />
            <HeaderMenuButton
              onClick={() => {
                history.push('/');
              }}
            >
              로그인
            </HeaderMenuButton>
            <HeaderMenuButton
              onClick={() => {
                history.push('/signup');
              }}
            >
              회원가입
            </HeaderMenuButton>
          </NavWrapper>
        </LogoutWrapper>
      )}
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  z-index: 99;
  background: white;
`;
const LoginWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const LogoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  & > h1 {
    margin: 0;
  }
`;
const NavWrapper = styled.nav`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 200px;
  & > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0;
    & > li {
      list-style-type: none;
      box-sizing: border-box;
      padding: 5px;
      cursor: pointer;
      border-radius: 2px;
      width: 80px;
      text-align: center;
      margin: 0px;
      &:hover {
        background-color: #e4e5e8;
        transition: background-color 200ms linear;
      }
    }
  }
`;
const Line = styled.div`
  width: 1px;
  background: rgba(0, 0, 0, 0.1);
  height: 20px;
  margin: 0 10px;
`;

const HeaderMenuButton = styled.button`
  min-width: 100px;
  border: none;
  background: none;
  margin: 0px;
  padding: 10px 25px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  word-break: keep-all;
  border-radius: 10px;
  &:hover {
    background-color: #e4e5e8;
    transition: background-color 200ms linear;
  }
`;

export default Header;
