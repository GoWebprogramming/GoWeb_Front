import axios from 'axios';

export const signup = async ({
  email,
  name,
  nickname,
  password,
  account,
  phone_number,
}) =>
  await axios({
    method: 'post',
    url: '/users/signup',
    data: {
      email,
      name,
      nickname,
      password,
      account,
      phone_number,
    },
  });

export const login = async ({ account, password }) =>
  await axios({
    method: 'post',
    url: '/users/login',
    data: {
      account,
      password,
    },
  });

export const logout = async () =>
  await axios({
    method: 'get',
    url: '/users/logout',
  });

export const check = async () =>
  await axios({
    method: 'get',
    url: '/users/get_user', // url 수정 예정
  });

export const checkEmail = async (email) =>
  await axios({
    method: 'post',
    url: '/users/check/email',
    data: {
      email,
    },
  });
export const checkNickname = async (nickname) =>
  await axios({
    method: 'post',
    url: '/users/check/nickname',
    data: {
      nickname,
    },
  });

export const checkAccount = async (account) =>
  await axios({
    method: 'post',
    url: '/users/check/account',
    data: {
      account,
    },
  });
