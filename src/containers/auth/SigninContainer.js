import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Signin from '../../components/auth/Signin';
import { changeField, initializeForm, login } from '../../modules/auth';
import { check } from '../../modules/user';
import { useHistory } from 'react-router-dom';

const SigninContainer = () => {
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
      setError('다시 시도해주세요.');
      return;
    }
    if (auth) {
      dispatch(check());
    }
    return () => {
      dispatch(initializeForm('login'));
      setError('');
    };
  }, [authError, auth, dispatch]);

  useEffect(() => {
    if (user) history.push('/main');
  }, [user, history]);
  return (
    <Signin form={form} onChange={onChange} onSubmit={onSubmit} error={error} />
  );
};

export default SigninContainer;
