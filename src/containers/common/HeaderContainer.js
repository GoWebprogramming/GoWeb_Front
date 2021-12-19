import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router';
import Header from '../../components/common/Header';
import { initAuth } from '../../modules/auth';
import { logout, check } from '../../modules/user';
import { search } from '../../api/search';
import _ from 'lodash';

const HeaderContainer = () => {
  const { pathname } = useLocation();
  const { user, checkError } = useSelector(({ user }) => ({
    user: user.user,
    checkError: user.checkError,
  }));
  const dispatch = useDispatch();
  const history = useHistory();

  const [isOpenned, setIsOpenned] = useState();
  const [searchValue, setSearchValue] = useState();
  const [searchingData, setSearchingData] = useState();

  const sendContent = async (Query) => {
    if (Query === 0) return;
    try {
      const response = await search(Query);
      setSearchingData(response.data);
    } catch (e) {}
  };

  const debounceSearchContent = useRef(
    _.debounce((q) => sendContent(q), 1000)
  ).current;

  const handleOpenned = (state) => {
    setIsOpenned(state);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleKeyUp = async () => {
    //api 요청하기 - 디바운싱
    const responseData = await debounceSearchContent(searchValue);
    setSearchingData(responseData);
  };

  const onLogout = () => {
    dispatch(logout());
    dispatch(initAuth());
    history.push('/');
  };

  useEffect(() => {
    dispatch(check());
  }, [dispatch]);

  useEffect(() => {
    if (checkError) {
      dispatch(initAuth());
      alert('로그인이 필요합니다');
      history.push('/');
      return;
    }
  }, [dispatch, checkError, history]);

  return (
    <Header
      user={user}
      onLogout={onLogout}
      pathname={pathname}
      isOpenned={isOpenned}
      searchValue={searchValue}
      handleOpenned={handleOpenned}
      handleInputChange={handleInputChange}
      searchingData={searchingData}
      handleKeyUp={handleKeyUp}
    />
  );
};

export default HeaderContainer;
