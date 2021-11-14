import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../../components/auth/Login';
import { changeField, initializeForm, login } from '../../modules/auth';
import { check } from '../../modules/user';
import { useHistory } from 'react-router-dom';

const LoginContainer = () => {
  const history = useHistory();
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
  }));
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      })
    );
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const { account, password } = form;
    dispatch(login({ account, password }));
  };

  useEffect(() => {
    if (authError) {
      console.log(authError);
      setError('다시 시도해주세요.');
      return;
    }
    if (auth) {
      console.log('로그인 성공');
      dispatch(check());
    }
    return () => {
      dispatch(initializeForm('login'));
      setError('');
    };
  }, [authError, auth, dispatch]);

  useEffect(() => {
    if (user) history.push('/');
  }, [user, history]);
  return (
    <Login form={form} onChange={onChange} onSubmit={onSubmit} error={error} />
  );
};

export default LoginContainer;
